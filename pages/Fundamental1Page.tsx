import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  MapPin, 
  Globe, 
  MessageCircle,
  Backpack
} from 'lucide-react';

interface Fundamental1PageProps {
  onBack: () => void;
}

const Fundamental1Page: React.FC<Fundamental1PageProps> = ({ onBack }) => {
  const whatsappNumber = "5519997474575";
  const defaultImageUrl = "https://patitour.com.br/wp-content/uploads/2025/05/REESCREVA-SE-49.png";

  const itineraries = [
    { title: "Aldeia Nakana (Morungaba, SP)", description: "Um mergulho na cultura indígena. Os alunos aprendem sobre costumes, artesanato e a relação harmônica com a natureza de forma autêntica.", site: "https://www.instagram.com/aldeianakana/" },
    { title: "Aldeia Parque Pousada (São Roque, SP)", description: "Vivência de lazer e educação em meio à mata. Atividades de ecoturismo que reforçam o trabalho em equipe e a consciência ambiental.", site: "https://aldeiaparquepousada.com.br/" },
    { title: "Animália Park (Cotia, SP)", description: "Um dos maiores parques de conservação, unindo educação ambiental profunda e diversão consciente em um cenário deslumbrante.", site: "https://animaliapark.com.br/" },
    { title: "Aquário (São Paulo, SP)", description: "Exploração da biodiversidade aquática global. Fundamental para o estudo de ecossistemas marinhos e a importância da preservação dos oceanos.", site: "https://www.aquariodesp.com.br/" },
    { title: "Arcade Haus (São Paulo, SP)", description: "Tecnologia e lógica em movimento. Desafios que estimulam o raciocínio rápido e a gamificação aplicada ao aprendizado moderno.", site: "https://www.arcadehaus.com.br/" },
    { title: "Arena Heroes Burguer (São Paulo, SP)", description: "Uma experiênia temática que une lúdico e cultura pop, ideal para momentos de integração e celebração pedagógica.", site: "https://www.instagram.com/arenaheroesburguer/" },
    { title: "Ararita Hotel Fazenda (Porto Feliz, SP)", description: "O contato real com a vida no campo. Atividades que ensinam sobre agropecuária sustentável e a origem dos alimentos que consumimos.", site: "https://ararita.com.br/" },
    { title: "Assentamento Sem Terra Americana - Cooperflora (Americana, SP)", description: "Estudo social e agrário prático. Uma aula sobre cooperativismo, agricultura familiar e a importância da terra na construção da sociedade.", site: "https://www.facebook.com/cooperflora1/about?locale=pt_BR" },
    { title: "Barra Bonita - Navegação na Eclusa (Barra Bonita, SP)", description: "Engenharia e geografia em action. A experiência de eclusagem no Rio Tietê é uma aula inesquecível sobre transporte fluvial e hidrografia.", site: "https://barrabonita.sp.gov.br/turismo/pontos-turisticos/memorial-rio-tiete" },
    { title: "Bicho Mania (Cotia, SP)", description: "Educação ambiental prático. As crianças interagem com animais e aprendem sobre biologia e respeito aos seres vivos em um ambiente seguro.", site: "https://bichomania.com.br/" },
    { title: "Biblioteca de Americana (Americana, SP)", description: "O templo do saber local. Estímulo à pesquisa bibliográfica e valorização da cultura literária como base para o desenvolvimento intelectual.", site: "https://bibliotecadeamericana.com/" },
    { title: "Bourbon Resort Atibaia - Turma da Monica (Atibaia, SP)", description: "O universo lúdico de Mauricio de Sousa aplicado à educação. Atividades que trabalham valores, cidadania e convivência de forma recreativa.", site: "https://www.bourbon.com.br/hotel/bourbon-atibaia" },
    { title: "Cacau Show (Itapevi, SP)", description: "A ciência do chocolate. Da colheita do cacau à linha de produção, os alunos entendem processos industriais, química e história da gastronomia.", site: "https://www.facebook.com/megacacaushow/?locale=pt_BR" },
    { title: "Casa Modelo CPFL (Americana, SP)", description: "Sustentabilidade na prática. Uma aula sobre eficiência energética, consumo consciente e tecnologias que protegem o nosso planeta.", site: "https://agua.org.br/casamaissustentavel/" },
    { title: "Catavento Cultural (São Paulo, SP)", description: "O museu de ciências mais interativo do país. Física, biologia e astronomia apresentadas de forma fascinante e participativa.", site: "https://museucatavento.org.br/" },
    { title: "Ceasa (Campinas, SP)", description: "Economia e segurança alimentar. Os alunos conhecem a logística de distribuição de alimentos e a importância da nutrição para a sociedade.", site: "https://www.ceasacampinas.com.br/" },
    { title: "Centro de Ciência e Tecnologia (Limeira, SP)", description: "Espaço dedicado ao despertar científico. Experimentos e exposições que conectam a sala de aula com as inovações do mundo real.", site: "https://www.facebook.com/centrodecienciaslimeira/" },
    { title: "Cia dos Bichos (Cotia, SP)", description: "Fazendinha educativa onde o aprendizado acontece no contato direto. Ideal para estudar a cadeia alimentar e ciclos da vida animal.", site: "https://www.ciadosbichos.com.br/" },
    { title: "Cidade das Abelhas (Cotia, SP)", description: "A organização social perfeita das abelhas. Uma aula sobre ecologia, cooperação e a importância vital desses polinizadores para a vida.", site: "https://cidadedasabelhas.com.br/" },
    { title: "Cidade da Criança (São Bernardo do Campo, SP)", description: "História e diversão. O primeiro parque temático do Brasil oferece roteiros que misturam lazer com conceitos de convivência social e história.", site: "https://www.cidadedacrianca.com.br/" },
    { title: "Cidade do Livro (São Paulo, SP)", description: "Imersão no mundo da escrita. Estimula a alfabetização e o letramento através de uma jornada mágica pelos gêneros literários.", site: "https://www.cidadedolivro.com.br/novo/" },
    { title: "CTN Centro de Tradições Nordestinas (São Paulo, SP)", description: "Diversidade cultural brasileira. Uma aula sobre a riqueza do Nordeste, sua música, culinária e importância na formação da identidade nacional.", site: "https://www.ctn.org.br/" },
    { title: "Ecologic Park (Charqueada, SP)", description: "A ciência da terra e dos dinossauros. Um laboratório vivo onde geologia e paleontologia se tornam aventuras empolgantes.", site: "https://acampark.com.br/" },
    { title: "Escape Junior (São Paulo, SP)", description: "Raciocínio lógico e cooperação. Jogos de fuga desenhados para crianças, onde a resolução de problemas em grupo é a chave do sucesso.", site: "https://www.escapejunior.com.br/" },
    { title: "Estação Natureza (São Paulo, SP)", description: "Vida rural no coração da metrópole. Atividades que ensinam sobre sustentabilidade e cuidado com os animais em um ambiente controlado.", site: "https://estacaonatureza.com.br/" },
    { title: "Fábrica de Chocolates Arcor (Campinas, SP)", description: "Estudo de processos industriais e automação. Os alunos observam a transformação da matéria-prima em produtos finais em grande escala.", site: "https://www.arcor.com.br/" },
    { title: "Fábrica Faber Castell (São Carlos, SP)", description: "Da madeira ao lápis. Uma aula sobre sustentabilidade florestal e produção industrial de materiais escolares.", site: "https://www.faber-castell.com.br/corporate/faber-castell-brasil" },
    { title: "Fazenda Apiário Belmonte (Sousas, SP)", description: "Produção de mel e biologia das abelhas. Um estudo detalhado sobre a organização das colmeias e produtos derivados das abelhas.", site: "https://www.instagram.com/fazendabelmonte_/" },
    { title: "Fazenda Ibicaba (Cordeirópolis, SP)", description: "Patrimônio histórico do café. Uma viagem no tempo para entender o ciclo do café, a imigração e o trabalho na fazenda colonial.", site: "https://www.fazendaibicaba.com.br/r.php?l=historia" },
    { title: "Fazenda Montanhas do Japi (Jundiaí, SP)", description: "Reserva da biosfera. Estudo de Mata Atlântica preservada, com trilhas que ensinam sobre fauna e flora nativas.", site: "https://www.montanhasdojapi.com/" },
    { title: "Fazenda Morro Azul (Limeira, SP)", description: "Arquitetura e história imperial. O esplendor do Ciclo do Café em uma fazenda que preserva a memória da aristocracia cafeeira.", site: "https://fazendasantigas.com/fazenda/detalhes/539" },
    { title: "Fazenda Nossa Senhora da Conceição (Jundiaí, SP)", description: "Vivência histórica e rural. Onde o passado escravista e o presente produtivo se encontram para uma aula de história crítica.", site: "https://turismo.jundiai.sp.gov.br/atrativos/turismorural/fazenda-nossa-senhora-da-conceicao/" },
    { title: "Fazenda Sta Agatha (Amparo, SP)", description: "Produção orgânica e queijos artesanais. Uma experiência deliciosa que ensina sobre qualidade de vida e alimentação saudável.", site: "https://www.facebook.com/faz.santaagatha/?locale=pt_BR" },
    { title: "Horta Day Luz (Americana, SP)", description: "Educação alimentar e orgânicos. Os alunos participam do plantio e colheita, entendendo o valor dos vegetais sem agrotóxicos.", site: "https://www.dayluz.com.br/contato" },
    { title: "House of Choices (São Paulo, SP)", description: "Criatividade e redes sociais. Um espaço que trabalha a estética visual e a expressão criativa para a geração digital.", site: "https://www.houseofchoices.com.br/" },
    { title: "Instituto Tomie Ohtake (São Paulo, SP)", description: "Arte contemporânea de alto nível. Exposições que desafiam a percepção e estimulam o pensamento crítico artístico.", site: "https://www.institutotomieohtake.org.br/" },
    { title: "Japan House (São Paulo, SP)", description: "Intercâmbio cultural nipônico. Tecnologia, design e tradições do Japão em uma aula de geografia e cultura global.", site: "https://www.japanhousesp.com.br/en/" },
    { title: "Jardim Botânico (São Paulo, SP)", description: "Santuário da biodiversidade. Um oásis para the estudo de botânica, preservação de nascentes e ecossistemas brasileiros.", site: "https://jardimbotanico.com.br/" },
    { title: "Jardim Botanico Plantarum (Nova Odessa, SP)", description: "O maior acervo botânico da América Latina. Uma referência mundial para o estudo sistemático das plantas.", site: "https://www.plantarum.org.br/" },
    { title: "LNLS - Laboratório Nacional de Luz Síncrotron (Campinas, SP)", description: "Fronteira da ciência mundial. Uma visita exclusiva ao Sirius para ver onde a ciência mais avançada do Brasil acontece.", site: "https://cnpem.br/" },
    { title: "MAAS Museu Aberto de Astronomia (Sousas, SP)", description: "O céu ao alcance das mãos. Observação astronômica e conceitos espaciais em um dos melhores complexos do estado.", site: "https://picodascabras.com.br/" },
    { title: "Maria Fumaça (Campinas, SP)", description: "Transporte e Revolução Industrial. O passeio de locomotiva a vapor reconecta os alunos com o nascimento das cidades modernas.", site: "https://www.mariafumacacampinas.com.br" },
    { title: "Memorial do Rio Tiete (Barra Bonita, SP)", description: "História fluvial e meio ambiente. O resgate da importância histórica do rio que desbravou o interior paulista.", site: "https://barrabonita.sp.gov.br/turismo/pontos-turisticos/memorial-rio-tiete" },
    { title: "Museu Afrobrasil (São Paulo, SP)", description: "História e contribuição africana. Uma aula essencial sobre a formação da sociedade brasileira e o valor da nossa ancestralidade.", site: "http://www.museuafrobrasil.org.br/o-museum/apresentacao" },
    { title: "Museu da Agua (Indaiatuba, SP)", description: "Ciclo da água e saneamento. Conscientização sobre o uso racional desse recurso finito e vital.", site: "https://museudaagua.sp.gov.br/" },
    { title: "Museu da Água (Piracicaba, SP)", description: "Engenharia hidráulica e história regional. Localizado onde funcionou a primeira estação de captação de água da cidade.", site: "https://www.semaepiracicaba.sp.gov.br/?p=bxvzzxu=" },
    { title: "Museu das Ilusões (São Paulo, SP)", description: "Ótica e percepção cerebral. Divertido e intrigante, ensina sobre física e neurologia através de ilusões de ótica.", site: "https://museudasilusoes.com.br/" },
    { title: "Museu da Energia (São Paulo, SP)", description: "Dos lampiões aos LEDs. A história da iluminação urbana e os desafios da produção sustentável de energia.", site: "https://www.energiaesaneamento.org.br/" },
    { title: "Museu da Imaginação (São Paulo, SP)", description: "Arte brincante. Espaço que valoriza a ludicidade como ferramenta principal para a absorção de conceitos artísticos.", site: "https://museudaimaginacao.com.br/" },
    { title: "Museu da Lingua Portuguesa (São Paulo, SP)", description: "O idioma como patrimônio vivo. Uma aula de literatura e gramática apresentada de forma moderna e emocionante.", site: "https://www.museudalinguaportuguesa.org.br/" },
    { title: "Museu do Futebol (São Paulo, SP)", description: "Paixão nacional e sociologia. A história do esporte como espelho das transformações sociais do Brasil.", site: "https://museudofutebol.org.br/" },
    { title: "Parque Aimarata (Americana, SP)", description: "Lazer e ecologia. Atividades recreativas que aproximam as crianças da fauna e flora locais com muita segurança.", site: "https://aimarata.org.br/tabela-de-precos/" },
    { title: "Parque Della Vitoria (Itapevi, SP)", description: "Aventura e contato animal. Um parque que prioriza a interação direta e o lazer ao ar livre em família ou grupos escolares.", site: "https://www.parquedellavittoria.com.br/" },
    { title: "Parque das Monções (Porto Feliz, SP)", description: "História dos Bandeirantes. O local de partida das expedições fluviais que expandiram as fronteiras do país.", site: "https://www.portofeliz.sp.gov.br/" },
    { title: "Parque Ecológico Imigrantes (São Bernardo do Campo, SP)", description: "Sustentabilidade em Mata Atlântica. Um projeto modelo de acessibilidade e preservação ambiental.", site: "https://parqueecologicoimigrantes.org.br/" },
    { title: "Petzoo (Cotia, SP)", description: "Vida na fazenda adaptada para crianças. Ideal para o primeiro contato pedagógico com o ciclo de produção rural.", site: "https://petzoo.com.br/" },
    { title: "Planetário Ibirapuera (São Paulo, SP)", description: "Astronomia de imersão. Uma viagem espacial sem sair do lugar, com tecnologia de ponta para entender o cosmos.", site: "https://www.instagram.com/birapueraplanetario/" },
    { title: "Planeta Inseto (São Paulo, SP)", description: "O fascinante mundo dos artrópodes. Estudo sobre a importância dos insetos no equilíbrio ecológico mundial.", site: "https://planetainseto.com.br/" },
    { title: "Planetario Taquaral (Campinas, SP)", description: "Educação estelar regional. Projeções que ensinam sobre o sistema solar e as constelações de forma acessível.", site: "https://conheca.campinas.sp.gov.br/pois/301" },
    { title: "Playcenter Family (São Paulo, SP)", description: "Lazer e integração social. Momentos de descontração coletiva que fortalecem os vínculos entre alunos e professores.", site: "https://www.playcenterfamily.com/" },
    { title: "Polo Astronomico de Amparo (Amparo, SP)", description: "Observação real do universo. Um dos centros mais bem equipados para estudos de astronomia fora da capital.", site: "https://www.poloastronomicoamparo.com.br/visitas-escolares" },
    { title: "Projeto Sabina (São Bernardo do Campo, SP)", description: "Conhecimento em todas as áreas. Unindo paleontologia, oceanografia e astronomia em um só complexo educativo.", site: "https://sabina.org.br/" },
    { title: "Recanto Lago dos Sonhos (Valinhos, SP)", description: "Harmonia entre homem e natureza. Um espaço encantador para vivenciar os prazeres e ensinamentos da vida simples no campo.", site: "https://recantolagodossonhos.com.br/" },
    { title: "República Lago (Leme, SP)", description: "Acampamento educativo premium. Atividades que trabalham autonomia, liderança e convívio em grupo na natureza.", site: "https://replago.com.br/" },
    { title: "Rota Tirolesa (Piracicaba, SP)", description: "Aventura e geografia local. Uma forma emocionante de observar o relevo e o Rio Piracicaba de ângulos privilegiados.", site: "https://turismopiracicaba.com.br/passeios-turisticos/rota-tirolesa" },
    { title: "Salesopolis (Nascentes do Rio Tietê, SP)", description: "Onde o Tietê é limpo. Uma aula fundamental sobre ecologia e a importância da proteção das nascentes dos rios.", site: "https://www.salesopolis.sp.gov.br/salesopolis/pontos-turisticos/" },
    { title: "Sitiolândia (São Paulo, SP)", description: "Educação ambiental e diversão. Oficinas de sustentabilidade, horta e aventura em um parque voltado 100% para escolas.", site: "https://www.sitiolandia.com.br/" },
    { title: "Sítio do Carroção (Tatuí, SP)", description: "Referência em educação não formal. Cenários cinematográficos que tornam o aprendizado de biologia e história uma grande aventura.", site: "https://carrocao.com/" },
    { title: "Sítio do Pica Pau Amarelo (Atibaia, SP)", description: "O universo de Monteiro Lobato vivo. As crianças interagem com Dona Benta, Emília e Visconde em uma jornada literária.", site: "https://www.sitiopicapauamarelo.com.br/" },
    { title: "Sítio do Sol (Cabreúva, SP)", description: "Eco-pedagogia e turismo rural. Foco na observação da natureza e práticas sustentáveis no dia a dia da fazenda.", site: "https://www.facebook.com/sitiodosolcabreuva/?locale=pt_BR" },
    { title: "Sítio Santa Rosa (Tatuí, SP)", description: "Aprendizado através da experiência rural autêntica. Atividades de fazenda que conectam a criança com a terra.", site: "http://www.sitiosantarosa.com/" },
    { title: "Sítio Sassafraz (Itupeva, SP)", description: "Gastronomia rural e história. Famoso pelo café da manhã, oferece roteiros que explicam a produção de frutas e laticínios.", site: "https://sitiosassafraz.com.br/" },
    { title: "Terra dos Gigantes / Fazenda Ituaú (Salto, SP)", description: "O mundo dos legumes gigantes. Uma aula curiosa e visual sobre botânica e horticultura tecnológica.", site: "https://fazendaituau.com.br/" },
    { title: "Toca da Raposa (Juquitiba, SP)", description: "Aldeia indígena e educação ambiental. Um espaço único que promove o encontro de culturas em meio à Mata Atlântica.", site: "https://www.tocadaraposa.com.br/" },
    { title: "Zoológico (São Paulo, SP)", description: "O maior do Brasil. Estudo sistemático da zoologia global e os esforços de reprodução em cativeiro para salvar espécies.", site: "https://zoologico.com.br/" },
    { title: "Zoológico (Sorocaba, SP)", description: "Referência em bem-estar animal e medicina veterinária de animais selvagens. Excelente para estudos de biodiversidade regional.", site: "https://www.instagram.com/zoosorocaba/" },
    { title: "Zooparque (Itatiba, SP)", description: "Imersão em biomas mundiais. Um passeio que leva os alunos através de diferentes continentes para observar a fauna de forma educativa.", site: "https://zooparque.com.br/" }
  ].sort((a, b) => a.title.localeCompare(b.title));

  const handleWhatsAppClick = (itineraryTitle?: string) => {
    let message = `Olá, Pati! Vi os roteiros de Fundamental 1 e gostaria de mais informações.`;
    if (itineraryTitle) {
      message = `Olá, Pati! Me interessei pelo roteiro "${itineraryTitle}" (Fundamental 1) e gostaria de um orçamento.`;
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
            <Backpack size={20} />
          </div>
          <h1 className="text-primary font-bold text-sm md:text-xl uppercase tracking-wider">Fundamental 1</h1>
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
            alt="Capa Fundamental 1" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
            <span className="bg-secondary text-primary font-bold text-[10px] md:text-xs py-1 px-3 rounded w-fit mb-2 md:mb-4 uppercase tracking-wider">
              Roteiros Pedagógicos
            </span>
            <h2 className="text-white text-2xl md:text-5xl font-display font-bold uppercase drop-shadow-lg leading-tight">
              Fundamental 1
            </h2>
          </div>
        </div>
      </div>

      {/* Info Content - SYNCED WITH MATERNAL */}
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

export default Fundamental1Page;