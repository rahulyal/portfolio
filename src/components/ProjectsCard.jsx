import React from 'react';
import {
    SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss, SiMicrosoftazure,
    SiAmazonaws, SiExpress, SiRuby, SiRubyonrails, SiSqlite,
    SiJavascript, SiHtml5, SiCss3, SiAzurefunctions, SiGithub
} from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';

const iconMap = {
    React: <SiReact className="text-[#61DAFB]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    PostgreSQL: <SiPostgresql className="text-[#336791]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#38B2AC]" />,
    WebSockets: <SiNodedotjs className="text-[#339933]" />,
    'Azure Static Web Apps': <SiMicrosoftazure className="text-[#0089D6]" />,
    'Azure Functions': <SiAzurefunctions className="text-[#0089D6]" />,
    AST: <SiJavascript className="text-[#F7DF1E]" />,
    AWS: <SiAmazonaws className="text-[#FF9900]" />,
    'Express.js': <SiExpress className="text-[#000000]" />,
    Ruby: <SiRuby className="text-[#CC342D]" />,
    'Ruby on Rails': <SiRubyonrails className="text-[#CC0000]" />,
    SQLite3: <SiSqlite className="text-[#003B57]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    HTML: <SiHtml5 className="text-[#E34F26]" />,
    CSS: <SiCss3 className="text-[#1572B6]" />,
};

const ProjectEntry = ({ title, description, technologies, projectLink, githubLink }) => (
    <div className="w-full mb-12">
        <div className="flex flex-col w-full mb-4">
            <h3 className="leading-tight text-gray-900 text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-base text-gray-700">{description}</p>
        </div>

        <div className="mt-4">
            <h4 className="text-lg font-medium text-gray-800 mb-2">Technologies:</h4>
            <ul className="flex flex-wrap gap-3 mb-4">
                {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                        {iconMap[tech] && <span className="mr-2">{iconMap[tech]}</span>}
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex gap-4">
            {projectLink && (
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    <FaGlobe className="mr-1" /> Project Link
                </a>
            )}
            {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    <SiGithub className="mr-1" /> GitHub Repo
                </a>
            )}
        </div>
    </div>
);

const ProjectsCard = () => {
    return (
        <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
            <div className="flex flex-col sm:flex-row gap-8 w-full mb-12">
                <div className="flex justify-between items-center">
                    <span className="text-4xl md:text-5xl font-semibold text-gray-300">🚀</span>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="leading-tight text-gray-900 text-3xl md:text-4xl font-semibold">Projects</h2>
                </div>
            </div>

            <ProjectEntry
                title="Cows and Bulls Multiplayer Game"
                description="Developed a real-time multiplayer version of the classic Cows and Bulls game, showcasing full-stack development skills. Implemented WebSocket technology for seamless real-time communication between players, enhancing user engagement. Utilized React for a responsive frontend, Node.js for robust backend operations, and PostgreSQL for efficient data persistence. Deployed the application on Render, demonstrating proficiency in cloud deployment and DevOps practices."
                technologies={["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"]}
                projectLink="https://cows-and-bulls-game.onrender.com/"
                githubLink="https://github.com/rahulyal/cows-and-bulls-game"
            />

            <ProjectEntry
                title="Web CLI Calculator"
                description="Created an innovative web-based command-line interface (CLI) calculator tool, combining traditional CLI interaction with modern web technologies. Implemented an Abstract Syntax Tree (AST) in the backend for processing and evaluating complex mathematical expressions, showcasing advanced algorithm design. Leveraged Azure Static Web Apps for frontend hosting and Azure Functions for serverless backend operations, demonstrating cloud architecture skills."
                technologies={["React", "Azure Static Web Apps", "Azure Functions", "AST"]}
                projectLink="https://polite-meadow-0cd6b3810.5.azurestaticapps.net/"
                githubLink="https://github.com/rahulyal/EMGT-308-Cloud-Project"
            />

            <ProjectEntry
                title="Fav Player Notification System"
                description="Collaboratively designed and implemented a cloud-based solution to notify users via SMS/Email when their favorite cricket player is on strike. Utilized AWS services including EC2, Lambda, API-Gateway, and SNS to create a scalable and responsive notification system. Demonstrated proficiency in cloud architecture, serverless computing, and real-time data processing."
                technologies={["AWS", "Express.js", "Node.js"]}
                githubLink="https://github.com/rahulyal/coen-241-group-project"
            />

            <ProjectEntry
                title="Advanced Web Programming Projects"
                description="Developed a basic web framework using Rack middleware, demonstrating a deep understanding of web application architecture. Implemented an online store with admin and shopper views, showcasing proficiency in database design and full-stack development using Ruby on Rails."
                technologies={["Ruby", "Ruby on Rails", "SQLite3"]}
                githubLink="https://github.com/rahulyal/COEN278-Projects"
            />

            <ProjectEntry
                title="OS Scheduling Algorithm Visualizer"
                description="Created an educational tool to visualize CPU scheduling algorithms for a single-thread processor. Implemented interactive Gantt charts and output tables to enhance understanding of various scheduling algorithms."
                technologies={["HTML", "CSS", "JavaScript"]}
                projectLink="https://webpages.scu.edu/ftp/vyalavarthi/"
                githubLink="https://github.com/rahulyal/scheduling-algo-vis"
            />

        </div>
    );
};

export default ProjectsCard;