import { PersonalInfo, Skill, Project, Experience } from '../types';
export const personalInfo: PersonalInfo = {
  name: 'Mahesh Gouni',
  title: 'Java Full Stack Developer',
  email: 'gounimahesh9000@gmail.com',
  phone: '+91 9666961236',
  location: 'Hyderabad, Telangana',
  github: 'https://github.com/mahesh-gouni',
  linkedin: 'https://www.linkedin.com/in/gouni-mahesh/',
  summary: `Java Full Stack Developer with a strong background in designing and transforming ideas into 
    cutting-edge web applications. Experienced in implementing the complete Software Development Life Cycle (SDLC), 
    ensuring efficient project execution from planning through to deployment and maintenance.`
};

export const skills: Skill[] = [
  // Frontend Skills
  { name: 'HTML5', level: 90, icon: 'fab fa-html5', category: 'frontend' },
  { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt', category: 'frontend' },
  { name: 'JavaScript', level: 80, icon: 'fab fa-js', category: 'frontend' },
  { name: 'React', level: 75, icon: 'fab fa-react', category: 'frontend' },
  { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap', category: 'frontend' },
  
  // Backend Skills
  { name: 'Java', level: 95, icon: 'fab fa-java', category: 'backend' },
  { name: 'Spring Boot', level: 90, icon: 'fas fa-leaf', category: 'backend' },
  { name: 'Spring MVC', level: 85, icon: 'fas fa-cogs', category: 'backend' },
  { name: 'Hibernate', level: 80, icon: 'fas fa-database', category: 'backend' },
  { name: 'REST APIs', level: 90, icon: 'fas fa-code', category: 'backend' },
  
  // Database Skills
  { name: 'MySQL', level: 90, icon: 'fas fa-database', category: 'database' },
  { name: 'PostgreSQL', level: 75, icon: 'fas fa-server', category: 'database' },
  
  // Tools
  { name: 'Docker', level: 80, icon: 'fab fa-docker', category: 'tools' },
  { name: 'Git & GitHub', level: 90, icon: 'fab fa-git-alt', category: 'tools' },
  { name: 'Maven', level: 85, icon: 'fas fa-tools', category: 'tools' },
];

export const projects: Project[] = [
{
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript featuring smooth animations, dark/light theme toggle, and comprehensive project showcase. Demonstrates full-stack development skills with clean UI/UX design.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'CSS3', 'Framer Motion', 'GitHub Pages'],
    features: [
      'Responsive design with mobile-first approach',
      'Dark/Light theme toggle functionality',
      'Smooth animations and micro-interactions',
      'Interactive project showcase with filtering',
      'Contact form with email integration',
      'SEO optimized with meta tags',
      'Progressive Web App (PWA) capabilities',
      'Deployed on GitHub Pages with CI/CD'
    ],
    stats: [
      { label: 'Performance', value: '95+' },
      { label: 'Accessibility', value: 'A+' }
    ],
    imageUrl: '/profile.png',
    githubUrl: 'https://github.com/mahesh-gouni/mahesh-gouni.github.io',
    liveUrl: 'https://mahesh-gouni.github.io'
  },
  {
    id: '5',
    title: 'Hotel Booking Management System',
    description: 'A comprehensive hotel booking platform featuring advanced search capabilities, secure booking management, role-based authentication, and integrated payment processing built with modern enterprise technologies.',
    category: 'Full Stack',
    technologies: ['Spring Boot', 'React', 'MySql', 'Spring Security',  'Restful APIs',  'Docker'],
    features: [
      'Advanced Hotel Search & Filtering System',
      'Real-time Room Availability Tracking',
      'Secure Booking Management with Payment Integration',
      'Role-Based Authentication (USER/ADMIN/HOTEL_MANAGER)',
      'Dynamic Cancellation Policy Engine',
      'User Profile CRUD Operations with Spring Security',
      'RESTful API Design with Swagger Documentation',
      'Email Notification System for Booking Updates'
    ],
    stats: [
      { label: 'Users', value: '1000+' },
      { label: 'Bookings', value: '5000+' }
    ],
    imageUrl: './image.png',
    githubUrl: 'https://github.com/gouni-mahesh/avoota-ui-react',
    liveUrl: 'https://avoota.com',
    // apiDocsUrl: 'https://hotel-booking-api-docs.herokuapp.com/swagger-ui.html'
  }
];


export const experiences: Experience[] = [
   {
    id: '1',
    title: 'Software Engineer',
    company: 'Neoteric Technologies Pvt Limited',
    duration: 'Mar 2025 – Present',
    location: 'Hyderabad, India',
    responsibilities: [
      'Developing scalable backend microservices using Spring Boot and Spring Security',
      'Implementing RESTful APIs with role-based authentication and authorization',
      'Managing database schemas and writing optimized SQL queries using PostgreSQL',
      'Collaborating with cross-functional teams to integrate APIs with React applications',
      'Ensuring code quality through code reviews, unit testing, and CI/CD pipelines',
      'Participating in architectural decisions and technical design discussions'
    ],
    technologies: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'REST API', 'Docker', 'Jenkins', 'Microservices'],
    type: 'work'
  },
  {
    id: '2',
    title: 'Software Engineer Intern',
    company: 'Neoteric Technologies Pvt Limited',
    duration: 'Jul 2024 – Mar 2025',
    location: 'Hyderabad, India',
    responsibilities: [
      'Assisted in developing and testing enterprise-level microservices',
      'Implemented API endpoints and database interactions using Spring Boot',
      'Participated in Agile development process including scrum meetings and sprint planning',
      'Wrote comprehensive technical documentation and deployment scripts',
      'Contributed to bug fixes and performance optimizations',
      'Collaborated with senior developers on code reviews and best practices'
    ],
    technologies: ['Spring Boot', 'REST API', 'PostgreSQL', 'Git', 'Maven'],
    type: 'work'
  },
  {
    id: '4',
    title: 'Bachelor of Technology',
    company: 'AAR Mahaveer Engineering College, JNTUH',
    duration: 'Dec 2020 – Jul 2024',
    location: 'Hyderabad',
    responsibilities: [
      'Computer Science and Engineering with focus on software development',
      'Specialized in modern programming practices and software architecture',
      'Completed projects in machine learning, web development, and database management',
      'Strong foundation in algorithms, data structures, and system design',
      'Participated in technical workshops and coding competitions'
    ],
    technologies: ['Computer Science', 'Software Engineering', 'Project Management', 'Data Structures'],
    type: 'education'
  },
  {
    id: '3',
    title: 'Full Stack Web Development Intern',
    company: 'Unified Mentor (AICTE Authorized)',
    duration: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    responsibilities: [
      'Developed and integrated web services using RESTful APIs',
      'Enhanced functionality in web applications through modern development practices',
      'Created responsive user interfaces with focus on user experience',
      'Collaborated with team members on project planning and execution'
    ],
    technologies: ['Spring Boot', 'REST APIs', 'Frontend Development'],
    type: 'work'
  }
  
];
