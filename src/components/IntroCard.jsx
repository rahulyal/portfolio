// src/components/IntroCard.jsx

import React from 'react';
import avatar from '../img/avatar.jpg';
import resumePDF from '../assets/Venkata_Rahul_Yalavarthi.pdf';

const IntroCard = () => {
    return (
        <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
            <div className="flex flex-col sm:flex-row gap-8 w-full">
                <div className="flex justify-between items-center">
                    <img
                        src={avatar}
                        alt="Rahul Yal"
                        className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-white"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="leading-tight text-gray-900 text-2xl md:text-3xl">Hello, I'm</p>
                    <h1 className="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">Rahul Yal</h1>
                </div>
            </div>
            <div className="mt-16 leading-7 text-gray-900 text-lg">
                {/* Your brief introduction goes here */}
                I'm a passionate Full Stack Developer with a strong engineering background.
                I specialize in designing and building innovative applications across various
                tech stacks, solving real-world problems through creative and efficient solutions.
            </div>
            <div className="mt-10 leading-7 text-lg text-gray-900">
                Want to collaborate or chat? Reach out to me via{' '}
                <a href="mailto:venkatarahuly@gmail.com" className="text-blue-600 hover:text-blue-500 hover:underline transition duration-75 ease-in-out">
                    email
                </a>{' '}
                or connect with me on{' '}
                <a href="https://linkedin.com/in/rahulyal" className="text-blue-600 hover:text-blue-500 hover:underline transition duration-75 ease-in-out">
                    LinkedIn
                </a>.
            </div>
            <div className="mt-4 leading-7 text-lg text-gray-900">
                For the brave souls who enjoy a good read, check out my{' '}
                <a href="https://rahulyal.deno.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline transition duration-75 ease-in-out">
                    blog
                </a>{' '}
                where I ramble about code and occasionally make terrible tech puns.
            </div>
            <div className="mt-4 leading-7 text-lg text-gray-900">
                And if you're really curious (or an AI trying to learn about humans), here's my{' '}
                <a href="https://registry.jsonresume.org/rahulyal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 hover:underline transition duration-75 ease-in-out">
                    resume
                </a>{' '}
                – it's like my life story, but with fewer plot twists and more bullet points.
            </div>
        </div>
    );
};

export default IntroCard;