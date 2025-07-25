import { motion, Variants, Transition } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      } as Transition
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      } as Transition
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  const textVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <motion.img
                src="/photos/image1.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={textVariants}
            className="w-full md:w-2/3 text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-cinzel font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 "
            >
              About Me
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="prose prose-lg text-gray-600 max-w-none"
            >
              <p className="mb-4 font-body">
                A dynamic engineer with hands-on expertise in both software and hardware, 
                skilled in full-stack web development and embedded electronics.
              </p>
              
              <p className="mb-4 font-body">
                Known for building innovative projects from scratch, seamlessly integrating 
                code with real-world systems.
              </p>
              
              <p className="mb-6 font-body">
                Passionate about turning ideas into intelligent, functional products that 
                push boundaries and deliver impact.
              </p>

              {/* Education Section */}
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-cinzel">Education</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Federal Institute of Science and Technology, Ernakulam</p>
                      <p className="text-gray-600">Bachelor of Technology, Electronics and Communication Engineering</p>
                      <p className="text-sm text-gray-500">7.67 CGPA | 2021-2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">ST Sebastian Higher Secondary School, Kuttikad</p>
                      <p className="text-gray-600">Higher Secondary Education</p>
                      <p className="text-sm text-gray-500">97% | May 2021</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Vyasa Vidhyanikethan, Chalakudy</p>
                      <p className="text-gray-600">Secondary School Education</p>
                      <p className="text-sm text-gray-500">89% | March 2019</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              {['Web Development', 'Embedded Systems', 'Editing', 'IoT'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ 
                    y: -3,
                    backgroundColor: "#3b82f6",
                    color: "white"
                  }}
                  className="inline-block px-4 py-2 rounded-full bg-white text-blue-600 font-medium shadow-md border border-blue-100"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


// import { motion, Variants, Transition } from "framer-motion";
// import { useEffect, useState } from "react";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.getElementById('about');
//       if (element) {
//         const top = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (top < windowHeight * 0.75) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check on initial render
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       } as Transition
//     }
//   };

//   const imageVariants: Variants = {
//     hidden: { scale: 0.8, opacity: 0, rotate: -5 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5
//       } as Transition
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const textVariants: Variants = {
//     hidden: { x: -20, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: 0.3,
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="flex flex-col md:flex-row items-center justify-between gap-12"
//         >
//           {/* Image Section */}
//           <motion.div
//             variants={imageVariants}
//             whileHover="hover"
//             className="w-full md:w-1/3 flex justify-center"
//           >
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
//               <motion.img
//                 src="/photos/image1.jpg"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//               />
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               />
//             </div>
//           </motion.div>

//           {/* Text Section */}
//           <motion.div
//             variants={textVariants}
//             className="w-full md:w-2/3 text-left"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl font-cinzel text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400"
//             >
//               About Me
//             </motion.h2>

//             <motion.div
//               variants={itemVariants}
//               className="prose prose-lg text-gray-600 max-w-none"
//             >
//               <p className="mb-4 font-body">
//                 A dynamic engineer with hands-on expertise in both software and hardware, 
//                 skilled in full-stack web development and embedded electronics.
//               </p>
              
//               <p className="mb-4 font-body">
//                 Known for building innovative projects from scratch, seamlessly integrating 
//                 code with real-world systems.
//               </p>
              
//               <p className="font-body">
//                 Passionate about turning ideas into intelligent, functional products that 
//                 push boundaries and deliver impact.
//               </p>

              
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="mt-8 flex flex-wrap gap-4"
//             >
//               {['Web Development', 'Embedded Systems', 'Editing', 'IoT'].map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ 
//                     delay: 0.5 + index * 0.1,
//                     type: "spring",
//                     stiffness: 300
//                   }}
//                   whileHover={{ 
//                     y: -3,
//                     backgroundColor: "#3b82f6",
//                     color: "white"
//                   }}
//                   className="inline-block px-4 py-2 rounded-full bg-white text-blue-600 font-medium shadow-md border border-blue-100"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;