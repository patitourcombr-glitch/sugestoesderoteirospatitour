import React from 'react';
import { 
  Map, 
  Compass, 
  Briefcase, 
  Check, 
  ArrowRight, 
  Smile, 
  Backpack, 
  Microscope, 
  Landmark, 
  Phone, 
  Mail, 
  MapPin,
  Bus,
  Users,
  Target,
  Accessibility
} from 'lucide-react';

interface HomePageProps {
  setActiveTab?: (tab: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const whatsappNumber = "5519997474575";

  const handleWhatsApp = (message: string = 'Olá! Gostaria de saber mais sobre a Pati Tour.') => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[550px] md:h-[650px] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://patitour.com.br/wp-content/uploads/2025/05/REESCREVA-SE-69-1536x864.png" 
            alt="Fundo Hero" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h3 className="text-[#f4d03f] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4">
              PATITOUR TURISMO PEDAGÓGICO E EXPERIÊNCIAS
            </h3>
            <h1 className="text-white text-4xl md:text-7xl font-display font-medium mb-8 leading-[0.95] tracking-tight">
              Estudo do meio é um <br className="hidden md:block" />
              <span className="italic font-light">desafio para você?</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-lg mb-10 max-w-xl leading-relaxed">
              Somos referência no setor de turismo pedagógico, transformando o
              aprendizado em experiências marcantes. Nossa missão é levar seus alunos para
              onde o conhecimento ganha vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://agendeseuhorariocomapatitour.vercel.app/', '_blank')}
                className="bg-[#f4d03f] text-[#1a4d2e] font-black py-4 px-10 rounded shadow-2xl hover:bg-yellow-400 transition-all active:scale-95 text-sm uppercase tracking-wider"
              >
                Preciso de ajuda
              </button>
              <button 
                onClick={() => handleWhatsApp('Olá! Vi a apresentação inicial das sugestões de estudo do meio e gostaria de solicitar um orçamento para minha escola.')}
                className="bg-transparent border border-white/20 backdrop-blur-md text-white font-black py-4 px-10 rounded hover:bg-white/10 transition-all active:scale-95 text-sm uppercase tracking-wider"
              >
                Quero um orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURE CARDS (Overlay) */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-10 rounded-xl shadow-2xl text-center flex flex-col items-center border border-gray-100 h-full">
            <div className="bg-[#f4d03f] p-4 rounded-lg mb-6 shadow-lg shadow-yellow-100">
              <Map className="w-8 h-8 text-[#1a4d2e]" />
            </div>
            <h3 className="text-[#1a4d2e] font-bold text-xl mb-4">Turismo Pedagógico</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              É uma atividade extraclasse que transforma o conteúdo
              teórico em sensações e experiências práticas,
              promovendo de forma lúdica e dinâmica, o conteúdo
              escolar.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-2xl text-center flex flex-col items-center border border-gray-100 h-full">
            <div className="bg-[#f4d03f] p-4 rounded-lg mb-6 shadow-lg shadow-yellow-100">
              <Compass className="w-8 h-8 text-[#1a4d2e]" />
            </div>
            <h3 className="text-[#1a4d2e] font-bold text-xl mb-4">Estudo do Meio</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              É uma atividade que exige planejamento e organização
              para não perder o rumo pedagógico, e sempre tem
              algum componente lúdico para que os alunos possam
              aprender brincando.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-2xl text-center flex flex-col items-center border border-gray-100 h-full">
            <div className="bg-[#f4d03f] p-4 rounded-lg mb-6 shadow-lg shadow-yellow-100">
              <Briefcase className="w-8 h-8 text-[#1a4d2e]" />
            </div>
            <h3 className="text-[#1a4d2e] font-bold text-xl mb-4">Excursão Escolar</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              É o principal elemento motivador para estimular o
              aluno a aprender. Os conhecimentos gerados no
              interior da sala de aula, quando aplicados em uma
              viagem são assimilados de forma espontânea.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: COMO PODEMOS TE AJUDAR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="relative">
              <img 
                src="https://patitour.com.br/wp-content/uploads/2025/06/REESCREVA-SE-98.png" 
                alt="Como podemos ajudar" 
                className="rounded-3xl shadow-xl w-full object-cover h-[480px]"
              />
            </div>
            <div className="space-y-8 pt-4">
              <h2 className="text-4xl md:text-[2.75rem] font-display font-black text-[#1a4d2e] leading-tight">Como Podemos Te Ajudar?</h2>
              <p className="text-[#f2913d] font-bold text-lg leading-tight">Desperte o aprendizado através do Turismo Pedagógico.</p>
              
              <div className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Transforme a teoria em experiências vivas com o Turismo Pedagógico da Patitour. Mais do
                  que uma simples viagem, nossas aulas-passeio conectam o conteúdo de sala de aula com
                  momentos práticos e interativos, tornando o aprendizado natural, leve e prazeroso para os
                  alunos.
                </p>
                <p>
                  Com segurança, planejamento e um toque lúdico, proporcionamos experiências que vão
                   além do convencional, despertando a curiosidade e o prazer de aprender.
                </p>
                <p>
                  E o melhor: oferecemos todo o suporte necessário para garantir o sucesso de cada
                  atividade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONHEÇA UM POUCO MAIS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-20">
            <div className="h-[1px] flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-black text-[#1a4d2e] uppercase tracking-widest text-center">Conheça um pouco mais...</h2>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-[#f4d03f]" strokeWidth={4} />
              </div>
              <p className="text-gray-600 text-[0.925rem] leading-relaxed font-medium">
                O nosso trabalho começa muito antes da viagem. Realizamos uma ou mais reuniões com
                os professores e/ou coordenadores do colégio, para saber exatamente o assunto a ser
                abordado em cada estudo do meio. Nossos roteiros são personalizados.
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-[#f4d03f]" strokeWidth={4} />
              </div>
              <p className="text-gray-600 text-[0.925rem] leading-relaxed font-medium">
                Durante o estudo do meio priorizamos a integridade física, social e psíquica do aluno,
                integrando-o e passando o conhecimento de forma clara e objetiva.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-[#f4d03f]" strokeWidth={4} />
              </div>
              <p className="text-gray-600 text-[0.925rem] leading-relaxed font-medium">
                Desenvolvemos atividades/viagens desde o maternal até viagens técnicas com faculdades.
                Contamos com monitoria especializada em estudo do meio.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-[#f4d03f]" strokeWidth={4} />
              </div>
              <p className="text-gray-600 text-[0.925rem] leading-relaxed font-medium">
                Oferecemos uma ampla variedade de roteiros que abrangem diversas áreas do
                conhecimento, mas também criamos roteiros personalizados em parceria com professores
                e coordenadores, garantindo que o conteúdo esteja alinhado com as necessidades
                pedagógicas da escola.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-[#f4d03f]" strokeWidth={4} />
              </div>
              <p className="text-gray-600 text-[0.925rem] leading-relaxed font-medium">
                Com responsabilidade e profissionalismo, garantimos a segurança e a satisfação em cada
                viagem.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-[#f4d03f]" strokeWidth={4} />
              </div>
              <p className="text-gray-600 text-[0.925rem] leading-relaxed font-medium">
                Nossas experiências são projetadas para promover cidadania, education ambiental e
                qualidade de vida, tudo de maneira interativa e no próprio ambiente, facilitando o
                aprendizado de forma leve e envolvente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RECONHECER É INSPIRAR */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-white p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-sm inline-block">
                <img 
                  src="https://patitour.com.br/wp-content/uploads/2025/10/REESCREVA-SE-27.png" 
                  alt="Equipe Patitour Incentivo" 
                  className="max-w-full h-auto block border border-gray-50"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-0.5">
                <h2 className="text-[44px] md:text-[52px] leading-[1.1] font-display font-bold text-[#1a4d2e]">
                  Reconhecer é inspirar!
                </h2>
                <h3 className="text-[36px] md:text-[42px] leading-[1.1] font-display font-light text-[#1a4d2e]">
                  Reconheça sua equipe de forma inesquecível!
                </h3>
              </div>
              
              <div className="w-16 h-1 bg-[#f4d03f]"></div>
              
              <div className="space-y-6 text-gray-600 text-[15px] md:text-[16px] leading-relaxed font-medium">
                <p>
                  A Patitour organiza viagens de incentivo personalizadas para empresas de todos os
                  tamanhos, unindo motivação, lazer e resultados.
                </p>
                <p>
                  Na Patitour Turismo Pedagógico e Experiências, acreditamos que viajar é uma das
                  formas mais bonitas de agradecer.
                </p>
                <p>
                  Por isso, cuidamos de cada detalhe — do transporte à programação — para que sua
                  equipe viva momentos inesquecíveis com conforto, segurança e encantamento.
                </p>
                <p>
                  Oferecemos roteiros sob medida, com opções de ônibus leito, destinos temáticos,
                  atividades de integração e experiências personalizadas para o perfil da sua empresa.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-6">
                <button 
                  onClick={() => handleWhatsApp('Olá! Me interessei pelas Viagens de Incentivo para minha equipe. Poderia me passar mais detalhes?')}
                  className="bg-[#f4d03f] text-[#1a4d2e] font-bold py-3.5 px-9 rounded shadow-md hover:bg-yellow-400 transition-all text-sm uppercase tracking-wider active:scale-95"
                >
                  Viva essa experiência
                </button>
                <button 
                  onClick={() => setActiveTab?.('incentive')}
                  className="bg-[#1a4d2e] text-white font-bold py-3.5 px-9 rounded shadow-md hover:bg-[#143d24] transition-all text-sm uppercase tracking-wider active:scale-95"
                >
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOBRE NÓS */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              <div className="lg:col-span-7 space-y-10">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f4d03f] p-3 rounded-full shadow-md text-[#1a4d2e]">
                    <Users size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-[#1a4d2e] uppercase tracking-wider font-display">SOBRE NÓS</h2>
                </div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-[1.05rem] font-medium">
                  <p>A Pati Tour nasceu do sonho de integrar educação e vivência prática.</p>
                  <p>Com anos de estrada, desenvolvemos uma metodologia única que garante segurança total e aproveitamento pedagógico máximo.</p>
                  <p>Desenvolvemos estudos do meio com intencionalidade pedagógica, apoio aos professores e resultados reais em engajamento e aprendizagem.</p>
                  <p>Mais de 20 anos levando escolas a vivências que ampliam repertório, cultura, autonomia e leitura de mundo.</p>
                  <p className="font-bold text-[#1a4d2e] pt-4">Acreditamos que aprender fora da sala de aula transforma o que acontece dentro dela.</p>
                </div>

                <div className="h-[1px] w-full bg-gray-100"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-4 p-5 border-l-[6px] border-[#1a4d2e] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
                    <img src="https://patitour.com.br/wp-content/uploads/2025/11/POSTS-PATIBLOG-E-GPT-48-2.png" alt="Patricia" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div className="space-y-0.5">
                      <h4 className="text-[#1a4d2e] font-black text-sm uppercase tracking-tight">Patricia Guimarães</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">CEO & COMERCIAL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 border-l-[6px] border-[#f4d03f] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
                    <img src="https://patitour.com.br/wp-content/uploads/2025/05/patriciagguimaraes-34.png" alt="Giceli" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div className="space-y-0.5">
                      <h4 className="text-[#1a4d2e] font-black text-sm uppercase tracking-tight">Giceli Zambom</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">COORDENADORA DE OPERAÇÕES</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-full min-h-[450px]">
                <img 
                  src="https://patitour.com.br/wp-content/uploads/2025/06/REESCREVA-SE-99.png" 
                  alt="Aprendizado em sala de aula" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ACESSIBILIDADE - NO BACKGROUND IMAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#051c0f] rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex items-center">
            
            <div className="relative z-10 max-w-2xl space-y-10">
              <div className="inline-block">
                <span className="bg-[#f4d03f] text-[#051c0f] px-5 py-1.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] shadow-lg shadow-yellow-500/10">
                  NOSSO DIFERENCIAL
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold leading-tight">
                Turismo acessível para todos
              </h2>

              <div className="space-y-8 text-white text-base md:text-lg leading-relaxed font-medium">
                <p>
                  Na Patitour, acreditamos que o aprendizado e as experiências devem ser para todos, sem exceções. Por isso, nossa equipe está continuamente se especializando para garantir o sucesso de cada viagem, tornando-a segura, inclusiva e enriquecedora para todos os alunos, independentemente de suas necessidades.
                </p>
                <p>
                  Por que isso é importante? Cada aluno merece viver experiências significativas. Nosso objetivo é tornar isso possível para todos.
                </p>
                <p className="text-white font-bold opacity-100">
                  Juntos, criamos um ambiente onde o aprendizado e a inclusão caminham lado a lado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SUGESTÕES DE ROTEIRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#1a4d2e] uppercase tracking-wider mb-2 font-display">SUGESTÕES DE ROTEIRO</h2>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">SELECIONE UMA CATEGORIA ABAIXO</p>
            <div className="h-[1px] w-full bg-gray-100 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <button 
              onClick={() => setActiveTab?.('maternal')}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 flex flex-col items-start group hover:shadow-2xl transition-all relative overflow-hidden text-left"
            >
              <div className="bg-[#1a4d2e] p-3 rounded-lg mb-8 text-[#f4d03f] group-hover:scale-110 transition-transform">
                <Smile size={24} />
              </div>
              <h3 className="text-[#1a4d2e] font-black text-xl mb-2">Maternal & Jardim</h3>
              <p className="text-gray-400 text-xs font-bold uppercase">Ver roteiros disponíveis</p>
              <ArrowRight className="absolute bottom-6 right-6 text-gray-200 group-hover:text-[#1a4d2e] transition-colors" size={20} />
              <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-[#fef9e7] rounded-full -z-0"></div>
            </button>

            <button 
              onClick={() => setActiveTab?.('fundamental1')}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 flex flex-col items-start group hover:shadow-2xl transition-all relative overflow-hidden text-left"
            >
              <div className="bg-[#1a4d2e] p-3 rounded-lg mb-8 text-[#f4d03f] group-hover:scale-110 transition-transform">
                <Backpack size={24} />
              </div>
              <h3 className="text-[#1a4d2e] font-black text-xl mb-2">Fundamental 1</h3>
              <p className="text-gray-400 text-xs font-bold uppercase">Ver roteiros disponíveis</p>
              <ArrowRight className="absolute bottom-6 right-6 text-gray-200 group-hover:text-[#1a4d2e] transition-colors" size={20} />
              <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-[#fef9e7] rounded-full -z-0"></div>
            </button>

            <button 
              onClick={() => setActiveTab?.('fundamental2')}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 flex flex-col items-start group hover:shadow-2xl transition-all relative overflow-hidden text-left"
            >
              <div className="bg-[#1a4d2e] p-3 rounded-lg mb-8 text-[#f4d03f] group-hover:scale-110 transition-transform">
                <Microscope size={24} />
              </div>
              <h3 className="text-[#1a4d2e] font-black text-xl mb-2">Fundamental 2</h3>
              <p className="text-gray-400 text-xs font-bold uppercase">Ver roteiros disponíveis</p>
              <ArrowRight className="absolute bottom-6 right-6 text-gray-200 group-hover:text-[#1a4d2e] transition-colors" size={20} />
              <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-[#fef9e7] rounded-full -z-0"></div>
            </button>

            <button 
              onClick={() => setActiveTab?.('ensinoMedio')}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 flex flex-col items-start group hover:shadow-2xl transition-all relative overflow-hidden text-left"
            >
              <div className="bg-[#1a4d2e] p-3 rounded-lg mb-8 text-[#f4d03f] group-hover:scale-110 transition-transform">
                <Landmark size={24} />
              </div>
              <h3 className="text-[#1a4d2e] font-black text-xl mb-2">Ensino Médio</h3>
              <p className="text-gray-400 text-xs font-bold uppercase">Ver roteiros disponíveis</p>
              <ArrowRight className="absolute bottom-6 right-6 text-gray-200 group-hover:text-[#1a4d2e] transition-colors" size={20} />
              <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-[#fef9e7] rounded-full -z-0"></div>
            </button>
          </div>

          {/* CONTACT CARD */}
          <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
              <h3 className="text-[#1a4d2e] font-black text-3xl font-display">Entre em Contato!</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Transforme o aprendizado em experiências inesquecíveis. Com a Patitour, cada viagem é uma
                oportunidade única de ampliar horizontes e trazer o conhecimento para a prática.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Entre em contato e descubra como podemos fazer do seu próximo estudo do meio uma
                jornada memorável!
              </p>
            </div>
            <button 
              onClick={() => handleWhatsApp('Olá! Gostaria de conversar sobre como transformar o aprendizado dos meus alunos em experiências práticas.')}
              className="bg-[#1a4d2e] text-white font-black py-4 px-12 rounded-lg flex items-center gap-3 hover:bg-primary-light transition-all shadow-xl shadow-primary/20 text-sm uppercase tracking-widest whitespace-nowrap active:scale-95"
            >
              Falar Agora <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* COMPACT FOOTER - WITH SLOGAN */}
      <footer className="bg-[#0f0f0f] text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Brand & Slogan */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#1a4d2e] p-2 rounded-lg shadow-inner">
                  <Bus size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight font-display">PATI TOUR</h2>
                  <p className="text-[9px] text-[#f4d03f] font-black uppercase tracking-[0.2em] -mt-1">TURISMO PEDAGÓGICO</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 font-medium italic opacity-80 text-center md:text-left max-w-xs md:max-w-none">
                Viagens que educam, momentos que marcam, experiências que transformam.
              </p>
            </div>

            {/* Right: Contact info in one line */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 group cursor-default">
                <MapPin size={16} className="text-[#f4d03f]" />
                <span className="text-[11px] text-gray-400">Americana, SP</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = 'mailto:patricia@patitour.com.br'}>
                <Mail size={16} className="text-[#f4d03f]" />
                <span className="text-[11px] text-gray-400">patricia@patitour.com.br</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleWhatsApp()}>
                <Phone size={16} className="text-[#f4d03f]" />
                <span className="text-[11px] text-gray-400 font-bold">(19) 99747-4575</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <p className="text-[8px] text-gray-600 font-black uppercase tracking-[0.4em]">© 2025 PATI TOUR - EDUCAÇÃO ALÉM DOS LIMITES</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;