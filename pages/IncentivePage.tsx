import React from 'react';
import { 
  ArrowLeft, 
  MessageCircle, 
  Award, 
  Mail, 
  Instagram, 
  Phone,
  Bus
} from 'lucide-react';

interface IncentivePageProps {
  onBack: () => void;
}

const IncentivePage: React.FC<IncentivePageProps> = ({ onBack }) => {
  const whatsappNumber = "5519997474575";

  const handleWhatsApp = (message: string = 'Olá! Me interessei pelas Viagens de Incentivo para minha equipe. Poderia me passar mais detalhes?') => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white pb-20 font-sans overflow-x-hidden">
      {/* Top Bar Navigation */}
      <div className="bg-white px-4 md:px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded text-white">
            <Award size={18} />
          </div>
          <h1 className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider">Viagens de Incentivo</h1>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors text-[10px] md:text-xs font-bold uppercase"
        >
          <ArrowLeft size={14} />
          Voltar
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20 space-y-24 md:space-y-32">
        
        {/* Header Section (Image 1) */}
        <section className="text-center space-y-6 md:space-y-10">
          <div className="inline-block border border-primary/40 rounded-full px-4 py-1.5 text-[9px] md:text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
            PATITOUR TURISMO PEDAGÓGICO E EXPERIÊNCIAS
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-7xl font-display font-black text-[#f2913d] uppercase leading-[0.9] tracking-tight">
              TENDÊNCIAS DE VIAGEM <br /> DE INCENTIVO
            </h2>
            
            <div className="flex justify-center">
              <div className="border-2 border-black rounded-full px-6 md:px-10 py-2 text-xs md:text-lg font-black text-black uppercase tracking-tight">
                QUE ESTÃO TRANSFORMANDO O
              </div>
            </div>

            <h2 className="text-4xl md:text-7xl font-display font-black text-primary uppercase leading-[0.9] tracking-tight">
              ENGAJAMENTO <br /> NAS ESCOLAS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 pt-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              Reconhecer e premiar professores e colaboradores é o investmento mais estratégico para qualquer instituição de ensino, resultando em mais do que apenas sucesso em sala de aula. As viagens de incentivo se consolidaram como a chave para impulsionar o pertencimento, a motivação e a performance da sua equipe.
            </p>
            <p className="text-primary font-bold text-sm md:text-base leading-relaxed px-4">
              A PATITOUR Turismo Pedagógico e Experiências, com mais de 20 anos de experiência na criação de viagens que unem aprendizado, propósito e descontração, está pronta para transformar o reconhecimento dos seus colaboradores em roteiros inesquecíveis.
            </p>
          </div>
        </section>

        {/* Fato Section (Image 2) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-9xl font-display font-black text-primary leading-none tracking-tighter">Fato!</h2>
            <div className="space-y-6">
              <p className="text-primary font-medium text-lg md:text-xl leading-relaxed">
                As escolas que valorizam seus times colhem resultados muito além da sala de aula.
              </p>
              <p className="text-primary font-bold text-lg md:text-xl leading-relaxed">
                Reconhecer e premiar professores e colaboradores é investir em pertencimento, motivação e performance.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Essas três tendências mostram como as viagens de incentivo estão ajudando instituições de ensino a fortalecer suas equipes e criar experiências memoráveis.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img 
              src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1000&auto=format&fit=crop" 
              alt="Rafting" 
              className="rounded-2xl shadow-xl w-full h-40 md:h-52 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop" 
              alt="Escalada" 
              className="rounded-2xl shadow-xl w-full h-40 md:h-52 object-cover"
            />
          </div>
        </section>

        {/* Trend 1 (Image 3) */}
        <section className="bg-[#f2913d] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-6xl md:text-8xl font-display font-black opacity-40 leading-none block">1.</span>
              <h3 className="text-3xl md:text-5xl font-display font-black uppercase leading-[0.9] tracking-tighter">
                VIAGENS COM <br /> PROPÓSITO EDUCACIONAL
              </h3>
              <div className="space-y-4 text-sm md:text-base font-medium">
                <p>Escolas estão optando por viagens que unem lazer e aprendizado.</p>
                <p>Trilhas, visitas culturais e experiências imersivas têm mostrado impacto direto na criatividade e no trabalho em equipe dos colaboradores.</p>
              </div>
              <div className="bg-white/20 p-5 rounded-2xl border border-white/20">
                <p className="text-xs md:text-sm italic font-medium">
                  <span className="font-black not-italic block mb-1 uppercase tracking-wider text-[10px]">Exemplo real:</span>
                  escolas que levaram seus professores para experiências culturais relatam aumento de até 30% no engajamento e redução no turnover.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop" 
                alt="Trilha" 
                className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover rotate-2"
              />
            </div>
          </div>
        </section>

        {/* Trend 2 (Image 4) */}
        <section className="bg-[#f2913d] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <img 
                src="https://patitour.com.br/wp-content/uploads/2025/10/REESCREVA-SE-26.png" 
                alt="Rafting" 
                className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover -rotate-2"
              />
            </div>
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-6xl md:text-8xl font-display font-black opacity-40 leading-none block">2.</span>
              <h3 className="text-3xl md:text-5xl font-display font-black uppercase leading-[0.9] tracking-tighter">
                INCENTIVOS REGIONAIS <br /> PERSONALIZADOS
              </h3>
              <div className="space-y-4 text-sm md:text-base font-medium">
                <p>Em vez de viagens longas e caras, muitas instituições estão investindo em roteiros curtos, de 1 ou 2 dias, em regiões próximas.</p>
                <p>A experiência se torna mais acessível e frequente, mantendo a equipe sempre motivada e reconhecida.</p>
              </div>
              <div className="bg-white/20 p-5 rounded-2xl border border-white/20">
                <p className="text-xs md:text-sm italic font-medium">
                  <span className="font-black not-italic block mb-1 uppercase tracking-wider text-[10px]">Dica Patitour:</span>
                  experiências regionais podem ser facilmente ajustadas ao calendário escolar e ao orçamento, sem perder o impacto emocional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trend 3 (Image 5) */}
        <section className="bg-[#f2913d] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-6xl md:text-8xl font-display font-black opacity-40 leading-none block">3.</span>
              <h3 className="text-3xl md:text-5xl font-display font-black uppercase leading-[0.9] tracking-tighter">
                EXPERIÊNCIAS COM <br /> SIGNIFICADO E RECONHECIMENTO
              </h3>
              <div className="space-y-4 text-sm md:text-base font-medium">
                <p>O reconhecimento é mais poderoso quando carrega propósito.</p>
                <p>Escolas estão criando "momentos simbólicos" dentro das viagens — pequenos rituais de valorização, certificados de destaque e celebrações em grupo — que reforçam o sentimento de pertencimento.</p>
              </div>
              <div className="bg-white/20 p-5 rounded-2xl border border-white/20">
                <p className="text-xs md:text-sm italic font-medium">
                  <span className="font-black not-italic block mb-1 uppercase tracking-wider text-[10px]">Exemplo:</span>
                  uma viagem de equipe com uma noite de premiação ou dinâmicas de gratidão transforma a cultura interna.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" 
                alt="Equipe" 
                className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover rotate-1"
              />
            </div>
          </div>
        </section>

        {/* Patitour Green Card (Image 6) */}
        <section className="bg-primary rounded-[2rem] md:rounded-[3.5rem] p-10 md:p-20 text-center text-white space-y-8 md:space-y-12 shadow-2xl">
          <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto text-primary shadow-inner">
            <Bus size={32} />
          </div>
          <h3 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">A PATITOUR</h3>
          
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <p className="text-base md:text-xl font-medium leading-relaxed opacity-90">
              Tem ajudado escolas a transformar o reconhecimento de seus colaboradores em experiências inesquecíveis.
            </p>
            <p className="text-lg md:text-2xl font-black leading-tight">
              São mais de 20 anos criando roteiros que unem aprendizado, descontração e propósito.
            </p>
          </div>

          <div className="bg-white/10 p-6 md:p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <p className="text-sm md:text-lg font-medium mb-4">Quer descobrir qual formato se encaixa melhor na sua equipe?</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[#f2913d] font-black text-sm md:text-lg uppercase italic">
              <span className="text-2xl not-italic">👉</span>
              <span>Podemos montar uma proposta personalizada em menos de 15 minutos de reunião.</span>
            </div>
          </div>
        </section>

        {/* Contact Footer Card (Image 7) */}
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
            <div className="flex flex-col items-center text-white space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Mail size={32} />
              </div>
              <div className="text-center">
                <p className="font-black text-sm uppercase tracking-widest mb-1">EMAIL</p>
                <p className="text-xs font-medium opacity-90">patricia@patitour.com.br</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-white space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Instagram size={32} />
              </div>
              <div className="text-center">
                <p className="font-black text-sm uppercase tracking-widest mb-1">INSTAGRAM</p>
                <p className="text-xs font-medium opacity-90">@patitour</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-white space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <Phone size={32} />
              </div>
              <div className="text-center">
                <p className="font-black text-sm uppercase tracking-widest mb-1">WHATSAPP</p>
                <p className="text-xs font-medium opacity-90">19 99747-4575</p>
              </div>
            </div>
          </div>
          <div className="bg-[#d97c2e] py-3 text-center">
            <p className="text-[9px] text-white/40 font-black tracking-[0.4em] uppercase">www.PATITOUR.com.br</p>
          </div>
        </section>

        {/* Final Button */}
        <div className="flex justify-center pt-10">
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

export default IncentivePage;