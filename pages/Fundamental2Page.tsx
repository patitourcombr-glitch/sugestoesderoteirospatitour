import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  MapPin, 
  Globe, 
  MessageCircle, 
  Microscope 
} from 'lucide-react';

interface Fundamental2PageProps {
  onBack: () => void;
}

const Fundamental2Page: React.FC<Fundamental2PageProps> = ({ onBack }) => {
  const whatsappNumber = "5519997474575";
  const defaultImageUrl = "https://patitour.com.br/wp-content/uploads/2025/05/REESCREVA-SE-42.png";

  const itineraries = [
    { title: "Aldeia Nakana (Morungaba, SP)", description: "Estudo antropológico sobre as raízes indígenas e a preservação cultural em tempos modernos.", site: "https://www.instagram.com/aldeianakana/" },
    { title: "Animalia Park (Cotia, SP)", description: "Exploração da biodiversidade e os desafios da conservação ambiental em larga escala.", site: "https://animaliapark.com.br/" },
    { title: "Assentamento Sem Terra Americana - Cooperflora", description: "Uma aula prática de sociologia e economia agrária, focada em cooperativismo e agricultura sustentável.", site: "https://www.facebook.com/cooperflora1/about?locale=pt_BR" },
    { title: "Barra Bonita (Navegação na Eclusa)", description: "Geografia e engenharia hidráulica em um dos pontos mais estratégicos da malha hidroviária paulista.", site: "https://barrabonita.sp.gov.br/turismo/pontos-turisticos/memorial-rio-tiete" },
    { title: "Cacau Show (Itapevi, SP)", description: "Estudo dos processos industriais, automação e a economia global do setor alimentício.", site: "https://www.instagram.com/megacacaushow/" },
    { title: "Casa Modelo CPFL (Americana, SP)", description: "Investigação sobre fontes de energia renováveis e tecnologias para cidades inteligentes.", site: "https://agua.org.br/casamaissustentavel/" },
    { title: "Catavento Cultural (São Paulo, SP)", description: "Interatividade científica avançada abordando física, biologia e astronomia de forma profunda.", site: "https://museucatavento.org.br/" },
    { title: "Ceasa Campinas", description: "Dinâmicas de mercado, segurança alimentar e a complexa logística de abastecimento urbano.", site: "https://www.ceasacampinas.com.br/" },
    { title: "Centro de Ciência e Tecnologia - Limeira", description: "Experimentação científica e inovação tecnológica voltada para o despertar de vocações.", site: "https://www.facebook.com/centrodecienciaslimeira/" },
    { title: "CTN Centro de Tradições Nordestinas", description: "Estudo das migrações internas no Brasil e a influência da cultura nordestina na formação paulista.", site: "https://www.ctn.org.br/" },
    { title: "Ecologic Park (Charqueada, SP)", description: "Vivência em geologia e ecologia prática em um laboratório a céu aberto focado em sustentabilidade.", site: "https://acampark.com.br/" },
    { title: "Escape 60 (São Paulo, SP)", description: "Desenvolvimento de soft skills, trabalho em equipe e raciocínio lógico em ambientes gamificados.", site: "https://escape60.com.br/" },
    { title: "Faber Castell (São Carlos, SP)", description: "Da gestão florestal sustentável à automação industrial: uma aula sobre ciclo de vida de produtos.", site: "https://www.faber-castell.com.br/corporate/faber-castell-experience" },
    { title: "Fazenda Ibicaba (Cordeirópolis, SP)", description: "O ciclo do café e o processo migratório sob uma perspectiva histórica e econômica rigorosa.", site: "https://www.fazendaibicaba.com.br/r.php?l=historia" },
    { title: "Fazenda Morro Azul (Limeira, SP)", description: "Arquitetura e história do Brasil Imperial, preservando a memória da aristocracia cafeeira.", site: "https://fazendasantigas.com/fazenda/detalhes/539" },
    { title: "Japan House (São Paulo, SP)", description: "Intercâmbio cultural e tecnológico, explorando o design e a inovação do Japão contemporâneo.", site: "https://www.japanhousesp.com.br/en/" },
    { title: "LNLS / Sirius (Campinas, SP)", description: "Visita à fronteira da ciência brasileira: aceleradores de partículas e pesquisa de ponta mundial.", site: "https://cnpem.br/" },
    { title: "MAAS Museu Aberto de Astronomia", description: "Observação astronômica e conceitos espaciais avançados em um dos melhores complexos do país.", site: "https://picodascabras.com.br/" },
    { title: "MASP (São Paulo, SP)", description: "História da arte mundial e brasileira através de um acervo icônico e arquitetura revolucionária.", site: "https://masp.org.br/" },
    { title: "Memorial da Imigração Judaica / Holocausto", description: "Reflexão histórica sobre direitos humanos, tolerância e a memória de um dos períodos mais marcantes da humanidade.", site: "https://www.memorialdoholocausto.org.br/" },
    { title: "Memorial da Resistência (São Paulo, SP)", description: "Estudo político sobre a ditadura militar no Brasil e a luta pela redemocratização e cidadania.", site: "https://memorialdaresistenciasp.org.br/" },
    { title: "Museu Afrobrasil (São Paulo, SP)", description: "O resgate da contribuição africana na formação da identidade nacional, cultura e sociedade brasileira.", site: "http://www.museuafrobrasil.org.br/" },
    { title: "Museu da Energia (São Paulo, SP)", description: "A evolução tecnológica da energia e seu impacto no desenvolvimento das metrópoles.", site: "https://www.energiaesaneamento.org.br/" },
    { title: "Museu da Lingua Portuguesa", description: "A linguística como patrimônio vivo, explorando a diversidade e a evolução do nosso idioma.", site: "https://www.museudalinguaportuguesa.org.br/" },
    { title: "Museu do Futebol (São Paulo, SP)", description: "A sociologia do esporte e sua influência na cultura de massas e na história política do Brasil.", site: "https://museudofutebol.org.br/" },
    { title: "Museu do Ipiranga (São Paulo, SP)", description: "Imersão na história do Brasil Independência e a formação do imaginário nacional.", site: "https://museudoipiranga.org.br/" },
    { title: "Paranapiacaba (Santo André, SP)", description: "Patrimônio industrial ferroviário e estudo da biodiversidade da Mata Atlântica em área de neblina.", site: "https://pt.wikipedia.org/wiki/Paranapiacaba" },
    { title: "Parque do Varvito (Itu, SP)", description: "Uma aula prática de geologia sobre as eras glaciais e a formação das rochas sedimentares.", site: "https://itu.sp.gov.br/meio-ambiente/parque-geologico-do-varvito/" },
    { title: "Pinacoteca (São Paulo, SP)", description: "As artes visuais no Brasil do século XIX aos dias atuais, em um diálogo entre o clássico e o contemporâneo.", site: "https://pinacoteca.org.br/" },
    { title: "Salesopolis (Nascentes do Rio Tietê)", description: "Ecologia aplicada: o estudo da hidrografia paulista e o impacto ambiental ao longo do curso do rio.", site: "https://www.salesopolis.sp.gov.br/salesopolis/pontos-turisticos/" },
    { title: "Santos (Porto e Museus)", description: "Economia internacional, o papel do porto e o legado histórico do café na cidade litorânea.", site: "https://www.santos.sp.gov.br/" },
    { title: "Show de Física USP (São Paulo, SP)", description: "Demonstrações práticas e impactantes sobre as leis da física em um ambiente universitário.", site: "https://portal.if.usp.br/showdefisica/" },
    { title: "Sítio do Carroção (Tatuí, SP)", description: "Aventura pedagógica de alta imersão, unindo biologia, história e geologia em cenários temáticos.", site: "https://carrocao.com/" },
    { title: "Terra dos Gigantes / Fazenda Ituaú", description: "Botânica e agronomia de precisão, focada no desenvolvimento de espécies gigantes e horticultura tecnológica.", site: "https://fazendaituau.com.br/" },
    { title: "Zooparque (Itatiba, SP)", description: "Estudo sistemático da fauna mundial e programas de reprodução de espécies ameaçadas.", site: "https://zooparque.com.br/" }
  ].sort((a, b) => a.title.localeCompare(b.title));

  const handleWhatsAppClick = (itineraryTitle?: string) => {
    let message = `Olá, Pati! Vi os roteiros de Fundamental 2 e gostaria de mais informações.`;
    if (itineraryTitle) {
      message = `Olá, Pati! Me interessei pelo roteiro "${itineraryTitle}" (Fundamental 2) e gostaria de um orçamento.`;
    }
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      {/* Top Bar */}
      <div className="bg-white px-4 md:px-8 py-4 md:py-6 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded text-white hidden sm:block">
            <Microscope size={20} />
          </div>
          <h1 className="text-primary font-bold text-sm md:text-xl uppercase tracking-wider">Fundamental 2</h1>
        </div>
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs md:text-sm font-semibold">
          <ArrowLeft size={16} /> Voltar ao Site
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8 w-full">
        <div className="relative h-[250px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <img src={defaultImageUrl} alt="Capa Fundamental 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
            <span className="bg-secondary text-primary font-bold text-[10px] md:text-xs py-1 px-3 rounded w-fit mb-2 md:mb-4 uppercase tracking-wider">
              Roteiros Pedagógicos
            </span>
            <h2 className="text-white text-2xl md:text-5xl font-display font-bold uppercase drop-shadow-lg leading-tight">
              Fundamental 2
            </h2>
          </div>
        </div>
      </div>

      {/* Info Content - SYNCED WITH MATERNAL/F1 */}
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
            <img src={defaultImageUrl} alt="Estudo do Meio F2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <h3 className="text-primary font-bold text-2xl mb-8 uppercase text-center md:text-left">Lista Completa de Roteiros</h3>
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
        <h3 className="text-primary font-bold text-xl md:text-2xl uppercase mb-3 md:mb-4">Pronto para agendar?</h3>
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

export default Fundamental2Page;