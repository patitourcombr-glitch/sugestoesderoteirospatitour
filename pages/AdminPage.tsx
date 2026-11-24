import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  Search,
  Lock,
  Globe,
  Database,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
  KeyRound,
  RefreshCw,
  Check,
} from 'lucide-react';
import { CATEGORY_LABELS, ItineraryCategory, ItineraryItem } from '../types';
import {
  createItinerariesForCategories,
  deleteItinerary,
  isValidSafeUrl,
  seedDefaultItineraries,
  subscribeItineraries,
  updateItinerary,
} from '../services/itinerariesService';
import {
  fetchAdminPasscodeStatus,
  setupInitialAdminPasscode,
  verifyAdminPasscode,
} from '../services/adminAuthService';
import { DEFAULT_ITINERARIES } from '../data/defaultItineraries';

interface AdminPageProps {
  onExitAdmin: () => void;
}

const PATITOUR_LOGO_URL =
  'https://raw.githubusercontent.com/easybyzcreator/imagens/454a1719078a34dbeb3e2284c72977c52d246f3c/logo%20patitour%20-%20fundo%20transp.png';

const CATEGORIES: ItineraryCategory[] = [
  'maternal',
  'fundamental1',
  'fundamental2',
  'ensinoMedio',
];

const AdminPage: React.FC<AdminPageProps> = ({ onExitAdmin }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [passcodeConfigured, setPasscodeConfigured] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Passcode form state
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authBusy, setAuthBusy] = useState(false);

  // Data state
  const [items, setItems] = useState<ItineraryItem[]>([]);
  const [isEmptyInFirestore, setIsEmptyInFirestore] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [firestoreError, setFirestoreError] = useState<string | null>(null);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<
    ItineraryCategory | 'all'
  >('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ItineraryItem | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] =
    useState<ItineraryCategory>('maternal');
  const [formCategories, setFormCategories] = useState<ItineraryCategory[]>([
    'maternal',
  ]);
  const [formDescription, setFormDescription] = useState('');
  const [formSite, setFormSite] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Delete inline confirmation
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Seed & feedback banner
  const [seeding, setSeeding] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const initializeAdminAccess = async () => {
    setInitLoading(true);
    setInitError(null);
    try {
      const status = await fetchAdminPasscodeStatus();
      setPasscodeConfigured(status.configured);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (
        msg.includes('auth/operation-not-allowed') ||
        msg.includes('auth/admin-restricted-operation')
      ) {
        setInitError(
          'A autenticação anônima ainda não foi ativada no Firebase. No Console do Firebase, vá em Authentication > Sign-in method e ative o provedor "Anônimo" (Anonymous).'
        );
      } else if (
        msg.includes('Missing or insufficient permissions') ||
        msg.includes('permission-denied')
      ) {
        setInitError(
          'Permissão negada no Firestore. Publique as novas Regras de Segurança no Console do Firebase (Firestore Database > Regras).'
        );
      } else {
        setInitError('Não foi possível conectar ao Firebase no momento.');
      }
    } finally {
      setInitLoading(false);
    }
  };

  useEffect(() => {
    initializeAdminAccess();
  }, []);

  useEffect(() => {
    if (!isUnlocked) {
      setItems([]);
      setDataLoading(false);
      return;
    }

    setDataLoading(true);
    setFirestoreError(null);
    const unsub = subscribeItineraries(
      (fetched, empty) => {
        setItems(fetched);
        setIsEmptyInFirestore(empty);
        setDataLoading(false);
        setFirestoreError(null);
      },
      (err) => {
        setDataLoading(false);
        setFirestoreError(
          err.message.includes('Missing or insufficient permissions') ||
            err.message.includes('permission-denied')
            ? 'Permissão negada no Firestore. Verifique se as Regras de Segurança foram publicadas corretamente.'
            : 'Erro ao carregar roteiros do Firebase.'
        );
      }
    );

    return () => unsub();
  }, [isUnlocked]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
    setTimeout(() => {
      setFeedback((prev) => (prev?.message === message ? null : prev));
    }, 5000);
  };

  const handleSetupPasscode = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    if (passcode.trim().length < 4) {
      setAuthError('A senha deve ter pelo menos 4 caracteres.');
      return;
    }
    if (passcode.trim() !== confirmPasscode.trim()) {
      setAuthError('As senhas digitadas não coincidem.');
      return;
    }
    setAuthBusy(true);
    try {
      await setupInitialAdminPasscode(passcode);
      setPasscodeConfigured(true);
      setIsUnlocked(true);
      setPasscode('');
      setConfirmPasscode('');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('permission')) {
        setAuthError(
          'Permissão negada ao salvar a senha. Publique as Regras do Firestore primeiro.'
        );
      } else {
        setAuthError(msg || 'Erro ao configurar senha.');
      }
    } finally {
      setAuthBusy(false);
    }
  };

  const handleVerifyPasscode = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    if (!passcode.trim()) {
      setAuthError('Digite a senha de acesso.');
      return;
    }
    setAuthBusy(true);
    try {
      const ok = await verifyAdminPasscode(passcode);
      if (ok) {
        setIsUnlocked(true);
        setPasscode('');
      } else {
        setAuthError('Senha incorreta. Tente novamente.');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setAuthError(
        msg.includes('permission')
          ? 'Permissão negada no Firestore. Verifique as Regras de Segurança.'
          : 'Erro ao verificar senha.'
      );
    } finally {
      setAuthBusy(false);
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    setPasscode('');
    setConfirmPasscode('');
  };

  const openCreateModal = () => {
    const initialCategory: ItineraryCategory =
      selectedCategory === 'all' ? 'maternal' : selectedCategory;
    setEditingItem(null);
    setFormTitle('');
    setFormCategory(initialCategory);
    setFormCategories([initialCategory]);
    setFormDescription('');
    setFormSite('');
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: ItineraryItem) => {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category);
    setFormCategories([item.category]);
    setFormDescription(item.description);
    setFormSite(item.site || '');
    setFormError(null);
    setIsModalOpen(true);
  };

  const toggleCreateCategory = (cat: ItineraryCategory) => {
    setFormCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!editingItem && formCategories.length === 0) {
      setFormError('Selecione pelo menos uma categoria.');
      return;
    }
    if (!formTitle.trim()) {
      setFormError('Informe o nome do local.');
      return;
    }
    if (!formDescription.trim()) {
      setFormError('Informe a descrição do local.');
      return;
    }
    if (formSite.trim() && !isValidSafeUrl(formSite)) {
      setFormError('O link do site deve começar com http:// ou https://');
      return;
    }

    setSaving(true);
    try {
      if (editingItem?.id) {
        await updateItinerary(editingItem.id, {
          title: formTitle,
          description: formDescription,
          site: formSite,
          category: formCategory,
        });
        showToast('success', 'Local atualizado com sucesso!');
      } else {
        const count = await createItinerariesForCategories({
          title: formTitle,
          description: formDescription,
          site: formSite,
          categories: formCategories,
        });
        showToast(
          'success',
          count > 1
            ? `Local cadastrado em ${count} categorias com sucesso!`
            : 'Novo local cadastrado com sucesso!'
        );
      }
      setIsModalOpen(false);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (
        msg.includes('Missing or insufficient permissions') ||
        msg.includes('permission-denied')
      ) {
        setFormError(
          'Sem permissão para salvar. Verifique se a autenticação Anônima e as Regras do Firestore estão ativas.'
        );
      } else {
        setFormError(msg || 'Erro ao salvar local.');
      }
    } finally {
      setSaving(false);
    }
  };

  const handleConfirmDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteItinerary(id);
      setConfirmDeleteId(null);
      showToast('success', 'Local excluído com sucesso!');
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      showToast(
        'error',
        msg.includes('permission')
          ? 'Sem permissão para excluir. Verifique as Regras do Firestore.'
          : 'Erro ao excluir local.'
      );
    } finally {
      setDeletingId(null);
    }
  };

  const handleSeedDefaults = async () => {
    setSeeding(true);
    try {
      const added = await seedDefaultItineraries(items);
      if (added > 0) {
        showToast(
          'success',
          `${added} roteiros importados para o Firebase com sucesso!`
        );
      } else {
        showToast('success', 'Todos os roteiros padrão já estão no banco!');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      showToast(
        'error',
        msg.includes('permission')
          ? 'Sem permissão para importar. Verifique as Regras do Firestore.'
          : 'Erro ao importar roteiros padrão.'
      );
    } finally {
      setSeeding(false);
    }
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<ItineraryCategory | 'all', number> = {
      all: items.length,
      maternal: 0,
      fundamental1: 0,
      fundamental2: 0,
      ensinoMedio: 0,
    };
    for (const item of items) {
      if (counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
    }
    return counts;
  }, [items]);

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return items.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term);
      return matchCategory && matchSearch;
    });
  }, [items, selectedCategory, searchTerm]);

  if (initLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-primary font-semibold">
          <Loader2 className="animate-spin" size={22} />
          <span>Conectando ao painel administrativo...</span>
        </div>
      </div>
    );
  }

  // PASSCODE LOCK / FIRST-RUN CLAIM SCREEN
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 font-sans">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-primary p-0.5 rounded-full w-16 h-16 flex items-center justify-center shadow-md overflow-hidden">
              <img
                src={PATITOUR_LOGO_URL}
                alt="Logo Pati Tour"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div>
              <h1 className="text-2xl font-display font-black text-primary">
                Painel Administrativo
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                {initError
                  ? 'Configuração pendente no Firebase'
                  : passcodeConfigured
                  ? 'Digite sua senha de acesso para gerenciar os roteiros'
                  : 'Primeiro acesso: defina a senha do seu painel administrativo'}
              </p>
            </div>
          </div>

          {initError ? (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold p-4 rounded-xl flex items-start gap-2.5 leading-relaxed">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{initError}</span>
              </div>
              <button
                type="button"
                onClick={initializeAdminAccess}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-light transition-all text-sm"
              >
                <RefreshCw size={16} />
                Tentar novamente
              </button>
            </div>
          ) : (
            <>
              {authError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold p-3 rounded-xl flex items-start gap-2">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{authError}</span>
                </div>
              )}

              {!passcodeConfigured ? (
                <form onSubmit={handleSetupPasscode} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Escolha sua senha de acesso
                    </label>
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="••••••••"
                      autoFocus
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Confirme a senha
                    </label>
                    <input
                      type="password"
                      value={confirmPasscode}
                      onChange={(e) => setConfirmPasscode(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={authBusy}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-light transition-all text-sm disabled:opacity-60"
                  >
                    <KeyRound size={16} />
                    {authBusy ? 'Salvando...' : 'Salvar Senha e Entrar'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyPasscode} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">
                      Senha de acesso
                    </label>
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="••••••••"
                      autoFocus
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={authBusy}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-light transition-all text-sm disabled:opacity-60"
                  >
                    <Lock size={16} />
                    {authBusy ? 'Verificando...' : 'Entrar no Painel'}
                  </button>
                </form>
              )}
            </>
          )}

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={onExitAdmin}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Voltar para o site público
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-0.5 rounded-full w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
              <img
                src={PATITOUR_LOGO_URL}
                alt="Logo Pati Tour"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div>
              <h1 className="text-primary font-bold text-base md:text-lg font-display leading-tight">
                Administração de Roteiros
              </h1>
              <p className="text-[11px] text-gray-500">
                Gerenciamento direto com Firebase
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onExitAdmin}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:text-primary hover:border-primary/40 text-xs font-bold transition-colors"
            >
              <ArrowLeft size={14} />
              Ver Site
            </button>
            <button
              onClick={handleLock}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700 text-xs font-bold transition-colors"
            >
              <Lock size={14} />
              Bloquear
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-6">
        {/* Feedback Banner */}
        {feedback && (
          <div
            className={`p-4 rounded-xl border flex items-center justify-between gap-3 text-sm font-semibold ${
              feedback.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-700'
            }`}
          >
            <div className="flex items-center gap-2">
              {feedback.type === 'success' ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              <span>{feedback.message}</span>
            </div>
            <button onClick={() => setFeedback(null)}>
              <X size={16} />
            </button>
          </div>
        )}

        {/* Firestore Error Alert */}
        {firestoreError && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-5 rounded-2xl flex items-start gap-3">
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <div className="text-sm space-y-1">
              <p className="font-bold">Atenção ao acesso do Firestore</p>
              <p>{firestoreError}</p>
            </div>
          </div>
        )}

        {/* Initial Seed Callout when Firestore is empty */}
        {!dataLoading && !firestoreError && isEmptyInFirestore && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-amber-900 font-bold text-base flex items-center gap-2">
                <Database size={18} />
                Banco de dados ainda vazio no Firebase
              </h2>
              <p className="text-amber-800 text-xs md:text-sm">
                Atualmente o site está exibindo os{' '}
                <strong>{DEFAULT_ITINERARIES.length} roteiros padrão</strong> do
                código. Clique no botão ao lado para importá-los para o Firestore
                e começar a editar ou excluir qualquer um deles.
              </p>
            </div>
            <button
              onClick={handleSeedDefaults}
              disabled={seeding}
              className="bg-primary text-white font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-primary-light transition-all whitespace-nowrap flex items-center gap-2 disabled:opacity-60"
            >
              {seeding ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Database size={16} />
              )}
              {seeding ? 'Importando...' : 'Importar Roteiros Padrão'}
            </button>
          </div>
        )}

        {/* Toolbar: Search + Actions */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar local por nome ou descrição..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={openCreateModal}
                className="flex items-center gap-2 bg-primary text-white font-bold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider hover:bg-primary-light transition-all shadow-sm"
              >
                <Plus size={16} />
                Novo Local
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos ({categoryCounts.all})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {CATEGORY_LABELS[cat]} ({categoryCounts[cat]})
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {dataLoading ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
            <Loader2
              className="animate-spin text-primary mx-auto mb-3"
              size={28}
            />
            <p className="text-sm text-gray-500 font-semibold">
              Carregando locais cadastrados...
            </p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 space-y-3">
            <p className="text-gray-500 font-semibold text-sm">
              {items.length === 0
                ? 'Nenhum local salvo no Firestore ainda.'
                : 'Nenhum local encontrado para esse filtro.'}
            </p>
            <button
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase"
            >
              <Plus size={16} />
              Cadastrar Primeiro Local
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const isConfirming = confirmDeleteId === item.id;
              const isDeleting = deletingId === item.id;
              const hasSite = Boolean(item.site && isValidSafeUrl(item.site));

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {CATEGORY_LABELS[item.category]}
                      </span>
                    </div>

                    <h3 className="text-primary font-bold text-base leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    {hasSite ? (
                      <a
                        href={item.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline break-all"
                      >
                        <Globe size={13} className="flex-shrink-0" />
                        <span>{item.site}</span>
                      </a>
                    ) : (
                      <span className="inline-block text-[11px] text-gray-400 italic">
                        Sem site cadastrado
                      </span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
                    {isConfirming ? (
                      <div className="flex items-center gap-2 w-full justify-between bg-red-50 px-3 py-2 rounded-xl">
                        <span className="text-xs font-bold text-red-700">
                          Confirmar exclusão?
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setConfirmDeleteId(null)}
                            disabled={isDeleting}
                            className="px-2.5 py-1 rounded-lg bg-white text-gray-600 text-xs font-bold border border-gray-200"
                          >
                            Não
                          </button>
                          <button
                            onClick={() =>
                              item.id && handleConfirmDelete(item.id)
                            }
                            disabled={isDeleting}
                            className="px-2.5 py-1 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 disabled:opacity-60"
                          >
                            {isDeleting ? 'Excluindo...' : 'Sim'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => openEditModal(item)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 hover:bg-primary/10 hover:text-primary text-gray-700 text-xs font-bold transition-colors"
                        >
                          <Pencil size={13} />
                          Editar
                        </button>
                        <button
                          onClick={() => item.id && setConfirmDeleteId(item.id)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700 text-xs font-bold transition-colors"
                        >
                          <Trash2 size={13} />
                          Excluir
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-display font-black text-primary">
                {editingItem ? 'Editar Local' : 'Cadastrar Novo Local'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X size={20} />
              </button>
            </div>

            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold p-3 rounded-xl flex items-start gap-2">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSaveForm} className="space-y-4">
              {editingItem ? (
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Categoria *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) =>
                      setFormCategory(e.target.value as ItineraryCategory)
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {CATEGORY_LABELS[cat]}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Categorias * (marque uma ou mais)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((cat) => {
                      const checked = formCategories.includes(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => toggleCreateCategory(cat)}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left ${
                            checked
                              ? 'bg-primary text-white border-primary shadow-sm'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-primary/40'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border ${
                              checked
                                ? 'bg-white text-primary border-white'
                                : 'bg-white border-gray-300'
                            }`}
                          >
                            {checked && <Check size={12} strokeWidth={3} />}
                          </span>
                          <span className="truncate">
                            {CATEGORY_LABELS[cat]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Nome do Local (com cidade/UF) *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  maxLength={200}
                  placeholder="Ex: Aquário de São Paulo (São Paulo, SP)"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Descrição Pedagógica *
                </label>
                <textarea
                  rows={4}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  maxLength={1000}
                  placeholder="Descreva os principais aprendizados e atrativos do passeio..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Site Oficial (opcional)
                </label>
                <input
                  type="url"
                  value={formSite}
                  onChange={(e) => setFormSite(e.target.value)}
                  maxLength={500}
                  placeholder="https://www.exemplo.com.br"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-xs font-bold hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-light disabled:opacity-60 flex items-center gap-2"
                >
                  {saving && <Loader2 size={14} className="animate-spin" />}
                  {saving
                    ? 'Salvando...'
                    : editingItem
                    ? 'Salvar Alterações'
                    : 'Cadastrar Local'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
