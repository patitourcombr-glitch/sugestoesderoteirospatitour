import { signInAnonymously } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, OperationType, handleFirestoreError } from '../firebase';

const ADMIN_CONFIG_COLLECTION = 'config';
const ADMIN_CONFIG_DOC_ID = 'admin';

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function generateSaltHex(lengthBytes = 16): string {
  const bytes = new Uint8Array(lengthBytes);
  window.crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

async function hashPasscode(saltHex: string, passcode: string): Promise<string> {
  if (!window.crypto?.subtle) {
    throw new Error('Criptografia Web Crypto indisponível neste navegador.');
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(`${saltHex}:${passcode}`);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return bytesToHex(new Uint8Array(digest));
}

export async function ensureAnonymousAuth(): Promise<void> {
  if (auth.currentUser) return;
  await signInAnonymously(auth);
}

export async function fetchAdminPasscodeStatus(): Promise<{
  configured: boolean;
}> {
  await ensureAnonymousAuth();
  const path = `${ADMIN_CONFIG_COLLECTION}/${ADMIN_CONFIG_DOC_ID}`;
  try {
    const snap = await getDoc(doc(db, ADMIN_CONFIG_COLLECTION, ADMIN_CONFIG_DOC_ID));
    if (!snap.exists()) {
      return { configured: false };
    }
    const data = snap.data();
    const hasFields =
      typeof data?.salt === 'string' &&
      data.salt.length > 0 &&
      typeof data?.hash === 'string' &&
      data.hash.length > 0;
    return { configured: hasFields };
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function setupInitialAdminPasscode(passcode: string): Promise<void> {
  const trimmed = passcode.trim();
  if (trimmed.length < 4 || trimmed.length > 64) {
    throw new Error('A senha deve ter entre 4 e 64 caracteres.');
  }
  await ensureAnonymousAuth();
  const salt = generateSaltHex(16);
  const hash = await hashPasscode(salt, trimmed);
  const path = `${ADMIN_CONFIG_COLLECTION}/${ADMIN_CONFIG_DOC_ID}`;

  try {
    await setDoc(doc(db, ADMIN_CONFIG_COLLECTION, ADMIN_CONFIG_DOC_ID), {
      salt,
      hash,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function verifyAdminPasscode(passcode: string): Promise<boolean> {
  const trimmed = passcode.trim();
  if (!trimmed) return false;
  await ensureAnonymousAuth();
  const path = `${ADMIN_CONFIG_COLLECTION}/${ADMIN_CONFIG_DOC_ID}`;

  try {
    const snap = await getDoc(doc(db, ADMIN_CONFIG_COLLECTION, ADMIN_CONFIG_DOC_ID));
    if (!snap.exists()) {
      return false;
    }
    const data = snap.data();
    if (typeof data?.salt !== 'string' || typeof data?.hash !== 'string') {
      return false;
    }
    const computed = await hashPasscode(data.salt, trimmed);
    return computed === data.hash;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}
