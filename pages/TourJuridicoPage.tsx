import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Scale,
  Mail,
  Instagram,
  Phone,
} from 'lucide-react';

interface TourJuridicoPageProps {
  onBack: () => void;
}

const JORNADA_JURIDICA_IMAGE =
  'https://raw.githubusercontent.com/easybyzcreator/imagens/454a1719078a34dbeb3e2284c72977c52d246f3c/BSB%20-%20JORNADA%20JURIDICA.png';

const TourJuridicoPage: React.FC<TourJuridicoPageProps> = ({ onBack }) => {
  const whatsappNumber = '5519997474575';

  const handleWhatsApp = (
    message: string = 'Olá! Me interessei pelo Tour Jurídico - Brasília. Poderia me passar mais detalhes?'
  ) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white pb-20 font-sans overflow-x-hidden">
      {/* Top Bar Navigation */}
      <div className="bg-white px-4 md:px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded text-white">
            <Scale size={18} />
          </div>
          <h1 className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider">
            Tour Jurídico - Brasília
          </h1>
        </div>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors text-[10px] md:text-xs font-bold uppercase"
        >
          <ArrowLeft size={14} />
          Voltar
        </button>
      </div>

      <div className="max-w-5xl mx-auto w-full px-4 md:px-6 py-8 md:py-14 space-y-12 md:space-y-16">
        {/* Banner Principal */}
        <section className="w-full">
          <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <img
              src={JORNADA_JURIDICA_IMAGE}
              alt="Tour Jurídico - Brasília - Jornada Jurídica"
              className="w-full h-auto block object-contain"
            />
          </div>
        </section>

        {/* Bloco 1 da Imagem 2: Card de Contato */}
        <section className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-primary p-10 md:p-16 text-center space-y-6">
            <div className="inline-block border border-white/20 rounded-full px-5 py-1 text-[9px] md:text-[10px] font-bold text-white uppercase tracking-[0.3em]">
              PATITOUR TURISMO PEDAGÓGICO E EXPERIÊNCIAS
            </div>
            <h3 className="text-4xl md:text-7xl font-display font-black text-white uppercase leading-[0.85] tracking-tighter">
              ENTRE EM <br /> CONTATO
            </h3>
          </div>

          <div className="bg-[#f2913d] p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <a
              href="mailto:patricia@patitour.com.br"
              className="flex flex-col items-center text-white space-y-4 hover:opacity-90 transition-opacity"
            >
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Mail size={32} />
              </div>
              <div className="text-center">
                <p className="font-black text-sm uppercase tracking-widest mb-1">
                  EMAIL
                </p>
                <p className="text-xs font-medium opacity-90">
                  patricia@patitour.com.br
                </p>
              </div>
            </a>

            <a
              href="https://instagram.com/patitour"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white space-y-4 hover:opacity-90 transition-opacity"
            >
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Instagram size={32} />
              </div>
              <div className="text-center">
                <p className="font-black text-sm uppercase tracking-widest mb-1">
                  INSTAGRAM
                </p>
                <p className="text-xs font-medium opacity-90">@patitour</p>
              </div>
            </a>

            <button
              type="button"
              onClick={() => handleWhatsApp()}
              className="flex flex-col items-center text-white space-y-4 hover:opacity-90 transition-opacity"
            >
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Phone size={32} />
              </div>
              <div className="text-center">
                <p className="font-black text-sm uppercase tracking-widest mb-1">
                  WHATSAPP
                </p>
                <p className="text-xs font-medium opacity-90">19 99747-4575</p>
              </div>
            </button>
          </div>
          <div className="bg-[#d97c2e] py-3 text-center">
            <p className="text-[9px] text-white/40 font-black tracking-[0.4em] uppercase">
              www.PATITOUR.com.br
            </p>
          </div>
        </section>

        {/* Bloco 2 da Imagem 2: Botão Falar com Pati */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => handleWhatsApp()}
            className="flex items-center gap-3 bg-primary text-white font-black py-4 px-10 rounded-full shadow-2xl hover:bg-primary-light active:scale-95 transition-all hover:scale-105 uppercase tracking-wider text-sm"
          >
            <MessageCircle size={20} />
            Falar com Pati
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourJuridicoPage;
