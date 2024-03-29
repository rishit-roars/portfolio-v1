import { FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  don,
  iem,
  ieee,
} from "../assets";
import { title } from "process";
export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  }

] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/rishit__roars/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/rishit-roars",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/rishit-chowdhury-478b59285/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  
] as const;

export const BACKEND_SKILL = [
] as const;

export const FULLSTACK_SKILL = [
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Stop Watch",
    description:
      'A StopWatch WebApp using HTML,CSS,JS,AOS,TAILWIND CSS etc.',
    image: "/projects/project1.png",
    link: "https://rishit-roars.github.io/stopwatch/",
  },
] as const;

export const FOOTER_DATA = [


] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;



export const EXPERIENCES = [
  {
    title: "Higher Secondary",
    company_name: "Don Bosco School, Park Circus, Kolkata",
    icon: don,
    iconBg: "#383E56",
    date: "April 2010 - May 2020",
    points: [

    ],
  },
  {
    title: "B.Tech 2nd Year",
    company_name: "Institute Of Engineering and Management",
    icon: iem,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Learned JAVA,CSS,HTML",
      "Delighted to share my recent accomplishments at the Innovacion tech fest by IEM, Kolkata! 🚀.",
    
    ],
  },
  {
    title:'Experience',
    company_name: "IEEE Computer Society",
    icon: ieee,
    iconBg: "#E6DEDD",
    date: "FEB 2024",
    points: [
      "IEEE Computer Society · Full-time",
      "I’m happy to share that I’m starting a new position as Content team at IEEE Computer Society! ",
    
    ],
  
  }
] as const;

