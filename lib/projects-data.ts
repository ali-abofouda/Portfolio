export interface ProjectMetric {
  value: string;
  labelEn: string;
  labelAr: string;
}

export interface ProjectDetail {
  id: string;
  category: string;
  status: 'production' | 'upcoming';
  iconSvg: string;
  badgeKey: string;
  title: string;
  titleAr: string;
  descKey: string;
  metrics?: ProjectMetric[];
  featuresEn: string[];
  featuresAr: string[];
  tags: string[];
  repo: string;
  docsUrl?: string;
}

export interface TimelineEntry {
  id: string;
  dateEn: string;
  dateAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'hr-policy-rag': {
    id: 'hr-policy-rag',
    category: 'agents rag fullstack',
    status: 'production',
    iconSvg:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    badgeKey: 'projects.enterpriseRag',
    title: 'HR Policy RAG Assistant',
    titleAr: 'مساعد سياسات الموارد البشرية (Enterprise RAG)',
    descKey: 'projects.hr.desc',
    metrics: [
      { value: '100%', labelEn: 'LangSmith Correctness', labelAr: 'صحة الإجابات (LangSmith)' },
      { value: '90%', labelEn: 'Answer Groundedness', labelAr: 'الالتزام بالمصادر' },
      { value: '8/8', labelEn: 'Red Team Defense', labelAr: 'صد هجمات الاختراق' },
      { value: '50-100ms', labelEn: 'Semantic Cache Hit', labelAr: 'زمن الكاش الدلالي' },
      { value: '53/53', labelEn: 'Automated Tests', labelAr: 'اختبارات آلية ناجحة' },
      { value: '<5s', labelEn: 'Cloud Run Cold Start', labelAr: 'بدء التشغيل السحابي' },
    ],
    featuresEn: [
      'Domain-Driven dual serving architecture (FastAPI REST API + Streamlit/Chainlit UIs) orchestrated by a LangGraph ReAct state machine with LiteLLM failover (Gemini -> Groq) and LangGraph Studio canvas.',
      'Idempotent Parse-Once-to-JSON ETL across PDF, DOCX, PPTX, and TXT files into Qdrant Cloud Hybrid Search (Jina 768-dim dense + FastEmbed BM25 sparse with deterministic UUID5 upserts) and Cross-Encoder Re-ranking.',
      'ONNX-accelerated local Semantic Cache (cosine similarity >= 0.80) slashing repeat query latency from 6-7s down to 50-100ms.',
      'Three-tier defense-in-depth AI Guardrails (Model Armor + 6-turn history screening + category scope fencing + output verification) blocking 8/8 (100%) adversarial Red Team attacks.',
      'Automated LLM-as-a-Judge evaluation on LangSmith (100% Correctness, 90% Groundedness) and 53/53 passing unit and integration tests including headless Streamlit AppTest.',
      'Production Docker Compose stack and Google Cloud Run Dockerfile with build-time BM25 weight pre-warming (<5s cold start) and Google OAuth 2.0 email-whitelisted RBAC.',
    ],
    featuresAr: [
      'معمارية Domain-Driven بواجهتي تشغيل (FastAPI REST API وواجهة Streamlit/Chainlit) يديرها وكيل LangGraph ReAct مع موجه LiteLLM للتحويل التلقائي (Gemini -> Groq) ودعم LangGraph Studio.',
      'خط استيعاب Parse-Once-to-JSON لملفات PDF وDOCX وPPTX وTXT مع بحث هجين في Qdrant Cloud (متجهات Jina 768-dim + بحث BM25 عبر FastEmbed بمعرفات UUID5) وإعادة ترتيب بـ Cross-Encoder.',
      'كاش دلالي محلي مسرع بـ ONNX (تشابه >= 0.80) يقلص زمن الاستجابة للاستعلامات المتكررة من 6-7 ثوان إلى 50-100 مللي ثانية.',
      'دروع حماية ثلاثية الطبقات (Model Armor + فحص سياق 6 جولات + حصر النطاق + تدقيق المخرجات) صدت 8/8 (100%) من هجمات الـ Red Teaming.',
      'تقييم آلي LLM-as-a-Judge على LangSmith بنسبة 100% صحة و90% التزام بالمصادر، مع اجتياز 53/53 اختباراً آلياً شاملة Streamlit AppTest.',
      'حاويات Docker Compose وملف Dockerfile مهيأ لـ Google Cloud Run بتحميل مسبق لأوزان BM25 (بدء تشغيل أقل من 5 ثوان) وبوابة Google OAuth 2.0 للصلاحيات.',
    ],
    tags: [
      'LangGraph',
      'Qdrant Hybrid',
      'Cross-Encoder',
      'FastEmbed ONNX',
      'LiteLLM',
      'FastAPI',
      'LangSmith',
      'Docker & Cloud Run',
      'Google OAuth 2.0',
    ],
    repo: 'https://github.com/ali-abofouda/hr-policy-rag-assistant',
    docsUrl: 'https://github.com/ali-abofouda/hr-policy-rag-assistant/tree/main/docs',
  },
};

export const TIMELINE_ITEMS: TimelineEntry[] = [
  {
    id: 'hr-policy-rag',
    dateEn: '2026 — Present',
    dateAr: '2026 — الحالي',
    titleEn: 'AI & RAG Systems Engineer — HR Policy RAG Assistant',
    titleAr: 'مهندس أنظمة ذكاء اصطناعي وRAG — مشروع HR Policy RAG Assistant',
    descEn:
      'Engineered an end-to-end secure enterprise RAG system across three production phases: Qdrant Hybrid Search (Dense + BM25) with Cross-Encoder reranking, ONNX Semantic Cache (50-100ms), 3-tier AI Guardrails (8/8 Red Team pass), LangSmith LLM-as-a-Judge (100% Correctness / 90% Groundedness), FastAPI + Google OAuth 2.0, and Cloud Run containerization verified by 53/53 automated tests.',
    descAr:
      'تطوير نظام RAG مؤسسي آمن ومتكامل عبر ثلاث مراحل إنتاجية: بحث هجين على Qdrant مع Cross-Encoder، كاش دلالي بـ ONNX، دروع أمان صدت 8/8 هجمات Red Team، تقييم LangSmith بنسبة 100% صحة و90% التزام بالمصادر، خدمات FastAPI وبوابة Google OAuth 2.0، وحاويات Cloud Run واجتياز 53/53 اختباراً.',
  },
  {
    id: 'rag-mastery-handbook',
    dateEn: '2025 — 2026',
    dateAr: '2025 — 2026',
    titleEn: 'AI Engineering Architecture & Open-Source Handbook (rag-mastery)',
    titleAr: 'معمارية هندسة الذكاء الاصطناعي والدليل التقني المفتوح (rag-mastery)',
    descEn:
      'Authored structured engineering blueprints and technical glossaries covering RAG fundamentals, multi-format document ingestion, vector embeddings, stateful LangGraph orchestration, and production evaluation standards.',
    descAr:
      'صياغة أدلة معمارية وموسوعة مصطلحات تقنية تغطي أساسيات الـ RAG، معالجة المستندات متعددة الصيغ، تضمينات المتجهات، إدارة الحالة بـ LangGraph، ومعايير التقييم الإنتاجية.',
  },
  {
    id: 'tanta-engineering',
    dateEn: '2022 — 2026',
    dateAr: '2022 — 2026',
    titleEn: 'B.Sc. in Computer & Automatic Control Engineering — Tanta University',
    titleAr: 'بكالوريوس هندسة الحاسبات والتحكم الآلي — جامعة طنطا',
    descEn:
      'Focused on Artificial Intelligence, Distributed Software Systems, Algorithms, Data Engineering, and Clean Architecture foundations.',
    descAr:
      'التخصص في الذكاء الاصطناعي، الأنظمة البرمجية الموزعة، الخوارزميات، هندسة البيانات، وأساسيات المعمارية النظيفة.',
  },
];
