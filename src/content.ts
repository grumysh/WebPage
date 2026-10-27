// Todo el contenido de la web en un solo lugar, en español e inglés.
export type Lang = 'es' | 'en';
export type T = Record<Lang, string>;

export const links = {
  email: 'anlramirezs11@gmail.com',
  github: 'https://github.com/grumysh',
  gitlab: 'https://gitlab.com/grumysh',
  linkedin: 'https://www.linkedin.com/in/grumysh/',
  instagram: 'https://www.instagram.com/anlramirezs/',
  x: 'https://x.com/Grumysh',
  // el CV se descarga en el idioma que esté viendo la persona
  cv: { es: './cv/Andrea_Ramirez_CV_ES.pdf', en: './cv/Andrea_Ramirez_CV_EN.pdf' },
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
  pet: { es: 'Stitch\nmi perrito ♥', en: 'Stitch\nmy doggo ♥' },
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  mainNav: { es: 'Principal', en: 'Main' },
  language: { es: 'Idioma', en: 'Language' },
  bubble: {
    hero: { es: '¡Hola! ✦', en: 'Hi there! ✦' },
    about: { es: 'Te cuento un poco…', en: 'Let me tell you…' },
    projects: { es: 'Mira lo que construí', en: "Look what I've built" },
    career: { es: '¡Subiendo de nivel!', en: 'Leveling up!' },
    awards: { es: '¡Yay!', en: 'Yay!' },
    badges: { es: 'Siempre aprendiendo', en: 'Always learning' },
    contact: { es: '¿Hablamos?', en: 'Shall we talk?' },
    footer: { es: '¡Ñam, ñam!', en: 'Nom nom!' },
  } as Record<string, T>,
};

export const hero = {
  hello: { es: '¡Hola! Soy', en: "Hi! I'm" },
  name: 'Andrea Ramírez',
  role: {
    es: 'Ingeniera de Software Full Stack y Tech Lead',
    en: 'Full Stack Software Engineer & Tech Lead',
  },
  lead: {
    es: 'Llevo más de 8 años convirtiendo problemas complejos en productos listos para producción: arquitectura, APIs, frontend, nube y Web3. Me encantan los videojuegos y las cosas hechas con cuidado.',
    en: 'For 8+ years I have been turning complex problems into production-ready products: architecture, APIs, frontend, cloud and Web3. I love games and things made with care.',
  },
  available: {
    es: 'Disponible para empleo remoto o híbrido y proyectos freelance',
    en: 'Open to remote or hybrid roles and freelance projects',
  },
  ctaProjects: { es: 'Ver proyectos', en: 'See projects' },
  ctaContact: { es: 'Hablemos', en: "Let's talk" },
  location: { es: 'Bogotá, Colombia · Remoto o híbrido', en: 'Bogotá, Colombia · Remote or hybrid' },
};

export const stats: { value: string; label: T; color: string }[] = [
  { value: '8+', label: { es: 'años construyendo software', en: 'years building software' }, color: 'pink' },
  { value: 'USD 85K', label: { es: 'financiados por The Sandbox DAO', en: 'funded by The Sandbox DAO' }, color: 'mint' },
  { value: '~150K', label: { es: 'jugadores en New Festival Town', en: 'players on New Festival Town' }, color: 'purple' },
  { value: '~20', label: { es: 'personas en el estudio que cofundé', en: 'people at the studio I co-founded' }, color: 'butter' },
];

export const about = {
  eyebrow: { es: 'Sobre mí', en: 'About me' },
  title: { es: 'Ingeniera de día, artesana siempre', en: 'Engineer by day, maker always' },
  body: [
    {
      es: 'Soy Ingeniera de Sistemas de la Universidad Distrital y cofundadora de Ashara Studios. Me siento cómoda en todo el stack: diseño el modelo de datos, construyo la API, armo el frontend y lo despliego en AWS. Como Tech Lead he coordinado equipos de artistas, diseñadores e ingenieros.',
      en: 'I am a Systems Engineer from Universidad Distrital and co-founder of Ashara Studios. I am comfortable across the whole stack: I design the data model, build the API, craft the frontend and ship it on AWS. As a Tech Lead I have coordinated teams of artists, designers and engineers.',
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
    { word: { es: 'Realista', en: 'Realistic' }, note: { es: 'Planes que se pueden cumplir y números honestos.', en: 'Achievable plans and honest numbers.' }, color: 'mint' },
  ],
  hobbiesTitle: { es: 'Fuera del código', en: 'Away from the keyboard' },
  hobbiesLead: {
    es: 'Cuando cierro el editor sigo construyendo cosas, solo que con las manos. Por eso esta web está hecha de cuentas, puntadas y parches.',
    en: 'When I close the editor I keep building things, just with my hands. That is why this site is made of beads, stitches and patches.',
  },
  hobbies: [
    // en orden de lo que más hago
    { id: 'embroidery', label: { es: 'Bordar en punto de cruz', en: 'Cross-stitch' }, note: { es: 'Puntada a puntada, sin afán.', en: 'Stitch by stitch, no rush.' } },
    { id: 'paint', label: { es: 'Pintar cerámicas', en: 'Painting ceramics' }, note: { es: 'Color y calma lejos de la pantalla.', en: 'Color and calm away from screens.' } },
    { id: 'voxel', label: { es: 'Voxel art', en: 'Voxel art' }, note: { es: 'Por puro gusto. Así nació Grumysh.', en: 'Just for fun. That is how Grumysh was born.' } },
    { id: 'beads', label: { es: 'Hama beads', en: 'Hama beads' }, note: { es: 'Pixel art cuenta por cuenta.', en: 'Pixel art, one bead at a time.' } },
    { id: 'anime', label: { es: 'Anime', en: 'Anime' }, note: { es: 'Me gusta el anime.', en: 'I like anime.' } },
    { id: 'run', label: { es: 'Trotar', en: 'Running' }, note: { es: 'Me gustan los retos: mi primera carrera fue un 10K.', en: 'I love a challenge: my first race was a 10K.' } },
  ],
  board: {
    title: { es: 'Mi tablero de hama', en: 'My hama pegboard' },
    hint: { es: 'Elige un color y pon cuentas. Arrastra para pintar.', en: 'Pick a color and place beads. Drag to paint.' },
    clear: { es: 'Vaciar', en: 'Clear' },
    reset: { es: 'Onigiri', en: 'Onigiri' },
    eraser: { es: 'Borrador', en: 'Eraser' },
  },
  stackTitle: { es: 'Mi caja de herramientas', en: 'My toolbox' },
  // icon: logo de Simple Icons; glyph: iniciales cuando la marca no tiene logo disponible
  stack: [
    {
      group: { es: 'Backend', en: 'Backend' },
      color: 'mint',
      items: [
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Express', icon: 'express' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Python', icon: 'python' },
        { name: 'REST APIs', glyph: 'API' },
        { name: 'Serverless', icon: 'serverless' },
      ],
    },
    {
      group: { es: 'Frontend', en: 'Frontend' },
      color: 'butter',
      items: [
        { name: 'React', icon: 'react' },
        { name: 'Redux', icon: 'redux' },
        { name: 'Vite', icon: 'vite' },
        { name: 'Angular', icon: 'angular' },
        { name: 'Vue.js', icon: 'vuedotjs' },
        { name: 'Nuxt', icon: 'nuxt' },
        { name: 'Three.js', icon: 'threedotjs' },
      ],
    },
    {
      group: { es: 'Datos', en: 'Data' },
      color: 'sky',
      items: [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MariaDB', icon: 'mariadb' },
        { name: 'MySQL', icon: 'mysql' },
      ],
    },
    {
      group: { es: 'Nube y DevOps', en: 'Cloud & DevOps' },
      color: 'coral',
      items: [
        { name: 'AWS', glyph: 'AWS', detail: 'EC2 · ECS · ECR · S3 · Secrets Manager' },
        { name: 'Docker', icon: 'docker' },
        { name: 'GitLab CI/CD', icon: 'gitlab' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Git', icon: 'git' },
      ],
    },
    {
      group: { es: 'IA', en: 'AI' },
      color: 'pink',
      items: [
        { name: 'Claude Code', icon: 'claude' },
        { name: 'GitHub Copilot', icon: 'githubcopilot' },
        { name: 'Gemini', icon: 'googlegemini' },
        { name: 'Tesseract.js OCR', glyph: 'OCR' },
      ],
    },
    {
      group: { es: 'Web3 y juegos', en: 'Web3 & games' },
      color: 'purple',
      items: [
        { name: 'thirdweb', icon: 'thirdweb' },
        { name: 'Polygon', icon: 'polygon' },
        { name: 'Smart contracts', glyph: 'SC' },
        { name: 'Unity', icon: 'unity' },
        { name: 'Phaser', glyph: 'PH' },
        { name: 'VoxEdit', glyph: 'VX' },
      ],
    },
  ] as { group: T; color: string; items: { name: string; icon?: string; glyph?: string; detail?: string }[] }[],
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
      es: 'Plataforma de misiones, recompensas y métricas para que varios creadores gestionen sus comunidades en The Sandbox. Presenté la propuesta (SIP-24) ante The Sandbox DAO y obtuvo USD 85.000 de financiación.',
      en: 'A platform for missions, rewards and metrics that lets multiple creators run their communities in The Sandbox. I pitched the proposal (SIP-24) to The Sandbox DAO and it secured USD 85,000 in funding.',
    },
    highlights: [
      {
        es: 'Arquitectura, modelo de datos e integración Web3 con transacciones firmadas por las billeteras de los creadores (Polygon).',
        en: 'Architecture, data model and Web3 integration with transactions signed by creators’ wallets (Polygon).',
      },
      {
        es: 'Validación automática de misiones con OCR: aprueba al instante, descarta imágenes inválidas y escala los casos dudosos.',
        en: 'Automatic mission validation with OCR: it approves instantly, rejects invalid images and escalates doubtful cases.',
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
    role: { es: 'Backend e infraestructura', en: 'Backend & infrastructure' },
    period: { es: '2024 – 2025', en: '2024 – 2025' },
    summary: {
      es: 'Juego como servicio publicado en MiniPay. Desplegué la infraestructura del backend y la base de datos.',
      en: 'A game-as-a-service published on MiniPay. I deployed its backend infrastructure and database.',
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
      es: 'El juego más grande de The Sandbox por tamaño de mapa y contenido narrativo. Hice su sitio web conectado a contratos inteligentes, una API serverless alimentada desde Notion y el diseño de sus entornos.',
      en: 'The largest game in The Sandbox by map size and narrative content. I built its website with smart-contract integration and a serverless API fed from Notion, and designed its environments.',
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
    role: { es: 'Full stack · v1 hecha por mí, v2 con Claude Code', en: 'Full stack · v1 built solo, v2 with Claude Code' },
    period: { es: '2025', en: '2025' },
    summary: {
      es: 'Portal administrativo con login corporativo y permisos por rol: vacaciones, nómina, certificados, newsletters y métricas de redes. Construí la primera versión yo sola y la segunda con Claude Code, con pruebas unitarias y despliegue en AWS ECS.',
      en: 'Admin portal with corporate login and role-based permissions: time off, payroll, certificates, newsletters and social metrics. I built the first version on my own and the second with Claude Code, with unit tests and deployment on AWS ECS.',
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
    role: { es: 'Base de datos y frontend', en: 'Database & frontend' },
    period: { es: '2018', en: '2018' },
    summary: {
      es: 'Plataforma ciudadana para seguir las obras públicas del país: presupuesto, retrasos y estado de entrega, con contratos de SECOP II actualizados cada semana desde datos.gov.co.',
      en: 'Civic platform to track public works across Colombia: budget, delays and delivery status, using SECOP II contracts refreshed weekly from datos.gov.co.',
    },
    highlights: [],
    stack: ['MariaDB', 'JavaScript', 'Open data'],
    metric: { es: 'Ganador de la Hackatón Anticorrupción', en: 'Anti-Corruption Hackathon winner' },
    color: 'pink',
  },
];

export const careerIntro = {
  eyebrow: { es: 'Trayectoria', en: 'Career' },
  title: { es: 'Subiendo de nivel desde 2017', en: 'Leveling up since 2017' },
  more: { es: 'Ver toda mi trayectoria', en: 'See my full career' },
  less: { es: 'Ver menos', en: 'See less' },
};

// early: experiencia desde 2018 hacia atrás, que se muestra con "Ver toda mi trayectoria"
export const career: { period: string; role: T; org: string; note: T; current?: boolean; early?: boolean }[] = [
  {
    period: '2024 —',
    role: { es: 'Cofundadora y Tech Lead', en: 'Co-founder & Tech Lead' },
    org: 'Ashara Studios',
    note: {
      es: 'Lidero el desarrollo técnico: arquitectura, datos, APIs, AWS y Web3. Construí Chrysalis Quest, financiada con USD 85.000 por The Sandbox DAO, y participé en el backend de New Festival Town (~150.000 jugadores).',
      en: "I lead the studio's technical development: architecture, data, APIs, AWS and Web3. I built Chrysalis Quest, funded with USD 85,000 by The Sandbox DAO, and worked on the backend of New Festival Town (~150,000 players).",
    },
    current: true,
  },
  {
    period: '2022 – 2024',
    role: { es: 'Desarrolladora Web y Level Designer', en: 'Web Developer & Level Designer' },
    org: 'Ashara Studios',
    note: {
      es: 'Hice el sitio web de Tower of Myths con React y thirdweb, una API serverless que servía su contenido desde Notion y el world building del juego en The Sandbox. También construí la aplicación web de NFT Exorcist.',
      en: 'I built the Tower of Myths website with React and thirdweb, a serverless API serving all its content from Notion, and the game’s world building in The Sandbox. I also built the NFT Exorcist web app.',
    },
  },
  {
    period: '2021 – 2022',
    role: { es: 'Cofundadora, COO y desarrolladora', en: 'Co-founder, COO & Developer' },
    org: 'Chrysalis Guild',
    note: {
      es: 'Cofundé y dirigí una comunidad de juegos blockchain con ~300 jugadores, 17 personas (5 a mi cargo) y ~USD 1M en activos. Reconstruí en Python el sistema de pagos en tokens y construí un bot de trading con Node.js.',
      en: 'I co-founded and ran a blockchain gaming community with ~300 players, 17 people (5 reporting to me) and ~USD 1M in assets. I rebuilt the token payout system in Python and built a trading bot with Node.js.',
    },
  },
  {
    period: '2020 – 2023',
    role: { es: 'Artista voxel y líder de equipo', en: 'Voxel Artist & Team Leader' },
    org: 'The Sandbox',
    note: {
      es: 'Diseñé y animé activos en voxel art con VoxEdit para el Marketplace de The Sandbox. Como líder de la Cell 14, capacité y coordiné a un equipo de 6 artistas para mantener la calidad y la coherencia visual.',
      en: 'I designed and animated voxel assets with VoxEdit for The Sandbox Marketplace. As Cell 14 leader, I trained and coordinated a team of 6 artists to maintain quality and visual consistency.',
    },
  },
  {
    period: '2020 – 2021',
    role: { es: 'Desarrolladora Frontend', en: 'Frontend Developer' },
    org: 'Banco de Occidente',
    note: {
      es: 'Desarrollé interfaces web con Angular 8 y TypeScript para productos dirigidos a clientes del banco, integradas con sus APIs, y escribí pruebas unitarias con Jasmine y Karma, trabajando con Scrum, Jira y Git.',
      en: "I built web interfaces with Angular 8 and TypeScript for the bank's customer-facing products, integrated with its APIs, and wrote unit tests with Jasmine and Karma, working with Scrum, Jira and Git.",
    },
  },
  {
    period: '2019 – 2020',
    role: { es: 'Ingeniera de Software', en: 'Software Engineer' },
    org: 'Universidad Distrital',
    note: {
      es: 'Construí el frontend de novedades poscontractuales y gran parte del cliente de Evaluación de Proveedores con Angular 8, sobre una arquitectura de microservicios en AWS integrada mediante APIs REST.',
      en: 'I built the frontend for post-contract amendments and most of the Supplier Evaluation client with Angular 8, on an AWS microservices architecture integrated through REST APIs.',
    },
  },
  {
    period: '2018 – 2019',
    role: { es: 'Ingeniera de Software', en: 'Software Engineer' },
    org: 'XueColombia',
    note: {
      es: 'Desarrollé plataformas de tecnología cívica con datos abiertos del Estado: el frontend de Burócratas y Alerta a la Obra, ganadora de la Hackatón Anticorrupción 2018, incluida su base de datos en MariaDB con datos de SECOP II.',
      en: 'I built civic tech platforms on government open data: the Burócratas frontend and Alerta a la Obra, winner of the 2018 Anti-Corruption Hackathon, including its MariaDB database built on SECOP II data.',
    },
    early: true,
  },
  {
    period: '2017 – 2018',
    role: { es: 'Cofundadora y líder web', en: 'Co-founder & Web Lead' },
    org: 'Ashara Studios',
    note: {
      es: 'Cofundé el estudio con 3 socios y lideré el área de software: definí tecnologías, arquitectura y bases de datos, y desarrollé cerca de 10 sitios y aplicaciones web. El estudio creció hasta ~20 personas.',
      en: 'I co-founded the studio with 3 partners and led the software area: I defined technologies, architecture and databases, and built about 10 websites and web apps. The studio grew to ~20 people.',
    },
    early: true,
  },
  {
    period: '2013 – 2016',
    role: { es: 'Desarrolladora freelance', en: 'Freelance developer' },
    org: 'ARC Abogados · Aspencajanal',
    note: {
      es: 'Construí de principio a fin un sistema de recursos humanos para Aspencajanal (Java y PostgreSQL) y el sitio web y el aplicativo de gestión de casos de ARC Abogados (Node.js, Sails.js y PostgreSQL).',
      en: 'I built an HR management system end to end for Aspencajanal (Java and PostgreSQL), plus the website and case management app for ARC Abogados (Node.js, Sails.js and PostgreSQL).',
    },
    early: true,
  },
];

export const awardsIntro = {
  eyebrow: { es: 'Premios y eventos', en: 'Awards & events' },
  title: { es: 'Momentos de los que estoy orgullosa', en: 'Moments I am proud of' },
  award: { es: 'Premio', en: 'Award' },
  prev: { es: 'Anteriores', en: 'Previous' },
  next: { es: 'Siguientes', en: 'Next' },
  expo: { es: 'Expositores', en: 'Exhibitors' },
  speaker: { es: 'Ponentes', en: 'Speakers' },
  org: { es: 'Organización', en: 'Organizing team' },
  personal: { es: 'Personal', en: 'Personal' },
};

export const awards: {
  kind: 'award' | 'expo' | 'speaker' | 'org' | 'personal';
  year: string;
  title: T;
  text: T;
  image?: string;
  imagePosition?: string;
  href?: string;
}[] = [
  {
    kind: 'personal',
    year: '2026',
    title: { es: 'Carrera Sube Monserrate', en: 'Sube Monserrate race' },
    text: {
      es: 'Subí en 48:48. Fue volver a competir después de una cirugía de tobillo y un largo proceso de recuperación física y mental: lograrlo fue muy satisfactorio.',
      en: 'I made it up in 48:48. It was my return to racing after ankle surgery and a long physical and mental recovery, and reaching that milestone was deeply satisfying.',
    },
    image: './img/eventos/sube-monserrate-2026.jpg',
    imagePosition: '50% 55%',
  },
  {
    kind: 'expo',
    year: '2023',
    title: { es: 'Colombia 4.0 · Ashara Studios', en: 'Colombia 4.0 · Ashara Studios' },
    text: {
      es: 'Presentamos todos nuestros juegos y servicios en Colombia 4.0, con stand propio del estudio.',
      en: 'We showcased all of our games and services at Colombia 4.0, at the studio’s own booth.',
    },
    image: './img/eventos/colombia-4-0-2023.jpg',
    imagePosition: '50% 40%',
  },
  {
    kind: 'expo',
    year: '2023',
    title: { es: 'SOFA 2023 · Beta Test Fest', en: 'SOFA 2023 · Beta Test Fest' },
    text: {
      es: 'Expusimos Tower of Myths y Arkane Bestiary para que el público los probara en el Beta Test Fest de SOFA.',
      en: 'We exhibited Tower of Myths and Arkane Bestiary so the public could play-test them at the SOFA Beta Test Fest.',
    },
    image: './img/eventos/sofa-2023-beta-test-fest.jpg',
    imagePosition: '50% 60%',
  },
  {
    kind: 'personal',
    year: '2023',
    title: { es: 'Mi primera carrera: 10K de la Media Maratón de Bogotá', en: 'My first race: Bogotá Half Marathon 10K' },
    text: {
      es: 'Meses de madrugadas entrenando, ampollas y terapias para la tendinitis para cruzar la meta en 1:06:18. Fue un reto y una gran satisfacción.',
      en: 'Months of early-morning training, blisters and therapy for tendinitis to cross the finish line in 1:06:18. It was a real challenge and deeply satisfying.',
    },
    image: './img/eventos/mmb-2023-10k.jpg',
    imagePosition: '50% 12%',
  },
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
    title: { es: 'Ganadores · Hackatón Anticorrupción', en: 'Winners · Anti-Corruption Hackathon' },
    text: { es: 'En Colombia 4.0, con el proyecto Alerta a la Obra.', en: 'At Colombia 4.0, with the Alerta a la Obra project.' },
    image: './img/eventos/anticorrupcion.jpg',
    href: 'https://mintic.gov.co/portal/604/w3-article-80376.html',
  },
  {
    kind: 'award',
    year: '2018',
    title: { es: 'Ganadores · Hurify Challenge, AngelHack Bogotá', en: 'Winners · Hurify Challenge, AngelHack Bogotá' },
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
    kind: 'speaker',
    year: '2017',
    title: { es: 'Expo Made With Unity · SOFA 2017', en: 'Made With Unity Expo · SOFA 2017' },
    text: {
      es: 'Fuimos ponentes con nuestro juego Exorcist en la Expo Made With Unity, en el marco de SOFA 2017.',
      en: 'We spoke about our game Exorcist at the Made With Unity Expo, part of SOFA 2017.',
    },
    image: './img/eventos/sofa-2017-made-with-unity.jpg',
    imagePosition: '50% 40%',
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
    title: { es: 'Unity Developer Day · Exorcist', en: 'Unity Developer Day · Exorcist' },
    text: {
      es: 'Expusimos nuestro juego Exorcist, que se lanzó en Google Play y llevó a un contrato de USD 45.000 con Nutaku.',
      en: 'We exhibited our game Exorcist, which launched on Google Play and led to a USD 45,000 deal with Nutaku.',
    },
    image: './img/eventos/hero.jpg',
    href: 'https://www.youtube.com/watch?v=3r41l1CJpt8',
  },
  {
    kind: 'org',
    year: '2017',
    title: { es: 'VIII Encuentro Interuniversitario sobre Complejidad', en: '8th Inter-University Meeting on Complexity' },
    text: {
      es: 'Formé parte del equipo organizador con el grupo ComplexUD: “Complejidad y Auto-Organización”, del 8 al 12 de mayo en Bogotá.',
      en: 'I was part of the organizing team with the ComplexUD group: “Complexity and Self-Organization”, May 8–12 in Bogotá.',
    },
    image: './img/eventos/complejidad-2017.jpg',
    imagePosition: '50% 55%',
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
  title: { es: '¿Tienes una vacante o un proyecto en mente?', en: 'Got a role or a project in mind?' },
  text: {
    es: 'Busco equipos remotos o híbridos (en Bogotá) donde pueda diseñar sistemas escalables y de alto impacto, y también tomo proyectos freelance. Escríbeme y te respondo pronto.',
    en: 'I am looking for remote or hybrid teams (in Bogotá) where I can design scalable, high-impact systems, and I also take on freelance projects. Drop me a line and I’ll get back to you soon.',
  },
  copy: { es: 'Copiar correo', en: 'Copy email' },
  copied: { es: '¡Copiado!', en: 'Copied!' },
  cvNote: { es: 'CV (PDF)', en: 'Résumé (PDF)' },
};

export const footer = {
  made: {
    es: 'Hecho con React, Three.js y muchas cuentas de hama.',
    en: 'Made with React, Three.js and lots of hama beads.',
  },
  avatar: { es: 'Avatar voxel hecho por mí en VoxEdit.', en: 'Voxel avatar made by me in VoxEdit.' },
  social: { es: 'Encuéntrame en', en: 'Find me on' },
};
