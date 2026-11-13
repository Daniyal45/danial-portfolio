// Utils
import { ICONS } from "./icons";

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "history", label: "History" },
  { id: "contact", label: "Contact" },
];

export const SECTION_INDEX = {
  home: 0,
  about: 1,
  skills: 2,
  projects: 3,
  history: 4,
  contact: 5,
};

export const HERO = {
  name: "Daniyal Hasan Shah",
  roleWords: ["Experienced", "Software", "Engineer"],
  status: "Open to new projects",
  summary:
    "I engineer full-stack web applications from the ground up, combining React and Next.js interfaces with Node.js and Python backend APIs",
};

export const BOOT_LOG = [
  { text: "initializing runtime", status: "ok" },
  { text: "loading react@19", status: "ok" },
  { text: "mounting components", status: "ok" },
  { text: "compiling portfolio", status: "ok" },
  { text: "ready.", status: "" },
];

export const ABOUT = {
  heading: "Curious, determined,",
  highlight: "careful with details",
  lead: [
    "I’m a Software Engineer with a Master’s degree in Computer Science and extensive experience in building web applications. My work spans frontend development, backend integrations, and application architecture, with a strong focus on React, JavaScript and Python.",
    "I’ve worked with teams across different industries, building business platforms, management systems, and customer-facing products. I like understanding how a product works as a whole, identifying the actual problem, and choosing a technical approach that makes sense.",
  ],
  stats: [
    { value: "7+", label: "Years of experience" },
    { value: "MSc", label: "Computer Science" },
  ],
  points: [
    "Built enterprise fullstack web applications end to end",
    "Built SEO‑optimized brand websites with Next.js",
    "Migrated a complete UI from non‑React to React",
    "Created React components and views inside non‑React apps",
    "Maintained and enhanced an existing React web application",
    "Mentored junior developers on an ongoing project",
  ],
};

export const SKILLS = {
  heading: "The tools",
  highlight: "I work with",
  lead: "A focused stack for building and maintaining web products. My core stack is marked in green.",
  groups: [
    {
      title: "Web development",
      display: "chips",
      items: ["React JS", "Next JS", "Node JS", "JavaScript", "TypeScript", "Python", "Tailwind", "Bootstrap", "MySQL", "PostgreSQL", "HTML", "CSS"],
      highlighted: ["React JS", "Next JS", "Node JS", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Architecture",
      display: "chips",
      items: ["WebSockets", "Redux", "Jotai", "Webpack", "REST API", "AI Integration", "RAG"],
      highlighted: [],
    },
    {
      title: "Tools",
      display: "chips",
      items: ["VS Code", "Git", "Jira", "Figma", "Cursor", "GitHub Copilot", "Claude", "Google Analytics"],
      highlighted: [],
    },
    {
      title: "Strengths",
      display: "list",
      items: [
        "Non React to React migration",
        "AI powered applications",
        "Data visualization",
        "SDLC ownership & code review",
        "Open source contribution",
        "Research & development",
        "Team leadership",
        "Mentoring juniors",
      ],
      highlighted: [],
    },
  ],
};

export const PROJECTS = [
  {
    slug: "saudia-private",
    name: "Saudia Private Website",
    company: "Saudia Private Aviation",
    logo: { src: "/images/spa/spa_logo.png", width: 750, height: 203 },
    role: "Lead Software Engineer",
    tech: ["Next JS", "React JS", "Jotai", "Python", "Google Analytics", "REST API", "i18next", "TypeScript", "JavaScript", "CSS", "HTML"],
    description: [
      "I worked on revamping the Saudia Private Aviation website, rebuilding its frontend to match the company's updated branding, new logo, and overall visual direction. My main focus was improving the existing UI, refining the user experience, and making the website more responsive and maintainable.",
      "Using React.js and Next.js, I developed the website's core pages, built reusable components, and implemented interactive features. I also worked on application state management with Jotai and integrated REST APIs to connect the frontend with backend services.",
      "A major part of the work involved developing the multi-step flight booking form and organizing key sections such as aircraft fleets, aviation services, and business partners. I also implemented bilingual support using i18next, covering both English and Arabic, and integrated Google Analytics to monitor website traffic and user engagement.",
    ],
    contributions: [
      "Rebuilt and refined the frontend using React.js and Next.js to reflect the company's new brand identity.",
      "Developed reusable React components and responsive page layouts to keep the UI consistent and easier to maintain.",
      "Implemented the multi-step flight booking form and other interactive website features.",
      "Managed application state using Jotai.",
      "Integrated REST APIs to connect frontend components with backend functionality.",
      "Implemented English and Arabic language support using i18next.",
      "Integrated Google Analytics to track website traffic and user interactions.",
      "Improved the overall UI structure, responsiveness, and consistency across the website.",
    ],
    screens: [{ label: "Home / booking" }, { label: "Services" }, { label: "Login" }],
  },
  {
    slug: "spaerolink",
    name: "Spaerolink",
    company: "Saudia Private Aviation",
    logo: { src: "/images/spaerolink/spaerolink.png", width: 453, height: 144 },
    role: "Front-End Developer",
    tech: ["React JS", "TypeScript", "JavaScript", "Jotai", "Tailwind", "ApexCharts", "WebSockets", "REST API"],
    description: [
      "I worked as a Front-End Developer on Spaerolink, a flight service management platform developed around the operational requirements of the Royal Saudi Air Force (RSAF). The system manages the complete flight service workflow, from creating flight service requests and allocating services to tracking operational progress and generating invoices.",
      "My main responsibility was developing the React-based frontend and implementing the different modules and business workflows. I worked on building interfaces for managing airbases, fleets, aircraft, crew members, flight requests, hotel bookings, and insurance requests. Since the system serves users with different responsibilities, a significant part of the development involved implementing role-based access and ensuring that users could only access records and perform actions permitted by their assigned roles and fleets.",
      "One of the more complex parts of the application was the Flight Service Request (FSR) workflow. It handles multiple flight legs, crew assignments, service allocations, hotel bookings, catering, and transportation. I also worked on the invoicing workflows, where Cost Plus and Block Hour invoices are generated automatically based on flight types and request statuses. The system maintains approval history when confirmed requests are modified, helping preserve a record of operational changes.",
    ],
    contributions: [
      "Developed the React-based SPA using TypeScript and JavaScript.",
      "Built application modules for airbases, fleets, aircraft, crew members, and flight service requests.",
      "Implemented complex FSR workflows covering multiple flight legs, service allocation, crew assignments, hotel bookings, catering, and transportation.",
      "Implemented role-based UI access and fleet-level data handling for admin and non-admin users.",
      "Used Jotai for application state management.",
      "Integrated REST APIs for communication with the Django backend, including Bearer token authentication.",
      "Implemented WebSocket-based functionality for real-time application updates.",
      "Developed data visualization components and dashboards using ApexCharts.",
      "Worked on automated invoicing workflows for Cost Plus and Block Hour invoices.",
      "Implemented request status handling and version-based approval history for tracking changes to confirmed requests.",
      "Built and styled responsive interfaces using Tailwind CSS.",
    ],
    screens: [],
  },
  {
    slug: "teaming-way",
    name: "Teaming Way",
    company: "Teaming Way Inc.",
    logo: { src: "/images/teaming-way/tw_logo.png", width: 750, height: 191 },
    role: "Front-End Software Developer",
    tech: ["React JS", "Next JS", "Redux", "Tailwind", "Google Analytics", "REST API", "WebSockets", "JavaScript", "CSS", "HTML"],
    description: [
      "I worked as a Front-End Software Developer on Teaming Way, a platform designed to bring remote teams together in one place. The application provides a centralized workspace where team members can manage tasks, communicate with colleagues, share documents, and keep track of ongoing work.",
      "My main responsibility was developing the frontend using React.js and Next.js. I worked on building reusable components, implementing application layouts, and integrating different platform modules into a consistent user experience. I used Redux for application state management and WebSockets to support real-time communication and updates across the platform.",
      "The platform also included workspace analytics, performance dashboards, audio/video meetings, and document management, bringing essential remote-team collaboration tools under one roof.",
    ],
    contributions: [
      "Developed frontend features and responsive interfaces using React.js and Next.js.",
      "Built reusable UI components and layouts using Tailwind CSS.",
      "Managed application state and data flow using Redux.",
      "Integrated REST APIs to connect frontend modules with backend services.",
      "Implemented WebSocket-based communication for real-time updates and interactions.",
      "Worked on workspace analytics and performance overview interfaces.",
      "Developed frontend interfaces for audio/video meetings and document management.",
      "Integrated Google Analytics to track user activity and platform engagement.",
    ],
    screens: [{ label: "Workspace" }, { label: "Task board" }, { label: "Meeting" }],
  },
  {
    slug: "seat-menu",
    name: "Seat Menu",
    company: "Amaxza",
    logo: { src: "/images/seat-menu/sm_logo.png", width: 750, height: 198 },
    role: "Front-End Software Developer",
    tech: ["React JS", "Material UI", "ApexCharts", "WebSockets", "REST API", "JavaScript", "CSS", "HTML"],
    description: [
      "I worked as a Front-End Software Developer on Seat Menu, a web-based platform that combines food business management with in-seat food ordering. The platform serves businesses operating across stadiums, theatres, cinemas, and sports grounds, allowing customers to browse menus and place food orders directly from their seats.",
      "My primary focus was frontend development, building interfaces for both the business management portal and the customer-facing ordering application. The business portal follows a hierarchical structure of venues, brands, branches, and menus, giving business owners a centralized way to manage their operations across multiple locations.",
      "I also worked on dashboard interfaces with interactive charts using ApexCharts, helping business owners get a clear overview of their business data. WebSockets were used to support real-time updates, while REST API integration connected the frontend with backend services.",
    ],
    contributions: [
      "Developed frontend interfaces for both business management and customer ordering portals using React.js.",
      "Built reusable UI components and responsive layouts using Material UI.",
      "Implemented management interfaces for venues, brands, branches, and menus.",
      "Developed customer-facing ordering interfaces for in-seat food ordering.",
      "Integrated ApexCharts to build interactive dashboard charts and data visualizations.",
      "Integrated REST APIs to handle data exchange between frontend modules and backend services.",
      "Implemented WebSocket-based functionality for real-time updates.",
      "Worked on improving UI consistency and usability across both portals.",
    ],
    screens: [{ label: "Owner portal" }, { label: "Customer ordering" }, { label: "Dashboard" }],
  },
  {
    slug: "seller-xpert",
    name: "Seller Xpert",
    company: "Amaxza",
    logo: { src: "/images/sellerxpert/sx_logo.png", width: 750, height: 207 },
    role: "Front-End Software Developer",
    tech: ["React JS", "Bootstrap", "ApexCharts", "WebSockets", "REST API", "JavaScript", "CSS", "HTML"],
    description: [
      "I worked as a Front-End Software Developer on Seller Xpert, a web-based dropshipping management portal designed to bring day-to-day business operations into one place. The platform covers key areas such as sales, purchases, inventory, vendor and customer management, order tracking, and invoicing.",
      "My main focus was developing the frontend interfaces for the platform's different modules using React.js and Bootstrap. I worked on building reusable components, implementing data-driven views, and integrating REST APIs to connect the frontend with backend services.",
      "I also worked on the dashboard, using ApexCharts to present sales and purchase data through interactive charts. This gave users a more accessible overview of business performance and helped them make informed decisions. WebSockets were also used to support real-time updates across the application.",
    ],
    contributions: [
      "Developed frontend interfaces for sales, purchases, inventory, and other business management modules using React.js.",
      "Built reusable UI components and responsive layouts using Bootstrap.",
      "Implemented vendor and customer management interfaces.",
      "Developed order tracking and invoicing views.",
      "Integrated ApexCharts to visualize sales and purchase data through interactive dashboards.",
      "Connected frontend modules with backend services through REST API integration.",
      "Implemented WebSocket-based functionality to support real-time application updates.",
      "Improved UI consistency and usability across different modules.",
    ],
    screens: [{ label: "Dashboard" }, { label: "Inventory" }, { label: "Invoicing" }],
  },
  {
    slug: "techris",
    name: "Techris",
    company: "Silver Solve",
    logo: { src: "/images/techris/tch_logo.png", width: 750, height: 191 },
    role: "Full-Stack Developer",
    tech: ["Python", "JavaScript", "Postgres", "REST API", "HTML", "CSS", "SQL"],
    description: [
      "I worked as a Full-Stack Developer on Techris, an ERP system built to simplify school administration and bring essential academic and financial operations under one platform. The system helps schools manage student records, track academic performance, handle fee collection and expenses, and manage payroll for teachers, staff, and administrators.",
      "My role involved working on both the frontend and backend, developing application features, managing database operations, and integrating REST APIs. I worked on different modules of the system, including student records and archives, academic grading, finance, and payroll.",
      "A key part of the platform was its financial reporting functionality, which provided profit and loss statements across monthly, quarterly, semi-annual, and annual periods. The system also included email and SMS notifications, allowing administrators to share important updates and information directly with parents.",
    ],
    contributions: [
      "Developed and maintained frontend and backend features across the ERP system.",
      "Implemented REST APIs to support communication between application modules.",
      "Worked on PostgreSQL database design, queries, and data management.",
      "Developed student management features, including academic records, archives, performance tracking, and grading.",
      "Implemented finance-related functionality for student fee collection and school expense tracking.",
      "Worked on centralized payroll management for teachers, staff, and administrators.",
      "Developed financial reporting features, including profit and loss statements across multiple reporting periods.",
      "Integrated email and SMS notifications for parent communication.",
    ],
    screens: [
      { label: "Login", src: "/images/techris/tch_login.png" },
      { label: "Dashboard", src: "/images/techris/tch_dash.png" },
      { label: "Student records", src: "/images/techris/tch_screen1.png" },
    ],
  },
  {
    slug: "kmrc",
    name: "KMRC Website",
    company: "KMRC",
    logo: { src: "/images/kmrc/kmrc_logo.png", width: 900, height: 213 },
    // Icon-only crop: the full wordmark is unreadable at card-thumbnail size.
    cardLogo: { src: "/images/kmrc/kmrc_icon.png", width: 171, height: 213 },
    role: "Front-End Software Developer",
    tech: ["jQuery", "JavaScript", "Firebase", "CSS", "HTML"],
    description: [
      "This was one of my early web development projects, built while working with the Karachi Medical Research Club (KMRC), a non-profit research group run by students. The goal was to establish an online presence for the club, showcase its research activities, introduce its team, and make its publications accessible to a wider audience.",
      "I worked as a Front-End Software Developer, developing the website across four main pages: Home, Our Team, Publications, and Contact. I focused on keeping the interface clean and easy to navigate, with particular attention to the publications section, where visitors could browse research articles, search by title, and access the full publications.",
    ],
    contributions: [
      "Developed the website frontend using HTML, CSS, JavaScript, and jQuery.",
      "Built the four main website pages with consistent layouts and straightforward navigation.",
      "Created homepage sections covering the club's introduction, workshops, and testimonials.",
      "Developed team member profiles to introduce the people behind the research group.",
      "Implemented a searchable publications section with links to full research articles.",
      "Used free Firebase hosting to deploy the website.",
      "Added social media links and club contact information.",
    ],
    screens: [{ label: "Home" }, { label: "Our team" }, { label: "Publications" }],
  },
  {
    slug: "react-table-lite",
    name: "React Table Lite",
    company: "Open Source Package",
    logo: { src: "/images/react-table-lite/react-table-lite.png", width: 629, height: 213 },
    role: "Creator & Maintainer",
    tech: ["React JS", "JavaScript", "CSS", "npm"],
    description: [
      "React Table Lite is a small React package I created and published on npm as open source. It turns a JSON array into a ready-to-use table with minimal code.",
      "Out of the box it can sort, search, export to CSV, and paginate. Rows can have view, edit, and delete actions with a callback for each, plus checkboxes for multi-select. If the defaults don't fit, you can swap in your own cell renderers, action buttons, search form, or download button.",
      "Styling goes through style props and CSS classes, so the table can match whatever UI it sits in. It is released under the MIT license.",
    ],
    contributionsTitle: "Key features",
    contributions: [
      "Renders a table from a JSON data array and a list of headers.",
      "Sorts by selected headers, with an onSort listener that returns the sorted data.",
      "Built-in search across chosen columns, or a custom search form passed in through a ref.",
      "CSV download of table data, with a custom button and an onDownload listener.",
      "Row actions for view, edit, and delete, with a callback for each.",
      "Multi-select checkboxes, with support for pre-checked and disabled rows.",
      "Custom render functions for cells and action buttons.",
      "Pagination with a configurable page range and a per-page limit dropdown.",
      "Style props and CSS classes for the container, table, header, row, and cell.",
      "Custom header labels and an empty-data message.",
    ],
    screens: [],
  },
];

export const WORK_HISTORY = {
  heading: "Organizations I have",
  highlight: "worked with",
  lead: "Since 2018, I have worked with organizations across different industries, building products for their business needs.",
  jobs: [
    { company: "Saudia Private Aviation", period: "Jan 2023 – Present", isCurrent: true },
    { company: "Teaming Way Inc", period: "Nov 2021 – Dec 2022", isCurrent: false },
    { company: "Amaxza", period: "Jun 2019 – Oct 2021", isCurrent: false },
    { company: "Silver Solve", period: "Jun 2018 – Jun 2019", isCurrent: false },
  ],
};

export const CONTACT = {
  heading: "Have a project in mind?",
  highlight: "Let’s talk",
  lead: "If you’d like to know more about my work or process, reach me by email, LinkedIn or WhatsApp.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  links: [
    {
      label: "LinkedIn",
      value: "Daniyal Hasan Shah",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
      icon: ICONS.linkedin,
    },
    {
      label: "WhatsApp",
      value: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
      href: process.env.NEXT_PUBLIC_WHATSAPP_URL,
      icon: ICONS.phone,
    },
  ],
  copyright: `© ${new Date().getFullYear()} Daniyal Hasan Shah`,
};
