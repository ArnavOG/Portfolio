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
  image: string;
  imageAlt: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  learned: string[];
  future: string[];
  year: string;
}

export const projects: Project[] = [
{
  slug: 'nexus-chat',
  title: 'Nexus Chat',
  category: 'Software',
  status: 'active',
  featured: true,
  description: 'A real-time peer-to-peer chat application with end-to-end encryption built in C# with .NET. Supports rooms, file transfers, and offline message queuing.',
  longDescription: 'Nexus Chat started as an exploration into socket programming and grew into a full-featured desktop messaging app. The challenge was building reliable real-time communication without a central server — every message routes peer-to-peer with AES-256 encryption.',
  tech: ['C#', '.NET', 'WPF', 'TCP Sockets', 'SQLite', 'AES-256'],
  github: 'https://github.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1069e702b-1772175188279.png",
  imageAlt: 'Dark chat interface with glowing blue message bubbles on a deep navy background',
  problem: 'Most chat apps rely on centralized servers that log and potentially expose user messages. I wanted to build something where conversations stayed truly private.',
  solution: 'Implemented a P2P architecture using TCP sockets where messages are encrypted on the sender\'s device before transmission. A lightweight relay service handles NAT traversal without storing message content.',
  features: [
  'End-to-end AES-256 encryption on all messages',
  'Real-time file transfer with progress tracking',
  'Persistent local message history via SQLite',
  'Multi-room support with custom invite links',
  'Offline message queuing — messages deliver when recipient reconnects'],

  challenges: [
  'NAT traversal for direct P2P connections across different networks',
  'Handling concurrent socket connections without blocking the UI thread',
  'Ensuring message ordering when packets arrive out of sequence'],

  learned: [
  'Deep understanding of TCP/IP socket programming in .NET',
  'Cryptography fundamentals: key exchange, symmetric encryption',
  'Async/await patterns and multi-threading in C#',
  'WPF data binding and MVVM architecture'],

  future: [
  'Voice and video call support via WebRTC',
  'Mobile client using .NET MAUI',
  'Group encryption using ratchet protocol'],

  year: '2024'
},
{
  slug: 'pixel-forge',
  title: 'PixelForge',
  category: 'Web',
  status: 'active',
  featured: true,
  description: 'A browser-based pixel art editor with animation timeline, palette management, and one-click export to PNG/GIF. Built with vanilla TypeScript and Canvas API.',
  longDescription: 'PixelForge was born from frustration with existing pixel art tools being either too complex or behind paywalls. I wanted a fast, zero-install editor that runs entirely in the browser.',
  tech: ['TypeScript', 'Canvas API', 'CSS Grid', 'Web Workers', 'IndexedDB'],
  github: 'https://github.com',
  live: 'https://pixelforge.demo',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ded73a1c-1772735370018.png",
  imageAlt: 'Colorful pixel art grid on a dark editor interface with vibrant 8-bit style graphics',
  problem: 'Pixel art tools are either desktop-only, subscription-based, or too bloated for quick sketches. There\'s a gap for a fast, free, browser-native editor.',
  solution: 'Built a canvas-based editor using raw TypeScript with no frameworks. Used Web Workers for heavy operations like GIF encoding to keep the UI responsive.',
  features: [
  '32×32 to 128×128 canvas sizes',
  'Animation timeline with onion-skinning',
  'Custom palette builder with color history',
  'Export to PNG, sprite sheet, and animated GIF',
  'Auto-save to IndexedDB — no account required'],

  challenges: [
  'Implementing undo/redo with efficient memory usage for large canvases',
  'GIF encoding in JavaScript while keeping the UI thread unblocked',
  'Touch support for tablet drawing with pressure sensitivity approximation'],

  learned: [
  'Deep dive into Canvas 2D API and pixel manipulation',
  'Web Workers for offloading CPU-intensive tasks',
  'IndexedDB for structured client-side storage',
  'Performance profiling and paint optimization'],

  future: [
  'Collaborative editing via WebSockets',
  'Layer system with blend modes',
  'Import from PNG for editing existing pixel art'],

  year: '2024'
},
{
  slug: 'algo-visualizer',
  title: 'AlgoVisualizer',
  category: 'Web',
  status: 'active',
  featured: true,
  description: 'Interactive visualization of 20+ sorting and pathfinding algorithms with step-by-step controls, speed adjustment, and complexity analysis.',
  longDescription: 'AlgoVisualizer was built while studying DSA — I learn best by seeing things happen, so I built the tool I wished existed while studying.',
  tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
  github: 'https://github.com',
  live: 'https://algovis.demo',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1562af693-1772433144403.png",
  imageAlt: 'Colorful bar chart visualization of sorting algorithm steps on a dark background with highlighted bars',
  problem: 'Most algorithm visualizers are outdated, slow, or don\'t explain what\'s happening at each step. Learning DSA without visual context is unnecessarily hard.',
  solution: 'Built a step-through visualization engine where each algorithm emits "frames" — snapshots of state — that can be played, paused, and scrubbed like a video.',
  features: [
  '20+ algorithms: bubble, merge, quick, heap, Dijkstra, A*, BFS, DFS',
  'Step-by-step controls with speed adjustment',
  'Complexity panel showing O(n) analysis per algorithm',
  'Randomize, custom input, and comparison mode',
  'Mobile-responsive with touch controls'],

  challenges: [
  'Decoupling algorithm logic from rendering to keep visualizations framework-agnostic',
  'Smooth animations for array swaps without layout thrashing'],

  learned: [
  'Deep understanding of sorting and graph algorithms',
  'React performance optimization with useMemo and useCallback',
  'Animation sequencing with Framer Motion'],

  future: [
  'Tree visualizations: AVL, Red-Black',
  'User-submitted algorithms via sandboxed eval',
  'Dark/light theme toggle'],

  year: '2023'
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
  slug: 'cli-toolkit',
  title: 'CLI Toolkit',
  category: 'Software',
  status: 'active',
  featured: false,
  description: 'A personal collection of CLI tools: file organizer, batch renamer, git workflow shortcuts, and a dev environment bootstrapper. Built in Python.',
  longDescription: 'A growing collection of command-line utilities I use daily. Started with a file organizer, expanded into a full toolkit.',
  tech: ['Python', 'Click', 'Rich', 'subprocess', 'argparse'],
  github: 'https://github.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e746b1b-1772511364607.png",
  imageAlt: 'Dark terminal screen with green text and command line interface showing file operations',
  problem: 'Repetitive dev tasks eating time every day.',
  solution: 'Built a modular CLI toolkit using Python Click framework with Rich for terminal UI.',
  features: [
  'File organizer by extension/date',
  'Batch file renamer with regex support',
  'Git workflow shortcuts',
  'Dev environment bootstrapper'],

  challenges: ['Cross-platform compatibility between Windows and macOS'],
  learned: ['Click framework architecture', 'Rich library for terminal UIs', 'Cross-platform Python scripting'],
  future: ['Package on PyPI', 'Plugin system for community contributions'],
  year: '2024'
},
{
  slug: 'neural-sketch',
  title: 'NeuralSketch',
  category: 'AI',
  status: 'wip',
  featured: false,
  description: 'Experimenting with stable diffusion for sketch-to-image generation. Upload a rough sketch, get a refined artwork. Early-stage exploration.',
  longDescription: 'NeuralSketch is an ongoing experiment with image-to-image generation using ControlNet + Stable Diffusion.',
  tech: ['Python', 'Stable Diffusion', 'ControlNet', 'FastAPI', 'React'],
  github: 'https://github.com',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f77e0fe-1772815067249.png",
  imageAlt: 'Abstract neural network visualization with glowing purple nodes and connections on dark background',
  problem: 'Rough sketches have ideas but lack visual polish. AI can bridge the gap.',
  solution: 'ControlNet conditioning on sketch edges to guide stable diffusion image generation.',
  features: [
  'Sketch upload and edge detection preprocessing',
  'Multiple style prompts',
  'Side-by-side comparison view'],

  challenges: ['Inference speed on consumer hardware', 'Prompt engineering for consistent results'],
  learned: ['Diffusion model architecture fundamentals', 'ControlNet conditioning', 'FastAPI async endpoints'],
  future: ['Real-time sketch-to-image with optimized inference', 'Style transfer presets'],
  year: '2025'
}];


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
  slug: 'terminal-portfolio',
  title: 'terminal_v1.html',
  description: 'First portfolio attempt: a fully interactive terminal emulator in the browser. Type commands to navigate. Deprecated, kept for nostalgia.',
  tech: ['HTML', 'CSS', 'Vanilla JS'],
  github: 'https://github.com',
  year: '2023'
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