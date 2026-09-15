import MyPortfolioScreenshot from './ProjectScreenshots/MyPortfolioScreenshot.png';
import type { StaticImageData } from 'next/image';

export interface Project {
  slug: string;
  title: string;
  category: 'Software' | 'Web' | 'C#' | 'AI' | 'Experiments' | 'College';
  status: 'active' | 'wip' | 'archived';
  featured: boolean;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  image: string | StaticImageData;
  imageAlt: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  learned: string[];
  future: string[];
  year: string;
  contributors?: {
  name: string;
  role: string;
  github?: string;
  }[];
}

export const projects: Project[] = [
{
  slug: 'student-management-system',
  title: 'Student Management System',
  category: 'C#',
  status: 'active',
  featured: true,
  description: 'A console-based student management system built collaboratively in C# to practice object-oriented programming, file handling, and input validation.',
  longDescription: 'This is a group project developed in C#. The aim is to create a simple system for managing student records through a console interface while applying object-oriented programming, file handling, validation, and teamwork.',
  tech: [
      'C#',
      'Object-Oriented Programming',
      'File Handling',
      'Console UI',
      'Input Validation',],
  github: 'https://github.com/ArnavOG/StudentManagementSystem',
  image: "Portfolio/public/assets/ProjectScreenshots/SMS.png",
  imageAlt: 'Student Management System console application',
  problem: 'Managing student records manually can become difficult when information increases and needs to be updated regularly.',
  solution: 'We are developing a console-based application that allows student records to be managed in a more organized way using C#.',
  features: [
      'Student record management',
      'Console-based user interface',
      'Input validation',
      'File-based data storage',
      'Object-oriented project structure',],

  challenges: [
      'Dividing responsibilities between team members',
      'Designing classes and their responsibilities',
      'Handling invalid user input',
      'Working with file-based data storage',],

  learned: [
      'Practical use of classes and objects in C#',
      'Object-oriented programming concepts',
      'File handling',
      'Console application structure',
      'Collaborative development with Git',],

  future: [
      'Improve the console interface',
      'Add stronger validation',
      'Refactor the code as new features are added',
      'Explore a graphical user interface in the future',],

  contributors: [
  {
    name: 'Arnav',
    role: 'Project Coordinator · Development',
    github: 'https://github.com/ArnavOG',
  },
  {
    name: 'Siddharth',
    role: 'Console UI · Input Validation · Testing',
    github: 'https://github.com/ItsSidPro',
  },
  {
    name: 'Rituraj Shukla',
    role: 'Functionality · Models · Related Exceptions',
    github: 'https://github.com/KingOfSeason',
  },
  {
    name: 'Raj Omre',
    role: 'File Handling · File Save/Load',
    github: 'https://github.com/Rajomre',
  },
],

  year: '2026'
},
{
  slug: 'personal-portfolio',
  title: 'Personal Portfolio Website',
  category: 'Web',
  status: 'active',
  featured: true,
  description: 'A personal portfolio website showcasing my development journey, projects, skills, education, and creative work.',
  longDescription: 'This portfolio is being developed to present my work, learning journey, technical interests, and creative identity in one place. I am customizing the design, content, and structure so that the website reflects my own style instead of looking like a generic template.',
  tech: ['React',
        'TypeScript',
        'Tailwind CSS',
        'Next.js',
        'Git',
        'GitHub',],
  github: 'https://github.com/ArnavOG/Portfolio',
  live: '',
  image: "/Portfolio/public/assets/ProjectScreenshots/MyPortfolioScreenshot.png",
  imageAlt: 'Personal developer portfolio website',
  problem: 'My projects, technical interests, creative work, and learning progress were not organized in one place.',
  solution: 'I am building a personal portfolio website that brings my development work, education, journey, and creative interests together in one accessible place.',
  features: [
      'Personal introduction and vision',
      'Project showcase',
      'Skills and technologies section',
      'Education and achievements',
      'Development journey timeline',
      'Creative work and creator identity',
      'Contact section',],

  challenges: [
      'Understanding and editing an existing React project',
      'Customizing the design and layout',
      'Organizing project and portfolio content',
      'Making the website reflect my own identity',
      'Preparing the website for deployment',],

  learned: [
      'How a React project is structured',
      'How reusable components display data',
      'How to edit content-driven sections',
      'Basic understanding of TypeScript interfaces',
      'Using Git and GitHub while working on a project',],

  future: [
  'Complete the remaining sections',
      'Improve responsive design',
      'Deploy the website',
      'Continue updating the portfolio as I build more projects',],

  year: '2026'
},
{
  slug: 'atm-simulator',
  title: 'ATM Simulator',
  category: 'College',
  status: 'active',
  featured: true,
  description: 'A console-based ATM simulation built in Java with PIN authentication, deposits, withdrawals, and balance checking.',
  longDescription: 'The Java ATM Simulator recreates basic ATM operations through a command-line interface. Users can set a PIN, authenticate their account, check their balance, deposit money, withdraw money, and safely exit the application. The project is being improved with a cleaner and more user-friendly console interface.',
  tech: ['Java',
        'OOP Fundamentals',
        'Console UI',
        'Conditional Logic',
        'Loops',
        'Input Validation',],
  github: 'https://github.com/ArnavOG/ATM-Simulator',
  live: '',
  image: "/Portfolio/public/assets/ProjectScreenshots/ATMScreenshot.png",
  imageAlt: 'Java ATM Simulator console application',
  problem: 'asic console-based banking programs can feel difficult to use when their menus, prompts, and transaction messages are not clearly organized.',
  solution: 'Created a Java ATM simulator with PIN verification, a structured transaction menu, balance management, and clearer console messages.',
  features: [
    'PIN setup and authentication',
    'Three-attempt PIN verification',
    'Withdraw money',
    'Deposit money',
    'Check account balance',
    'Insufficient balance validation',
    'Invalid amount validation',
    'Structured console menu',
    'Clear transaction feedback',],

  challenges: [
    'Designing a readable console interface',
    'Managing user input through Scanner',
    'Handling incorrect PIN attempts',
    'Validating deposit and withdrawal amounts',
    'Maintaining the account balance across transactions',],

  learned: [
    'Using methods to organize Java programs',
    'Working with loops and conditional statements',
    'Handling user input with Scanner',
    'Applying basic validation to transactions',
    'Designing a more readable command-line interface',],

  future: [
    'Add transaction history',
    'Support multiple user accounts',
    'Add account creation and login',
    'Improve the console design further',
    'Explore a graphical user interface in the future',],

  year: '2025'
},
{
  slug: 'pulse-shift',
  title: 'Pulse Shift',
  category: 'Web',
  status: 'active',
  featured: true,

  description:
    'A browser-based dimensional survival game built with HTML, CSS, JavaScript, and Canvas.',

  longDescription:
    'Pulse Shift is a dimensional survival game where players move through an arena, switch between the Pulse and Void dimensions, and avoid incoming hazards for as long as possible. I built it to practice JavaScript game logic, Canvas rendering, responsive design, and interactive user controls.',

  tech: [
    'HTML',
    'CSS',
    'JavaScript',
    'HTML5 Canvas',
    'Git',
    'GitHub',
  ],

  github: 'https://github.com/ArnavOG/Pulse-Shift',

  live: 'https://arnavog.github.io/Pulse-Shift/',

  image: '/Portfolio/public/assets/ProjectScreenshots/psScreenshot.png',

  imageAlt: 'Pulse Shift dimensional survival game',

  problem:
    'I wanted to build an interactive browser game that combined simple survival mechanics with a futuristic visual design.',

  solution:
    'I developed Pulse Shift using JavaScript and the Canvas API, adding movement, dimension switching, incoming hazards, score tracking, and responsive controls for desktop and mobile devices.',

  features: [
    'Pulse and Void dimensions',
    'Dimension switching mechanic',
    'Canvas-based gameplay',
    'Moving obstacles and hazards',
    'WASD and Arrow key controls',
    'Spacebar dimension switching',
    'Mobile joystick controls',
    'Mobile SHIFT button',
    'Score and best-score tracking',
    'Responsive game interface',
  ],

  challenges: [
    'Creating smooth player movement',
    'Managing game states and overlays',
    'Designing the dimension-switching mechanic',
    'Rendering gameplay through Canvas',
    'Making controls responsive for mobile devices',
    'Balancing the difficulty of incoming hazards',
  ],

  learned: [
    'Using JavaScript for game logic',
    'Working with the HTML5 Canvas API',
    'Handling keyboard and touch input',
    'Managing animation and game loops',
    'Creating responsive layouts with CSS',
    'Organizing and deploying a web project',
    'Using Git and GitHub for version control',
  ],

  future: [
    'Add more dimensions',
    'Introduce new obstacle types',
    'Add sound effects and background music',
    'Create power-ups and special abilities',
    'Improve animations and visual effects',
    'Add an online leaderboard',
  ],

  year: '2026',
},
{
  slug: 'college-management-system',
  title: 'College Management System',
  category: 'C#',
  status: 'wip',
  featured: false,
  description: 'A menu-driven C# console application developed during an internship to simulate common college management operations.',
  longDescription: 'This project was assigned during my internship under trainer guidance. It brings several college-related operations into one console application, including enquiry handling, student and employee registration, batch selection, fee management, attendance, certificate eligibility, and career guidance.',
  tech: ['C#',
        '.NET',
        'Object-Oriented Programming',
        'Console UI',
        'Conditional Logic',
        'Loops',
        'Input Validation',
        'Collections',],
  github: 'https://github.com/ArnavOG/College-Management-System',
  image: "/Portfolio/public/assets/ProjectScreenshots/CMS.png",
  imageAlt: 'College Management System C# console application',
  problem: 'College-related processes such as enquiries, registrations, batch selection, and fee management can become difficult to organize when handled separately.',
  solution: 'Created a dashboard-driven console application that groups multiple college management operations into one structured system.',
  features: [
  'User account creation',
    'Login authentication',
    'College management dashboard',
    'Enquiry form',
    'Student registration',
    'Employee registration',
    'Java and C# batch plans',
    'Fee checking and payment',
    'Batch cancellation',
    'Attendance marking and viewing',
    'Certificate eligibility checking',
    'Career guidance section',
    'Profile summary',
    'Input validation',],

  challenges: [
    'Organizing multiple modules inside one console application',
    'Managing navigation through dashboard options',
    'Connecting enquiry and registration workflows',
    'Handling student and employee registration conditions',
    'Managing batch fees and payment validation',
    'Designing a clearer and more user-friendly console interface',],

  learned: [
    'Using classes and objects in C#',
    'Creating methods to divide application functionality',
    'Working with loops and conditional statements',
    'Handling user input and validation',
    'Using collections to store attendance records',
    'Designing a menu-driven console application',
    'Structuring a larger application into separate modules',],

  future: [
    'Add database storage',
    'Separate models and business logic into different files',
    'Add stronger authentication and password security',
    'Support multiple student and employee accounts',
    'Add persistent attendance and fee records',
    'Improve certificate generation',
    'Add role-based access',
    'Create a graphical user interface in the future',],

  year: '2026'
},
];


export const experiments = [
{
  slug: 'matrix-terminal-effect',
  title: 'Matrix Terminal Effect',
  description: 'A Java console experiment that recreates a Matrix-inspired animated terminal effect.',
  tech: ['Java',
        'Randomization',
        'Loops',
        'StringBuilder',
        'Console Output',
        'Thread.sleep()',],
  github: 'https://github.com/ArnavOG/Matrix-Terminal-Effect',
  live: '',
  year: '2025'
},];