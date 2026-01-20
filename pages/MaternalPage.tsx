import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  MapPin, 
  Globe, 
  MessageCircle,
  Smile
} from 'lucide-react';

interface MaternalPageProps {
  onBack: () => void;
}

const MaternalPage: React.FC<MaternalPageProps> = ({ onBack }) => {
  const whatsappNumber = "5519997474575";
  const defaultImageUrl = "https://a.lovart.ai/artifacts/agent/OcGkBKwNTEGYQqnN.png";

  const itineraries = [
    {
      title: "Aquário de São Paulo (São Paulo, SP)",
      description: "Uma viagem ao fundo do mar. Tanques gigantes, pinguins e ursos polares encantam os alunos e ensinam sobre a vida marinha e conservação.",
      site: "https://www.aquariodesp.com.br/"
    },
    {
      title: "Biblioteca de Americana (Americana, SP)",
      description: "Um universo de histórias e imaginação. A visita estimula o gosto pela leitura desde cedo, apresentando o ambiente da biblioteca de forma lúdica e acolhedora.",
      site: "https://bibliotecadeamericana.com/"
    },
    {
      title: "Cidade do Livro (São Paulo, SP)",
      description: "Um parque temático onde os livros ganham vida. Cenários interativos e personagens conduzem as crianças por aventuras literárias inesquecíveis.",
      site: "https://www.cidadedolivro.com.br/novo/"
    },
    {
      title: "Ecologic Park (Charqueada, SP)",
      description: "Imersão total na natureza com foco na era jurássica e ecologia. Atividades pedagógicas que misturam ciência, história e diversão ao ar livre.",
      site: "https://acampark.com.br/educadores/"
    },
    {
      title: "Editora Adonis (Americana, SP)",
      description: "Como nasce um livro? Uma visita mágica aos bastidores da criação literária, inspirando futuros leitores e escritores a valorizarem o papel e a escrita.",
      site: "https://www.editoraadonis.com.br/"
    },
    {
      title: "Fazenda Apiário Belmonte (Sousas, SP)",
      description: "O mundo das abelhas! As crianças aprendem sobre polinização, a vida na colmeia e a produção de mel com segurança e didática especializada.",
      site: "https://www.facebook.com/fazendabelmonte/"
    },
    {
      title: "Horta Day Luz (Americana, SP)",
      description: "Uma experiência sensorial incrível onde as crianças aprendem sobre a origem dos alimentos, o cultivo orgânico e a importância da natureza, colocando as mãos na terra.",
      site: "https://www.dayluz.com.br/contato"
    },
    {
      title: "Jardim Botânico Plantarum (Nova Odessa, SP)",
      description: "Um centro de referência em pesquisa e conservação da flora brasileira. Um passeio visualmente deslumbrante que ensina a importância das plantas.",
      site: "https://www.plantarum.org.br/"
    },
    {
      title: "Jota City (Atibaia, SP)",
      description: "Uma cidade feita para crianças! Conceitos de cidadania, economia e profissões são apresentados em uma minicidade totalmente interativa.",
      site: "http://jotacity.com.br/"
    },
    {
      title: "Laticínios Tavolaro (Brotas, SP)",
      description: "Descubra de onde vem o leite e o queijo! As crianças vivenciam o dia a dia da fazenda, conhecem os animais e aprendem sobre produção de alimentos de forma divertida.",
      site: "https://www.facebook.com/laticiniostavolaro/?locale=pt_BR"
    },
    {
      title: "Maria Fumaça (Campinas, SP)",
      description: "Uma viagem no tempo sobre trilhos! O passeio de trem encanta as crianças e apresenta a história ferroviária da região de maneira nostálgica e emocionante.",
      site: "https://www.mariafumacacampinas.com.br/fale-conosco/"
    },
    {
      title: "Museu da Imaginação (São Paulo, SP)",
      description: "Arte e brincadeira se fundem. Espaços interativos que estimulam a criatividade, a coordenação e a expressão artística das crianças.",
      site: "https://www.museudaimaginacao.com.br/"
    },
    {
      title: "Parque Aimarata (Americana, SP)",
      description: "Contato direto com a biodiversidade local. Trilhas leves e seguras permitem que os pequenos explorem a fauna e flora, desenvolvendo respeito pelo meio ambiente.",
      site: "https://aimarata.org.br/tabela-de-precos/"
    },
    {
      title: "Parque da Mônica (São Paulo, SP)",
      description: "Encontro com os personagens mais amados do Brasil. Atrações lúdicas e seguras que trabalham a amizade e a diversão em grupo.",
      site: "https://parquedamonica.com.br/"
    },
    {
      title: "Planetário Taquaral (Campinas, SP)",
      description: "Uma introdução fascinante à astronomia. Projeções adaptadas para os pequenos mostram as estrelas e planetas, despertando a curiosidade sobre o universo.",
      site: "https://conheca.campinas.sp.gov.br/pois/301"
    },
    {
      title: "Recanto Lago dos Sonhos (Valinhos, SP)",
      description: "Natureza e animais em harmonia. Vivências rurais que aproximam a criança do campo, com atividades de alimentação dos animais e horticultura.",
      site: "https://recantolagodossonhos.com.br/"
    },
    {
      title: "Recanto São José (Mogi Mirim, SP)",
      description: "Espaço dedicado ao lazer educativo e convivência. Perfeito para atividades de socialização e brincadeiras dirigidas em meio à natureza.",
      site: ""
    },
    {
      title: "Sítio Sassafraz (Itupeva, SP)",
      description: "Turismo rural autêntico. As crianças colhem frutas, interagem com animais da fazenda e experimentam a vida no campo com simplicidade e alegria.",
      site: "https://sitiosassafraz.com.br/"
    },
    {
      title: "Terra dos Gigantes / Fazenda Ituaú (Salto, SP)",
      description: "O mundo dos legumes gigantes. Uma aula curiosa e visual sobre botânica e horticultura tecnológica, que encanta os pequenos com seu tamanho.",
      site: "https://fazendaituau.com.br/"
    },
    {
      title: "Zooparque (Itatiba, SP)",
      description: "O maior zoológico particular do Brasil. Uma sala de aula a céu aberto para conhecer animais de diversos biomas e aprender sobre preservação.",
      site: "https://zooparque.com.br/"
    }
  ].sort((a, b) => a.title.localeCompare(b.title));

  const handleWhatsAppClick = (itineraryTitle?: string) => {
    let message = `Olá, Pati! Vi os roteiros de Maternal & Jardim e gostaria de mais informações.`;
    if (itineraryTitle) {
      message = `Olá, Pati! Me interessei pelo roteiro "${itineraryTitle}" (Maternal) e gostaria de um orçamento.`;
    }
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      {/* Top Bar inside Content Area */}
      <div className="bg-white px-4 md:px-8 py-4 md:py-6 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded text-white hidden sm:block">
            <Smile size={20} />
          </div>
          <h1 className="text-primary font-bold text-sm md:text-xl uppercase tracking-wider">Maternal & Jardim 1 e 2</h1>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs md:text-sm font-semibold whitespace-nowrap"
        >
          <ArrowLeft size={16} />
          <span className="hidden xs:inline">Voltar ao Site</span>
          <span className="xs:hidden">Voltar</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8 w-full">
        <div className="relative h-[250px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={defaultImageUrl} 
            alt="Capa Maternal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
            <span className="bg-secondary text-primary font-bold text-[10px] md:text-xs py-1 px-3 rounded w-fit mb-2 md:mb-4 uppercase tracking-wider">
              Roteiros Pedagógicos
            </span>
            <h2 className="text-white text-2xl md:text-5xl font-display font-bold uppercase drop-shadow-lg leading-tight">
              Maternal & Jardim 1 e 2
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
              O turismo pedagógico transforma o conhecimento teórico em vivências práticas e inesquecíveis. 
              Fora da sala de aula, os conteúdos ganham vida, permitindo que os alunos assimilem 
              informações de maneira natural e envolvente.
            </p>
            <p>
              Cada viagem é uma oportunidade de tornar o aprendizado mais significativo, prazeroso e 
              conectado com o mundo real.
            </p>
          </div>

          <div className="bg-orange-50 p-6 md:p-8 rounded-xl border-2 border-orange-200 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h4 className="text-orange-600 font-bold text-lg mb-4 uppercase">Como podemos te ajudar?</h4>
              <p className="text-primary font-bold mb-4 text-sm md:text-base">
                Transformamos cada aula-passeio em uma experiência enriquecedora e segura.
              </p>
              <p className="text-gray-600 text-[11px] md:text-xs leading-relaxed mb-6 font-semibold">
                Sabemos que planejar uma aula-passeio exige cuidado para garantir que o propósito 
                pedagógico seja mantido. Nossa equipe está aqui para oferecer o suporte completo, 
                desde o planejamento até a execução.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-[11px] md:text-xs bg-white/70 w-fit px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                <Check size={16} className="text-primary stroke-[3]" />
                <span className="font-bold">Mais de 20 anos de experiência</span>
              </div>
            </div>
            {/* Background decoration */}
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
              "Tema abordado em sala de aula",
              "Segurança dos alunos",
              "Distância até o local escolhido",
              "Tempo de duração do roteiro",
              "Segurança e confiança na empresa contratada"
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
            <img 
              src={defaultImageUrl} 
              alt="Criança Exploradora" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {itineraries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full group">
              <div className="bg-[#4d6b56] p-3 rounded-xl w-fit mb-6 text-white group-hover:bg-primary transition-colors duration-300 shadow-lg">
                <MapPin size={24} />
              </div>
              
              <h4 className="text-primary font-bold text-lg mb-3 md:mb-4 leading-tight min-h-[3rem]">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-1 font-semibold opacity-90">
                {item.description}
              </p>

              <div className="flex flex-col gap-3 mt-auto">
                <button 
                  onClick={() => item.site && window.open(item.site, '_blank')}
                  disabled={!item.site}
                  className={`flex items-center justify-center gap-2 border-2 border-gray-100 py-3 px-4 rounded-xl text-[11px] font-bold uppercase transition-all ${item.site ? 'text-gray-500 hover:bg-gray-50 hover:border-gray-200 active:scale-95' : 'text-gray-200 cursor-not-allowed'}`}
                >
                  <Globe size={16} />
                  SITE
                </button>
                <button 
                  onClick={() => handleWhatsAppClick(item.title)}
                  className="flex items-center justify-center gap-2 bg-[#1a4d2e] text-white py-3 px-4 rounded-xl text-[11px] font-bold uppercase hover:bg-primary-light active:scale-95 transition-all shadow-md shadow-primary/20"
                >
                  <MessageCircle size={16} />
                  QUERO ESSE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-2xl mx-auto text-center px-4 md:px-6 mb-10">
        <h3 className="text-primary font-bold text-xl md:text-2xl uppercase mb-3 md:mb-4">Gostou das opções?</h3>
        <p className="text-gray-500 font-bold text-xs md:text-sm mb-8 px-2">
          Entre em contato para personalizarmos o roteiro ideal para seus alunos!
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

export default MaternalPage;