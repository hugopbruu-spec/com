import {
  Code2,
  Globe,
  Paintbrush,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import instagramProfileImage from "../assets/hugo-profile-photo.jpeg";

export const SITE_NAME = "Hugo Henrique";
export const SOCIAL_IMAGE_PATH = "/social-cover.svg";
export const EMAIL_ADDRESS = "hugopbruu@gmail.com";
export const EMAIL_HREF =
  "mailto:hugopbruu@gmail.com?subject=Quero%20falar%20sobre%20um%20projeto";
export const WHATSAPP_NUMBER = "554499378366";
export const WHATSAPP_LABEL = "(44) 99378-366";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_HANDLE = "@hugo__henrrique";
export const INSTAGRAM_HREF =
  "https://www.instagram.com/hugo__henrrique?igsh=aTk0eXJudHE5a3M3";
export const PROFILE_IMAGE_URL = instagramProfileImage;

export const NAV_ITEMS = [
  { label: "Quem sou eu", path: "/sobre" },
  { label: "Meus projetos", path: "/projetos" },
  { label: "Formações e certificados", path: "/certificados" },
];

export const CONTACT_CHANNELS = [
  {
    label: "E-mail",
    value: EMAIL_ADDRESS,
    href: EMAIL_HREF,
    icon: "gmail",
    description:
      "Melhor para briefing detalhado, proposta, alinhamento de escopo e conversas com mais contexto.",
    note: "Indicado para projetos completos ou quando a demanda pede mais detalhe.",
    accentClass: "bg-[rgba(105,213,255,0.14)] text-[var(--accent)]",
    hoverClass: "hover:border-[var(--line-strong)]",
  },
  {
    label: "WhatsApp",
    value: WHATSAPP_LABEL,
    href: WHATSAPP_HREF,
    icon: "whatsapp",
    description:
      "Canal mais rápido para iniciar a conversa, validar prioridade e alinhar o primeiro passo.",
    note: "Bom para tirar dúvidas, combinar ritmo e acelerar o início do briefing.",
    accentClass: "bg-[rgba(240,181,106,0.16)] text-[var(--accent-warm)]",
    hoverClass: "hover:border-[rgba(240,181,106,0.22)]",
  },
  {
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    href: INSTAGRAM_HREF,
    icon: "instagram",
    description:
      "Canal social para conhecer melhor o perfil visual e abrir uma troca mais leve antes do briefing formal.",
    note: "Funciona bem como primeiro contato e para acompanhar a linguagem do trabalho.",
    accentClass: "bg-white/[0.08] text-white",
    hoverClass: "hover:border-white/18",
  },
];

export const QUICK_INFO = [
  { label: "Nome", value: "Hugo Henrique" },
  { label: "Atuação", value: "Sites, automações, apps e design digital" },
  { label: "Modelo", value: "Projetos sob medida" },
  { label: "Atendimento", value: "13h às 19h" },
];

export const ABOUT_METRICS = [
  { label: "Foco atual", value: "Sites, automações e ferramentas digitais" },
  { label: "Formato", value: "Projetos personalizados" },
  { label: "Processo", value: "Contato, alinhamento e execução" },
  { label: "Objetivo", value: "Entrega clara, funcional e profissional" },
];

export const ABOUT_BIO = [
  "Sou Hugo Henrique e atuo com desenvolvimento, automação e criação digital. Meu trabalho é transformar ideias em soluções mais claras, funcionais e bem apresentadas, com foco em resultado real e leitura profissional.",
  "Hoje concentro minha atuação em projetos sob medida, principalmente sites, automações, apps, programas e materiais visuais que precisam funcionar melhor no uso diário e transmitir mais credibilidade.",
  "Meu processo começa pela compreensão da necessidade, passa pela definição da melhor estrutura para executar e termina no refinamento da entrega, para que tudo fique consistente, útil e fácil de apresentar.",
];

export const ABOUT_CURRENT_WORK = [
  "Sites e landing pages para apresentar serviços, produtos e perfis com mais clareza, organização e presença digital.",
  "Automações e ferramentas digitais para reduzir tarefas manuais, ganhar tempo e trazer mais consistência aos processos.",
  "Apps, programas e soluções personalizadas para demandas específicas que precisam de uma estrutura própria.",
  "Apoio em identidade visual, design e acabamento digital quando isso fortalece a entrega final.",
];

export const ABOUT_CONTACT_FLOW = [
  "O primeiro contato pode ser feito por WhatsApp, e-mail ou Instagram, de acordo com o canal que fizer mais sentido para você.",
  "Quando a mensagem já traz o tipo de projeto, o objetivo e uma noção de prazo, o alinhamento inicial fica mais rápido e mais claro.",
  "Se a ideia ainda estiver no começo, isso não é um problema. Eu também posso ajudar a organizar a direção certa logo na primeira conversa.",
];

export const EDUCATION_ITEMS = [
  {
    title: "Ensino médio completo",
    description:
      "Base escolar concluída e usada como parte da formação geral apresentada no portfólio.",
  },
  {
    title: "Cursos e estudos em programação",
    description:
      "Estudos em Python, PHP, Java e outras frentes ligadas ao desenvolvimento de software e web.",
  },
  {
    title: "Aprendizado contínuo em criação digital",
    description:
      "Formação complementar em design, criação visual, interfaces e acabamento para projetos digitais.",
  },
];

export const SERVICES = [
  {
    title: "Desenvolvimento de softwares",
    description:
      "Sistemas, painéis e ferramentas sob medida para organizar operação, centralizar informação e tirar o uso diário do improviso.",
    icon: Code2,
    tag: "Software sob medida",
    highlights: ["Painéis internos", "Rotinas organizadas", "Fluxo mais confiável"],
    bestFor:
      "Quando a rotina já pede uma estrutura própria, com acesso claro à informação e menos dependência de controles soltos.",
    result:
      "Uma base mais confiável para a operação, com fluxo claro, menos retrabalho e mais previsibilidade de uso.",
    contactQuery: "software-sob-medida",
  },
  {
    title: "Automações inteligentes",
    description:
      "Automações que retiram peso do trabalho repetitivo, reduzem erro manual e deixam o processo mais rápido e mais estável.",
    icon: Rocket,
    tag: "Eficiência operacional",
    highlights: ["Processos repetitivos", "Menos retrabalho", "Mais velocidade"],
    bestFor:
      "Quando há tarefas recorrentes, repasses manuais ou etapas que atrasam a rotina e merecem virar fluxo automático.",
    result:
      "Fluxos mais estáveis, menos dependentes de tarefa manual e com ganho real de tempo na operação.",
    contactQuery: "automacao-inteligente",
  },
  {
    title: "Sites e landing pages",
    description:
      "Páginas pensadas para apresentar serviços, produtos ou marcas com mais clareza, hierarquia visual e credibilidade.",
    icon: Globe,
    tag: "Presença digital",
    highlights: ["Mensagem mais forte", "Leitura responsiva", "Estrutura de conversão"],
    bestFor:
      "Quando a presença digital precisa parecer mais madura, explicar melhor a oferta e sustentar a decisão de contato.",
    result:
      "Uma presença digital mais bem resolvida, com navegação clara, mensagem mais forte e apresentação profissional.",
    contactQuery: "site-ou-landing-page",
  },
  {
    title: "Apps e programas",
    description:
      "Ferramentas digitais personalizadas para necessidades específicas, com funcionamento consistente, interface objetiva e menos fricção no uso.",
    icon: Wrench,
    tag: "Ferramenta personalizada",
    highlights: ["Desktop ou web", "Fluxo objetivo", "Uso real no centro"],
    bestFor:
      "Quando um processo não cabe bem em ferramentas prontas e precisa de uma solução mais aderente ao contexto.",
    result:
      "Soluções mais ajustadas ao contexto do trabalho, com interface mais direta e menos adaptações improvisadas.",
    contactQuery: "app-ou-programa",
  },
  {
    title: "Design de logos",
    description:
      "Criação de logos e identidades com leitura forte, direção clara e mais consistência na forma como a marca aparece.",
    icon: Paintbrush,
    tag: "Identidade visual",
    highlights: ["Assinatura visual", "Mais consistência", "Presença profissional"],
    bestFor:
      "Quando a marca precisa de uma assinatura visual que passe mais segurança, coerência e lembrança.",
    result:
      "Uma base visual mais segura para comunicar a marca em canais, materiais e apresentações com mais nível.",
    contactQuery: "identidade-visual",
  },
  {
    title: "Edição de fotos",
    description:
      "Tratamento de imagem para elevar qualidade, acabamento e impacto visual em materiais digitais e apresentações.",
    icon: Sparkles,
    tag: "Refino visual",
    highlights: ["Ajuste de imagem", "Mais impacto", "Material mais limpo"],
    bestFor:
      "Quando a imagem precisa acompanhar o mesmo nível do restante da apresentação e não parecer um detalhe esquecido.",
    result:
      "Imagens mais bem resolvidas, coerentes entre si e alinhadas a uma apresentação mais profissional.",
    contactQuery: "edicao-de-fotos",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Levantamento e direção",
    text: "Mapeio necessidade, contexto, restrições e resultado esperado antes de decidir formato, escopo e prioridade.",
    outcome: "Escopo claro, expectativa alinhada e decisão mais segura.",
  },
  {
    step: "02",
    title: "Construção com critério",
    text: "Organizo a solução com foco em funcionamento, leitura visual, navegação e consistência técnica do início ao meio do processo.",
    outcome: "Entrega com método, menos ruído e menos retrabalho.",
  },
  {
    step: "03",
    title: "Refinamento e entrega",
    text: "Ajusto detalhes, valido a leitura final e fortaleço o acabamento para a entrega sair mais clara, sólida e apresentável.",
    outcome: "Resultado mais confiável, mais maduro e mais fácil de sustentar.",
  },
];

export const CERTIFICATE_SUMMARY = [
  "A página separa formação geral, estudos e certificados visuais.",
  "Cada certificado aparece com status claro para não misturar comprovação com registro de estudo.",
  "As imagens continuam disponíveis para visualização dentro do site.",
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "Building Language Models on AWS (Português)",
    issuer: "AWS Training & Certification",
    category: "Certificado oficial",
    status: "verified",
    statusLabel: "Verificado",
    statusClass: "bg-[rgba(105,213,255,0.16)] text-[var(--success)]",
    code: "Concluído em 02 de março de 2026",
    description:
      "Certificado oficial mantido no portfólio como comprovação real de formação na área de modelos de linguagem.",
    note:
      "Este item pode ser lido como comprovante oficial publicado dentro do portfólio.",
    recipient: "HUGO HENRIQUE",
    heading: "Completion Certificate",
    intro: "Awarded to",
    body: "Building Language Models on AWS (Português)",
    footerLine1: "Michelle Vaz",
    footerLine2: "Managing Director, AWS Training & Certification",
    completedAt: "Completed: March 02, 2026",
    variant: "certificate",
    badge: "AWS",
    actionLabel: "Visualizar certificado",
  },
  {
    id: 2,
    title: "Programação de Sites com Java, PHP e Python",
    issuer: "Acervo do portfólio",
    category: "Trilha em atualização",
    status: "updating",
    statusLabel: "Acervo em atualização",
    statusClass: "bg-[rgba(240,181,106,0.16)] text-[var(--accent-warm)]",
    code: "Comprovante visual oficial ainda não publicado na página",
    description:
      "Registro de formação mantido com transparência. O tema continua relevante para a base técnica, mas o comprovante oficial ainda não entrou no acervo.",
    note:
      "Este item aparece como registro de estudo e não deve ser interpretado como certificado oficial publicado.",
    recipient: "HUGO HENRIQUE",
    heading: "Training Record",
    intro: "Tracked for",
    body: "Programação de Sites com Java, PHP e Python",
    footerLine1: "Portfolio Record",
    footerLine2: "Official certificate asset pending publication",
    completedAt: "Completed: September 22, 2025",
    variant: "record",
    badge: "Formação",
    actionLabel: "Visualizar certificado",
  },
  {
    id: 3,
    title: "Design e Criação Visual",
    issuer: "Acervo do portfólio",
    category: "Trilha em atualização",
    status: "updating",
    statusLabel: "Acervo em atualização",
    statusClass: "bg-[rgba(240,181,106,0.16)] text-[var(--accent-warm)]",
    code: "Comprovante visual oficial ainda não publicado na página",
    description:
      "Trilha mantida no portfólio para mostrar continuidade de estudo em criação visual, com status claro enquanto o comprovante oficial não é publicado.",
    note:
      "Este item entra como base de formação em atualização e não como certificado oficial verificado.",
    recipient: "HUGO HENRIQUE",
    heading: "Training Record",
    intro: "Tracked for",
    body: "Design e Criação Visual",
    footerLine1: "Portfolio Record",
    footerLine2: "Official certificate asset pending publication",
    completedAt: "Completed: January 16, 2026",
    variant: "record",
    badge: "Formação",
    actionLabel: "Visualizar certificado",
  },
];

export const CONTACT_BRIEF_FIELDS = [
  {
    id: "name",
    label: "Seu nome",
    placeholder: "Como você gostaria de se apresentar?",
    type: "text",
  },
  {
    id: "projectType",
    label: "Tipo de projeto",
    placeholder: "Ex.: landing page, automação, sistema interno",
    type: "text",
  },
  {
    id: "goal",
    label: "Objetivo principal",
    placeholder: "Qual problema você quer resolver ou qual resultado quer alcançar?",
    type: "textarea",
  },
  {
    id: "deadline",
    label: "Prazo ideal",
    placeholder: "Ex.: 2 semanas, este mês, sem urgência",
    type: "text",
  },
  {
    id: "budget",
    label: "Faixa de investimento",
    placeholder: "Ex.: ainda vou definir, tenho uma faixa inicial",
    type: "text",
  },
];

export const CONTACT_EXPECTATIONS = [
  "Quanto mais contexto vier na primeira mensagem, mais objetiva fica a resposta.",
  "Prazo, tipo de projeto e resultado esperado ajudam a acelerar o briefing.",
  "Projetos privados podem ser descritos com segurança no contato direto.",
];

export const CONTACT_RESPONSE_FLOW = [
  {
    step: "01",
    title: "Leitura do contexto",
    text: "A primeira resposta busca entender o objetivo, o melhor formato de entrega e o nível de prioridade.",
  },
  {
    step: "02",
    title: "Definição de caminho",
    text: "Quando fizer sentido, o projeto é traduzido para um escopo inicial, com frente principal e próximo passo.",
  },
  {
    step: "03",
    title: "Alinhamento de início",
    text: "Com a direção mais clara, fica mais simples combinar ritmo, canal e aprofundamento do briefing.",
  },
];
