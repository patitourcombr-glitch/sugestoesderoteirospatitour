import React from 'react';
import { ArrowLeft, Check, MessageCircle, Landmark } from 'lucide-react';
import { useCategoryItineraries } from '../hooks/useCategoryItineraries';
import ItineraryGrid from '../components/ItineraryGrid';

interface EnsinoMedioPageProps {
  onBack: () => void;
}

const EnsinoMedioPage: React.FC<EnsinoMedioPageProps> = ({ onBack }) => {
  const whatsappNumber = "5519997474575";
  const defaultImageUrl = "https://patitour.com.br/wp-content/uploads/2025/05/REESCREVA-SE-51.png";
  const { items: itineraries } = useCategoryItineraries('ensinoMedio');

  const handleWhatsAppClick = (itineraryTitle?: string) => {
    let message = `Olá, Pati! Vi os roteiros de Ensino Médio e gostaria de mais informações.`;
    if (itineraryTitle) {
      message = `Olá, Pati! Me interessei pelo roteiro "${itineraryTitle}" (Ensino Médio) e gostaria de um orçamento.`;
    }
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      {/* Top Bar */}
      <div className="bg-white px-4 md:px-8 py-4 md:py-6 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded text-white hidden sm:block">
            <Landmark size={20} />
          </div>
          <h1 className="text-primary font-bold text-sm md:text-xl uppercase tracking-wider">Ensino Médio</h1>
        </div>
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs md:text-sm font-semibold">
          <ArrowLeft size={16} /> Voltar ao Site
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8 w-full">
        <div className="relative h-[250px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <img src={defaultImageUrl} alt="Capa Ensino Médio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
            <span className="bg-secondary text-primary font-bold text-[10px] md:text-xs py-1 px-3 rounded w-fit mb-2 md:mb-4 uppercase tracking-wider">
              Roteiros Pedagógicos
            </span>
            <h2 className="text-white text-2xl md:text-5xl font-display font-bold uppercase drop-shadow-lg leading-tight">
              Ensino Médio
            </h2>
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        {/* Left Column */}
        <div className="order-1">
          <h3 className="text-orange-500 font-bold text-lg md:text-xl uppercase mb-4">Turismo Pedagógico</h3>
          <p className="text-primary font-serif italic font-bold text-base md:text-lg mb-6 leading-relaxed">
            "Mais do que aprender, é sentir, vivenciar e descobrir."
          </p>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8 font-medium">
            <p>
              O turismo pedagógico para o Ensino Médio foca na preparação acadêmica, orientação vocacional 
              e no aprofundamento de conceitos complexos de sociologia, física, biologia e história.
            </p>
            <p>
              Transformamos o conhecimento teórico em vivências que estimulam o pensamento crítico e 
              proporcionam uma visão sistêmica do mundo contemporâneo.
            </p>
          </div>

          <div className="bg-orange-50 p-6 md:p-8 rounded-xl border-2 border-orange-200 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h4 className="text-orange-600 font-bold text-lg mb-4 uppercase">Como podemos te ajudar?</h4>
              <p className="text-primary font-bold mb-4 text-sm md:text-base">
                Roteiros técnicos e culturais com foco em vestibulares e cidadania.
              </p>
              <p className="text-gray-600 text-[11px] md:text-xs leading-relaxed mb-6 font-semibold">
                Nossa equipe desenha experiências que complementam o currículo do Ensino Médio, 
                garantindo suporte logístico e pedagógico completo para que o foco seja 
                totalmente o aprendizado avançado.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-[11px] md:text-xs bg-white/70 w-fit px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                <Check size={16} className="text-primary stroke-[3]" />
                <span className="font-bold">Mais de 20 anos de experiência</span>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 bg-orange-100 rounded-full w-40 h-40 opacity-40"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full order-2">
          <h3 className="text-orange-500 font-bold text-lg md:text-xl uppercase mb-6 md:mb-8 leading-tight">
            O que levar em consideração na escolha do roteiro?
          </h3>
          
          <div className="space-y-3 md:space-y-4 mb-10 flex-1">
            {[
              "Alinhamento com temas do ENEM e Vestibulares",
              "Segurança e autonomia dos estudantes",
              "Viabilidade logística e tempo produtivo",
              "Relevância para orientação profissional",
              "Confiabilidade da empresa parceira"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary/20 transition-all hover:shadow-md">
                <div className="bg-primary p-1.5 rounded-full text-white shadow-md flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-bold text-xs md:text-sm leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mt-auto shadow-lg border-4 border-white hidden sm:block">
            <img src={defaultImageUrl} alt="Apreciação Cultural EM" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <h3 className="text-primary font-bold text-2xl mb-8 uppercase text-center md:text-left">Lista Completa de Roteiros</h3>
        <ItineraryGrid items={itineraries} onSelectItinerary={handleWhatsAppClick} />
      </div>

      {/* Footer CTA */}
      <div className="max-w-2xl mx-auto text-center px-4 md:px-6 mb-10">
        <h3 className="text-primary font-bold text-xl md:text-2xl uppercase mb-3 md:mb-4">Pronto para agendar?</h3>
        <p className="text-gray-500 font-bold text-xs md:text-sm mb-8 px-2">
          Entre em contato para personalizarmos o roteiro ideal para sua escola!
        </p>
        <button 
          onClick={() => handleWhatsAppClick()}
          className="bg-primary text-white font-bold py-4 px-8 md:px-12 rounded-full shadow-xl hover:bg-primary-light active:scale-95 transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto w-full sm:w-fit"
        >
          <MessageCircle size={20} />
          Falar com Pati
        </button>
      </div>
    </div>
  );
};

export default EnsinoMedioPage;