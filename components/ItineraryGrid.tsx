import React from 'react';
import { MapPin, Globe, MessageCircle } from 'lucide-react';
import { ItineraryItem } from '../types';
import { isValidSafeUrl } from '../services/itinerariesService';

interface ItineraryGridProps {
  items: ItineraryItem[];
  onSelectItinerary: (title: string) => void;
}

const ItineraryGrid: React.FC<ItineraryGridProps> = ({
  items,
  onSelectItinerary,
}) => {
  const handleOpenSite = (site: string) => {
    if (!site || !isValidSafeUrl(site)) return;
    window.open(site, '_blank', 'noopener,noreferrer');
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
        <p className="text-gray-500 text-sm font-semibold">
          Nenhum roteiro cadastrado nesta categoria no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, idx) => {
        const hasValidSite = Boolean(item.site && isValidSafeUrl(item.site));
        return (
          <div
            key={item.id ?? `${item.category}-${item.title}-${idx}`}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full group"
          >
            <div className="bg-[#4d6b56] p-3 rounded-xl w-fit mb-6 text-white group-hover:bg-primary transition-colors duration-300 shadow-lg">
              <MapPin size={24} />
            </div>

            <h4 className="text-primary font-bold text-lg mb-3 md:mb-4 leading-tight min-h-[3rem]">
              {item.title}
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-1 font-semibold opacity-90">
              {item.description}
            </p>

            <div className="flex flex-col gap-3 mt-auto">
              <button
                onClick={() => onSelectItinerary(item.title)}
                className="flex items-center justify-center gap-2 bg-[#1a4d2e] text-white py-3 px-4 rounded-xl text-[11px] font-bold uppercase hover:bg-primary-light active:scale-95 transition-all shadow-md shadow-primary/20"
              >
                <MessageCircle size={16} />
                QUERO ESSE
              </button>
              <button
                onClick={() => handleOpenSite(item.site)}
                disabled={!hasValidSite}
                className={`flex items-center justify-center gap-2 border-2 border-gray-100 py-3 px-4 rounded-xl text-[11px] font-bold uppercase transition-all ${
                  hasValidSite
                    ? 'text-gray-500 hover:bg-gray-50 hover:border-gray-200 active:scale-95'
                    : 'text-gray-200 cursor-not-allowed'
                }`}
              >
                <Globe size={16} />
                SITE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItineraryGrid;
