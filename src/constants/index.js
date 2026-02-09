const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio",
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles",
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery",
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact",
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills",
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive",
      icon: "trash.png",
      canOpen: false,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
      image: "/images/blog1.png",
      link: "",
    },
  ];
  
  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/techtalkdev",
    },
    {
      id: 2,
      text: "Platform",
      icon: "/icons/atom.svg",
      bg: "#4bcb63",
      link: "",
    },
    {
      id: 3,
      text: "Twitter/X",
      icon: "/icons/twitter.svg",
      bg: "#ff866b",
      link: "",
    },
    {
      id: 4,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/techtalkdev/",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/mike.jpg",
    },
    {
      id: 2,
      img: "/images/mike2.jpg",
    },
    {
      id: 3,
      img: "/images/mike3.jpg",
    },
    {
      id: 4,
      img: "/images/mike4.jpg",
    },
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Velvet Pour",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "velvetpour.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Velvet Pour website is a refined and visually striking experience inspired by the atmosphere of a high-end cocktail bar.",
            "Rather than just presenting information, it draws visitors in with elegant visuals, smooth transitions, and a carefully crafted layout.",
            "Think of it as a digital tasting experience, designed to evoke mood, style, and the art behind every pour.",
            "Every detail is intentional, creating a seamless and immersive website that feels premium, inviting, and memorable.",
          ],
        },
        {
          id: 2,
          name: "velvetpour.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://velvetpour-nine.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "velvetpour.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/HxW7WvqpVVNdDIUKgo0aaw/Cocktail-GSAP-design?node-id=0-1&p=f&t=pXiNfFcKHiUfwplD-0",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Sideline supply",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "sidelinesupply.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Sideline Supply SA website is a dynamic and sport-driven digital storefront that celebrates football and rugby culture with premium jerseys and fan gear.",
            "Rather than simply listing products, it draws fans in with bold visuals, clear categorisation by leagues and teams, and an engaging layout that makes browsing exciting and effortless.",
            "Imagine a virtual jersey shop where every scroll feels like gearing up for match day, vibrant imagery, organised collections, and compelling calls to action bring the passion of sport online.",
            "Every detail is intentional, creating a seamless and immersive shopping experience that feels energetic, trustworthy, and ready to convert fans into loyal customers.",
          ],
        },
        {
          id: 2,
          name: "sidelinesupply.co.za",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sidelinesupply.co.za/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "sidelinesupply.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/sidelinesupply.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://sidelinesupply.co.za/",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "stmsport",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "stmsport.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The STM Sport website is a high-performance and cleanly designed online shop focused on cycling and endurance gear that keeps athletes fuelled, protected, and ready to perform.",
            "Rather than just listing products, it draws visitors in with clear sections for performance nutrition, chafe protection, hydration, eyewear, and recovery essentials, all presented with crisp visuals and easy navigation.",
            "Think of it as a digital training companion: every scroll feels like stepping into a well-stocked cycling pro's kit bag, with thoughtful categorisation and product imagery that speaks to serious training and long rides.",
            "Every detail is intentional, creating a seamless and immersive shopping experience that feels focused, energetic, and built for athletes looking to push their limits.",
          ],
        },
        {
          id: 2,
          name: "stmsport.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://stmsport.co.za/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "stmsport.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/stmsport.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://stmsport.co.za/",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

  
  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/mike-1.jpg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/mike-2.jpg",
      },
      {
        id: 3,
        name: "conference-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/mike-3.jpg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/mike-4.jpg",
       description: [
        "Hey! I'm Mike 👋, a web developer who enjoys building clean, modern websites that are both good-looking and easy to use.",
        "I specialize in JavaScript and React, focusing on fast, responsive interfaces that help products feel polished and professional.",
        "I care deeply about clean UI, thoughtful UX, and writing maintainable code so projects scale smoothly and stay easy to work on.",
        "Whether I'm collaborating with a team or working with clients, I bring clear communication, attention to detail, and a genuine passion for building things that work.",
        ],
      },
    ],
  };
  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.png",
      },
      {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };