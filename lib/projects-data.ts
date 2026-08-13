export interface ProjectDetail {
  id: string;
  category: string;
  iconSvg: string;
  badgeKey: string;
  title: string;
  titleAr: string;
  descKey: string;
  featuresEn: string[];
  featuresAr: string[];
  tags: string[];
  repo: string;
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  hakeem: {
    id: 'hakeem',
    category: 'agents genai',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6v3.8c0 .2.1.3.3.3h3.8c.2 0 .3-.1.3-.3V2.6a.3.3 0 0 0-.3-.3H4.8z"/><path d="M14 12v-2a4 4 0 0 0-4-4H8"/><rect x="2" y="16" width="20" height="6" rx="2"/><path d="M6 12h12"/></svg>',
    badgeKey: 'projects.graduation',
    title: 'Hakeem AI (Multi-Agent System)',
    titleAr: 'حكيم AI (نظام متعدد الوكلاء)',
    descKey: 'projects.hakeem.desc',
    featuresEn: [
      'Multi-agent clinical symptom extraction using LangGraph graph workflows.',
      'Stateful conversation tracking backed by PostgreSQL persistence.',
      'FastAPI async architecture with real-time JSON response streaming.',
      'Structured clinical diagnostic reports with confidence metrics.'
    ],
    featuresAr: [
      'استخراج الأعراض سريرياً عبر وكلاء متعددي المهام بـ LangGraph.',
      'تتبع المحادثات وحفظ الحالة بـ PostgreSQL.',
      'معمارية لا تزامنية بـ FastAPI مع بث المخرجات فورياً.',
      'تقارير تشخيصية سريرية منظمة مع نسب دقة.'
    ],
    tags: ['LangGraph', 'LLM Agents', 'FastAPI', 'PostgreSQL', 'Python', 'JSON Schema'],
    repo: 'https://github.com/'
  },
  agentslab: {
    id: 'agentslab',
    category: 'agents rag genai',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="7" y1="16" x2="17" y2="16"/></svg>',
    badgeKey: 'projects.lab',
    title: 'Agents & RAG Lab',
    titleAr: 'مختبر الوكلاء وأنظمة RAG',
    descKey: 'projects.agents.desc',
    featuresEn: [
      'Dense vector embedding search using ChromaDB vector store.',
      'Tool-calling agent patterns for external API integration.',
      'Benchmark evaluations for context retrieval accuracy.',
      'Modular Python codebase for quick LLM prototyping.'
    ],
    featuresAr: [
      'بحث بمترادفات المتجهات بـ ChromaDB Vector Store.',
      'أنماط استدعاء الأدوات الخارجية (Tool-calling).',
      'تقييم ودراسة دقة استرجاع السياق.',
      'بيئة برمجية نمطية لتجربة نماذج اللغة.'
    ],
    tags: ['RAG Pipeline', 'ChromaDB', 'LangChain', 'Tool Calling', 'Python', 'Pydantic'],
    repo: 'https://github.com/'
  },
  roadmap: {
    id: 'roadmap',
    category: 'genai fullstack',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',
    badgeKey: 'projects.genai',
    title: 'Roadmap GenAI Platform',
    titleAr: 'منصة مخطط GenAI',
    descKey: 'projects.roadmap.desc',
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
    tags: ['Generative AI', 'Next.js 15', 'React', 'Zustand', 'Recharts', 'Tailwind CSS'],
    repo: 'https://github.com/'
  },
  cnn: {
    id: 'cnn',
    category: 'rag',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>',
    badgeKey: 'projects.research',
    title: 'Medical Vision AI Models',
    titleAr: 'نماذج الرؤية الحاسوبية الطبية',
    descKey: 'projects.cnn.desc',
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
  bodyshift: {
    id: 'bodyshift',
    category: 'fullstack',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    badgeKey: 'projects.fullstack',
    title: 'BodyShift Application',
    titleAr: 'تطبيق BodyShift',
    descKey: 'projects.bodyshift.desc',
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
    tags: ['Next.js 15', 'Supabase', 'TypeScript', 'Recharts', 'Zod', 'Tailwind CSS'],
    repo: 'https://github.com/'
  },
  dietmaker: {
    id: 'dietmaker',
    category: 'fullstack',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    badgeKey: 'projects.tool',
    title: 'DietMaker Service',
    titleAr: 'خدمة DietMaker المصغرة',
    descKey: 'projects.diet.desc',
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
  }
};
