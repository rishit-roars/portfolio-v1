"use client"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../lib/styles";
import { fadeIn, textVariant } from "../../lib/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};
import {
  web,
  mobile,
  backend,
  creator
} from '../../assets'
import don from '../../assets/1630556987050.jpeg'
const SERVICES = [
  {
    title: "Don Bosco School, Park Circus, Kolkata",
    icon: don,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]
// Service Card
const ServiceCard = ({ service}:{service:any}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * service.index, 0.75)}
        className="w-full green-pink-gradient bg-[rgba(255,255,255,0.2)] p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={service.icon.src} alt={service.title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
          <h3 className="text-md text-white ">C</h3>
          <p className="text-sm text-gray-400">April 2010-2020</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <h2 className={'text-transparent bg-clip-text bg-gradient-to-r text-5xl from-purple-500 to-cyan-500'}>Education.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="empty-4 text-white text-[17px] max-w-3xl leading-[30px]"
        >
        
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-row gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title}service={service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
