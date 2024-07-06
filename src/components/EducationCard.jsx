import React from 'react';
import university1Logo from '../img/university-logo.png';
import university2Logo from '../img/university2-logo.png';
import university3Logo from '../img/isb-logo.png';

const EducationEntry = ({ logo, degree, university, year, details }) => (
    <div className="flex flex-col sm:flex-row gap-8 w-full mb-12">
        <div className="flex justify-between items-start sm:items-center">
            <img
                src={logo}
                alt={`${university} logo`}
                className="w-24 md:w-32 h-24 md:h-32 rounded bg-white object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-grow">
            <h3 className="leading-tight text-gray-900 text-xl md:text-2xl font-semibold">{degree}</h3>
            <p className="leading-tight text-gray-700 text-lg md:text-xl">{university}</p>
            <p className="leading-tight text-gray-600 text-base md:text-lg mb-4">{year}</p>

            {details && (
                <div className="mt-2">
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Grading Assistant:</h4>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
);

const EducationCard = () => {
    return (
        <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
            <div className="flex flex-col sm:flex-row gap-8 w-full mb-12">
                <div className="flex justify-between items-center">
                    <span className="text-4xl md:text-5xl font-semibold text-gray-300">🎓</span>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="leading-tight text-gray-900 text-3xl md:text-4xl font-semibold">Education</h2>
                </div>
            </div>

            <EducationEntry
                logo={university1Logo}
                degree="M.S. Computer Science and Engineering"
                university="Santa Clara University"
                year="Graduation Year: 2024"
                details={[
                    "Design and Analysis of Algorithms",
                    "Object Oriented Programming",
                ]}
            />

            <EducationEntry
                logo={university3Logo}
                degree="Technology Entrepreneurship Programme"
                university="Indian School of Business, Hyderabad"
                year="Graduation Year: 2019"
            />

            <EducationEntry
                logo={university2Logo}
                degree="B.Tech. Mechanical Engineering"
                university="Jawaharlal Nehru Technological University, Hyderabad"
                year="Graduation Year: 2019"
            />

        </div>
    );
};

export default EducationCard;