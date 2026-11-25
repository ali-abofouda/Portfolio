export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  [key: string]: string;
}

export const I18N: Record<Language, TranslationDictionary> = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Production System',
    'nav.timeline': 'Experience',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',

    'hero.status': 'Available for AI, RAG & FDE Engineering Roles',
    'hero.titleLine1': 'Ali Ashraf',
    'hero.subtitle': 'AI Systems & RAG Engineer',
    'hero.desc':
      'Architecting production-grade Agentic RAG pipelines, hybrid retrieval engines, defense-in-depth AI guardrails, and cloud-native LLM microservices — engineered for reliability and measurable evaluation.',
    'hero.viewWork': 'Explore System',
    'hero.viewResume': 'View CV',
    'hero.getInTouch': 'Contact Me',
    'hero.egypt': 'Egypt',
    'hero.simTabSpec': 'Node Spec',
    'hero.simTabTrace': 'Trace JSON',

    'about.title': 'About Me',
    'about.p1':
      'I am an AI & RAG Systems Engineer focused on turning foundation models into deterministic, auditable, and cloud-ready production software rather than fragile prototypes.',
    'about.p2':
      'My flagship system, the HR Policy RAG Assistant, combines LangGraph ReAct orchestration, Qdrant Cloud Hybrid Search (Dense + FastEmbed BM25) with Cross-Encoder reranking, ONNX semantic caching, and three-tier AI security guardrails.',
    'about.p3':
      'Every architecture I ship is backed by rigorous verification: automated LLM-as-a-Judge evaluations on LangSmith, adversarial Red Teaming suites, strict Pydantic v2 DTOs, Dockerized Cloud Run deployments, and comprehensive automated test suites.',
    'about.statCorrectness': 'LangSmith Correctness & Red Team Defense',
    'about.statTests': 'Automated Unit & Integration Tests Passing',
    'about.statLangs': 'Bilingual Interfaces (AR / EN)',

    'github.title': 'Live GitHub Telemetry',
    'github.tag': '// LIVE_REPOSITORY_STREAM',
    'github.publicRepos': 'Public Repositories',
    'github.followers': 'Followers',
    'github.stars': 'Total Stars',
    'github.viewRepo': 'View Repository',

    'skills.title': 'Production AI & Engineering Stack',
    'skills.ai': 'Agents, Orchestration & AI Security',
    'skills.backend': 'Hybrid RAG, Retrieval & Backend APIs',
    'skills.frontend': 'Interfaces & Access Governance',
    'skills.tools': 'Cloud, Containers & Automated Testing',

    'projects.title': 'Featured Production Architecture',
    'projects.tabAll': 'All Systems',
    'projects.tabAgents': 'Agentic AI',
    'projects.tabRag': 'Hybrid RAG',
    'projects.tabFullstack': 'Full-Stack & Cloud',
    'projects.viewDetails': 'Inspect Architecture & Metrics',
    'projects.viewDocs': 'Architecture Docs',
    'projects.enterpriseRag': 'Production System // Phases 1-3',
    'projects.kpiTitle': '// VERIFIED_PRODUCTION_BENCHMARKS',
    'projects.hr.desc':
      'Cloud-native enterprise HR policy resolution system powered by LangGraph ReAct, Qdrant Hybrid Search (Dense + BM25), Cross-Encoder reranking, ONNX Semantic Cache, 3-tier AI Guardrails, LiteLLM failover, and FastAPI/Streamlit serving on Google Cloud Run.',

    'timeline.title': 'Engineering Execution Log',

    'contact.title': 'Get In Touch',
    'contact.lead':
      'Available for full-time AI / RAG Engineering and Forward Deployed Engineering roles, technical collaborations, and production LLM system architecture.',
    'contact.copy': 'Copy',
    'contact.linkedin': 'LinkedIn Profile',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMessage': 'Message',
    'contact.formNamePlaceholder': 'Name or Organization',
    'contact.formMsgPlaceholder': 'Brief details about your role, project, or inquiry...',
    'contact.formSubmit': 'Send Message',

    'modal.metrics': 'Verified Production Benchmarks',
    'modal.keyFeatures': 'Architecture & Engineering Highlights',
    'modal.techStack': 'Production Technology Stack',
    'modal.viewRepo': 'View Repository',
    'modal.viewDocs': 'Read Architecture Docs',
    'modal.close': 'Close',

    'footer.built': 'Designed & Built with Clean Next.js, React & TypeScript',
  },

  ar: {
    'nav.about': 'عن المهندس',
    'nav.skills': 'التقنيات',
    'nav.projects': 'النظام الإنتاجي',
    'nav.timeline': 'الخبرات',
    'nav.contact': 'تواصل',
    'nav.resume': 'السيرة الذاتية',

    'hero.status': 'متاح لفرص هندسة الذكاء الاصطناعي وأنظمة RAG',
    'hero.titleLine1': 'علي أشرف',
    'hero.subtitle': 'مهندس أنظمة الذكاء الاصطناعي وRAG',
    'hero.desc':
      'تصميم وبناء أنظمة Agentic RAG الإنتاجية، محركات البحث الهجينة، دروع أمان الذكاء الاصطناعي، والخدمات السحابية المصغرة للنماذج اللغوية بمعايير قياس وتقييم صارمة.',
    'hero.viewWork': 'استعرض النظام',
    'hero.viewResume': 'عرض السيرة الذاتية',
    'hero.getInTouch': 'تواصل معي',
    'hero.egypt': 'مصر',
    'hero.simTabSpec': 'مواصفات العقدة',
    'hero.simTabTrace': 'مخرجات JSON',

    'about.title': 'من أنا',
    'about.p1':
      'أنا مهندس أنظمة ذكاء اصطناعي وRAG متخصص في تحويل النماذج اللغوية إلى أنظمة برمجية إنتاجية حقيقية قابلة للتدقيق والنشر السحابي بدلاً من النماذج التجريبية الأولية.',
    'about.p2':
      'نظامي الرئيسي المكتمل، HR Policy RAG Assistant، يجمع بين وكيل LangGraph ReAct والبحث الهجين على Qdrant Cloud (Dense + FastEmbed BM25) مع إعادة الترتيب Cross-Encoder، والكاش الدلالي ONNX، ودروع حماية ثلاثية الطبقات.',
    'about.p3':
      'كل نظام أطوره مدعوم باختبارات وتقييمات قياسية: تقييم آلي عبر LLM-as-a-Judge على LangSmith، اختبارات اختراق Red Teaming، عقود Pydantic v2 صارمة، حاويات Cloud Run، وحزم اختبارات آلية متكاملة.',
    'about.statCorrectness': 'صحة الإجابات وصد هجمات Red Team',
    'about.statTests': 'اختبارات وحدة وتكامل ناجحة',
    'about.statLangs': 'واجهات ثنائية اللغة (عربي / إنجليزي)',

    'github.title': 'بيانات GitHub المباشرة',
    'github.tag': '// LIVE_REPOSITORY_STREAM',
    'github.publicRepos': 'المستودعات العامة',
    'github.followers': 'المتابعين',
    'github.stars': 'إجمالي التقييمات',
    'github.viewRepo': 'عرض المستودع',

    'skills.title': 'البنية التقنية الإنتاجية',
    'skills.ai': 'الوكلاء، التوجيه وأمن الذكاء الاصطناعي',
    'skills.backend': 'البحث الهجين RAG وواجهات الخلفية',
    'skills.frontend': 'الواجهات وإدارة الصلاحيات',
    'skills.tools': 'السحابة، الحاويات والاختبارات الآلية',

    'projects.title': 'المعمارية الإنتاجية المعتمدة',
    'projects.tabAll': 'جميع الأنظمة',
    'projects.tabAgents': 'الوكلاء الذكيون',
    'projects.tabRag': 'أنظمة RAG الهجينة',
    'projects.tabFullstack': 'الأنظمة السحابية',
    'projects.viewDetails': 'استعراض المعمارية والنتائج',
    'projects.viewDocs': 'التوثيق الهندسي',
    'projects.enterpriseRag': 'نظام إنتاجي مكتمل // مراحل 1-3',
    'projects.kpiTitle': '// مؤشرات الأداء الموثقة في الإنتاج',
    'projects.hr.desc':
      'نظام مؤسسي سحابي لحوكمة واسترجاع سياسات الموارد البشرية يعتمد على LangGraph ReAct، البحث الهجين في Qdrant، إعادة الترتيب بـ Cross-Encoder، الكاش الدلالي ONNX، دروع أمان ثلاثية الطبقات، موجه LiteLLM، وخدمات FastAPI/Streamlit على Google Cloud Run.',

    'timeline.title': 'سجل التنفيذ الهندسي',

    'contact.title': 'تواصل معي',
    'contact.lead':
      'متاح لفرص العمل الكامل في هندسة أنظمة الذكاء الاصطناعي والـ RAG، وهندسة النشر الميداني (FDE)، وبناء الأنظمة الإنتاجية الموثوقة.',
    'contact.copy': 'نسخ',
    'contact.linkedin': 'ملف LinkedIn',
    'contact.formName': 'الاسم',
    'contact.formEmail': 'البريد الإلكتروني',
    'contact.formMessage': 'الرسالة',
    'contact.formNamePlaceholder': 'الاسم أو الشركة',
    'contact.formMsgPlaceholder': 'تفاصيل مختصرة عن الفرصة أو الاستفسار...',
    'contact.formSubmit': 'إرسال الرسالة',

    'modal.metrics': 'مؤشرات الأداء الموثقة',
    'modal.keyFeatures': 'أبرز الركائز المعمارية والهندسية',
    'modal.techStack': 'التقنيات المستخدمة في الإنتاج',
    'modal.viewRepo': 'عرض المستودع على GitHub',
    'modal.viewDocs': 'قراءة التوثيق المعماري',
    'modal.close': 'إغلاق',

    'footer.built': 'تم التصميم والتطوير بـ Next.js و React و TypeScript',
  },
};
