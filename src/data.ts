import { Experience, Project, Education, Achievement, Service, SkillCategory } from './types';

export const personalInfo = {
  name: 'Abdul Haseeb',
  title: 'Full-Stack JavaScript & React Native Developer',
  email: 'abdulhaseeb158441@gmail.com',
  phone: '03158494192',
  location: 'Karachi, Sindh, Pakistan',
  linkedin: 'https://linkedin.com/in/abdul-haseeb-1980b516a',
  github: 'https://github.com', // fallback default link
  summary: 'Results-driven Full-Stack Developer with 5+ years of hands-on experience in React Native and React.js, delivering 10+ production-ready mobile and web applications across e-commerce, logistics, real estate, and food delivery domains. Proven ability to own complete project lifecycles from UI/UX design to deployment and store submissions.',
  yearsOfExperience: 5,
  completedProjects: 10,
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'C#', 'PHP', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Frontend / Mobile',
    skills: ['React Native', 'React.js', 'Expo', 'Flutter', 'Redux', 'Context API', 'Hooks', 'jQuery', 'Webpack', 'Babel']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Laravel', '.NET Framework (ASP.NET MVC)', 'GraphQL', 'RESTful APIs', 'Prisma ORM']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'Firebase Firestore']
  },
  {
    title: 'Testing & Quality',
    skills: ['Jest', 'React Native Testing Library', 'Unit Testing', 'Debugging', 'QA Collaboration']
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Jira', 'Postman', 'Firebase', 'Magento', 'CodeIgniter', 'Agile/Scrum', 'CI/CD Pipelines']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (S3, EC2 Basics)', 'Docker Fundamentals', 'App Store Deployment', 'Play Store Deployment']
  },
  {
    title: 'Soft Skills',
    skills: ['Cross-functional Collaboration', 'Remote Teamwork', 'Technical Mentorship', 'Code Review', 'Problem-solving']
  }
];

export const experiences: Experience[] = [
  {
    company: 'Devronix Solutions LLC',
    position: 'React Native Developer',
    duration: 'August 2020 – June 2026',
    location: 'Karachi, Pakistan',
    responsibilities: [
      'Architected and shipped 10+ production-ready cross-platform mobile applications in React Native, achieving 95%+ code reusability between iOS and Android platforms.',
      'Led mobile development using React Hooks, Context API, and Redux for state management, improving application performance by 40%.',
      'Built reusable component libraries and optimized CI/CD build processes, reducing development time by 30%.',
      'Integrated RESTful APIs and GraphQL endpoints with efficient data-fetching strategies, reducing unnecessary API calls by 25% and improving overall app responsiveness.',
      'Wrote and maintained unit tests using Jest, collaborated with QA teams on debugging workflows, and established code review practices that reduced bug reports by 35%.',
      'Mentored junior developers in React Native best practices, Agile ceremonies, and Git workflows, improving team velocity across sprints.',
      'Deployed mobile applications to both Apple App Store and Google Play Store, managing release cycles and post-launch production support.'
    ],
    technologies: ['React Native', 'React Hooks', 'Context API', 'Redux', 'GraphQL', 'RESTful APIs', 'Jest', 'CI/CD', 'Agile']
  },
  {
    company: 'Midware Technologies Pvt Ltd',
    position: 'React.js & React Native Developer',
    duration: 'July 2019 – July 2020',
    location: 'Karachi, Pakistan',
    responsibilities: [
      'Developed responsive React.js web applications using component-based architecture with Webpack and Babel toolchains, improving maintainability and reducing technical debt.',
      'Built and deployed multiple React Native mobile apps with seamless third-party library and native module integration.',
      'Optimized application performance through code splitting, lazy loading, and efficient rendering techniques, achieving 50% faster load times.',
      'Integrated RESTful APIs and Firebase for real-time data handling, authentication, and push notifications.',
      'Participated in full Agile/Scrum cycles — sprint planning, daily standups, backlog grooming, and retrospectives — ensuring consistent on-time delivery.'
    ],
    technologies: ['React.js', 'React Native', 'Webpack', 'Babel', 'Firebase', 'RESTful APIs', 'Lazy Loading', 'Agile']
  },
  {
    company: 'Smart Soft Solution',
    position: '.NET Developer',
    duration: 'March 2017 – March 2019',
    location: 'Karachi, Pakistan',
    responsibilities: [
      'Designed and implemented full-stack web applications using ASP.NET MVC, C#, and SQL Server, supporting 1,000+ concurrent users.',
      'Developed RESTful APIs and integrated front-end interfaces using JavaScript and jQuery.',
      'Implemented database query optimization strategies, reducing execution time by 45% and significantly improving application throughput.',
      'Collaborated with QA teams to build unit testing suites and debugging processes, achieving 90%+ test coverage across core modules.'
    ],
    technologies: ['.NET Framework', 'ASP.NET MVC', 'C#', 'SQL Server', 'RESTful APIs', 'JavaScript', 'jQuery', 'Database Optimization']
  }
];

export const projects: Project[] = [
  {
    title: 'Rizq Mart Grocery Platform',
    category: 'E-commerce Ecosystem',
    description: 'Developed and maintained the complete Rizq Mart grocery ecosystem, including Android & iOS mobile applications (Flutter) and Laravel-based backend services, delivering a seamless online grocery shopping experience.',
    features: [
      'Implemented core e-commerce features such as product catalog management, user authentication, cart and checkout flow, order management, secure payments, real-time order tracking, notifications, and promotional offers.',
      'Managed the full software development lifecycle, including API development and integration, performance optimization, testing, deployment, bug fixing, and ongoing production support for both Android and iOS platforms.',
      'Built and integrated scalable Laravel REST API services to sync inventory, manage users, and deliver instant transactional updates.'
    ],
    technologies: ['Flutter', 'Laravel', 'PHP', 'E-commerce Platform', 'Mobile App Development', 'REST APIs', 'MySQL'],
    webUrl: 'https://rizq-mart.com/',
    appStoreUrl: 'https://apps.apple.com/us/app/rizq-mart/id6753622737',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rizq.mart',
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'Motboy Driver Application',
    category: 'Mobile App Development',
    description: 'Fully developed high-performance React Native driver-focused application from UI design to production deployment, featuring real-time logistics tracking and booking management workflows.',
    features: [
      'Built complete driver workflows including login, ride/order management, status updates, and live tracking.',
      'Integrated APIs for real-time data sync and driver activity management.',
      'Managed end-to-end debugging, testing, and production-ready store releases.'
    ],
    technologies: ['React Native', 'Mobile App Development', 'RESTful APIs', 'Real-time Sync', 'Rider Workflow'],
    apkUrl: 'https://demo.digitalsetgo.com/moto_admin/Motoboy_rider.apk',
    platforms: ['iOS', 'Android']
  },
  {
    title: 'Motboy Customer Application',
    category: 'Mobile App Development',
    description: 'Independently developed customer-facing e-commerce/on-demand booking React Native mobile application, optimizing client reservation pipelines and real-time order tracking.',
    features: [
      'Implemented features such as user authentication, order/booking flow, live tracking, and push notifications.',
      'Integrated backend APIs and optimized mobile performance specifically for iOS and Android environments.',
      'Handled full application lifecycle including local sandbox development, testing, and multi-store release support.'
    ],
    technologies: ['React Native', 'Mobile App Development', 'API Integration', 'User Auth', 'Performance Optimization'],
    apkUrl: 'https://demo.digitalsetgo.com/moto_admin/Motoboy_delivery.apk',
    platforms: ['iOS', 'Android']
  },
  {
    title: 'Motboy Admin Panel',
    category: 'Web Admin Dashboard',
    description: 'A powerful centralized web administration dashboard developed with CodeIgniter to control and monitor the entire Motboy driver and customer fleet ecosystem.',
    features: [
      'Fully developed the administrative control panel from the ground up using CodeIgniter PHP.',
      'Built specialized modules for user management, driver management, orders, reporting, and live ride tracking.',
      'Integrated real-time live monitoring and robust backend API system support for mobile clients.',
      'Managed server deployment, load balancing configuration, and post-launch production issue resolution.'
    ],
    technologies: ['CodeIgniter', 'PHP', 'Admin Dashboard', 'Real-time Monitoring', 'Web Panels'],
    platforms: ['Web']
  },
  {
    title: 'Adil Store E-commerce Application & Web',
    category: 'E-commerce Supermarket App',
    description: 'A premium, high-speed mobile e-commerce supermarket application designed for "Adil - The Home of Indian Food Stuff". Integrates with custom API backends to synchronize categories (Beverages, Spices, Flours, Rice), manage dynamic search, handle user wishlists, and execute checkout flows.',
    features: [
      'Developed the fully-featured supermarket mobile application supporting multicountry operations (UAE, Bahrain, Oman, Saudi Arabia, India).',
      'Implemented real-time item catalog navigation including local search filters, dynamic category rails (e.g. Beverages, Daily Essentials), and active order tracking.',
      'Designed a vibrant, conversion-focused promotional banner engine featuring customer support details, hot deals (such as Joshi\'s Bhakri crispy snacks), and custom badges.',
      'Configured high-fidelity mobile UI elements including interactive plus/minus cart controls, favorite wishlist highlights, and sticky navigation tabs.'
    ],
    technologies: ['React Native', 'Magento API', 'E-commerce UI', 'Redux State', 'RESTful Services'],
    webUrl: 'https://adilstore.com/',
    appStoreUrl: 'https://apps.apple.com/ae/app/adil-store/id1532754654',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aladil.android&hl=en',
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'DishDish Cookbook App & Web Platform',
    category: 'Web & Mobile Application',
    description: 'Designed and built an elegant, modern community recipe catalog and social cooking platform consisting of a React Native client and a custom Laravel web backend.',
    features: [
      'Designed and developed the complete user-friendly UI/UX experience for the DishDish mobile application and web platform.',
      'Built the responsive mobile application in React Native and the stable web platform using Laravel PHP.',
      'Managed the project end-to-end including custom database design, development, debugging, and production deployments.',
      'Implemented recipe listings, granular category filters, advanced elastic search, personal favorites, and authentication.',
      'Developed and integrated secure REST APIs for seamless synchronization between the mobile app, web dashboard, and server.',
      'Built comprehensive administrative modules for recipe moderation, content management, and user profiles.'
    ],
    technologies: ['React Native', 'Laravel', 'UI/UX Design', 'REST APIs', 'Admin Modules', 'MySQL'],
    webUrl: 'https://dishdish.us/',
    appStoreUrl: 'https://apps.apple.com/us/app/dish-dish-online-cookbook/id649276240',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dishdish.cookbook',
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'Tyloz Cleaning Service – Cleaner & Customer Applications',
    category: 'Mobile Application',
    description: 'A dual-app on-demand booking ecosystem featuring a dedicated Cleaner service app and a Customer reservation app engineered to organize home cleaning schedules.',
    features: [
      'Developed both the Cleaner application and Customer booking application from scratch in React Native.',
      'Built the complete booking workflow from UI design to mobile development, automated testing, and store deployment.',
      'Implemented features such as secure user authentication, service scheduling, cleaner assignment, live booking status updates, and push notifications.',
      'Integrated robust REST APIs with a Laravel backend to maintain real-time data sync across both mobile clients.',
      'Developed backend modules in Laravel for automated booking management, customer records, cleaner profiles, and admin operations.',
      'Worked on thorough bug fixing, API issue resolution, server scaling, and production support.'
    ],
    technologies: ['React Native', 'Laravel', 'Mobile Application', 'REST APIs', 'On-demand Booking'],
    platforms: ['iOS', 'Android']
  },
  {
    title: 'Four Apple – Real Estate Agent Application & CRM Tool',
    category: 'CRM & Mobile Application',
    description: 'An enterprise-grade real estate ecosystem featuring a portable React Native mobile application for on-the-field agents and a Laravel CRM admin backend system.',
    features: [
      'Developed the Real Estate Agent mobile application in React Native and built the CRM and backend systems in Laravel.',
      'Managed the project from custom UI/UX design to development, testing, debugging, and cloud deployment.',
      'Implemented features such as agent secure login, interactive property listings, lead management, client follow-up schedules, appointment bookings, and automated notifications.',
      'Developed custom CRM modules for property management, lead tracking, customer history records, analytics reporting, and admin controls.',
      'Integrated REST APIs for real-time, seamless data flow between the agent mobile application and CRM server.',
      'Worked on production issue resolution, API performance optimization, and reliable deployment support.'
    ],
    technologies: ['React Native', 'Laravel', 'CRM & Admin', 'Lead Tracking', 'API Optimization'],
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'First Souq – E-commerce Application & Web Platform',
    category: 'E-commerce Platform',
    description: 'A premium, high-fidelity e-commerce mobile application and web platform styled with advanced fluid interactive animations and smooth native screen transitions.',
    features: [
      'Developed the mobile e-commerce application in React Native with advanced animation effects and smooth user interactions.',
      'Built the fully responsive web platform and database administration backend systems in Laravel.',
      'Implemented key commercial features including product catalogs, category filters, cart management, checkout, order tracking, and user auth.',
      'Designed and developed high-quality custom UI animations, custom screen transitions, and interactive product display flows.',
      'Integrated stable REST APIs for rapid product, customer, and order management.',
      'Managed end-to-end debugging, performance optimization, and play store / app store deployment.'
    ],
    technologies: ['React Native', 'Laravel', 'E-commerce', 'Advanced Animations', 'UI transitions'],
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'Azaro – Multi-Vendor E-commerce Application & Web Platform',
    category: 'Multi-Vendor Marketplace',
    description: 'A heavy-duty multi-vendor marketplace platform featuring an interactive React Native consumer app and a Laravel multi-seller backend system with dedicated vendor consoles.',
    features: [
      'Developed the multi-vendor e-commerce mobile application in React Native and the web platform / backend system in Laravel.',
      'Implemented advanced animation effects, smooth screen transitions, and highly interactive custom UI elements.',
      'Developed marketplace specific features including self-serve vendor onboarding, dedicated vendor dashboards, product inventory management, customer orders, shopping carts, checkout, and shipping tracking.',
      'Built complex admin modules for multi-seller product listings, automated commission management, vendor payout flows, and master admin controls.',
      'Integrated REST APIs for real-time synchronization between the mobile consumer app, merchant web platform, individual vendor consoles, and backend server.',
      'Worked on heavy performance optimization, query bug fixing, production scaling, and secure server deployment.'
    ],
    technologies: ['React Native', 'Laravel', 'Multi-Vendor Marketplace', 'Vendor Dashboards', 'Commission Management'],
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'Future Fit – Mobile Application & Admin Panel',
    category: 'Web & Mobile Application',
    description: 'A comprehensive fitness tracking and subscriber management application with a React Native app and a Laravel-driven admin dashboard.',
    features: [
      'Developed the Future Fit client mobile application in React Native and built the administration backend system in Laravel.',
      'Managed the project end-to-end from initial UI/UX wireframing, development, security testing, and deployment.',
      'Implemented user authentication, interactive fitness schedules/plans, user progress trackers, push notifications, and recurring subscription payment management.',
      'Developed admin modules for user accounts management, exercise/content library management, subscription reporting, and business analytics.',
      'Integrated REST APIs for real-time, low-latency synchronization between the athlete mobile app and admin backend.',
      'Worked on mobile performance tuning, offline caching, and production-ready store releases.'
    ],
    technologies: ['React Native', 'Laravel', 'Fitness Tracker', 'Subscription System', 'Performance Tuning'],
    platforms: ['iOS', 'Android']
  },
  {
    title: 'Ethan Allen – E-commerce Web Platform',
    category: 'E-commerce Platform',
    description: 'A premium luxury e-commerce web platform developed using Laravel to facilitate interactive furniture catalogs and custom product variant checkouts.',
    features: [
      'Developed the entire premium Ethan Allen e-commerce website and admin dashboard using Laravel.',
      'Implemented complex features including searchable product catalogs, dynamic category filtering, shopping cart, custom checkout, order tracking, and user accounts.',
      'Built fully integrated backend modules for real-time inventory management, customer database records, and order fulfillment.',
      'Integrated custom REST APIs for ultra-smooth, lightweight data transfer and page state hydration.',
      'Optimized database indexes and web platform performance, delivering rapid loading speeds and full mobile responsiveness.'
    ],
    technologies: ['Laravel', 'PHP', 'E-commerce Platform', 'Inventory Sync', 'Responsive Design'],
    webUrl: 'https://ethanallen-uae.com/',
    platforms: ['Web']
  },
  {
    title: 'Aquakingdom – E-commerce Mobile Application',
    category: 'Mobile Application',
    description: 'A sleek, high-fidelity e-commerce mobile application built with React Native and powered by a Laravel API backend for high-volume consumer transactions.',
    features: [
      'Developed the Aquakingdom mobile app using React Native coupled with a stable, high-throughput Laravel backend API server.',
      'Implemented complete shopping flows including product search, rich catalog grid, instant cart, secure checkout, purchase history, and user authentication.',
      'Integrated custom REST APIs for bidirectional real-time data synchronization between the mobile client and administrative backend.',
      'Optimized app bundle size, implemented responsive UI components, and managed seamless store submissions.'
    ],
    technologies: ['React Native', 'Laravel', 'E-commerce Mobile', 'API Sync', 'Responsive UI'],
    platforms: ['iOS', 'Android']
  },
  {
    title: 'Jamoka Properties – CRM & Lead Management Tool',
    category: 'CRM & Admin Panel',
    description: 'An operations-focused real estate lead management and CRM console developed using Laravel to streamline properties listings and client follow-up workflows.',
    features: [
      'Developed the complete real estate CRM and automated lead management dashboard utilizing Laravel.',
      'Implemented core features including daily lead tracking pipelines, agent-to-client follow-ups, property listings inventory, reporting, and analytics graphs.',
      'Built separate modules for broker/agent team management, listing moderation, and master admin analytics dashboards.',
      'Integrated REST APIs for real-time data sync with active mobile apps and consumer property portals.',
      'Handled strict code optimization, background queue job debugging, and secure server deployments.'
    ],
    technologies: ['Laravel', 'PHP', 'CRM Dashboard', 'Lead Management', 'Queue Jobs'],
    platforms: ['Web']
  },
  {
    title: 'Grubsy – Delivery Platform',
    category: 'Web & Mobile Applications',
    description: 'A state-of-the-art multi-role delivery fleet platform consisting of a React Native Expo customer application, driver application, merchant application, React admin console, and Node.js/Prisma API backend.',
    features: [
      'Customer App: Built in React Native Expo for seamless on-demand food ordering, order tracking, and custom notification systems.',
      'Driver App: Built in React Native Expo for live delivery booking/order management, map navigation routing, and live status updates.',
      'Merchants App: Built in React Native Expo for store order management, product menus/listings configuration, and basic merchant analytics.',
      'Admin Panel: Developed as a single-page web app in React to handle comprehensive user accounts, driver payouts, merchant verifications, and custom system reports.',
      'Backend: Engineered a heavy-duty Node.js server powered by Prisma ORM for clean database query management, safety middlewares, and rapid API endpoints delivery.',
      'Integrated secure real-time driver tracking, custom push notifications systems, and multi-gateway payment integrations.',
      'Responsible for lead architectural decisions, full-stack API integration, mobile troubleshooting, testing, and multi-store production deployment.'
    ],
    technologies: ['React Native Expo', 'React.js', 'Node.js', 'Prisma ORM', 'Real-time Tracking', 'Payment Integrations'],
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'REFIX Facility Services – Corporate Website',
    category: 'Corporate Web Platform',
    description: "REFIX Facility Services is a modern corporate website developed for a UAE-based facility management company. The website showcases the company's integrated facility management services, maintenance solutions, specialized services, and business sectors through a clean, responsive, and user-friendly interface. It includes service pages, contact forms, quotation requests, and an optimized layout to provide a seamless browsing experience across desktop, tablet, and mobile devices. The project focuses on performance, maintainability, and scalable backend architecture using Laravel.",
    features: [
      'Responsive & Mobile-Friendly Design across desktop, tablet, and mobile screens.',
      'Corporate Business Website with specialized sector information and Integrated Facility Management services.',
      'Dynamic Service Management and optimized layouts for specialized services.',
      'Quote Request Form and interactive contact/inquiry forms for direct customer acquisition.',
      'SEO-Friendly structure with fast loading performance to ensure high organic search rankings.',
      'Laravel MVC Architecture utilizing a secure PHP backend with scalable code structuring.',
      'Clean, pixel-perfect, modern corporate UI/UX designs to build high brand authority.'
    ],
    technologies: ['Laravel', 'PHP', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3', 'Corporate Website'],
    webUrl: 'https://refixservices.ae/',
    platforms: ['Web']
  },
  {
    title: 'EMX Motors',
    category: 'E-Commerce Platform',
    description: 'EMX Motors is a modern e-commerce platform developed for a UAE-based electric bike retailer. The website showcases premium electric motorcycles, accessories, and performance upgrades with an intuitive shopping experience. It features product catalogs, inquiry forms, responsive design, and a scalable Laravel backend for efficient content and product management.',
    features: [
      'E-commerce Product Catalog showcasing premium electric motorcycles and performance upgrades.',
      'Responsive Design tailored for seamless desktop, tablet, and mobile user experiences.',
      'Interactive Product Inquiry Forms connecting customers directly with sales teams.',
      'SEO Optimized pages with semantic elements to boost search visibility.',
      'Laravel Backend for secure, scalable administrative content and catalog management.',
      'Fast Performance metrics featuring heavy-duty caching and asset optimizations.',
      'Secure PHP Development ensuring reliable transactions and client-data protection.'
    ],
    technologies: ['Laravel', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'E-Commerce'],
    webUrl: 'https://www.emxmotors.com/',
    platforms: ['Web']
  },
  {
    title: 'SurRon ME',
    category: 'Distributor Showcase Website',
    description: 'SurRon ME is a WordPress-based website developed for an electric motorcycle distributor in the UAE. The website presents electric bike models, specifications, accessories, booking inquiries, and dealership information through a responsive and user-friendly interface designed for excellent browsing across all devices.',
    features: [
      'WordPress CMS customized with tailored templates for the SurRon distributor platform.',
      'Responsive Design with beautiful layouts adjusted for high usability across all viewport sizes.',
      'Comprehensive Product Showcase displaying electric bike models, accessories, and parts specs.',
      'Interactive Inquiry Forms optimized for booking test rides and dealership requests.',
      'SEO Friendly configuration to rank highly on search engines for UAE electric bike terms.',
      'Easy Content Management enabling client-side non-technical staff to make rapid content changes.'
    ],
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Showcase Website'],
    webUrl: 'https://surronme.com/',
    platforms: ['Web']
  },
  {
    title: 'Casa Vista Development',
    category: 'Premium Real Estate Portal',
    description: 'Casa Vista Development is a premium real estate website built using Laravel and React.js. The platform highlights luxury residential and commercial developments with a modern user experience, optimized performance, and responsive layouts. Dynamic content management and interactive UI components ensure a seamless experience for potential clients.',
    features: [
      'Laravel API Backend providing secure, high-performance web service endpoints.',
      'React.js Frontend enabling dynamic, fluid, and real-time user experiences.',
      'Responsive UI design utilizing generous padding and sleek minimal aesthetic properties.',
      'Luxury Property Showcase with rich multimedia support and detailed property details panels.',
      'Interactive Contact Forms for lead capture and developer inquiries.',
      'Optimized Performance via lazy loading, component-level caching, and smart asset delivery.'
    ],
    technologies: ['Laravel', 'React.js', 'PHP', 'HTML5', 'CSS3', 'Real Estate UI'],
    webUrl: 'https://casavistadevelopment.com/',
    platforms: ['Web']
  },
  {
    title: 'Jamoka Properties',
    category: 'Real Estate Showcase',
    description: 'Jamoka Properties is a responsive real estate website developed with WordPress to showcase residential and commercial properties. The platform provides an easy property browsing experience, inquiry forms, and a content management system that enables seamless updates.',
    features: [
      'Dynamic Property Listings with advanced filtering for residential and commercial units.',
      'WordPress CMS customized for painless real estate agent dashboard management.',
      'Mobile Responsive framework guaranteeing a high-quality search experience on smartphones.',
      'Integrated Contact Forms to route inquiries directly to property agents.',
      'SEO Optimized codebase ensuring rich search engine indexing and organic traffic growth.'
    ],
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Real Estate'],
    webUrl: 'https://jamokaproperties.com/',
    platforms: ['Web']
  },
  {
    title: 'Big Brands UAE',
    category: 'Corporate Product Catalog',
    description: 'Big Brands UAE is a corporate e-commerce website designed to showcase branded products through a clean and responsive interface. Built with WordPress, it enables efficient product management, content updates, and provides a smooth user experience across all devices.',
    features: [
      'Corporate Website featuring branded product listings, collections, and brand history.',
      'Comprehensive Product Showcase displaying high-resolution images and specifications.',
      'WordPress CMS architecture for easy catalog updates, inventory tags, and blogging.',
      'Responsive Design featuring grid systems designed for ultimate readability.',
      'SEO Friendly page setups targeting luxury brand shoppers in the UAE.'
    ],
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Branding Showroom'],
    webUrl: 'https://www.bigbrands.ae/',
    platforms: ['Web']
  },
  {
    title: 'Local Storage UAE',
    category: 'Service Booking Website',
    description: 'Local Storage UAE is a business website developed for self-storage solutions in the UAE. The website presents storage services, pricing information, inquiry forms, and location details through a modern and responsive design focused on user convenience.',
    features: [
      'Comprehensive Service Showcase describing self-storage, business storage, and packing solutions.',
      'Interactive Inquiry Forms assisting clients with unit size selectors and quote estimations.',
      'Responsive Design ensuring immediate customer access while on the move or in transit.',
      'WordPress CMS base permitting seamless edits to size guides, rules, and address coordinates.',
      'SEO Optimized to attract local neighborhood storage queries across major search providers.'
    ],
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Service Website'],
    webUrl: 'https://localstorage.ae/',
    platforms: ['Web']
  },
  {
    title: 'ADCG',
    category: 'Corporate Business Portal',
    description: "ADCG is a corporate website developed with Laravel to present the company's services, projects, and business solutions. The website includes dynamic content management, responsive layouts, contact forms, and a secure backend architecture designed for scalability and performance.",
    features: [
      'Laravel CMS providing robust server admin dashboards to modify dynamic pages and posts.',
      'Corporate Website highlighting complex enterprise solutions, partners, and case studies.',
      'Responsive Design and fluid layouts allowing effortless browsing on all major device platforms.',
      'Highly secure Contact Forms preventing spam and tracking client submission statuses.',
      'Secure Backend architecture designed for multi-tier user groups and seamless server migrations.',
      'SEO Friendly structured data markup to enhance search page snippets.'
    ],
    technologies: ['Laravel', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'Corporate Portal'],
    webUrl: 'https://www.adcg.ae/',
    platforms: ['Web']
  }
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Commerce (BCom)',
    field: 'Business & Commerce',
    duration: '2020 – Present',
    school: 'Govt Premier College',
    location: 'Karachi, Pakistan'
  },
  {
    degree: 'Intermediate',
    field: 'Business & Commerce',
    duration: '2017 – 2019',
    school: 'Comprehensive H.S School',
    location: 'Karachi, Pakistan'
  }
];

export const achievements: Achievement[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Apps Shipped',
    description: 'Architected and launched cross-platform mobile applications in React Native/Flutter to production stores.'
  },
  {
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Building robust digital solutions across e-commerce, logistics, and real estate.'
  },
  {
    value: 40,
    suffix: '%',
    label: 'Performance Boost',
    description: 'Optimized react state management and API query pipelines to dramatically increase responsiveness.'
  },
  {
    value: 95,
    suffix: '%',
    label: 'Code Reusability',
    description: 'Leveraged advanced React Native sharing architectures to keep iOS and Android builds extremely dry.'
  },
  {
    value: 90,
    suffix: '%',
    label: 'Test Coverage',
    description: 'Ensured peak code reliability and fast CI/CD builds with comprehensive testing using Jest.'
  }
];

export const services: Service[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web architectures using Node.js, Laravel, React, and modern databases. Shipped with robust security, state hydration, and smooth performance.',
    icon: 'Layers'
  },
  {
    title: 'SaaS Development',
    description: 'Engineering scalable Multi-Tenant Software-as-a-Service portals featuring dynamic billing subscription, self-serve client onboarding, and secure user permissions management.',
    icon: 'Boxes'
  },
  {
    title: 'Web Development',
    description: 'Building highly responsive, fast-loading, pixel-perfect SPA web platforms with React, Vite, and tailwind. Styled with subtle fluid micro-animations.',
    icon: 'Globe'
  },
  {
    title: 'Mobile App Development',
    description: 'Expert native-feeling cross-platform iOS & Android apps developed using React Native & Expo, boasting 95%+ shared codebase and optimized animations.',
    icon: 'Smartphone'
  },
  {
    title: 'AI Automation',
    description: 'Integrating state-of-the-art LLMs, Gemini AI, custom prompt automation engines, and automated workflows to optimize business delivery speeds.',
    icon: 'Bot'
  },
  {
    title: 'API Integration',
    description: 'Designing ultra-fast, robust, secure RESTful & GraphQL API architectures with clean caching schemes and third-party gateway synchronization.',
    icon: 'Workflow'
  },
  {
    title: 'MVP Development',
    description: 'Rapid bootstrapping of minimum viable products with clean, production-grade codebase to validate business models and raise capital swiftly.',
    icon: 'Rocket'
  },
  {
    title: 'Bug Fixing & Maintenance',
    description: 'Precise performance auditing, continuous backend upgrades, App Store/Play Store deployments, and resolving tricky production-level bugs.',
    icon: 'Wrench'
  }
];

export const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Director of Product at Devronix LLC',
    content: 'Abdul is an exceptional developer who owned the entire lifecycle of our mobile app release. His focus on performance optimization and 95% code reusability saved us weeks of development time.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Kamran Shah',
    role: 'VP Engineering at Midware Technologies',
    content: 'Abdul brought deep expertise in React.js and React Native. He consistently delivered high-quality, fully tested code and mentored junior developers effectively. A top-tier professional.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Michael Chen',
    role: 'Co-Founder of DishDish US',
    content: 'Collaborating with Abdul was seamless. He designed the APIs and built the complete DishDish cookbook mobile client from scratch. His debugging skills are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];
