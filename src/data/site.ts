export type Locale = 'fa' | 'en';

export interface ProjectItem {
  id: string;
  name: string;
  tag: Record<Locale, string>;
  summary: Record<Locale, string>;
  stack: string[];
  url: Record<Locale, string>;
  external: boolean;
  domainLabel: string;
  githubUrl?: string;
  visibility: 'public' | 'private';
}

export const COMPANY = {
  brand: {
    fa: 'آرشید تک',
    en: 'Arshid Tech',
  },
  legalName: {
    fa: 'شرکت توسعه فناوری هوشمند آرشید (با مسئولیت محدود)',
    en: 'Arshid Smart Technology Development Co. (Ltd.)',
  },
  registrationNumber: {
    fa: '۶۷۷۵',
    en: '6775',
  },
  nationalId: {
    fa: '۱۴۰۱۵۸۳۴۸۶۱',
    en: '14015834861',
  },
  established: {
    fa: '۱۴۰۵/۰۸/۰۶',
    en: 'October 28, 2026 (1405/08/06 SH)',
  },
  address: {
    fa: 'استان تهران، شهرستان رباط کریم، بلوار شهید داود یوسفی (نیایش)، بن‌بست پامچال، پلاک ۱، طبقه ۱، واحد ۲',
    en: 'Unit 2, Floor 1, No. 1, Pamchal Alley, Shahid Davood Yousefi (Niayesh) Blvd, Robat Karim, Tehran Province, Iran',
  },
  postalCode: {
    fa: '۳۷۶۱۹۴۶۸۳۵',
    en: '3761946835',
  },
  email: 'info@arshid.tech',
  githubOrg: 'https://github.com/Arshid-Tech',
  siteUrl: 'https://arshid.tech',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'geriapharm',
    name: 'GeriaPharm',
    tag: {
      fa: 'مرجع بالینی سالمندان',
      en: 'Geriatric Clinical Reference',
    },
    summary: {
      fa: 'مرجع فارسی دارودرمانی سالمندان با رابط کاربری راست‌به‌چپ، مطالعه آفلاین، ابزار بررسی نسخه و پنل مدیریت متصل به سرور.',
      en: 'Persian reference for elderly drug therapy featuring offline reading, structured prescription review, and a backend-connected administration panel.',
    },
    stack: ['TypeScript', 'Vite', 'Node.js'],
    url: {
      fa: 'https://geriapharm.arshid.tech/',
      en: 'https://geriapharm.arshid.tech/',
    },
    external: true,
    domainLabel: 'geriapharm.arshid.tech',
    githubUrl: 'https://github.com/Arshid-Tech/GeriaPharm',
    visibility: 'public',
  },
  {
    id: 'antibioticplay',
    name: 'AntibioticPlay',
    tag: {
      fa: 'پلتفرم آموزش داروسازی',
      en: 'Pharmacy Education Platform',
    },
    summary: {
      fa: 'پلتفرم وب بازی‌وارسازی‌شده (PWA) برای دانشجویان داروسازی جهت یادگیری و تمرین آنتی‌بیوتیک‌ها، دوزاژ، مکانیسم اثر و دسته‌بندی دارویی.',
      en: 'Gamified progressive web platform built for pharmacy students to practice antibiotic selection, dosing, mechanisms of action, and drug classifications.',
    },
    stack: ['Vue 3 (PWA)', 'Flask', 'PostgreSQL'],
    url: {
      fa: 'https://antibioticplay.arshid.tech/',
      en: 'https://antibioticplay.arshid.tech/',
    },
    external: true,
    domainLabel: 'antibioticplay.arshid.tech',
    githubUrl: 'https://github.com/Arshid-Tech/antibioticplay',
    visibility: 'public',
  },
  {
    id: 'pharmacochem',
    name: 'Pharmacochem',
    tag: {
      fa: 'بازی آموزشی جدی (Serious Game)',
      en: 'Medicinal Chemistry Serious Game',
    },
    summary: {
      fa: 'شبیه‌ساز اتاق فرار مجازی برای تدریس مباحث شیمی دارویی؛ طراحی و توسعه‌یافته بر اساس طرح پژوهشی دانشکده داروسازی دانشگاه علوم پزشکی البرز.',
      en: 'Virtual escape-room serious game for teaching medicinal chemistry to pharmacy students, developed from a research project at Alborz University of Medical Sciences.',
    },
    stack: ['TypeScript', 'Interactive Web'],
    url: {
      fa: 'https://pharmacochem.arshid.tech/',
      en: 'https://pharmacochem.arshid.tech/',
    },
    external: true,
    domainLabel: 'pharmacochem.arshid.tech',
    githubUrl: 'https://github.com/Arshid-Tech/Pharmacochem',
    visibility: 'public',
  },
  {
    id: 'hamrah-iv',
    name: 'Hamrah-IV',
    tag: {
      fa: 'اپلیکیشن موبایل بالینی',
      en: 'Mobile Clinical Application',
    },
    summary: {
      fa: 'اپلیکیشن موبایل فارسی بررسی سازگاری داروهای تزریقی وریدی (IV Compatibility) با دیتابیس محلی SQLite، فیلتر مسیر تزریق و همگام‌سازی امن داده‌ها.',
      en: 'Offline-first Persian mobile app for intravenous (IV) drug compatibility lookup, built on local SQLite storage with route filtering and verified dataset updates.',
    },
    stack: ['React Native (Expo)', 'TypeScript', 'SQLite'],
    url: {
      fa: '/products/hamrah-iv',
      en: '/en/products/hamrah-iv',
    },
    external: false,
    domainLabel: 'hamrah-iv.arshid.tech',
    visibility: 'private',
  },
];

export const SERVICES = {
  fa: [
    {
      code: 'ISIC 620101',
      title: 'تولید و پشتیبانی نرم‌افزار سفارشی',
      description: 'طراحی و پیاده‌سازی سامانه‌های وب و موبایل منطبق با فرآیندهای واقعی سازمان‌ها، مراکز درمانی و نهادهای دانشگاهی.',
    },
    {
      code: 'ISIC 620102 · 582001',
      title: 'تولید و انتشار بسته‌های نرم‌افزاری',
      description: 'توسعه محصولات نرم‌افزاری تخصصی در حوزه سلامت، داروسازی و آموزش پزشکی با معماری پایدار و قابل نگهداری.',
    },
    {
      code: 'ISIC 620103',
      title: 'نرم‌افزارهای پایه، سیستمی و ابزارها',
      description: 'پیاده‌سازی پایپ‌لاین‌های داده، پایگاه‌داده‌های آفلاین‌محور (Local-First) و ابزارهای زیرساختی با تمرکز بر دقت و امنیت.',
    },
    {
      code: 'ISIC 732001',
      title: 'بازاریابی اینترنتی و سئوی فنی',
      description: 'معماری وب بهینه‌شده برای موتورهای جستجو، ساختاردهی محتوای تخصصی و استراتژی حضور دیجیتال برای محصولات نرم‌افزاری.',
    },
  ],
  en: [
    {
      code: 'ISIC 620101',
      title: 'Custom Software Development & Support',
      description: 'End-to-end engineering of web and mobile systems tailored to operational workflows in healthcare, academia, and enterprise teams.',
    },
    {
      code: 'ISIC 620102 · 582001',
      title: 'Software Packages & Product Publishing',
      description: 'Design, release, and long-term maintenance of specialized software products for clinical pharmacy and medical education.',
    },
    {
      code: 'ISIC 620103',
      title: 'System Software, Core Tools & Data Pipelines',
      description: 'Local-first storage architectures, verified dataset release pipelines, and foundational developer or operational tooling.',
    },
    {
      code: 'ISIC 732001',
      title: 'Digital Marketing & Technical SEO',
      description: 'Search-engineered web architecture, structured metadata, and sustainable organic acquisition for technical and HealthTech products.',
    },
  ],
};

export const UI = {
  fa: {
    nav: {
      products: 'محصولات',
      services: 'خدمات',
      blog: 'وبلاگ',
      about: 'درباره شرکت',
      contact: 'تماس',
      switchLang: 'English',
    },
    hero: {
      eyebrow: 'شرکت توسعه فناوری هوشمند آرشید',
      title: 'مهندسی نرم‌افزارهای دقیق برای سلامت، داروسازی و سیستم‌های تخصصی',
      subtitle: 'در آرشید تک، ابزارهای تصمیم‌یار بالینی، پلتفرم‌های آموزش داروسازی و نرم‌افزارهای سفارشی را با تمرکز بر پایداری، سرعت و دسترسی آفلاین طراحی و پشتیبانی می‌کنیم.',
      primaryCta: 'مشاهده محصولات',
      secondaryCta: 'ارتباط با ما',
    },
    sections: {
      productsEyebrow: 'پلتفرم‌ها و محصولات فعال',
      productsTitle: 'نرم‌افزارهای توسعه‌یافته در آرشید تک',
      productsSubtitle: 'دسترسی مستقیم به سامانه‌های وب، ابزارهای آموزشی و اپلیکیشن‌های موبایل ما روی زیرساخت arshid.tech.',
      openApp: 'ورود به سامانه',
      viewProduct: 'صفحه معرفی محصول',
      sourceCode: 'کد منبع (GitHub)',
      privateSource: 'سورس اختصاصی',
      servicesEyebrow: 'حوزه‌های رسمی فعالیت',
      servicesTitle: 'خدمات مهندسی و تولید نرم‌افزار',
      servicesSubtitle: 'خدمات ما بر اساس موضوع فعالیت ثبت‌شده شرکت، از طراحی نرم‌افزارهای سفارشی تا ابزارهای سیستمی و رشد دیجیتال را پوشش می‌دهد.',
      blogEyebrow: 'یادداشت‌های فنی و تخصصی',
      blogTitle: 'تازه‌ترین مطالب وبلاگ',
      allPosts: 'مشاهده همه مقالات',
      readMore: 'مطالعه مقاله',
      aboutEyebrow: 'شناسنامه حقوقی و مهندسی',
      aboutTitle: 'شفافیت، مسئولیت‌پذیری و پشتیبانی مستمر',
      aboutBody: 'شرکت توسعه فناوری هوشمند آرشید (با مسئولیت محدود) با رویکردی محصول‌محور و پژوهشی، بر ساخت نرم‌افزارهایی تمرکز دارد که در محیط‌های واقعی درمانی و دانشگاهی کار کنند. ما در طراحی هر محصول، استانداردهای مهندسی نرم‌افزار، پایداری داده و تجربه کاربری بدون پیچیدگی اضافه را در اولویت قرار می‌دهیم.',
      contactTitle: 'شروع همکاری یا سفارش نرم‌افزار',
      contactSubtitle: 'برای همکاری پژوهشی، استقرار سازمانی محصولات یا سفارش توسعه نرم‌افزار، از طریق ایمیل رسمی با ما در تماس باشید.',
    },
    footer: {
      legalHeading: 'اطلاعات ثبتی شرکت',
      regLabel: 'شماره ثبت',
      nationalIdLabel: 'شناسه ملی',
      postalLabel: 'کدپستی',
      linksHeading: 'دسترسی سریع',
      productsHeading: 'محصولات',
      rights: 'تمامی حقوق برای شرکت توسعه فناوری هوشمند آرشید محفوظ است.',
    },
  },
  en: {
    nav: {
      products: 'Products',
      services: 'Services',
      blog: 'Blog',
      about: 'Company',
      contact: 'Contact',
      switchLang: 'فارسی',
    },
    hero: {
      eyebrow: 'Arshid Smart Technology Development Co.',
      title: 'Dependable software engineering for healthcare, pharmacy, and specialized systems',
      subtitle: 'At Arshid Tech, we build clinical decision support tools, pharmacy education platforms, and custom software engineered for offline reliability, speed, and long-term maintainability.',
      primaryCta: 'Explore Products',
      secondaryCta: 'Contact Us',
    },
    sections: {
      productsEyebrow: 'Active Platforms & Products',
      productsTitle: 'Software built by Arshid Tech',
      productsSubtitle: 'Direct access to our live clinical references, educational web platforms, and mobile applications hosted under arshid.tech.',
      openApp: 'Open Platform',
      viewProduct: 'Product Overview',
      sourceCode: 'Source (GitHub)',
      privateSource: 'Private Source',
      servicesEyebrow: 'Registered Scope of Operations',
      servicesTitle: 'Software Engineering & Digital Services',
      servicesSubtitle: 'Aligned with our official corporate charter, spanning custom application development, software packages, system tooling, and technical SEO.',
      blogEyebrow: 'Engineering & HealthTech Notes',
      blogTitle: 'Latest from the Blog',
      allPosts: 'View all articles',
      readMore: 'Read article',
      aboutEyebrow: 'Corporate Profile',
      aboutTitle: 'Built for clinical precision and long-term support',
      aboutBody: 'Arshid Smart Technology Development Co. (Ltd.) is a registered Iranian software company focused on practical digital health tools, university research collaborations, and custom software systems. We prioritize clean architecture, verifiable datasets, and uncluttered interfaces.',
      contactTitle: 'Collaborate or commission software',
      contactSubtitle: 'For institutional deployments, academic collaborations, or custom software projects, reach out via our official email.',
    },
    footer: {
      legalHeading: 'Corporate Registration',
      regLabel: 'Reg. No.',
      nationalIdLabel: 'National ID',
      postalLabel: 'Postal Code',
      linksHeading: 'Navigation',
      productsHeading: 'Products',
      rights: 'All rights reserved by Arshid Smart Technology Development Co. (Ltd.).',
    },
  },
};
