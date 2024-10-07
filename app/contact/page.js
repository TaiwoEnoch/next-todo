'use client'; // Explicitly define this file as a client component

import React from 'react';
import { motion } from 'framer-motion';

// Define static animation variants outside the component
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Page = () => {
  return (
    <>
      <section className="bg-[#aedbee]">
        <div className="max-w-2xl mx-auto py-32">
          <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>

          {/* Animated Paragraphs */}
          {[
            "Hello! I am Taiwo Enoch, a passionate frontend developer dedicated to creating engaging and user-friendly web experiences. With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills to excel in modern web development frameworks and libraries, particularly React and Next.js.",
            "I specialize in crafting responsive and visually appealing interfaces using Tailwind CSS, which allows me to build designs that are not only functional but also aesthetically pleasing. My approach to frontend development emphasizes clean code, performance optimization, and accessibility, ensuring that users have a seamless experience across devices.",
            "I thrive on challenges and enjoy collaborating with teams to bring innovative ideas to life. My goal is to continuously improve my skills and stay updated with the latest trends in web development to deliver the best possible solutions for my projects.",
            "Let’s connect and create something amazing together!",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }} // Staggered delay for paragraphs
              className="mb-4"
            >
              {text}
            </motion.p>
          ))}

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Connect with me:</h2>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { name: "Instagram", url: "https://www.instagram.com/taiwoenoch_", bg: "bg-blue-500" },
                { name: "Facebook", url: "https://www.facebook.com/taiwo.enochnunayon", bg: "bg-blue-600" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/taiwo01", bg: "bg-blue-700" },
                { name: "Twitter", url: "https://twitter.com/enoch_dev01", bg: "bg-blue-400" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-2 text-white rounded transition-transform duration-300 transform hover:${social.bg}-dark hover:scale-105 ${social.bg}`}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }} // Staggered delay for buttons
                >
                  {social.name} {/* Tooltip text */}
                  <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-1 hidden group-hover:block text-xs bg-gray-700 text-white rounded py-1 px-2">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
