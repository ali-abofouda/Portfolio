/* ============================================
   Ali Ashraf — Portfolio · script.js
   Vercel/Linear-inspired Clean Developer Portfolio
   i18n (AR/EN) · theme toggle · nav scroll · reveal
   project filter & detail modals · contact toasts
   ============================================ */

/* ----------  Translations  ---------- */
const I18N = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.timeline': 'Experience',
    'nav.contact': 'Contact',

    'hero.status': 'Available for AI / ML Roles',
    'hero.titleLine1': 'Ali Ashraf',
    'hero.subtitle': 'AI / Machine Learning Engineer',
    'hero.desc': 'Building medical AI diagnosis systems, computer vision models, and production LLM agent pipelines — bridging AI research and software engineering.',
    'hero.viewWork': 'View Work',
    'hero.getInTouch': 'Contact Me',
    'hero.egypt': 'Egypt',
    'hero.focus': 'Focus',

    'about.title': 'About Me',
    'about.p1': "I'm an AI / ML Engineer specializing in designing intelligent software architectures that turn machine learning research into production-ready products.",
    'about.p2': 'My graduation project, Hakeem AI, is a stateful conversational medical diagnosis system built with FastAPI, LangGraph workflows, and PostgreSQL that dynamically gathers clinical symptoms and generates structured diagnostic reports.',
    'about.p3': 'I have also trained computer vision models using PyTorch across four clinical imaging modalities (fractures, brain MRI tumors, chest X-rays, retinal fundus) and developed production web applications with Next.js and Supabase.',
    'about.statProjects': 'Production Projects',
    'about.statModels': 'Medical Vision Models',
    'about.statLangs': 'Languages (AR / EN)',

    'skills.title': 'Skills & Stack',
    'skills.ai': 'AI & Machine Learning',
    'skills.backend': 'Backend Architecture',
    'skills.frontend': 'Frontend Engineering',
    'skills.tools': 'Tools & Quality',

    'projects.title': 'Featured Engineering',
    'projects.tabAll': 'All Work',
    'projects.tabMedical': 'Medical AI',
    'projects.tabGenAI': 'GenAI & Agents',
    'projects.tabFullstack': 'Full-Stack',
    'projects.viewDetails': 'Architecture & Details →',
    'projects.graduation': 'Graduation Project',
    'projects.research': 'Deep Learning',
    'projects.genai': 'GenAI App',
    'projects.fullstack': 'Full-stack',
    'projects.tool': 'Python Service',
    'projects.lab': 'RAG & Tools',
    'projects.hakeem.desc': 'Stateful conversational medical system that collects symptoms dynamically and generates structured clinical diagnostic reports with recommended specialties.',
    'projects.cnn.desc': 'Four convolutional neural network models trained for medical imaging: fracture segmentation, brain MRI tumor detection, chest X-ray classification, and fundus analysis.',
    'projects.roadmap.desc': 'Generative-AI powered learning roadmap planner with focus sessions, analytics dashboard, pomodoro cycles, and persistent state management.',
    'projects.bodyshift.desc': 'Production fitness tracking platform featuring Supabase authentication, protected client routes, workout CRUD logs, and Recharts analytics.',
    'projects.diet.desc': 'FastAPI microservice that generates personalized, print-ready PDF nutrition plans with Arabic font support and dynamic macro targets.',
    'projects.agents.desc': 'Modular experimental codebase exploring vector retrieval RAG pipelines, tool-calling LLM agents, and structured JSON parsing benchmarks.',

    'timeline.title': 'Engineering Experience',
    'timeline.item1.date': '2024 — Present',
    'timeline.item1.title': 'Graduation Project Lead — Hakeem AI',
    'timeline.item1.desc': 'Engineered an async stateful medical AI agent using FastAPI, LangGraph workflow graphs, and PostgreSQL state management. Designed symptom collection algorithms and clinical diagnostic report generation.',
    'timeline.item2.date': '2023 — 2024',
    'timeline.item2.title': 'Medical Vision & Deep Learning Researcher',
    'timeline.item2.desc': 'Trained and evaluated PyTorch deep learning vision architectures on clinical datasets: bone fracture segmentation (U-Net), brain MRI tumor classification (ResNet), chest X-rays, and retinal fundus evaluation.',
    'timeline.item3.date': '2023 — Present',
    'timeline.item3.title': 'Full-Stack Application Software Developer',
    'timeline.item3.desc': 'Shipped web applications using Next.js 16, Supabase, Tailwind CSS, and Recharts with focus on secure auth (RLS), clean state management (Zustand), and strict schema validation (Zod).',
    'timeline.item4.date': '2020 — 2024',
    'timeline.item4.title': 'Computer Science & AI Academic Background',
    'timeline.item4.desc': 'Specialized in Machine Learning, Computer Vision, Algorithms, Data Engineering, and Distributed Systems.',

    'contact.title': 'Get In Touch',
    'contact.lead': 'Available for full-time AI/ML roles, technical consulting, and innovative engineering collaborations. Reach out directly or send a message.',
    'contact.copy': 'Copy',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMessage': 'Message',
    'contact.formSubmit': 'Send Message',

    'modal.keyFeatures': 'Key Features & Architecture',
    'modal.techStack': 'Technologies Used',
    'modal.viewRepo': 'View Repository',
    'modal.close': 'Close',

    'footer.built': 'Designed & Built with Clean HTML, CSS & JS',
  },

  ar: {
    'nav.about': 'عن الحساب',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.timeline': 'الخبرات',
    'nav.contact': 'تواصل',

    'hero.status': 'متاح لفرص الذكاء الاصطناعي',
    'hero.titleLine1': 'علي أشرف',
    'hero.subtitle': 'مهندس ذكاء اصطناعي وتعلّم آلي',
    'hero.desc': 'بناء أنظمة تشخيص طبي بالذكاء الاصطناعي، نماذج الرؤية الحاسوبية، وتطبيقات النماذج اللغوية — الربط بين الأبحاث وهندسة البرمجيات.',
    'hero.viewWork': 'استعرض المشاريع',
    'hero.getInTouch': 'تواصل معي',
    'hero.egypt': 'مصر',
    'hero.focus': 'التخصص',

    'about.title': 'من أنا',
    'about.p1': 'أنا مهندس ذكاء اصطناعي وتعلّم آلي متخصص في تصميم معمارية برمجية ذكية تحوّل أبحاث التعلّم الآلي إلى منتجات احترافية جاهزة للإنتاج.',
    'about.p2': 'مشروع تخرّجي «حكيم AI» هو نظام تشخيص طبي تحادثي متكامل مبني بـ FastAPI ومخططات LangGraph وقواعد PostgreSQL يجمع الأعراض سريرياً وينتج تقارير منظّمة.',
    'about.p3': 'كما درّبت نماذج رؤية حاسوبية بـ PyTorch عبر أربع مجموعات بيانات طبية (الكسور، أورام الرنين المغناطيسي، أشعة الصدر، وقاع العين) وأطوّر تطبيقات Web بـ Next.js وSupabase.',
    'about.statProjects': 'مشاريع حقيقية',
    'about.statModels': 'نماذج رؤية طبية',
    'about.statLangs': 'لغتان (عربي / إنجليزي)',

    'skills.title': 'المهارات والتقنيات',
    'skills.ai': 'الذكاء الاصطناعي والتعلّم الآلي',
    'skills.backend': 'معمارية الخلفية (Backend)',
    'skills.frontend': 'هندسة الواجهات (Frontend)',
    'skills.tools': 'الأدوات وجودة البرمجيات',

    'projects.title': 'المشاريع الهندسية',
    'projects.tabAll': 'جميع الأعمال',
    'projects.tabMedical': 'ذكاء اصطناعي طبي',
    'projects.tabGenAI': 'نماذج لغوية وووكلاء',
    'projects.tabFullstack': 'تطبيقات متكاملة',
    'projects.viewDetails': 'المعمارية والتفاصيل ←',
    'projects.graduation': 'مشروع تخرّج',
    'projects.research': 'تعلّم عميق',
    'projects.genai': 'تطبيق GenAI',
    'projects.fullstack': 'Full-Stack',
    'projects.tool': 'خدمة Python',
    'projects.lab': 'RAG وأدوات',
    'projects.hakeem.desc': 'نظام طبي تحادثي يجمع الأعراض سريرياً ويُولّد تقارير تشخيصية منظّمة مع تحديد التخصصات الطبية.',
    'projects.cnn.desc': 'أربعة نماذج شبكات التفافية مدرّبة للصور الطبية: تجزئة الكسور، كشف أورام الرنين، تصنيف أشعة الصدر، وتحليل قاع العين.',
    'projects.roadmap.desc': 'مخطّط خرائط تعلم بالذكاء الاصطناعي مع لوحة تحليلات ومؤقت بومودورو وإدارة حالة مرنة.',
    'projects.bodyshift.desc': 'منصة تتبّع لياقة بدنية بمصادقة Supabase وحماية البيانات وسجلات التمارين ورسوم Recharts.',
    'projects.diet.desc': 'خدمة مصغّرة بـ FastAPI تُولّد خطط حمية بصيغة PDF جاهزة للطباعة مع دعم الخطوط العربية.',
    'projects.agents.desc': 'بيئة برمجية نمطية لاستكشاف أنظمة RAG واسترجاع المتغيرات وتطبيق الوكلاء والتحقق من المخرجات.',

    'timeline.title': 'الخبرات الهندسية',
    'timeline.item1.date': '2024 — الحالي',
    'timeline.item1.title': 'قائد مشروع التخرج — حكيم AI',
    'timeline.item1.desc': 'تطوير وكيل ذكاء اصطناعي طبي لا تزامني بـ FastAPI وLangGraph وتخزين الحالة في PostgreSQL وتوليد التقارير السريرية.',
    'timeline.item2.date': '2023 — 2024',
    'timeline.item2.title': 'باحث تعلّم عميق ورؤية حاسوبية طبية',
    'timeline.item2.desc': 'تدريب وتقييم نماذج PyTorch على صور طبية: U-Net لتجزئة الكسور، وResNet لتصنيف أورام المخ وأشعة الصدر وقاع العين.',
    'timeline.item3.date': '2023 — الحالي',
    'timeline.item3.title': 'مطور تطبيقات متكاملة (Full-Stack Developer)',
    'timeline.item3.desc': 'بناء وتطوير تطبيقات ويب باستخدام Next.js 16, Supabase, Tailwind CSS مع التركيز على الأمان RLS والتحقق بـ Zod.',
    'timeline.item4.date': '2020 — 2024',
    'timeline.item4.title': 'دراسة علوم الحاسب والذكاء الاصطناعي',
    'timeline.item4.desc': 'التخصص في التعلّم الآلي، الرؤية الحاسوبية، الخوارزميات، وهندسة البيانات.',

    'contact.title': 'تواصل معي',
    'contact.lead': 'متاح لفرص العمل الكامل، الاستشارات التقنية، والتعاون في مشاريع الذكاء الاصطناعي والهندسة.',
    'contact.copy': 'نسخ',
    'contact.formName': 'الاسم',
    'contact.formEmail': 'البريد الإلكتروني',
    'contact.formMessage': 'الرسالة',
    'contact.formSubmit': 'إرسال الرسالة',

    'modal.keyFeatures': 'المميزات الرئيسية والمعمارية',
    'modal.techStack': 'التقنيات المستخدمة',
    'modal.viewRepo': 'عرض المستودع البرمجي',
    'modal.close': 'إغلاق',

    'footer.built': 'تم التصميم والتطوير بـ HTML وCSS وJS برمجية نظيفة',
  },
};

/* ----------  Project Detailed Info Data  ---------- */
const PROJECT_DETAILS = {
  hakeem: {
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6v3.8c0 .2.1.3.3.3h3.8c.2 0 .3-.1.3-.3V2.6a.3.3 0 0 0-.3-.3H4.8z"/><path d="M14 12v-2a4 4 0 0 0-4-4H8"/><rect x="2" y="16" width="20" height="6" rx="2"/><path d="M6 12h12"/></svg>',
    badgeKey: 'projects.graduation',
    title: 'Hakeem AI',
    titleAr: 'حكيم AI',
    descEn: 'Stateful conversational medical diagnosis system that collects symptoms dynamically and generates structured clinical diagnostic reports with recommended medical specialties.',
    descAr: 'نظام تشخيص طبي تحادثي يجمع الأعراض خطوة بخطوة ويُولّد تقارير تشخيصية منظّمة مع اقتراح التخصصات المناسبة.',
    featuresEn: [
      'Multi-agent symptom extraction using LangGraph workflows.',
      'Stateful conversation tracking backed by PostgreSQL persistence.',
      'FastAPI async architecture with real-time JSON response streaming.',
      'Structured clinical diagnostic reports with confidence metrics.'
    ],
    featuresAr: [
      'استخراج الأعراض متعدد الوكلاء باستخدام سير عمل LangGraph.',
      'تتبع محادثة يحفظ الحالة عبر قاعدة بيانات PostgreSQL.',
      'معمارية لا تزامنية بـ FastAPI مع بث الاستجابات فورياً.',
      'تقارير تشخيصية سريرية منظمة مع نسب ثقة دقيقة.'
    ],
    tags: ['FastAPI', 'LangGraph', 'PostgreSQL', 'Python', 'LLM Agents', 'JSON Schema'],
    repo: 'https://github.com/'
  },
  cnn: {
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>',
    badgeKey: 'projects.research',
    title: 'Medical Vision CNNs',
    titleAr: 'نماذج الرؤية الطبية CNNs',
    descEn: 'Four custom convolutional neural network models trained for specialized medical imaging interpretation and diagnostic computer vision tasks.',
    descAr: 'أربعة نماذج شبكات التلافيف العصبية مخصصة ومدرّبة لتحليل الصور الطبية والتشخيص الآلي.',
    featuresEn: [
      'Bone Fracture Segmentation using U-Net architecture with PyTorch.',
      'Brain Tumor Classification on MRI scans with ResNet transfer learning.',
      'Chest X-Ray Pneumonia & Abnormality Detection.',
      'Retinal Fundus Image Analysis for diabetic retinopathy screening.'
    ],
    featuresAr: [
      'تجزئة كسور العظام بـ U-Net وحزمة PyTorch.',
      'تصنيف أورام المخ في الرنين المغناطيسي بـ ResNet.',
      'كشف الالتهاب الرئوي في أشعة الصدر.',
      'تحليل صور قاع العين للكشف عن اعتلال الشبكية.'
    ],
    tags: ['PyTorch', 'Torchvision', 'U-Net', 'ResNet', 'OpenCV', 'Scikit-Learn'],
    repo: 'https://github.com/'
  },
  roadmap: {
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',
    badgeKey: 'projects.genai',
    title: 'Roadmap GenAI',
    titleAr: 'مخطط GenAI',
    descEn: 'An AI-powered learning path planner that generates tailored developer roadmaps, tracks study sessions, pomodoro cycles, and visualizes progress.',
    descAr: 'مخطّط خرائط طريق بالذكاء الاصطناعي يُنشئ مسارات تعلم مخصصة مع تتبع الجلسات والتحليلات التقدمية.',
    featuresEn: [
      'Dynamic LLM roadmap generation for software engineering topics.',
      'Interactive study session tracker with Pomodoro focus timer.',
      'State management using Zustand with local persistence.',
      'Analytics charts rendered using Recharts.'
    ],
    featuresAr: [
      'توليد ديناميكي لخرائط التعلم بالنماذج اللغوية.',
      'مؤقت بومودورو تفاعلي لتتبع جلسات المذاكرة.',
      'إدارة حالة مرنة باستخدام Zustand.',
      'رسوم بيانية تحليلية عبر Recharts.'
    ],
    tags: ['Next.js', 'React', 'Zustand', 'Recharts', 'Tailwind CSS', 'Radix UI'],
    repo: 'https://github.com/'
  },
  bodyshift: {
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    badgeKey: 'projects.fullstack',
    title: 'BodyShift',
    titleAr: 'BodyShift',
    descEn: 'Production-ready fitness and workout tracking web application featuring user authentication, protected routes, and performance analytics.',
    descAr: 'تطبيق ويب لتتبع اللياقة التمارين مع مصادقة آمنة ولوحة تحكم محمية وتحليلات شهرية.',
    featuresEn: [
      'Secure Supabase Auth with Row Level Security (RLS).',
      'Full CRUD operations for daily workout logs & nutrient intake.',
      'Date filtering and monthly progress dashboard using Recharts.',
      'Strict input validation using Zod schemas.'
    ],
    featuresAr: [
      'مصادقة آمنة بـ Supabase مع حماية البيانات على مستوى السطر.',
      'إضافة وتعديل وحذف التمارين والسعرات اليومية.',
      'فلترة بالتاريخ ولوحة تحليلات شهرية بـ Recharts.',
      'تحقق صارم من المدخلات بواسطة Zod.'
    ],
    tags: ['Next.js 16', 'Supabase', 'TypeScript', 'Recharts', 'Zod', 'Tailwind CSS'],
    repo: 'https://github.com/'
  },
  dietmaker: {
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    badgeKey: 'projects.tool',
    title: 'DietMaker',
    titleAr: 'DietMaker',
    descEn: 'A high-performance FastAPI service that builds customized, printable PDF nutrition plans supporting Arabic typography and dynamic styling.',
    descAr: 'تطبيق FastAPI يُولّد خطط حمية مخصّصة بصيغة PDF مع دعم الخطوط العربية والتصميم التكيّفي.',
    featuresEn: [
      'Automated macro nutrient calculations based on user metrics.',
      'Jinja2 PDF rendering with full right-to-left Arabic text support.',
      'Configurable visual color themes and custom brand logos.',
      'Clean RESTful API endpoints.'
    ],
    featuresAr: [
      'حساب تلقائي للماكروز بناءً على بيانات المستخدم.',
      'قوالب Jinja2 وتحويل إلى PDF بدعم كامل للغة العربية.',
      'ثيمات وألوان مخصصة للتقرير.',
      'واجهة برمجية RESTful منسقة.'
    ],
    tags: ['FastAPI', 'Python', 'Jinja2', 'ReportLab / WeasyPrint', 'PDF Engine'],
    repo: 'https://github.com/'
  },
  agentslab: {
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="7" y1="16" x2="17" y2="16"/></svg>',
    badgeKey: 'projects.lab',
    title: 'Agents Lab',
    titleAr: 'مختبر الوكلاء',
    descEn: 'An experimental sandbox showcasing advanced RAG techniques, custom LLM agent tools, and structured JSON output parsers.',
    descAr: 'مساحة تجريبية لأنظمة RAG واستكشاف استرجاع المعلومات وتطبيق الوكلاء والتحكم بمخرجات النماذج.',
    featuresEn: [
      'Dense vector embedding search using ChromaDB.',
      'Tool-calling agent patterns for external API integration.',
      'Benchmark evaluations for context retrieval accuracy.',
      'Modular Python codebase for quick LLM prototyping.'
    ],
    featuresAr: [
      'بحث بالمترادفات والـ Embeddings باستخدام ChromaDB.',
      'أنماط استدعاء الأدوات الخارجية (Tool-calling).',
      'تقييم واسترجاع دقيق للسياق.',
      'بيئة برمجية نمطية لتجربة الأفكار السريعة.'
    ],
    tags: ['Python', 'RAG', 'ChromaDB', 'LangChain', 'OpenAI / Ollama', 'Pydantic'],
    repo: 'https://github.com/'
  }
};

/* ----------  State helpers  ---------- */
const STORAGE_LANG = 'portfolio-lang';
const STORAGE_THEME = 'portfolio-theme';

function getStoredLang() {
  return localStorage.getItem(STORAGE_LANG) || 'en';
}
function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_THEME);
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/* ----------  Apply language  ---------- */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.querySelector('.lang-current').textContent = lang === 'en' ? 'AR' : 'EN';

  localStorage.setItem(STORAGE_LANG, lang);
}

/* ----------  Apply theme  ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_THEME, theme);
}

/* ----------  Navbar scroll & progress state  ---------- */
function initNavAndProgress() {
  const navbar = document.getElementById('navbar');
  const progress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 30);
    if (backToTop) backToTop.classList.toggle('active', scrollY > 300);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    if (progress) progress.style.width = `${scrollPercent}%`;
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ----------  Mobile Nav Menu  ---------- */
function initMobileNav() {
  const menuBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('mobileNavOverlay');

  if (!menuBtn || !navLinks || !overlay) return;

  const toggle = (show) => {
    const active = show !== undefined ? show : !navLinks.classList.contains('active');
    navLinks.classList.toggle('active', active);
    menuBtn.classList.toggle('active', active);
    overlay.classList.toggle('active', active);
  };

  menuBtn.addEventListener('click', () => toggle());
  overlay.addEventListener('click', () => toggle(false));
  navLinks.querySelectorAll('a').forEach((l) => l.addEventListener('click', () => toggle(false)));
}

/* ----------  Reveal on scroll  ---------- */
function initReveal() {
  const targets = document.querySelectorAll('.section, .project-card, .skill-card, .stat, .timeline-item');
  targets.forEach((t) => t.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((t) => io.observe(t));
}

/* ----------  Active nav link on scroll (scrollspy)  ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((l) => {
            l.style.color = l.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => io.observe(s));
}

/* ----------  Project Filtering & Modal Details  ---------- */
function initProjectsAndModal() {
  const filterBtns = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const modalOverlay = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Filter tabs
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Modal open
  const openModal = (id) => {
    const data = PROJECT_DETAILS[id];
    if (!data || !modalOverlay) return;

    const isAr = document.documentElement.lang === 'ar';
    const dict = I18N[isAr ? 'ar' : 'en'];

    document.getElementById('modalIconBox').innerHTML = data.iconSvg;
    document.getElementById('modalBadge').textContent = dict[data.badgeKey] || data.badgeKey;
    document.getElementById('modalTitle').textContent = isAr ? data.titleAr : data.title;
    document.getElementById('modalDesc').textContent = isAr ? data.descAr : data.descEn;

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    const features = isAr ? data.featuresAr : data.featuresEn;
    features.forEach((f) => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresList.appendChild(li);
    });

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    data.tags.forEach((t) => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      tagsContainer.appendChild(span);
    });

    document.getElementById('modalRepoBtn').href = data.repo;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
    }
  };

  document.querySelectorAll('.btn-detail').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) openModal(card.getAttribute('data-id'));
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ----------  Toast Notification System  ---------- */
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

/* ----------  Contact Form & Copy Handlers  ---------- */
function initContact() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const form = document.getElementById('contactForm');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'ali.ashraf@example.com';
      navigator.clipboard.writeText(email).then(() => {
        const isAr = document.documentElement.lang === 'ar';
        showToast(isAr ? 'تم نسخ البريد الإلكتروني!' : 'Email address copied!');
      }).catch(() => {
        showToast('ali.ashraf@example.com');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const msg = document.getElementById('formMessage').value.trim();

      const isAr = document.documentElement.lang === 'ar';
      if (!name || !email || !msg) {
        showToast(isAr ? 'يرجى ملء كافة الحقول.' : 'Please complete all required fields.');
        return;
      }

      showToast(isAr ? `شكراً لك يا ${name}! تم إرسال رسالتك.` : `Thank you, ${name}! Message sent.`);
      form.reset();
    });
  }
}

/* ----------  Init Everything  ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // language & theme
  applyLang(getStoredLang());
  document.getElementById('langToggle').addEventListener('click', () => {
    const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    applyLang(current === 'en' ? 'ar' : 'en');
  });

  applyTheme(getStoredTheme());
  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });

  // modules
  initNavAndProgress();
  initMobileNav();
  initReveal();
  initScrollSpy();
  initProjectsAndModal();
  initContact();

  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
