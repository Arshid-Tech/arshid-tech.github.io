export type Locale = 'fa' | 'en';

export interface ProjectItem {
  id: string;
  name: string;
  category: Record<Locale, string>;
  summary: Record<Locale, string>;
  url: Record<Locale, string>;
  external: boolean;
  domainLabel: string;
  githubUrl?: string;
}

export const COMPANY = {
  brand: {
    fa: 'آرشید تک',
    en: 'Arshid Tech',
  },
  tagline: {
    fa: 'توسعه نرم‌افزارهای عمودی و افقی برای حل چالش‌های واقعی حوزه سلامت و ارتقای کیفیت خدمات درمانی و آموزشی.',
    en: 'Building vertical and horizontal software designed to solve real healthcare challenges and elevate the quality of care.',
  },
  email: 'info@arshid.tech',
  githubOrg: 'https://github.com/Arshid-Tech',
  siteUrl: 'https://arshid.tech',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'geriapharm',
    name: 'GeriaPharm',
    category: {
      fa: 'مرجع بالینی سالمندان',
      en: 'Geriatric Clinical Reference',
    },
    summary: {
      fa: 'مرجع فارسی دارودرمانی سالمندان با قابلیت مطالعه آفلاین، ابزار بررسی نسخه و پنل مدیریت یکپارچه.',
      en: 'Persian geriatric pharmacotherapy reference built with offline access, structured prescription review, and an integrated administration panel.',
    },
    url: {
      fa: 'https://geriapharm.arshid.tech/',
      en: 'https://geriapharm.arshid.tech/',
    },
    external: true,
    domainLabel: 'geriapharm.arshid.tech',
    githubUrl: 'https://github.com/Arshid-Tech/GeriaPharm',
  },
  {
    id: 'antibioticplay',
    name: 'AntibioticPlay',
    category: {
      fa: 'آموزش دیجیتال داروسازی',
      en: 'Pharmacy Education',
    },
    summary: {
      fa: 'پلتفرم وب بازی‌وارسازی‌شده (PWA) برای یادگیری و تمرین آنتی‌بیوتیک‌ها، دوزاژ، مکانیسم اثر و دسته‌بندی دارویی.',
      en: 'Gamified web platform helping pharmacy students practice antibiotic selection, dosing, mechanisms of action, and classifications.',
    },
    url: {
      fa: 'https://antibioticplay.arshid.tech/',
      en: 'https://antibioticplay.arshid.tech/',
    },
    external: true,
    domainLabel: 'antibioticplay.arshid.tech',
    githubUrl: 'https://github.com/Arshid-Tech/antibioticplay',
  },
  {
    id: 'pharmacochem',
    name: 'Pharmacochem',
    category: {
      fa: 'بازی آموزشی جدی',
      en: 'Serious Game',
    },
    summary: {
      fa: 'شبیه‌ساز اتاق فرار مجازی برای تدریس شیمی دارویی؛ توسعه‌یافته بر اساس طرح پژوهشی دانشکده داروسازی دانشگاه علوم پزشکی البرز.',
      en: 'Virtual escape-room serious game for medicinal chemistry education, developed from a research initiative at Alborz University of Medical Sciences.',
    },
    url: {
      fa: 'https://pharmacochem.arshid.tech/',
      en: 'https://pharmacochem.arshid.tech/',
    },
    external: true,
    domainLabel: 'pharmacochem.arshid.tech',
    githubUrl: 'https://github.com/Arshid-Tech/Pharmacochem',
  },
  {
    id: 'hamrah-iv',
    name: 'Hamrah-IV',
    category: {
      fa: 'اپلیکیشن موبایل بالینی',
      en: 'Mobile Clinical Tool',
    },
    summary: {
      fa: 'اپلیکیشن موبایل فارسی و آفلاین برای بررسی سازگاری داروهای تزریقی وریدی (IV Compatibility) در محیط‌های بیمارستانی.',
      en: 'Offline-first Persian mobile application for checking intravenous (IV) drug compatibility at the point of care.',
    },
    url: {
      fa: '/products/hamrah-iv/',
      en: '/en/products/hamrah-iv/',
    },
    external: false,
    domainLabel: 'hamrah-iv.arshid.tech',
  },
];

export const CONTENT = {
  fa: {
    nav: {
      home: 'خانه',
      philosophy: 'فلسفه ما',
      portfolio: 'محصولات',
      blog: 'وبلاگ',
      contact: 'تماس',
      cta: 'تماس با ما',
      switchLang: 'English',
    },
    hero: {
      titleMain: 'فناوری سلامت،',
      titleAccent: 'ساخته‌شده برای ماندگاری',
      p1: 'حوزه سلامت همچنان با چالش‌های حل‌نشده بسیاری روبه‌رو است. در آرشید تک، نرم‌افزارهایی می‌سازیم که به کادر درمان، دانشجویان و بیماران کمک می‌کند خدمات دقیق‌تر و باکیفیت‌تری تجربه کنند.',
      p2: 'ما بر ساخت محصولات نرم‌افزاری عمودی (Vertical SaaS) و ابزارهای افقی (Horizontal SaaS) تمرکز داریم تا شکاف فناوری در سلامت را قدم‌به‌قدم و به‌صورت پایدار پر کنیم.',
      primaryCta: 'فلسفه و رویکرد ما',
      secondaryCta: 'مشاهده محصولات ما',
    },
    howItWorks: {
      frameLabel: 'نحوه کار ما',
      frameFooter: 'طراحی‌شده برای سلامت — ساخته‌شده برای ماندگاری',
      steps: [
        {
          title: 'شناسایی چالش‌های واقعی',
          desc: 'شروع از گلوگاه‌های واقعی بالینی و آموزشی',
        },
        {
          title: 'توسعه راهکارهای عمودی و افقی',
          desc: 'ساخت نرم‌افزارهای تخصصی و زیرساخت‌های مشترک',
        },
        {
          title: 'معماری پایدار و قابل اتکا',
          desc: 'سرعت، دقت داده و دسترسی آفلاین در لحظه نیاز',
        },
        {
          title: 'ارتقای مستمر کیفیت خدمات',
          desc: 'بهبود تدریجی و اثرگذار برای کادر درمان و مردم',
        },
      ],
      eyebrow: 'چرا آرشید تک',
      title: 'پر کردن شکاف فناوری در حوزه سلامت',
      p1: 'حوزه سلامت در بهره‌گیری از نرم‌افزارهای مدرن هنوز فاصله زیادی با ظرفیت واقعی خود دارد. بسیاری از فرآیندهای روزمره درمانی، دارویی و آموزشی همچنان بدون ابزارهای دقیق و قابل اتکا پیش می‌روند.',
      p2: 'در آرشید تک باور داریم که با طراحی هدفمند نرم‌افزارهای عمودی و افقی می‌توان این فاصله را به‌مرور کم کرد و کیفیت خدمات سلامت را برای مردم و متخصصان به‌شکل ملموسی ارتقا داد.',
      checks: [
        {
          title: 'تمرکز بر مسائل واقعی سلامت',
          desc: 'هر محصول برای حل یک نیاز مشخص بالینی، دارویی یا آموزشی طراحی می‌شود.',
        },
        {
          title: 'همگرایی راهکارهای عمودی و افقی',
          desc: 'از ابزارهای فوق‌تخصصی داروسازی تا پلتفرم‌های قابل گسترش در کل زنجیره سلامت.',
        },
        {
          title: 'نگاه بلندمدت به کیفیت و پایداری',
          desc: 'نرم‌افزار سلامت باید سال‌ها بدون اختلال در کنار متخصصان و مردم بماند.',
        },
      ],
    },
    approach: {
      eyebrow: 'رویکرد ما در مهندسی سلامت',
      title: 'فراتر از نرم‌افزار. ارتقای کیفیت مراقبت.',
      subtitle: 'ما به دنبال راه‌حل‌های مقطعی نیستیم. افق دید ما بهبود تدریجی و پایدار زیرساخت دیجیتال سلامت است؛ از طریق محصولاتی که اصطکاک را از دوش کادر درمان برمی‌دارند و دقت تصمیم‌گیری را بالا می‌برند.',
      cards: [
        {
          title: 'راهکارهای عمودی تخصصی (Vertical SaaS)',
          desc: 'طراحی ابزارهای دقیق برای نیازهای ویژه هر شاخه؛ از دارودرمانی سالمندان و سازگاری داروهای تزریقی تا آموزش تعاملی علوم دارویی.',
        },
        {
          title: 'زیرساخت‌ها و ابزارهای افقی (Horizontal SaaS)',
          desc: 'ساخت سامانه‌ها و ماژول‌های نرم‌افزاری قابل استفاده در مراکز مختلف سلامت برای یکپارچه‌سازی فرآیندها و کاهش خطاهای تکراری.',
        },
        {
          title: 'پایداری برای کادر درمان و مردم',
          desc: 'در حوزه سلامت، اختلال نرم‌افزار فقط یک مشکل فنی نیست بلکه ریسک است. به همین دلیل پایداری، سرعت و عملکرد آفلاین خط قرمز ماست.',
        },
      ],
    },
    quote: {
      eyebrow: 'فلسفه ما',
      quoteWhite: '«حوزه سلامت هنوز جای کار بسیار زیادی دارد.',
      quoteAqua: 'مسئولیت ما ساخت ابزارهایی است که این شکاف را پر کنند.»',
      body: 'ما معتقدیم فناوری زمانی در سلامت معنا پیدا می‌کند که به سادگی در جریان کار واقعی بنشیند، خطا را کاهش دهد و در نهایت کیفیت خدمات بهتری برای مردم فراهم کند. این مسیر یک مسابقه کوتاه نیست؛ یک تعهد بلندمدت است.',
    },
    portfolioPreview: {
      badge: 'محصولات و پلتفرم‌ها',
      titleMain: 'اکوسیستمی از نرم‌افزارهای',
      titleAccent: 'کاربردی حوزه سلامت',
      p1: 'محصولات ما حاصل تمرکز بر نیازهای واقعی داروسازان، دانشجویان علوم پزشکی و کادر درمان است. هر سامانه به‌صورت مستقل اما بر پایه یک استاندارد مهندسی مشترک توسعه یافته است.',
      openPlatform: 'ورود به سامانه',
      viewDetails: 'مشاهده جزئیات',
      allProducts: 'مشاهده صفحه محصولات',
    },
    cta: {
      title: 'آماده شروع یک همکاری هستید؟',
      subtitle: 'برای گفتگو درباره همکاری پژوهشی، استقرار محصولات یا توسعه راهکارهای جدید سلامت با ما در تماس باشید.',
      primaryBtn: 'تماس با ما',
      secondaryBtn: 'درباره فلسفه ما',
      card1Title: 'محصولات ما را ببینید',
      card1Desc: 'با پلتفرم‌ها و ابزارهای فعال آرشید تک در حوزه سلامت و داروسازی آشنا شوید.',
      card1Link: 'مشاهده محصولات',
      card2Title: 'یادداشت‌های فنی و وبلاگ',
      card2Desc: 'مطالب ما درباره معماری نرم‌افزار سلامت و فناوری‌های بالینی را بخوانید.',
      card2Link: 'ورود به وبلاگ',
    },
    philosophyPage: {
      badge: 'فلسفه ما',
      heroTitleMain: 'پشت هر چالش سلامت،',
      heroTitleAccent: 'فرصتی برای بهبود است',
      heroLead: 'نقش ما تبدیل این فرصت‌ها به نرم‌افزارهای ماندگار است.',
      heroP1: 'بسیاری از مشکلات روزمره در نظام سلامت و آموزش پزشکی نه از کمبود دانش، بلکه از نبود ابزارهای دیجیتال مناسب و در دسترس ناشی می‌شود.',
      heroP2: 'در آرشید تک، با ترکیب شناخت دقیق مسائل بالینی و مهندسی نرم‌افزار، محصولات عمودی و افقی می‌سازیم تا کیفیت خدمات سلامت به‌مرور و به‌شکل واقعی بهتر شود.',
      pillarsTitle: 'فلسفه کاری ما',
      pillarsSubtitle: 'تمام کارهای ما بر پایه یک باور ساده شکل گرفته است: فناوری باید کیفیت خدمات سلامت را برای مردم ملموس‌تر و بهتر کند.',
      pillars: [
        {
          title: 'نگاه بلندمدت',
          desc: 'بهبود زیرساخت دیجیتال سلامت یک پروژه کوتاه‌مدت نیست. ما محصولاتی می‌سازیم که برای سال‌ها نگهداری و تکامل یابند.',
        },
        {
          title: 'شروع از مسئله واقعی',
          desc: 'پیش از نوشتن هر خط کد، فرآیند واقعی کادر درمان و نیاز بیماران را بررسی می‌کنیم تا ابزار دقیقاً گره‌ای واقعی را باز کند.',
        },
        {
          title: 'سادگی و دقت بالینی',
          desc: 'نرم‌افزار سلامت باید بدون پیچیدگی اضافه، اطلاعات دقیق و قابل استناد را در کوتاه‌ترین زمان در اختیار کاربر بگذارد.',
        },
        {
          title: 'ساخت اعتماد پایدار',
          desc: 'شفافیت، پایداری فنی و پشتیبانی مستمر پایه رابطه ما با متخصصان، دانشگاه‌ها و کاربران محصولاتمان است.',
        },
      ],
      expectEyebrow: 'اصول توسعه در آرشید تک',
      expectTitle: 'چگونه نرم‌افزار می‌سازیم',
      expectItems: [
        {
          title: 'عمودی و تخصصی در جایی که عمق لازم است',
          desc: 'ساخت ابزارهای دقیق متناسب با جزئیات هر حوزه از داروسازی و درمان.',
        },
        {
          title: 'افقی و مقیاس‌پذیر در زیرساخت',
          desc: 'توسعه بسترهای مشترک برای کاهش دوباره‌کاری و تسریع دیجیتالی‌شدن خدمات.',
        },
        {
          title: 'دسترسی‌پذیر و آفلاین‌محور',
          desc: 'عملکرد روان حتی در شرایط محدودیت شبکه در محیط‌های درمانی.',
        },
        {
          title: 'همگام با پژوهش و دانشگاه',
          desc: 'پیوند دادن یافته‌های علمی و دانشگاهی با محصولات نرم‌افزاری کاربردی.',
        },
      ],
    },
    portfolioPage: {
      badge: 'محصولات',
      titleMain: 'اکوسیستمی از ابزارهای',
      titleAccent: 'نوآورانه حوزه سلامت',
      p1: 'در آرشید تک، هر محصول برای پاسخ به یک نیاز مشخص در زنجیره سلامت، داروسازی و آموزش علوم پزشکی شکل گرفته است. هدف ما ساخت ابزارهایی است که هم از نظر علمی دقیق باشند و هم در استفاده روزمره روان و قابل اتکا.',
      p2: 'از مراجع بالینی آفلاین‌محور تا پلتفرم‌های تعاملی آموزش داروسازی، مجموعه محصولات ما گام‌هایی عملی برای نزدیک‌تر کردن حوزه سلامت به استانداردهای روز فناوری هستند.',
    },
    contactPage: {
      badge: 'تماس با ما',
      titleMain: 'درباره همکاری یا پروژه بعدی',
      titleAccent: 'با ما گفتگو کنید',
      subtitle: 'اگر در زمینه سلامت دیجیتال، پژوهش دانشگاهی یا توسعه نرم‌افزارهای تخصصی دغدغه مشترکی دارید، خوشحال می‌شویم با شما گفتگو کنیم.',
      emailLabel: 'ایمیل مستقیم',
      githubLabel: 'سازمان گیت‌هاب',
    },
    footer: {
      companyHeading: 'شرکت',
      productsHeading: 'محصولات',
      contactHeading: 'تماس',
      getInTouch: 'ارتباط با ما',
      rights: '© ۲۰۲۶ آرشید تک. تمامی حقوق محفوظ است.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      philosophy: 'Philosophy',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
      cta: 'Get in Touch',
      switchLang: 'فارسی',
    },
    hero: {
      titleMain: 'Healthcare Software,',
      titleAccent: 'Built to Elevate Care',
      p1: 'Healthcare still faces major unresolved gaps in technology. At Arshid Tech, we build dependable software that helps clinicians, students, and organizations deliver higher-quality care.',
      p2: 'Through focused vertical and horizontal SaaS products, we work step by step to modernize healthcare workflows and close the gap between clinical knowledge and everyday digital tools.',
      primaryCta: 'See Our Philosophy',
      secondaryCta: 'Explore Our Products',
    },
    howItWorks: {
      frameLabel: 'HOW WE BUILD',
      frameFooter: 'Designed for Healthcare — Built to Last',
      steps: [
        {
          title: 'Identify Real Clinical Gaps',
          desc: 'Starting from real-world care and education bottlenecks',
        },
        {
          title: 'Build Vertical & Horizontal SaaS',
          desc: 'Purpose-built clinical apps and scalable shared systems',
        },
        {
          title: 'Engineer for Reliability',
          desc: 'Fast, verified, and offline-capable at the point of care',
        },
        {
          title: 'Elevate Care Over Time',
          desc: 'Practical improvements that steadily raise service quality',
        },
      ],
      eyebrow: 'WHY ARSHID TECH',
      title: 'Closing the Technology Gap in Healthcare',
      p1: 'Healthcare remains far behind its true digital potential. Too many clinical, pharmaceutical, and educational workflows still rely on fragmented tools or manual processes.',
      p2: 'We believe that steadily building thoughtful vertical and horizontal SaaS products is how we bridge that gap—raising the everyday quality of care for practitioners and the people they serve.',
      checks: [
        {
          title: 'Focused on real healthcare problems',
          desc: 'Every product starts with a concrete clinical, pharmacy, or educational need.',
        },
        {
          title: 'Vertical depth with horizontal reach',
          desc: 'Combining specialized clinical tools with scalable software foundations.',
        },
        {
          title: 'Long-term commitment to reliability',
          desc: 'Software engineered to stay dependable for clinicians and patients over years.',
        },
      ],
    },
    approach: {
      eyebrow: 'OUR APPROACH TO HEALTHCARE TECHNOLOGY',
      title: 'More Than Software. Better Care Outcomes.',
      subtitle: 'We are not here for short-lived prototypes. Our horizon is steady, lasting progress in health IT—removing friction from clinical workflows so professionals can focus on better outcomes.',
      cards: [
        {
          title: 'Vertical Clinical Solutions',
          desc: 'Deep, domain-specific SaaS tailored to real workflows—from geriatric pharmacotherapy and IV drug compatibility to interactive pharmacy education.',
        },
        {
          title: 'Horizontal Health Infrastructure',
          desc: 'Reusable software systems and operational tools designed to modernize recurring processes across healthcare teams and institutions.',
        },
        {
          title: 'Stability for Clinicians & Patients',
          desc: 'In healthcare, software disruption is not an inconvenience—it is risk. We prioritize offline resilience, verified data, and disciplined engineering.',
        },
      ],
    },
    quote: {
      eyebrow: 'OUR PHILOSOPHY',
      quoteWhite: '“Healthcare still has vast room to improve.',
      quoteAqua: 'Our responsibility is to build the tools that help close the gap.”',
      body: 'Technology in healthcare only matters when it fits naturally into real practice, reduces friction, and ultimately delivers better service to people. Modernizing care is not a short sprint—it is steady, long-term engineering work.',
    },
    portfolioPreview: {
      badge: 'PORTFOLIO',
      titleMain: 'An Ecosystem of Practical',
      titleAccent: 'Healthcare Software',
      p1: 'Each product in our portfolio addresses a specific need across clinical pharmacy, medical education, and healthcare workflows—built independently on shared engineering standards.',
      openPlatform: 'Open Platform',
      viewDetails: 'View Overview',
      allProducts: 'Explore Full Portfolio',
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Reach out to discuss a collaboration, institutional deployment, or our approach to healthcare software.',
      primaryBtn: 'Contact Us',
      secondaryBtn: 'Our Philosophy',
      card1Title: 'Explore Our Portfolio',
      card1Desc: 'See the active healthcare and pharmacy platforms built by Arshid Tech.',
      card1Link: 'View portfolio',
      card2Title: 'Engineering Notes',
      card2Desc: 'Read our articles on offline-first clinical architecture and digital health.',
      card2Link: 'Read the blog',
    },
    philosophyPage: {
      badge: 'OUR PHILOSOPHY',
      heroTitleMain: 'Every healthcare gap',
      heroTitleAccent: 'deserves a better tool',
      heroLead: 'Our role is to build practical software that closes it.',
      heroP1: 'Many everyday bottlenecks in healthcare and medical education stem not from a lack of expertise, but from a lack of reliable, purpose-built digital tools.',
      heroP2: 'At Arshid Tech, we combine domain understanding with disciplined software engineering to create vertical and horizontal SaaS products that steadily elevate the quality of care.',
      pillarsTitle: 'Our Philosophy',
      pillarsSubtitle: 'Everything we build is grounded in a simple belief: thoughtful technology can steadily raise the quality of healthcare for everyone.',
      pillars: [
        {
          title: 'We Think Long-Term',
          desc: 'Modernizing healthcare takes patience and persistence. We build products meant to be maintained, refined, and trusted over years.',
        },
        {
          title: 'We Start From Real Needs',
          desc: 'Before writing code, we study how clinicians, pharmacists, and students actually work so every tool solves a genuine bottleneck.',
        },
        {
          title: 'Clarity Over Complexity',
          desc: 'Clinical software should deliver accurate, verifiable information clearly—without visual noise or unnecessary friction.',
        },
        {
          title: 'We Earn Trust',
          desc: 'Transparency, technical reliability, and steady support guide how we build for healthcare professionals and academic partners.',
        },
      ],
      expectEyebrow: 'HOW WE WORK',
      expectTitle: 'What Defines Our Products',
      expectItems: [
        {
          title: 'Vertical depth where precision matters',
          desc: 'Specialized tools tailored to clinical pharmacy and healthcare workflows.',
        },
        {
          title: 'Horizontal foundations that scale',
          desc: 'Shared systems designed to reduce repetitive operational friction.',
        },
        {
          title: 'Offline-first resilience',
          desc: 'Dependable performance even when hospital or clinic connectivity drops.',
        },
        {
          title: 'Grounded in research and practice',
          desc: 'Bridging academic research with practical, everyday software.',
        },
      ],
    },
    portfolioPage: {
      badge: 'PORTFOLIO',
      titleMain: 'Building an Ecosystem of',
      titleAccent: 'Healthcare Innovators',
      p1: 'Every platform in the Arshid Tech portfolio is built to address a concrete gap in clinical pharmacy, medical education, or healthcare delivery—combining verified domain content with dependable engineering.',
      p2: 'From offline-first clinical references to interactive educational platforms, our products represent steady steps toward bringing modern software standards to everyday healthcare.',
    },
    contactPage: {
      badge: 'CONTACT',
      titleMain: 'Let’s talk about',
      titleAccent: 'better healthcare software',
      subtitle: 'Whether you are exploring an academic partnership, institutional deployment, or a new healthcare software initiative, we would be glad to hear from you.',
      emailLabel: 'Direct Email',
      githubLabel: 'GitHub Organization',
    },
    footer: {
      companyHeading: 'Company',
      productsHeading: 'Products',
      contactHeading: 'Contact',
      getInTouch: 'Get in Touch',
      rights: '© 2026 Arshid Tech. All rights reserved.',
    },
  },
};
