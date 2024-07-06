import React from 'react';
import company1Logo from '../img/company1-logo.png';
import company2Logo from '../img/company2-logo.png';
import {
    SiReact, SiNextdotjs, SiPython, SiFlask, SiOpenai,
    SiDeno, SiFlutter, SiFirebase, SiVercel, SiDart
} from 'react-icons/si';
import { TbBrandDeno } from "react-icons/tb";


const iconMap = {
    React: <SiReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-[#000000]" />,
    Python: <SiPython className="text-[#3776AB]" />,
    Flask: <SiFlask className="text-[#000000]" />,
    ChatGPT: <SiOpenai className="text-[#00A67E]" />,
    Deno: <SiDeno className="text-[#000000]" />,
    Fresh: <TbBrandDeno className="text-[#000000]" />,
    Flutter: <SiFlutter className="text-[#02569B]" />,
    Dart: <SiDart className="text-[#02569B]" />,
    Firebase: <SiFirebase className="text-[#FFCA28]" />,
    Vercel: <SiVercel className="text-[#000000]" />
};

const ExperienceEntry = ({ logo, position, company, duration, responsibilities, technologies }) => (
    <div className="w-full mb-12">
        <div className="flex flex-col sm:flex-row gap-8 w-full mb-6">
            <div className="flex justify-between items-start sm:items-center">
                <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-24 md:w-32 h-24 md:h-32 rounded bg-white object-contain"
                />
            </div>
            <div className="flex flex-col justify-center flex-grow">
                <h3 className="leading-tight text-gray-900 text-xl md:text-2xl font-semibold">{position}</h3>
                <p className="leading-tight text-gray-700 text-lg md:text-xl">{company}</p>
                <p className="leading-tight text-gray-600 text-base md:text-lg">{duration}</p>
            </div>
        </div>

        {responsibilities && (
            <div className="mt-4 pl-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Responsibilities:</h4>
                <ul className="list-disc list-outside text-base text-gray-700 space-y-1 ml-5">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        )}

        {technologies && (
            <div className="mt-4 pl-4">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Technologies:</h4>
                <ul className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <li key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                            {iconMap[tech] && <span className="mr-2">{iconMap[tech]}</span>}
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

const ExperienceCard = () => {
    return (
        <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
            <div className="flex flex-col sm:flex-row gap-8 w-full mb-12">
                <div className="flex justify-between items-center">
                    <span className="text-4xl md:text-5xl font-semibold text-gray-300">💼</span>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="leading-tight text-gray-900 text-3xl md:text-4xl font-semibold">Experience</h2>
                </div>
            </div>

            <ExperienceEntry
                logo={company1Logo}
                position="Software Engineer"
                company="Curiosity Labs"
                duration="Oct 2023 - Present"
                responsibilities={[
                    "Developed key features for AskCurie, an AI kid companion application, including content management, trivia generation, and gamification systems.",
                    "Implemented backend APIs using Python and Flask, integrating with ChatGPT for content creation and validation.",
                    "Engineered responsive frontend solutions using Next.js, Deno, and Fresh framework for various application features."
                ]}
                technologies={["React", "Next.js", "Python", "Flask", "ChatGPT", "Deno", "Fresh", "Vercel"]}
            />

            <ExperienceEntry
                logo={company2Logo}
                position="Full Stack Developer"
                company="Frugal Innovation Hub"
                duration="Jun 2023 - Present"
                responsibilities={[
                    "Developed scalable healthcare appointment system for Senegal Public Healthcare, implementing regional pilot for potential nationwide deployment.",
                    "Designed intuitive interfaces for non-tech-savvy users and implemented data optimization solutions for low-bandwidth environments.",
                    "Provided technical leadership and co-designed GDT Clinic, a custom project management tool for Frugal Innovation Hub."
                ]}
                technologies={["Flutter", "Firebase", "React", "Next.js", "Dart"]}
            />

        </div>
    );
};

export default ExperienceCard;