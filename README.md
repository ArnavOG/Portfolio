# Arnav — Developer Portfolio

My personal developer portfolio showcasing my projects, technical skills, learning journey, and creative work as a Computer Science student and creator.

The website is designed to bring together my development experience, academic background, selected projects, and ongoing interests in software development, web technologies, and digital creativity.

## Overview

This portfolio is an ongoing project that reflects my progress as I learn, build, and experiment with different technologies.

It serves as a central place to:

* Present selected development projects
* Document my technical learning journey
* Showcase skills and areas of interest
* Highlight academic background and experience
* Share creative work and future projects
* Provide access to relevant professional links

## Features

* Responsive portfolio layout
* Project showcase with detailed project information
* Skills and technology overview
* Education and learning timeline
* Creative work and personal interests section
* Reusable project detail structure
* Static deployment support
* Mobile-friendly design

## Technology Stack

* **Framework:** Next.js 15
* **Language:** TypeScript
* **Frontend:** React 19
* **Styling:** Tailwind CSS
* **Build Tooling:** PostCSS
* **Version Control:** Git
* **Repository Hosting:** GitHub
* **Deployment:** GitHub Pages

## Project Structure

```text
Portfolio/
├── public/                 # Static assets and public files
├── src/
│   ├── app/                # Next.js App Router files
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx       # Main portfolio page
│   ├── components/         # Reusable UI components
│   └── styles/             # Global styles
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── next.config.mjs         # Next.js configuration
├── package.json            # Project metadata and dependencies
├── postcss.config.js       # PostCSS configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

Make sure the following tools are installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/ArnavOG/Portfolio.git
```

Move into the project directory:

```bash
cd Portfolio
```

Install the dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

The application will automatically update when supported source files are modified.

## Available Scripts

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Starts the development server       |
| `npm run build`    | Creates a production build          |
| `npm run start`    | Starts the production server        |
| `npm run serve`    | Serves the production build         |
| `npm run lint`     | Runs ESLint                         |
| `npm run lint:fix` | Fixes applicable ESLint issues      |
| `npm run format`   | Formats project files with Prettier |

## Deployment

The portfolio is configured for static deployment using Next.js and GitHub Pages.

To create a production build:

```bash
npm run build
```

The generated static output can then be deployed through the configured GitHub Actions workflow.

## Customization

The main portfolio content can be updated through the files inside:

```text
src/app/
src/components/
public/
```

Typical updates include:

* Personal introduction
* Project descriptions
* Skills and technologies
* Education details
* Timeline entries
* Images and other static assets
* Resume and external links

## Credits

### Development

Designed and customized by **Arnav Kumar**.

### Initial Project Generation

The initial project structure was generated with assistance from [Rocket.new](https://rocket.new) and subsequently customized and developed further.

### Technologies and Resources

This project uses and is supported by the following technologies and resources:

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)

## License

Copyright © 2026 Arnav Kumar.

This repository is made available for viewing and educational reference. Unless otherwise stated, the source code, design, written content, images, branding, and other original materials in this project may not be copied, modified, redistributed, or used commercially without prior permission.

Third-party libraries, frameworks, and resources remain subject to their respective licenses.

For permission requests, please contact the repository owner through [GitHub](https://github.com/ArnavOG).

## Author

**Arnav Kumar**

* GitHub: [@ArnavOG](https://github.com/ArnavOG)
* Portfolio: [Arnav's Portfolio](https://arnavog.github.io/Portfolio)
