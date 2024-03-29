"use client"
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../lib/styles";
import { textVariant } from "../../lib/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience, cl }: { experience: any, cl: any }) => (
  <VerticalTimelineElement
  visible={true}
  className="w-[100%]"
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    dateClassName={cl}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon.src}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point:any, i:any) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <h2 className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl'}>Education.</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex z-10 flex-col">
          <VerticalTimeline 
          animate={true}
          lineColor="white"
          >
              <ExperienceCard cl={'ml-5'} experience={EXPERIENCES[0]} />
              <ExperienceCard cl={'mr-5'} experience={EXPERIENCES[1]} />
              <ExperienceCard  cl={'ml-5'} experience={EXPERIENCES[2]} />

          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
