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
  image: "/assets/ProjectScreenshots/SMS.png",
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
  image: "/assets/ProjectScreenshots/MyPortfolioScreenshot.png",
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
  image: "/assets/ProjectScreenshots/ATMScreenshot.png",
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
  slug: 'study-sync',
  title: 'StudySync',
  category: 'College',
  status: 'wip',
  featured: true,
  description: 'A collaborative study platform for college students — shared notes, Pomodoro timers, progress tracking, and resource sharing built for the campus community.',
  longDescription: 'StudySync emerged from a real problem: our college had no central platform for sharing study materials. WhatsApp groups were chaotic, Google Drive was unorganized. I built something purpose-built for students.',
  tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
  github: 'https://github.com',
  image: "https://images.unsplash.com/photo-1699287648687-dcbaf56e2160",
  imageAlt: 'Clean study dashboard with warm lighting, notebook and laptop on a wooden desk',
  problem: 'College students at our campus had no structured way to share notes, coordinate study sessions, or track collective progress across subjects.',
  solution: 'Built a shared workspace with subject-organized notes, integrated Pomodoro timers, and a resource library. Authentication via college email ensures the community stays relevant.',
  features: [
  'Subject-organized shared notes with markdown support',
  'Integrated Pomodoro timer with session history',
  'Resource library with file upload and tagging',
  'Study group creation with invite links',
  'Progress dashboard showing weekly study hours'],

  challenges: [
  'Real-time collaborative editing without conflicts',
  'File storage and access control per study group'],

  learned: [
  'Full-stack development with Next.js App Router',
  'Database design and row-level security in Supabase',
  'Building for real users with real feedback loops'],

  future: [
  'AI-powered note summarization',
  'Integration with college timetable APIs',
  'Mobile app for quick session logging'],

  year: '2024'
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
  image: "/assets/ProjectScreenshots/CMS.png",
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
  slug: 'noise-field',
  title: 'noise_field.js',
  description: 'Perlin noise flow field visualization. 10,000 particles following a noise vector field. Pure canvas, no libraries.',
  tech: ['JavaScript', 'Canvas API', 'Perlin Noise'],
  github: 'https://github.com',
  live: 'https://codepen.io',
  year: '2024'
},

{
  slug: 'css-art',
  title: 'css_art_collection',
  description: 'Pure CSS art experiments — no images, no SVGs, just divs and gradients. Includes a CSS-only Minecraft creeper.',
  tech: ['HTML', 'CSS'],
  github: 'https://github.com',
  live: 'https://codepen.io',
  year: '2023'
}];