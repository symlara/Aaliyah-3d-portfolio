import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  creativeportfolio,
  vandy,
  youtubeclone,
  restaurantapp,
  asymlyriksapp,
  ecommerceapp,
  futurevusite,
  sonicbookone,
  nikecloneproject,
  omarionlogo,
  travelapp,
  wordpressicon,
  onwardupward,
  techhaven,
  brainwave,
  apple,
  HCAlogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "ReactJs Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Wordpress",
    icon: wordpressicon,
  },
];

const experiences = [
  {
    title: "Product Analyst",
    company_name: "HCA Healthcare",
    icon: HCAlogo,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Handle intake of enhancement requests, assessess for feasibility, and prioritizes based on business value and tracks to delivery.",
      "Works closely with the business to plan for go-live, and ensure that the product is delivered on time and within scope.",
      "Builds relationships, communicates, and collaborates with stakeholders of all levels, personalitie, and technical expertise, to ensure the product is delivered as expected.",
      "Motivated to work independently and as part of a team, and to take on new tasks with high level of difficulty.",
      "Analyzes data to identify trends and insights that can be used to improve the product.",
    ],
  },
  {
    title: "Tech Support Specialist/Web Developer",
    company_name: "Vanderbilt University",
    icon: vandy,
    iconBg: "#383E56",
    date: "July 2017 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Marketing Intern",
    company_name: "Omarion Worldwide",
    icon: omarionlogo,
    iconBg: "#383E56",
    date: "Jan 2023 - June 2023",
    points: [
      "Assisting with developing the new web presence for singer Omarion and his team",
      "Created a new website specifically for his album Sonic Book One rollout in 2023.",
      "Learned a year's worth of knowledge about the music industry from Omarion's Director and the CEO of the company",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "Sonic Book One",
    description:
      "This is a website that was built for Omarion's album rollout. This site is using ReacJS and TailwindCSS. I used my UI/UX knowledge to built our a site that would benefit Omarion as well as the fans who would visit the site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },

      {
        name: "react-icons",
        color: "pink-text-gradient",
      },
      {
        name: "sass",
        color: "blue-text-gradient",
      },
      {
        name: "react hover video",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
      {
        name: "react tilt",
        color: "green-text-gradient",
      },
    ],
    image: sonicbookone,
    source_code_link: "https://omarionworldwide.netlify.app/",
  },
  // {
  //   name: "Nike Clone Project",
  //   description:
  //     "This is a website that was built for learning purposes. I do not own anything on the site itself and this is only a clone meant to demonstrate my skillset in building responsive, react websites. ",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },

  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: nikecloneproject,
  //   source_code_link: "https://nike-app-project.netlify.app/",
  // },
  // {
  //   name: "Onward & Upward",
  //   description:
  //     "This site was created using React, TailwindCSS, Swiper, and ReduxJS. It was created for learning purposes but is fully functional.",
  //   tags: [
  //     {
  //       name: "Wordpress CMS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: onwardupward,
  //   source_code_link: "https://inspireexplorepromote.com/",
  // },
  // {
  //   name: "Youtube Clone",
  //   description:
  //     "This site was built for learning purposes but it does function like a youtube style application.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: youtubeclone,
  //   source_code_link: "https://asym-youtube-clone.netlify.app/",
  // },
  // {
  //   name: "Tech Haven App",
  //   description:
  //     "This site was built for learning purposes only. I have build an ecommerce website with stripe functionality.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "NextJs",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "Stripe",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: techhaven,
  //   source_code_link: "https://ecommerce-symlardev.payloadcms.app/",
  // },
  {
    name: "Apple Titanium Site",
    description:
      "This site was built for learning purposes only using ReactJS, Three, GSAP, and VITE.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },

      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://apple-titanium-clone.netlify.app/",
  },
  {
    name: "Brainwave",
    description:
      "This site was built to sharpen my UI skills with ViteJs, TailwindCSS, and ReactJs. It does not have any functional capabilities at this time but they may be added at a later date.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "react-just-parallax",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://brainwave-asm.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
