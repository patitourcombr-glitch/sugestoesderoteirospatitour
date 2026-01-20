import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  MapPin, 
  Globe, 
  MessageCircle, 
  Landmark 
} from 'lucide-react';

interface EnsinoMedioPageProps {
  onBack: () => void;
}

const EnsinoMedioPage: React.FC<EnsinoMedioPageProps> = ({ onBack }) => {
  const whatsappNumber = "5519997474575";
  const defaultImageUrl = "https://patitour.com.br/wp-content/uploads/2025/05/REESCREVA-SE-51.png";

  const itineraries = [
    { title: "Animália Park (Cotia, SP)", description: "Estudo sistêmico de preservação ambiental integrado a um complexo de entretenimento consciente.", site: "https://animaliapark.com.br/" },
    { title: "Arcade Haus (São Paulo, SP)", description: "Estudo de lógica de programação e gamificação aplicada ao movimento físico e trabalho cooperativo.", site: "https://www.arcadehaus.com.br/" },
    { title: "B3 - Bolsa de Valores (São Paulo, SP)", description: "Imersão no mercado financeiro brasileiro, compreendendo dinâmicas econômicas e o papel da bolsa na economia global.", site: "https://www.b3.com.br/pt_br/para-voce" },
    { title: "Barra Bonita - Navegação e Memorial (Barra Bonita, SP)", description: "Estudo de engenharia hidráulica e impacto ambiental no Rio Tietê através do sistema de eclusagem.", site: "https://barrabonita.sp.gov.br/turismo/pontos-turisticos/memorial-rio-tiete" },
    { title: "Cacau Show Mega Store (Itapevi, SP)", description: "Estudo de marketing sensorial, logística de varejo e os processos químicos industriais do chocolate.", site: "https://www.facebook.com/p/Cacau-Show-Mega-Store-" },
    { title: "Caminhos do Mar (São Bernardo do Campo/Santos, SP)", description: "Aula de campo na Estrada Velha de Santos, integrando botânica, história e geodésia na Serra do Mar.", site: "https://caminhosdomar.com.br/" },
    { title: "Casa das Rosas (São Paulo, SP)", description: "Literatura e preservação da memória no contexto da transição urbana da Avenida Paulista.", site: "https://www.casadasrosas.org.br/institucional/" },
    { title: "Casa Modernista (São Paulo, SP)", description: "Estudo da ruptura estética na arquitetura brasileira e o nascimento do movimento moderno no Brasil.", site: "https://www.museudacidade.prefeitura.sp.gov.br/sobre-mcsp/casa-modernista/" },
    { title: "CCBB - Centro Cultural Banco do Brasil (São Paulo, SP)", description: "Interação com exposições globais e a arquitetura histórica do centro financeiro paulista.", site: "https://ccbb.com.br/sao-paulo/" },
    { title: "Centro de Ciência e Tecnologia (Limeira, SP)", description: "Experimentação científica e inovação tecnológica voltada para o despertar de vocações acadêmicas.", site: "https://www.facebook.com/centrodecienciaslimeira/" },
    { title: "CTN - Centro de Tradições Nordestinas (São Paulo, SP)", description: "Estudo das diásporas internas e a sociologia da identidade nordestina na cultura paulista.", site: "https://www.ctn.org.br/" },
    { title: "Edifício Matarazzo (São Paulo, SP)", description: "Aula de urbanismo e administração pública na sede da prefeitura, explorando a arquitetura dos anos 30.", site: "https://www.prefeitura.sp.gov.br/cidade/secretarias/turismo/eventos/index.php?p=271186" },
    { title: "Escape 60 (São Paulo, SP)", description: "Desenvolvimento de soft skills através de desafios de lógica, comunicação e resolução de conflitos.", site: "https://escape60.com.br/" },
    { title: "Fábrica Arcor (Campinas, SP)", description: "Observação da cadeia produtiva industrial, logística e aspectos bioquímicos da indústria alimentícia.", site: "https://www.arcor.com.br/" },
    { title: "Fábrica Natura (Cajamar, SP)", description: "Estudo de processos industriais baseados na biodiversidade, inovação química e governança socioambiental.", site: "https://www.natura.com.br/visite-a-natura" },
    { title: "Farol Santander (São Paulo, SP)", description: "Estudo da história bancária, economia e artes visuais em um dos marcos do horizonte paulistano.", site: "https://www.farolsantander.com.br/#/" },
    { title: "Fazenda Ibicaba (Cordeirópolis, SP)", description: "Perspectiva histórica crítica sobre o ciclo do café, a imigração e a sociologia agrária brasileira.", site: "https://www.fazendaibicaba.com.br" },
    { title: "Fazenda Nossa Senhora da Conceição (Jundiaí, SP)", description: "Análise da evolução dos modos de produção rural e o impacto da colonização na estrutura fundiária.", site: "https://turismo.jundiai.sp.gov.br/atrativos/turismorural/fazenda-nossa-senhora-da-conceicao/" },
    { title: "House of Choices (São Paulo, SP)", description: "Análise de comportamento digital, design de experiência e a economia da atenção nas redes sociais.", site: "https://www.houseofchoices.com.br/" },
    { title: "Hyundai (Piracicaba, SP)", description: "Estudo de automação industrial, indústria 4.0 e os impactos socioeconômicos do polo automobilístico.", site: "https://www.hyundai.com.br" },
    { title: "IMS - Instituto Moreira Salles (São Paulo, SP)", description: "Fotografia como documento histórico e expressão artística em uma das arquiteturas icônicas da Paulista.", site: "https://ims.com.br/" },
    { title: "Instituto Artium (São Paulo, SP)", description: "Análise da preservação do patrimônio arquitetônico e tendências da arte contemporânea internacional.", site: "https://institutoartium.com/" },
    { title: "Itaú Cultural (São Paulo, SP)", description: "Estudo de gestão cultural e tecnologias digitais aplicadas ao fomento da arte e da educação.", site: "https://www.itaucultural.org.br/" },
    { title: "Japan House (São Paulo, SP)", description: "Estudo de design, tecnologia de ponta e diplomacia cultural em um centro de referência nipônico.", site: "https://www.japanhousesp.com.br/en/" },
    { title: "Laboratórios do CENA/USP (Piracicaba, SP)", description: "Compreensão da aplicação da energia nuclear na agricultura e o método científico experimental.", site: "http://www.cena.usp.br/" },
    { title: "Laticínios Tavolaro (Brotas, SP)", description: "Análise da agroindústria e processos de biotecnologia aplicados à produção alimentícia industrial.", site: "https://www.facebook.com/laticiniostavolaro" },
    { title: "LNLS / Sirius (Campinas, SP)", description: "Visita ao acelerador de partículas Sirius, discutindo física moderna e inovação tecnológica nacional.", site: "https://lnls.cnpem.br/" },
    { title: "MAAS - Museu Aberto de Astronomia (Sousas, SP)", description: "Observação astronômica direta integrada a conceitos de astrofísica e cosmologia moderna.", site: "https://picodascabras.com.br/" },
    { title: "MAC USP - Museu de Arte Contemporânea (São Paulo, SP)", description: "Visita acadêmica ao acervo de arte contemporânea, discutindo novas mídias e curadoria política.", site: "http://www.mac.usp.br/mac/" },
    { title: "MAM - Museu de Arte Moderna (São Paulo, SP)", description: "Contato com a arte moderna latino-americana e sua busca por uma identidade artística independente.", site: "https://mam.org.br/" },
    { title: "MASP (São Paulo, SP)", description: "Análise estética do acervo sob a ótica da museografia de Lina Bo Bardi e história da arte mundial.", site: "https://masp.org.br/" },
    { title: "Memorial da Resistência (São Paulo, SP)", description: "Reflexão sobre direitos humanos, regimes políticos e a memória das lutas democráticas no Brasil.", site: "https://memorialdaresistenciasp.org.br/" },
    { title: "MIS - Museu da Imagem e do Som (São Paulo, SP)", description: "Experiência audiovisual explorando a convergência entre cinema e novas linguagens tecnológicas.", site: "https://mis-sp.org.br/" },
    { title: "Museu Afrobrasil (São Paulo, SP)", description: "Estudo da contribuição africana na formação social brasileira, desconstruindo visões eurocêntricas.", site: "http://www.museuafrobrasil.org.br/o-museum/apresentacao" },
    { title: "Museu da Água (Indaiatuba, SP)", description: "Estudo sobre o ciclo hidrológico urbano, tecnologias de tratamento e geopolítica dos recursos hídricos.", site: "https://museudaagua.sp.gov.br" },
    { title: "Museu da Energia (São Paulo, SP)", description: "História da infraestrutura urbana e a transição para matrizes energéticas limpas e sustentáveis.", site: "https://www.energiaesaneamento.org.br/" },
    { title: "Museu da Imigração (São Paulo, SP)", description: "Estudo das ondas migratórias e seu impacto na demografia e pluralidade cultural do estado.", site: "https://museudaimigracao.org.br/" },
    { title: "Museu das Ilusões (São Paulo, SP)", description: "Aula prática de óptica geométrica e neurofisiologia da visão através de instalações interativas.", site: "https://museudasilusoes.com.br/" },
    { title: "Museu do Crime (São Paulo, SP)", description: "Análise de criminologia, perícia técnica e a evolução do sistema de segurança pública.", site: "http://www.aipesp.com.br/museu-do-crime" },
    { title: "Museu do Futebol (São Paulo, SP)", description: "A sociologia do esporte como fenômeno de massa e seu papel na formação da identidade brasileira.", site: "https://museudofutebol.org.br/" },
    { title: "Museu do Ipiranga (São Paulo, SP)", description: "Investigação sobre a construção do mito da independência e a evolução da sociedade imperial.", site: "https://museudoipiranga.org.br/" },
    { title: "Paranapiacaba (Santo André, SP)", description: "Estudo de arqueologia industrial, urbanismo ferroviário e biologia da conservação na Serra do Mar.", site: "https://pt.wikipedia.org/wiki/Paranapiacaba" },
    { title: "Parque Cientecc - USP (São Paulo, SP)", description: "Experimentação em geofísica e meteorologia em uma área de preservação histórica vinculada à USP.", site: "https://www.parquecientec.usp.br/" },
    { title: "Parque das Monções (Porto Feliz, SP)", description: "Análise histórica das expedições monçoeiras e o papel estratégico dos rios no desbravamento.", site: "https://www.portofeliz.sp.gov.br/parque-das-moncoes" },
    { title: "Parque Della Vitoria (Itapevi, SP)", description: "Vivência de integração focada em desenvolvimento interpessoal e educação física ao ar livre.", site: "https://www.parquedellavittoria.com.br/" },
    { title: "Parque do Varvito (Itu, SP)", description: "Estudo prático de geologia e sedimentologia, analisando evidências de glaciações e tempo geológico.", site: "https://itu.sp.gov.br/meio-ambiente/parque-geologico-do-varvito/" },
    { title: "Parque Rocha Moutonnée (Salto, SP)", description: "Investigação de geociências focada em erosão glacial e a formação do relevo paulista.", site: "https://salto.sp.gov.br/turismo/atrativos-turisticos/parque-da-rocha-moutonnee/" },
    { title: "Pateo do Collegio (São Paulo, SP)", description: "Estudo das origens coloniais de São Paulo e o papel das missões jesuíticas na urbanização.", site: "https://www.pateodocollegio.com.br/" },
    { title: "Pinacoteca do Estado (São Paulo, SP)", description: "Cronologia da arte brasileira e a transição do neoclassicismo para as vanguardas modernas.", site: "https://pinacoteca.org.br/" },
    { title: "Salesópolis - Nascentes do Tietê (Salesópolis, SP)", description: "Aula prática sobre hidrografia e ecologia, discutindo a importância estratégica da bacia do Tietê.", site: "https://www.salesopolis.sp.gov.br/salesopolis/pontos-turisticos/" },
    { title: "Sesc 14 Bis (São Paulo, SP)", description: "Experiência de convívio social e educação não formal em espaço multifuncional de cultura e lazer.", site: "https://www.sescsp.org.br/unidades/14-bis/" },
    { title: "Show de Física USP (São Paulo, SP)", description: "Demonstração experimental impactante de fenômenos da eletrodinâmica em nível acadêmico.", site: "https://portal.if.usp.br/showdefisica/pt-br/node/323" },
    { title: "Sítio do Sol (Cabreúva, SP)", description: "Práticas de sustentabilidade e agroecologia regenerativa focadas na conservação do solo.", site: "https://www.facebook.com/sitiodosolcabreuva" },
    { title: "Terra dos Gigantes / Fazenda Ituaú (Salto, SP)", description: "Botânica e agronomia de precisão, focada no desenvolvimento de horticultura tecnológica.", site: "https://fazendaituau.com.br/" },
    { title: "Toca da Raposa (Juquitiba, SP)", description: "Imersão antropológica integrada à conservação ambiental da Mata Atlântica.", site: "https://www.tocadaraposa.com.br" },
    { title: "UPA Unicamp (Campinas, SP)", description: "Visita universitária para compreensão da pesquisa acadêmica e orientação vocacional acadêmica.", site: "https://upa.unicamp.br/" },
    { title: "Zoológico de São Paulo (São Paulo, SP)", description: "Estudo de zoologia comparada e biologia da conservação aplicada à espécies ameaçadas.", site: "https://zoologico.com.br/" }
  ].sort((a, b) => a.title.localeCompare(b.title));

  const handleWhatsAppClick = (itineraryTitle?: string) => {
    let message = `Olá, Pati! Vi os roteiros de Ensino Médio e gostaria de mais informações.`;
    if (itineraryTitle) {
      message = `Olá, Pati! Me interessei pelo roteiro "${itineraryTitle}" (Ensino Médio) e gostaria de um orçamento.`;
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