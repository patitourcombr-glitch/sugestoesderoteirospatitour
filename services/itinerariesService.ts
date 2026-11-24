import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  writeBatch,
  serverTimestamp,
  query,
} from 'firebase/firestore';
import { db, OperationType, handleFirestoreError } from '../firebase';
import { ItineraryCategory, ItineraryItem } from '../types';
import { DEFAULT_ITINERARIES } from '../data/defaultItineraries';

const COLLECTION_NAME = 'itineraries';

export function isValidSafeUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return true;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function normalizePayload(item: {
  title: string;
  description: string;
  site: string;
  category: ItineraryCategory;
}) {
  const title = item.title.trim().slice(0, 200);
  const description = item.description.trim().slice(0, 1000);
  const site = item.site.trim().slice(0, 500);

  if (!title) {
    throw new Error('O nome do local é obrigatório.');
  }
  if (!description) {
    throw new Error('A descrição do local é obrigatória.');
  }
  if (site && !isValidSafeUrl(site)) {
    throw new Error('A URL do site deve começar com http:// ou https://');
  }

  return {
    title,
    description,
    site,
    category: item.category,
  };
}

export function subscribeItineraries(
  onData: (items: ItineraryItem[], isEmptyInFirestore: boolean) => void,
  onError?: (err: Error) => void
) {
  const q = query(collection(db, COLLECTION_NAME));
  return onSnapshot(
    q,
    (snapshot) => {
      const items: ItineraryItem[] = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          title: typeof data.title === 'string' ? data.title : '',
          description: typeof data.description === 'string' ? data.description : '',
          site: typeof data.site === 'string' ? data.site : '',
          category: (data.category as ItineraryCategory) || 'maternal',
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        };
      });
      items.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
      onData(items, snapshot.empty);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, COLLECTION_NAME);
      } catch (wrapped) {
        if (onError) {
          onError(wrapped instanceof Error ? wrapped : new Error(String(wrapped)));
        }
      }
    }
  );
}

export async function createItinerary(item: {
  title: string;
  description: string;
  site: string;
  category: ItineraryCategory;
}): Promise<string> {
  const clean = normalizePayload(item);
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...clean,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, COLLECTION_NAME);
  }
}

export async function createItinerariesForCategories(item: {
  title: string;
  description: string;
  site: string;
  categories: ItineraryCategory[];
}): Promise<number> {
  const uniqueCategories = Array.from(new Set(item.categories));
  if (uniqueCategories.length === 0) {
    throw new Error('Selecione pelo menos uma categoria.');
  }

  const batch = writeBatch(db);
  for (const category of uniqueCategories) {
    const clean = normalizePayload({
      title: item.title,
      description: item.description,
      site: item.site,
      category,
    });
    const ref = doc(collection(db, COLLECTION_NAME));
    batch.set(ref, {
      ...clean,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  try {
    await batch.commit();
    return uniqueCategories.length;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, COLLECTION_NAME);
  }
}

export async function updateItinerary(
  id: string,
  item: {
    title: string;
    description: string;
    site: string;
    category: ItineraryCategory;
  }
): Promise<void> {
  const clean = normalizePayload(item);
  const path = `${COLLECTION_NAME}/${id}`;
  try {
    await updateDoc(doc(db, COLLECTION_NAME, id), {
      ...clean,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function deleteItinerary(id: string): Promise<void> {
  const path = `${COLLECTION_NAME}/${id}`;
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function seedDefaultItineraries(
  existingItems: ItineraryItem[]
): Promise<number> {
  const existingKeys = new Set(
    existingItems.map(
      (i) => `${i.category}::${i.title.trim().toLowerCase()}`
    )
  );

  const missing = DEFAULT_ITINERARIES.filter(
    (item) => !existingKeys.has(`${item.category}::${item.title.trim().toLowerCase()}`)
  );

  if (missing.length === 0) return 0;

  const CHUNK_SIZE = 400;
  try {
    for (let i = 0; i < missing.length; i += CHUNK_SIZE) {
      const chunk = missing.slice(i, i + CHUNK_SIZE);
      const batch = writeBatch(db);
      for (const item of chunk) {
        const ref = doc(collection(db, COLLECTION_NAME));
        batch.set(ref, {
          ...item,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
      await batch.commit();
    }
    return missing.length;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, COLLECTION_NAME);
  }
}
