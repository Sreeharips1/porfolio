import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={experienceRef}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 ">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>

          {/* Experience Item */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            <div className="md:flex items-center md:space-x-8">
              <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-800">Web Developer</h3>
                  <div className="flex items-center justify-end mt-2">
                    <a 
                      href="https://www.webgeon.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
                    >
                      <span>WebGeon Solutions</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Jan 2025 -Jul 2025  (6 months Intern + 1 month Associate)</p>
                  <p className="text-gray-600 mt-2">United Arcade, Ground Floor 42<br />Hyderabad, Telangana<br />India - 500048</p>
                </motion.div>
              </div>

              <div className="hidden md:block absolute left-1/2 -ml-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white shadow-md"></div>

              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Developed responsive landing pages using Next.js + TailwindCSS + TypeScript & Vite + React, dockerized them, and hosted using Firebase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Developed and maintained User Dashboards for web applications using Nest.js, connecting frontend with Node backend</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Developed all backend work using Nest.js + PostgreSQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Utilized Postman for API testing and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Developed mobile apps using React Native + Expo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Led the Gym Management Application project and Restaurant Management Application</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;