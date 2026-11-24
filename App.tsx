import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import MaternalPage from './pages/MaternalPage';
import Fundamental1Page from './pages/Fundamental1Page';
import Fundamental2Page from './pages/Fundamental2Page';
import EnsinoMedioPage from './pages/EnsinoMedioPage';
import TourJuridicoPage from './pages/TourJuridicoPage';
import IncentivePage from './pages/IncentivePage';
import AdminPage from './pages/AdminPage';
import { Menu, X } from 'lucide-react';

function isAdminHash(): boolean {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash.toLowerCase();
  return hash === '#/admin' || hash.startsWith('#/admin/') || hash === '#admin';
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => isAdminHash());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminRoute(isAdminHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Força o scroll para o topo toda vez que a aba ativa mudar
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);

    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleExitAdmin = () => {
    window.location.hash = '';
    setIsAdminRoute(false);
  };

  if (isAdminRoute) {
    return <AdminPage onExitAdmin={handleExitAdmin} />;
  }

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-sans relative">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Persistent on Desktop, Toggleable on Mobile */}
      <div
        className={`
        fixed inset-0 z-40 lg:relative lg:block
        ${isMobileMenuOpen ? 'block' : 'hidden'}
      `}
      >
        {/* Overlay for mobile */}
        <div
          className="absolute inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative h-full w-64">
          <Sidebar activeTab={activeTab} setActiveTab={handleNavigate} />
        </div>
      </div>

      <main
        ref={mainRef}
        className="flex-1 h-full overflow-y-auto overflow-x-hidden relative"
      >
        {activeTab === 'home' && <HomePage setActiveTab={handleNavigate} />}
        {activeTab === 'maternal' && (
          <MaternalPage onBack={() => handleNavigate('home')} />
        )}
        {activeTab === 'fundamental1' && (
          <Fundamental1Page onBack={() => handleNavigate('home')} />
        )}
        {activeTab === 'fundamental2' && (
          <Fundamental2Page onBack={() => handleNavigate('home')} />
        )}
        {activeTab === 'ensinoMedio' && (
          <EnsinoMedioPage onBack={() => handleNavigate('home')} />
        )}
        {activeTab === 'tourJuridico' && (
          <TourJuridicoPage onBack={() => handleNavigate('home')} />
        )}
        {activeTab === 'incentive' && (
          <IncentivePage onBack={() => handleNavigate('home')} />
        )}
      </main>
    </div>
  );
};

export default App;