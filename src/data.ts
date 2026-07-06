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
    title: 'Adil Store',
    category: 'E-commerce Mobile App & Web',
    description: 'A comprehensive cross-platform mobile e-commerce application integrated with a Magento web storefront, providing end-to-end purchasing capabilities and real-time syncing.',
    features: [
      'Developed the full cross-platform mobile e-commerce app in React Native and managed the web storefront in Magento.',
      'Implemented product listing, cart, checkout, order tracking, and user authentication.',
      'Complete API integration for seamless product, order, and customer data synchronization.',
      'Optimized application performance across iOS and Android and managed ongoing store deployments.'
    ],
    technologies: ['React Native', 'Magento', 'RESTful APIs', 'iOS & Android Deployment', 'E-commerce UI'],
    webUrl: 'https://adilstore.com',
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'DishDish',
    category: 'Cookbook Mobile App & Web Platform',
    description: 'An elegant recipe catalog and cookbook community platform consisting of a React Native mobile application and a Laravel web backend with administrative controls.',
    features: [
      'Owned the complete project lifecycle — including UI/UX design, mobile app development, and web platform creation.',
      'Implemented recipe listing, category filters, advanced search, bookmarking favorites, and authentication.',
      'Designed custom REST APIs for robust sync between the mobile app, web dashboard, and server.',
      'Built custom admin modules for cooking recipe moderation, content management, and user permissions.'
    ],
    technologies: ['React Native', 'Laravel', 'REST APIs', 'UI/UX Design', 'MySQL'],
    webUrl: 'https://dishdish.us',
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'Ethan Allen',
    category: 'E-commerce Web Platform',
    description: 'A premium, fully responsive luxury furniture e-commerce web platform engineered for high-speed page loads, featuring deep cart management and backend inventory sync.',
    features: [
      'Developed the entire e-commerce frontend and backend using Laravel.',
      'Implemented advanced custom features like deep category filtering, interactive catalog, product variants, and cart checkout flow.',
      'Built fully secure and integrated backend modules for automated inventory control, client data management, and order status tracking.',
      'Optimized web vitals resulting in blazing-fast search response times and seamless responsive layout.'
    ],
    technologies: ['Laravel', 'PHP', 'REST APIs', 'Responsive Design', 'MySQL'],
    webUrl: 'https://ethanallen-uae.com',
    platforms: ['Web']
  },
  {
    title: 'Motoboy',
    category: 'Logistics Ecosystem & Web Dashboard',
    description: 'A complete logistics and delivery fleet ecosystem encompassing a driver application, a customer ordering application, and a powerful centralized web administration dashboard.',
    features: [
      'Independently developed and maintained the entire triple-product suite (Driver App, Customer App, and Admin Panel).',
      'Implemented real-time GPS courier tracking, interactive delivery routing, status push notifications, and detailed rider payouts.',
      'Integrated Secure User/Driver authentication, Ride Allocation and booking queues, and real-time report charts.',
      'Managed full deployment cycles, performance tuning, and cross-platform live troubleshooting.'
    ],
    technologies: ['React Native', 'CodeIgniter', 'Real-time Tracking', 'Admin Dashboard', 'Mobile App Development'],
    webUrl: 'https://motoboy.ae',
    platforms: ['iOS', 'Android', 'Web']
  },
  {
    title: 'Rizq Mart',
    category: 'Grocery E-Commerce Platform',
    description: 'A scalable online grocery delivery system consisting of cross-platform Flutter mobile clients and a secure, Laravel-driven administrative backend server.',
    features: [
      'Architected and maintained the end-to-end grocery logistics platform.',
      'Implemented detailed catalog hierarchies, digital cart states, secure payment gateway integrations, and real-time delivery tracking.',
      'Managed full software lifecycles including continuous testing, bug fixing, backend API optimization, and App Store submission routines.'
    ],
    technologies: ['Flutter', 'Laravel', 'REST APIs', 'Payment Gateway Integration', 'iOS & Android'],
    webUrl: 'https://rizq-mart.com',
    platforms: ['iOS', 'Android']
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
    title: 'Mobile App Development',
    description: 'Expert cross-platform iOS and Android engineering with React Native, Expo, and Flutter, achieving 95%+ code sharing and native feel.',
    icon: 'Smartphone'
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Building high-performance, modular web applications utilizing React.js, modern build pipelines (Webpack, Vite), and responsive layouts.',
    icon: 'Globe'
  },
  {
    title: 'API Engineering & Integration',
    description: 'Designing highly robust and scalable RESTful and GraphQL APIs with intelligent caching, reducing backend overhead by 25%.',
    icon: 'Cpu'
  },
  {
    title: 'Backend & System Design',
    description: 'Developing heavy-duty server architectures using Node.js, Laravel, and ASP.NET MVC, engineered to handle thousands of concurrent connections.',
    icon: 'Server'
  },
  {
    title: 'Database & Query Optimization',
    description: 'Advanced optimization for MongoDB, MySQL, SQL Server, and Firestore, reducing query execution times by up to 45%.',
    icon: 'Database'
  },
  {
    title: 'App Store Deployment & CI/CD',
    description: 'Managing end-to-end release procedures for Apple App Store & Google Play Store, and building automated CI/CD pipelines for zero-downtime.',
    icon: 'CloudLightning'
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
