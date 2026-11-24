import React from 'react';
import { LayoutGrid, Award, Scale } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PATITOUR_LOGO_URL =
  'https://raw.githubusercontent.com/easybyzcreator/imagens/454a1719078a34dbeb3e2284c72977c52d246f3c/logo%20patitour%20-%20fundo%20transp.png';

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
      {/* Logo Area */}
      <div
        className="p-6 flex items-center gap-3 cursor-pointer"
        onClick={() => setActiveTab('home')}
      >
        <div className="bg-primary p-0.5 rounded-full w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
          <img
            src={PATITOUR_LOGO_URL}
            alt="Logo Pati Tour"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div>
          <h1 className="text-primary font-bold text-lg font-display leading-tight">
            Pati Tour
          </h1>
          <p className="text-[10px] text-gray-500 tracking-wider uppercase">
            Turismo Pedagógico
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2 mt-2">
          Menu
        </div>

        <button
          onClick={() => setActiveTab('home')}
          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
            activeTab === 'home'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid
            size={16}
            className={activeTab === 'home' ? 'text-primary' : 'text-gray-400'}
          />
          Início
        </button>

        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2 mt-6">
          Roteiros / Estudo do Meio
        </div>

        <button
          onClick={() => setActiveTab('maternal')}
          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
            activeTab === 'maternal'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid
            size={16}
            className={activeTab === 'maternal' ? 'text-primary' : 'text-gray-400'}
          />
          Maternal/Jd 1 & 2
        </button>
        <button
          onClick={() => setActiveTab('fundamental1')}
          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
            activeTab === 'fundamental1'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid
            size={16}
            className={
              activeTab === 'fundamental1' ? 'text-primary' : 'text-gray-400'
            }
          />
          Fundamental 1
        </button>
        <button
          onClick={() => setActiveTab('fundamental2')}
          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
            activeTab === 'fundamental2'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid
            size={16}
            className={
              activeTab === 'fundamental2' ? 'text-primary' : 'text-gray-400'
            }
          />
          Fundamental 2
        </button>
        <button
          onClick={() => setActiveTab('ensinoMedio')}
          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left ${
            activeTab === 'ensinoMedio'
              ? 'bg-primary/10 text-primary font-medium'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <LayoutGrid
            size={16}
            className={
              activeTab === 'ensinoMedio' ? 'text-primary' : 'text-gray-400'
            }
          />
          Ensino Médio
        </button>

        <div className="pt-4 space-y-1">
          <button
            onClick={() => setActiveTab('tourJuridico')}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left font-medium ${
              activeTab === 'tourJuridico'
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Scale
              size={16}
              className={`flex-shrink-0 ${
                activeTab === 'tourJuridico' ? 'text-primary' : 'text-secondary'
              }`}
            />
            <span className="leading-snug">Tour Jurídico - Brasília</span>
          </button>

          <button
            onClick={() => setActiveTab('incentive')}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left font-medium ${
              activeTab === 'incentive'
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Award
              size={16}
              className={`flex-shrink-0 ${
                activeTab === 'incentive' ? 'text-primary' : 'text-secondary'
              }`}
            />
            Viagens de Incentivo
          </button>
        </div>
      </nav>

      <div className="p-4 text-xs text-gray-400 text-center border-t border-gray-100">
        &copy; 2025 Pati Tour
      </div>
    </aside>
  );
};

export default Sidebar;
