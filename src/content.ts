// Todo el contenido de la web en un solo lugar, en español e inglés.
export type Lang = 'es' | 'en';
export type T = Record<Lang, string>;

export const links = {
  email: 'anlramirezs11@gmail.com',
  github: 'https://github.com/grumysh',
  gitlab: 'https://gitlab.com/grumysh',
  linkedin: 'https://www.linkedin.com/in/grumysh',
  x: 'https://x.com/Grumysh',
  cv: './cv/Andrea_Ramirez_CV.pdf',
};

export const ui = {
  nav: {
    about: { es: 'Sobre mí', en: 'About' },
    projects: { es: 'Proyectos', en: 'Projects' },
    career: { es: 'Trayectoria', en: 'Career' },
    awards: { es: 'Premios', en: 'Awards' },
    badges: { es: 'Certificaciones', en: 'Certifications' },
    contact: { es: 'Contacto', en: 'Contact' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
  },
  loading: { es: 'Cargando a Grumysh…', en: 'Loading Grumysh…' },
  bubble: {
    hero: { es: '¡Hola! ✦', en: 'Hi there! ✦' },
    about: { es: 'Te cuento un poco…', en: 'Let me tell you…' },
    projects: { es: 'Mira lo que construí', en: "Look what I've built" },
    career: { es: '¡Subiendo nivel!', en: 'Leveling up!' },
    awards: { es: '¡Yay!', en: 'Yay!' },
    badges: { es: 'Siempre aprendiendo', en: 'Always learning' },
    contact: { es: '¿Hablamos?', en: "Let's talk?" },
    footer: { es: 'Zzz…', en: 'Zzz…' },
  } as Record<string, T>,
};

export const hero = {
  hello: { es: '¡Hola! Soy', en: "Hi! I'm" },
  name: 'Andrea Ramírez',
  role: {
    es: 'Ingeniera de Software Full Stack & Tech Lead',
    en: 'Full Stack Software Engineer & Tech Lead',
  },
  lead: {
    es: 'Llevo más de 10 años convirtiendo problemas complejos en productos listos para producción: arquitectura, APIs, frontend, nube y Web3. Me encantan los videojuegos y las cosas hechas con cuidado.',
    en: 'For 10+ years I have been turning complex problems into production-ready products: architecture, APIs, frontend, cloud and Web3. I love games and things made with care.',
  },
  available: {
    es: 'Disponible para empleo remoto y proyectos freelance',
    en: 'Open to remote roles and freelance projects',
  },
  ctaProjects: { es: 'Ver proyectos', en: 'See projects' },
  ctaContact: { es: 'Hablemos', en: "Let's talk" },
  location: { es: 'Bogotá, Colombia · Remoto', en: 'Bogotá, Colombia · Remote' },
};

export const stats: { value: string; label: T; color: string }[] = [
  { value: '10+', label: { es: 'años construyendo software', en: 'years building software' }, color: 'pink' },
  { value: 'USD 85K', label: { es: 'financiados por The Sandbox DAO', en: 'funded by The Sandbox DAO' }, color: 'mint' },
  { value: '~150K', label: { es: 'jugadores en New Festival Town', en: 'players on New Festival Town' }, color: 'purple' },
  { value: '~20', label: { es: 'personas en el estudio que cofundé', en: 'people at the studio I co-founded' }, color: 'butter' },
];

export const about = {
  eyebrow: { es: 'Sobre mí', en: 'About me' },
  title: { es: 'Ingeniera de día, artesana siempre', en: 'Engineer by day, maker always' },
  body: [
    {
      es: 'Soy Ingeniera de Sistemas de la Universidad Distrital y cofundadora de Ashara Studios. Me muevo cómoda en todo el stack: diseño el modelo de datos, construyo la API, armo el frontend y lo despliego en AWS. Como Tech Lead he coordinado equipos de artistas, diseñadores e ingenieros.',
      en: 'I am a Systems Engineer from Universidad Distrital and co-founder of Ashara Studios. I am comfortable across the whole stack: I design the data model, build the API, craft the frontend and ship it on AWS. As Tech Lead I have coordinated teams of artists, designers and engineers.',
    },
    {
      es: 'Hoy trabajo a diario con agentes de IA (Claude Code, Copilot, Gemini) y me estoy especializando en integrarlos de forma headless en mis pipelines.',
      en: 'Today I work daily with AI agents (Claude Code, Copilot, Gemini) and I am specializing in running them headless inside my pipelines.',
    },
  ],
  wordsTitle: { es: 'Tres palabras que me describen', en: 'Three words that describe me' },
  words: [
    { word: { es: 'Responsable', en: 'Responsible' }, note: { es: 'Si me comprometo, se entrega.', en: 'If I commit, it ships.' }, color: 'pink' },
    { word: { es: 'Cuidadosa', en: 'Careful' }, note: { es: 'Los detalles importan, en el código y en el bordado.', en: 'Details matter, in code and in embroidery.' }, color: 'purple' },
    { word: { es: 'Realista', en: 'Realistic' }, note: { es: 'Planes que se pueden cumplir y números honestos.', en: 'Plans that can be met and honest numbers.' }, color: 'mint' },
  ],
  hobbiesTitle: { es: 'Fuera del código', en: 'Away from the keyboard' },
  hobbiesLead: {
    es: 'Cuando cierro el editor sigo construyendo cosas, solo que con las manos. Por eso esta web está hecha de cuentas, puntadas y parches.',
    en: 'When I close the editor I keep building things, just with my hands. That is why this site is made of beads, stitches and patches.',
  },
  hobbies: [
    // en orden de lo que más hago
    { id: 'embroidery', label: { es: 'Bordar en punto de cruz', en: 'Cross-stitch' }, note: { es: 'Puntada a puntada, sin afán.', en: 'Stitch by stitch, no rush.' } },
    { id: 'sew', label: { es: 'Coser', en: 'Sewing' }, note: { es: 'Si lo imagino, lo armo.', en: 'If I can picture it, I can make it.' } },
    { id: 'paint', label: { es: 'Pintar cerámicas', en: 'Painting ceramics' }, note: { es: 'Color y calma lejos de la pantalla.', en: 'Color and calm away from screens.' } },
    { id: 'voxel', label: { es: 'Voxel art', en: 'Voxel art' }, note: { es: 'Por puro gusto. Así nació Grumysh.', en: 'Just for fun. That is how Grumysh was born.' } },
    { id: 'beads', label: { es: 'Hama beads', en: 'Hama beads' }, note: { es: 'Pixel art cuenta por cuenta.', en: 'Pixel art, one bead at a time.' } },
    { id: 'anime', label: { es: 'Anime', en: 'Anime' }, note: { es: 'Me gusta el anime.', en: 'I like anime.' } },
  ],
  board: {
    title: { es: 'Mi tablero de hama', en: 'My hama pegboard' },
    hint: { es: 'Elige un color y pon cuentas. Arrastra para pintar.', en: 'Pick a color and place beads. Drag to paint.' },
    clear: { es: 'Vaciar', en: 'Clear' },
    reset: { es: 'Onigiri', en: 'Onigiri' },
    eraser: { es: 'Borrador', en: 'Eraser' },
  },
  stackTitle: { es: 'Mi caja de herramientas', en: 'My toolbox' },
  stack: [
    { group: { es: 'Backend', en: 'Backend' }, items: ['Node.js', 'Express', 'TypeScript', 'Python', 'REST', 'Serverless'] },
    { group: { es: 'Frontend', en: 'Frontend' }, items: ['React', 'Redux', 'Vite', 'Angular', 'Vue / Nuxt', 'Three.js'] },
    { group: { es: 'Datos', en: 'Data' }, items: ['MongoDB', 'PostgreSQL', 'MariaDB', 'SQL'] },
    { group: { es: 'Nube y DevOps', en: 'Cloud & DevOps' }, items: ['AWS EC2 · ECS · ECR · S3', 'Secrets Manager', 'Docker', 'CI/CD GitLab · GitHub'] },
    { group: { es: 'IA', en: 'AI' }, items: ['Claude Code', 'GitHub Copilot', 'Gemini', 'Tesseract.js OCR'] },
    { group: { es: 'Web3 y juegos', en: 'Web3 & games' }, items: ['thirdweb', 'Polygon', 'Smart contracts', 'Unity', 'Phaser', 'VoxEdit'] },
  ],
};

export type Project = {
  id: string;
  name: string | T;
  role: T;
  period: T;
  summary: T;
  highlights: T[];
  stack: string[];
  metric?: T;
  image?: string;
  links?: { label: T; href: string }[];
  color: string;
};

export const projectsIntro = {
  eyebrow: { es: 'Proyectos', en: 'Projects' },
  title: { es: 'Cosas que construí', en: 'Things I built' },
  nextTitle: { es: '¿El próximo proyecto?', en: 'The next project?' },
  nextText: { es: 'Podría ser el tuyo. Cuéntame qué quieres construir.', en: 'It could be yours. Tell me what you want to build.' },
  nextCta: { es: 'Escríbeme', en: 'Get in touch' },
};

export const projects: Project[] = [
  {
    id: 'chrysalis',
    name: 'Chrysalis Quest',
    role: { es: 'Tech Lead · Arquitectura y full stack', en: 'Tech Lead · Architecture & full stack' },
    period: { es: '2024 – 2025', en: '2024 – 2025' },
    summary: {
      es: 'Plataforma multi-creador de misiones, recompensas y métricas para las comunidades de The Sandbox. Presenté la propuesta (SIP-24) ante The Sandbox DAO y obtuvo USD 85.000 de financiación.',
      en: 'Multi-creator platform for missions, rewards and metrics for The Sandbox communities. I pitched the proposal (SIP-24) to The Sandbox DAO and it secured USD 85,000 in funding.',
    },
    highlights: [
      {
        es: 'Arquitectura, modelo de datos e integración Web3 con transacciones firmadas por las billeteras de los creadores (Polygon).',
        en: 'Architecture, data model and Web3 integration with transactions signed by creators’ wallets (Polygon).',
      },
      {
        es: 'Validación automática de misiones con OCR: aprueba al instante, descarta imágenes inválidas y escala los casos dudosos.',
        en: 'Automatic mission validation with OCR: instant approvals, invalid images rejected, doubtful cases escalated.',
      },
      {
        es: 'Su versión inicial llevó al estudio del 8.º al 2.º lugar en el Builder Challenge de The Sandbox.',
        en: 'Its first version took the studio from 8th to 2nd place in The Sandbox Builder Challenge.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'MongoDB', 'Polygon', 'Tesseract.js', 'AWS ECS'],
    metric: { es: 'USD 85K financiados', en: 'USD 85K funded' },
    image: './img/proyectos/chrysalis-quest.jpg',
    links: [
      { label: { es: 'Propuesta SIP-24', en: 'SIP-24 proposal' }, href: 'https://forum.sandboxdao.com/t/sip-24-chrysalis-quest-the-sandbox-communities-platform/1891' },
      { label: { es: 'Videos de la plataforma', en: 'Platform videos' }, href: 'https://drive.google.com/drive/u/1/folders/1Gfi_X2mejCde4APJ23wOOcws71UJt8xm' },
      { label: { es: 'Validación con IA', en: 'AI validation demo' }, href: 'https://x.com/Grumysh/status/1900385597883138414' },
    ],
    color: 'pink',
  },
  {
    id: 'nft',
    name: 'New Festival Town',
    role: { es: 'Backend & infraestructura', en: 'Backend & infrastructure' },
    period: { es: '2024 – 2025', en: '2024 – 2025' },
    summary: {
      es: 'Juego como servicio publicado en MiniPay. Desplegué la infraestructura del backend y la base de datos.',
      en: 'Game-as-a-service published on MiniPay. I deployed the backend infrastructure and database.',
    },
    highlights: [],
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Cloud'],
    metric: { es: '~150.000 jugadores', en: '~150,000 players' },
    links: [{ label: { es: 'Jugar', en: 'Play' }, href: 'https://nft.asharastudios.com/desktop/index.html' }],
    color: 'purple',
  },
  {
    id: 'tom',
    name: 'Tower of Myths',
    role: { es: 'Web, API y world building', en: 'Web, API & world building' },
    period: { es: '2022 – 2024', en: '2022 – 2024' },
    summary: {
      es: 'El juego más grande de The Sandbox por tamaño de mapa y contenido narrativo. Hice su web con conexión a contratos inteligentes, una API serverless alimentada desde Notion y el diseño de sus entornos.',
      en: 'The largest game in The Sandbox by map size and narrative content. I built its website with smart-contract integration, a serverless API fed from Notion, and designed its environments.',
    },
    highlights: [],
    stack: ['React', 'thirdweb', 'Serverless', 'Notion API', 'Game Maker'],
    metric: { es: 'Pico de 20.000 jugadores', en: 'Peak of 20,000 players' },
    links: [{ label: { es: 'Ver en The Sandbox', en: 'See it on The Sandbox' }, href: 'https://www.sandbox.game/en/experiences/tower-of-myths/0266d75f-a62d-473b-b219-7d567d3adeb5/page/' }],
    color: 'mint',
  },
  {
    id: 'portal',
    name: { es: 'Portal interno', en: 'Internal portal' },
    role: { es: 'Full stack · v1 sola, v2 con Claude Code', en: 'Full stack · solo v1, v2 with Claude Code' },
    period: { es: '2025', en: '2025' },
    summary: {
      es: 'Portal administrativo con login corporativo y permisos por rol: vacaciones, nómina, certificados, newsletters y métricas de redes. Construí la primera versión yo sola; la segunda la desarrollé con Claude Code, con pruebas unitarias y despliegue en AWS ECS.',
      en: 'Admin portal with corporate login and role-based permissions: time off, payroll, certificates, newsletters and social metrics. I built the first version on my own; the second one I developed with Claude Code, unit-tested and deployed on AWS ECS.',
    },
    highlights: [],
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'AWS ECS', 'Secrets Manager'],
    color: 'coral',
  },
  {
    id: 'games',
    name: { es: 'Juegos web', en: 'Web games' },
    role: { es: 'Juegos web con IA', en: 'AI-assisted web games' },
    period: { es: '2025 – hoy', en: '2025 – now' },
    summary: {
      es: 'Juegos web para YouTube Playables y la landing del juego Pawnie, desarrollados con Claude Code.',
      en: 'Web games for YouTube Playables and the landing page for Pawnie, built with Claude Code.',
    },
    highlights: [],
    stack: ['TypeScript', 'Phaser', 'Vite'],
    links: [
      { label: { es: 'Professor Neko Paw-doku', en: 'Professor Neko Paw-doku' }, href: 'https://asharastudios.itch.io/professor-neko-paw-doku' },
      { label: { es: 'Nine Rush', en: 'Nine Rush' }, href: 'https://asharastudios.itch.io/nine-rush' },
      { label: { es: 'Pawnie', en: 'Pawnie' }, href: 'https://pawnie.asharastudios.com/' },
    ],
    color: 'butter',
  },
  {
    id: 'alerta',
    name: 'Alerta a la Obra',
    role: { es: 'Base de datos & frontend', en: 'Database & frontend' },
    period: { es: '2018', en: '2018' },
    summary: {
      es: 'Plataforma ciudadana para seguir las obras públicas del país: presupuesto, retrasos y estado de entrega, con contratos de SECOP II actualizados cada semana desde datos.gov.co.',
      en: 'Civic platform to track public works across Colombia: budget, delays and delivery status, using SECOP II contracts refreshed weekly from datos.gov.co.',
    },
    highlights: [],
    stack: ['MariaDB', 'JavaScript', 'Open data'],
    metric: { es: 'Ganador Hackatón Anticorrupción', en: 'Anti-corruption Hackathon winner' },
    color: 'pink',
  },
];

export const careerIntro = {
  eyebrow: { es: 'Trayectoria', en: 'Career' },
  title: { es: 'Subiendo de nivel desde 2013', en: 'Leveling up since 2013' },
};

export const career: { period: string; role: T; org: string; note: T; current?: boolean }[] = [
  {
    period: '2024 —',
    role: { es: 'Cofundadora & Tech Lead', en: 'Co-founder & Tech Lead' },
    org: 'Ashara Studios',
    note: {
      es: 'Lidero todo el desarrollo técnico: arquitectura, datos, nube e integración Web3.',
      en: 'I lead all technical development: architecture, data, cloud and Web3 integration.',
    },
    current: true,
  },
  {
    period: '2022 – 2024',
    role: { es: 'Desarrolladora Web & Level Designer', en: 'Web Developer & Level Designer' },
    org: 'Ashara Studios',
    note: { es: 'Webs Web3, APIs serverless y world building en The Sandbox.', en: 'Web3 sites, serverless APIs and world building in The Sandbox.' },
  },
  {
    period: '2021 – 2022',
    role: { es: 'Cofundadora, COO & Dev', en: 'Co-founder, COO & Dev' },
    org: 'Chrysalis Guild',
    note: {
      es: '~300 jugadores, 17 personas y ~USD 1M en activos. Automaticé pagos y operaciones.',
      en: '~300 players, 17 people and ~USD 1M in assets. I automated payouts and operations.',
    },
  },
  {
    period: '2020 – 2023',
    role: { es: 'Voxel Artist & Team Leader', en: 'Voxel Artist & Team Leader' },
    org: 'The Sandbox',
    note: { es: 'Activos voxel para el Marketplace; lideré un equipo de 6 artistas.', en: 'Voxel assets for the Marketplace; led a team of 6 artists.' },
  },
  {
    period: '2020 – 2021',
    role: { es: 'Desarrolladora Frontend', en: 'Frontend Developer' },
    org: 'Banco de Occidente',
    note: { es: 'Angular 8 y TypeScript en el sector financiero, con pruebas unitarias.', en: 'Angular 8 and TypeScript in banking, with unit tests.' },
  },
  {
    period: '2019 – 2020',
    role: { es: 'Ingeniera de Software', en: 'Software Engineer' },
    org: 'Universidad Distrital',
    note: { es: 'Gestión contractual sobre microservicios en AWS.', en: 'Contract management apps on AWS microservices.' },
  },
  {
    period: '2018 – 2019',
    role: { es: 'Ingeniera de Software', en: 'Software Engineer' },
    org: 'XueColombia',
    note: { es: 'Tecnología cívica con datos abiertos del Estado.', en: 'Civic tech built on government open data.' },
  },
  {
    period: '2017 – 2018',
    role: { es: 'Cofundadora & Líder Web', en: 'Co-founder & Web Lead' },
    org: 'Ashara Studios',
    note: { es: 'El estudio creció a ~20 personas; ~10 webs y apps entregadas.', en: 'The studio grew to ~20 people; ~10 sites and apps shipped.' },
  },
  {
    period: '2013 – 2016',
    role: { es: 'Desarrolladora freelance', en: 'Freelance developer' },
    org: 'ARC Abogados · Aspencajanal',
    note: { es: 'Sistemas de gestión con Java, Node.js y PostgreSQL.', en: 'Management systems with Java, Node.js and PostgreSQL.' },
  },
];

export const awardsIntro = {
  eyebrow: { es: 'Premios y eventos', en: 'Awards & events' },
  title: { es: 'Momentos de los que estoy orgullosa', en: 'Moments I am proud of' },
  award: { es: 'Premio', en: 'Award' },
  prev: { es: 'Anteriores', en: 'Previous' },
  next: { es: 'Siguientes', en: 'Next' },
  expo: { es: 'Expositores', en: 'Exhibitors' },
};

export const awards: {
  kind: 'award' | 'expo';
  year: string;
  title: T;
  text: T;
  image?: string;
  imagePosition?: string;
  href?: string;
}[] = [
  {
    kind: 'award',
    year: '2025',
    title: { es: 'USD 85.000 de The Sandbox DAO', en: 'USD 85,000 from The Sandbox DAO' },
    text: { es: 'Financiación aprobada para construir Chrysalis Quest (SIP-24).', en: 'Funding approved to build Chrysalis Quest (SIP-24).' },
    image: './img/proyectos/chrysalis-quest.jpg',
    imagePosition: '100% 100%',
    href: 'https://forum.sandboxdao.com/t/sip-24-chrysalis-quest-the-sandbox-communities-platform/1891',
  },
  {
    kind: 'award',
    year: '2018',
    title: { es: 'Ganadoras · Hackatón Anticorrupción', en: 'Winners · Anti-corruption Hackathon' },
    text: { es: 'Colombia 4.0, con el proyecto Alerta a la Obra.', en: 'Colombia 4.0, with the Alerta a la Obra project.' },
    image: './img/eventos/anticorrupcion.jpg',
    href: 'https://mintic.gov.co/portal/604/w3-article-80376.html',
  },
  {
    kind: 'award',
    year: '2018',
    title: { es: 'Ganadoras · Hurify Challenge, AngelHack Bogotá', en: 'Winners · Hurify Challenge, AngelHack Bogotá' },
    text: { es: 'Un wearable IoT para conectar personas en bares y fiestas.', en: 'An IoT wearable to connect people at bars and parties.' },
    image: './img/eventos/angelhack.jpg',
    href: 'https://www.facebook.com/p4sco/videos/1919243428140467/',
  },
  {
    kind: 'expo',
    year: '2019',
    title: { es: 'Unity Developer Day · Un Océano Brillante', en: 'Unity Developer Day · Un Océano Brillante' },
    text: { es: 'Expusimos el prototipo de nuestro juego, que luego ganaría Crea Digital.', en: 'We exhibited our game prototype, which later won Crea Digital.' },
    image: './img/eventos/unity.jpg',
    href: 'https://www.youtube.com/watch?v=f3AEtVmAAuA',
  },
  {
    kind: 'award',
    year: '2017',
    title: { es: 'Top 8 nacional · Innova6k', en: 'National Top 8 · Innova6k' },
    text: { es: 'Copa Nacional de Innovación: top 6 de Bogotá y top 8 de Colombia.', en: 'National Innovation Cup: top 6 in Bogotá and top 8 in Colombia.' },
    image: './img/eventos/innova6k.jpg',
    href: 'https://www.youtube.com/watch?v=PqW6JLPcFYs',
  },
  {
    kind: 'expo',
    year: '2017',
    title: { es: 'Unity Developer Day & Made With Unity · Exorcist', en: 'Unity Developer Day & Made With Unity · Exorcist' },
    text: {
      es: 'Expusimos nuestro juego Exorcist, que se lanzó en Google Play y llevó a un contrato de USD 45.000 con Nutaku.',
      en: 'We exhibited our game Exorcist, which launched on Google Play and led to a USD 45,000 deal with Nutaku.',
    },
    image: './img/eventos/hero.jpg',
    href: 'https://www.youtube.com/watch?v=3r41l1CJpt8',
  },
];

// Del más reciente al más antiguo; dentro del mismo año se respeta el orden de arriba
export const awardsByDate = [...awards].sort((a, b) => b.year.localeCompare(a.year));

export const badgesIntro = {
  title: { es: 'Certificaciones y cursos', en: 'Certifications & courses' },
  close: { es: 'Cerrar', en: 'Close' },
  learning: { es: 'Aprendiendo ahora', en: 'Learning now' },
  showAll: { es: 'Ver todas', en: 'See all' },
  showLess: { es: 'Ver menos', en: 'See less' },
  verify: { es: 'Verificar en Credly', en: 'Verify on Credly' },
};

// Cada color representa un área; así se lee de un vistazo en qué me he formado
export const badgeCategories = {
  ai: { label: { es: 'IA y datos', en: 'AI & data' }, color: 'mint' },
  web: { label: { es: 'Frontend y web', en: 'Frontend & web' }, color: 'butter' },
  code: { label: { es: 'Programación y fundamentos', en: 'Programming & fundamentals' }, color: 'purple' },
  skills: { label: { es: 'Metodologías y habilidades', en: 'Methods & skills' }, color: 'coral' },
  brand: { label: { es: 'Marca, comunidad y emprendimiento', en: 'Brand, community & startups' }, color: 'pink' },
  web3: { label: { es: 'Web3 y videojuegos', en: 'Web3 & games' }, color: 'sky' },
} satisfies Record<string, { label: T; color: string }>;

export type BadgeCategory = keyof typeof badgeCategories;

export type BadgeItem = {
  title: T;
  issuer: string;
  category: BadgeCategory;
  // fecha de aprobación (AAAA-MM-DD) para ordenar; year es lo que se muestra
  date?: string;
  year?: string;
  image?: string;
  // insignia cuadrada (Credly) en lugar de un diploma
  square?: boolean;
  link?: string;
  glyph: string;
  now?: boolean;
  // las destacadas se ven siempre; el resto aparece con "Ver todas"
  featured?: boolean;
};

const CERT = './img/certificados/';

export const badges: BadgeItem[] = [
  { title: { es: 'Agentes de IA con Claude Code (headless)', en: 'AI agents with Claude Code (headless)' }, issuer: 'Claude Code', category: 'ai', glyph: 'AI', now: true, featured: true },
  { title: { es: 'IA para Todas', en: 'AI for All Women' }, issuer: 'AWS Entrena Latinas · Laboratoria', category: 'ai', date: '2026-10-24', year: '2026', image: `${CERT}ia-para-todas.jpg`, glyph: 'IA', featured: true },
  { title: { es: 'Lifelong Learning 2026', en: 'Lifelong Learning 2026' }, issuer: 'Certiprof', category: 'skills', date: '2026-04-23', year: '2026', image: `${CERT}credly-lifelong-2026.png`, square: true, link: 'https://www.credly.com/badges/9ba33be7-11a4-42cb-95c1-2f56dffd7f60', glyph: 'LL', featured: true },
  { title: { es: 'MongoDB Overview: Core Concepts and Architecture', en: 'MongoDB Overview: Core Concepts and Architecture' }, issuer: 'MongoDB', category: 'ai', date: '2026-03-05', year: '2026', image: `${CERT}credly-mongodb.png`, square: true, link: 'https://www.credly.com/badges/dedcd00b-8f5b-49e9-961d-9ad3d2a928a6', glyph: 'DB', featured: true },
  { title: { es: 'Pensamiento lógico: datos, estructuras y funciones', en: 'Logical thinking: data, structures and functions' }, issuer: 'Platzi', category: 'code', date: '2023-02-02', year: '2023', image: `${CERT}platzi-pensamiento-logico-estructuras.jpg`, glyph: 'PL', featured: true },
  { title: { es: 'CSS Grid básico', en: 'CSS Grid basics' }, issuer: 'Platzi', category: 'web', date: '2023-01-30', year: '2023', image: `${CERT}platzi-css-grid.jpg`, glyph: 'GRID', featured: true },
  { title: { es: 'Discord: comunicación para comunidades', en: 'Discord: community communication' }, issuer: 'Platzi', category: 'brand', date: '2022-10-28', year: '2022', image: `${CERT}platzi-discord.jpg`, glyph: 'DC' },
  { title: { es: 'Introducción a las startups blockchain', en: 'Intro to blockchain startups' }, issuer: 'Platzi', category: 'web3', date: '2022-10-22', year: '2022', image: `${CERT}platzi-startups-blockchain.jpg`, glyph: 'BC' },
  { title: { es: 'Encontrar y evaluar ideas para emprender', en: 'Finding and evaluating business ideas' }, issuer: 'Platzi', category: 'brand', date: '2022-10-22', year: '2022', image: `${CERT}platzi-ideas-emprender.jpg`, glyph: 'IDEA' },
  { title: { es: 'Marca personal', en: 'Personal branding' }, issuer: 'Platzi · Apps.co', category: 'brand', date: '2022-09-28', year: '2018 · 2022', image: `${CERT}platzi-marca-personal.jpg`, glyph: 'MP' },
  { title: { es: 'Fundamentos de Ingeniería de Software', en: 'Software Engineering Fundamentals' }, issuer: 'Platzi', category: 'code', date: '2022-09-27', year: '2022', image: `${CERT}platzi-fundamentos-ingenieria-software.jpg`, glyph: 'SE', featured: true },
  { title: { es: 'Pensamiento lógico: algoritmos y diagramas de flujo', en: 'Logical thinking: algorithms and flowcharts' }, issuer: 'Platzi', category: 'code', date: '2022-09-27', year: '2022', image: `${CERT}platzi-pensamiento-logico-algoritmos.jpg`, glyph: 'ALG', featured: true },
  { title: { es: 'Computación básica', en: 'Computer basics' }, issuer: 'Platzi', category: 'code', date: '2022-09-27', year: '2022', image: `${CERT}platzi-computacion-basica.jpg`, glyph: 'PC' },
  { title: { es: 'Fundamentos de contenido en YouTube', en: 'YouTube content fundamentals' }, issuer: 'Platzi', category: 'brand', date: '2022-09-27', year: '2022', image: `${CERT}platzi-youtube.jpg`, glyph: 'YT' },
  { title: { es: 'Inglés básico A1: conversaciones cortas', en: 'Basic English A1: short conversations' }, issuer: 'Platzi', category: 'skills', date: '2022-09-27', year: '2022', image: `${CERT}platzi-ingles-a1.jpg`, glyph: 'EN' },
  { title: { es: 'Programación básica', en: 'Programming basics' }, issuer: 'Platzi · Apps.co', category: 'code', date: '2022-09-14', year: '2018 · 2020 · 2022', image: `${CERT}platzi-programacion-basica.jpg`, glyph: '{ }' },
  { title: { es: 'Prework: entorno de desarrollo en Windows', en: 'Prework: Windows dev environment' }, issuer: 'Platzi', category: 'code', date: '2022-09-14', year: '2022', image: `${CERT}platzi-prework-windows.jpg`, glyph: 'WIN' },
  { title: { es: 'Introducción a la web: historia de internet', en: 'Intro to the web: history of the internet' }, issuer: 'Platzi', category: 'web', date: '2022-09-13', year: '2022', image: `${CERT}platzi-historia-internet.jpg`, glyph: 'WWW' },
  { title: { es: 'Marca personal: crea tu blog desde cero', en: 'Personal branding: build your blog from scratch' }, issuer: 'Platzi', category: 'brand', date: '2022-06-28', year: '2022', image: `${CERT}platzi-blog-personal.jpg`, glyph: 'BLOG' },
  { title: { es: 'Creación de NFTs', en: 'Creating NFTs' }, issuer: 'Platzi', category: 'web3', date: '2021-08-27', year: '2021', image: `${CERT}platzi-nfts.jpg`, glyph: 'NFT', featured: true },
  { title: { es: 'Scrum Foundation Professional Certification (SFPC™)', en: 'Scrum Foundation Professional Certification (SFPC™)' }, issuer: 'Certiprof', category: 'skills', date: '2020-08-02', year: '2020', image: `${CERT}credly-scrum-sfpc.png`, square: true, link: 'https://www.credly.com/badges/6353510f-d72f-46fd-920a-9b23281b7f1d', glyph: 'SFPC', featured: true },
  { title: { es: 'Curso básico de Vue.js', en: 'Vue.js basics' }, issuer: 'Platzi', category: 'web', date: '2020-07-08', year: '2020', image: `${CERT}platzi-vuejs.jpg`, glyph: 'VUE', featured: true },
  { title: { es: 'Desarrollo web online', en: 'Online web development' }, issuer: 'Platzi', category: 'web', date: '2020-06-26', year: '2020', image: `${CERT}platzi-desarrollo-web.jpg`, glyph: 'WEB', featured: true },
  { title: { es: 'Git y GitHub profesional', en: 'Professional Git & GitHub' }, issuer: 'Platzi · Apps.co', category: 'code', date: '2018-08-10', year: '2018', image: `${CERT}platzi-git-github.jpg`, glyph: 'GIT', featured: true },
  { title: { es: 'C# Tutorial', en: 'C# Tutorial' }, issuer: 'SoloLearn', category: 'code', date: '2018-02-05', year: '2018', image: `${CERT}2018_c.jpg`, glyph: 'C#' },
  { title: { es: 'Derecho de autor para el sector creativo', en: 'Copyright for the creative sector' }, issuer: 'CERLALC · UNESCO', category: 'brand', date: '2017-10-12', year: '2017', glyph: 'CR' },
  { title: { es: 'Fundamentos de CSS', en: 'CSS Fundamentals' }, issuer: 'SoloLearn', category: 'web', date: '2017-08-19', year: '2017', image: `${CERT}2017_css.jpg`, glyph: 'CSS' },
  { title: { es: 'The Hour of Code', en: 'The Hour of Code' }, issuer: 'Code.org', category: 'code', date: '2017-01-01', year: '2017', image: `${CERT}2017_minecraft.jpg`, glyph: '</>' },
  { title: { es: 'Unreal Engine y diseño de videojuegos', en: 'Unreal Engine & game design' }, issuer: 'Tecnoparque SENA', category: 'web3', date: '2015-07-09', year: '2015', glyph: 'UE', featured: true },
  { title: { es: 'Pensamiento de Diseño 101', en: 'Design Thinking 101' }, issuer: 'Certificación', category: 'skills', glyph: 'DT' },
];

// Primero lo que estoy aprendiendo, luego de lo más reciente a lo más antiguo; sin fecha al final
export const badgesByDate = [...badges].sort((a, b) => {
  if (a.now !== b.now) return a.now ? -1 : 1;
  return (b.date ?? '').localeCompare(a.date ?? '');
});

export const contact = {
  eyebrow: { es: 'Contacto', en: 'Contact' },
  title: { es: '¿Construimos algo con cuidado?', en: "Let's build something with care" },
  text: {
    es: 'Busco equipos remotos donde pueda diseñar sistemas escalables y de alto impacto, y también tomo proyectos freelance. Escríbeme y te respondo pronto.',
    en: 'I am looking for remote teams where I can design scalable, high-impact systems, and I also take freelance projects. Drop me a line and I will get back to you soon.',
  },
  copy: { es: 'Copiar correo', en: 'Copy email' },
  copied: { es: '¡Copiado!', en: 'Copied!' },
  cvNote: { es: 'CV en español (PDF)', en: 'CV in Spanish (PDF)' },
};

export const footer = {
  made: {
    es: 'Hecho a mano con React, Three.js y muchas cuentas de hama.',
    en: 'Handmade with React, Three.js and lots of hama beads.',
  },
  avatar: { es: 'Avatar voxel hecho por mí en VoxEdit.', en: 'Voxel avatar made by me in VoxEdit.' },
};
