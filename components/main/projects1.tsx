"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview, stopwatch, weatherapp } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../lib/styles";
import { cn } from "../../lib/lib";
import { fadeIn, textVariant } from "../../lib/motion";
import {
    project1,
    project2,
    project3,
    project4,project5,project6,

} from '../../assets';
const PROJECTS = [
    {
      name: "StopWatch",
      description:
        "Stopwatch using HTML, Tailwind CSS, and JavaScript",
      tags: [
        {
          name: "html",
          color: "text-yellow-400",
        },
        {
          name: "tailwindcss",
          color: "text-blue-700",
        },
        {
          name: "js",
          color: "text-red-500",
        },
      ],
      image: stopwatch,
      source_code_link: "https://github.com/rishit-roars/stopwatch",
      live_site_link: "https://rishit-roars.github.io/stopwatch/",
    },
    {
      name: "Weather App",
      description:
        "This is a simple weather app built using HTML, JavaScript, and Tailwind CSS. It utilizes the OpenStreetMap API for location autocomplete and the OpenWeatherMap API to fetch weather data.",
      tags: [
        {
          name: "html",
          color: "text-yellow-400",
        },
        {
          name: "tailwindcss",
          color: "text-blue-500",
        },
        {
          name: "js",
          color: "text-red-500",

        },
        {
            name:"API",
            color:'text-green-400'
        }
      ],
      image: weatherapp,
      source_code_link: "https://github.com/rishit-roars/weatherapp",
      live_site_link: "https://rishit-roars.github.io/weatherapp/",
    },
    
  ] 
  
type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image */}
        <img
          src={image.src}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview.src}
              alt="Live Site"
              title="Live Site"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>

          {/* Github */}
          <div
            onClick={() =>
              window.open(source_code_link, "_blank", "noreferrer")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
          >
            <img
              src={github}
              alt="Github"
              title="Github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
         
        </motion.div>

        {/* About */}
        <div className="w-full flex">
            <h1 className="text-3xl pl-10 pt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">My Projects</h1>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
