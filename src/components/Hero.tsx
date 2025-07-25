import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaWhatsapp, FaDownload } from 'react-icons/fa';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const resumeButtonRef = useRef<HTMLButtonElement>(null);

  const handleDownloadResume = () => {
    const resumeUrl = '/pdf/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sreehari_P_Shaiju_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (is3DLoaded) {
      if (contactInfoRef.current) {
        tl.fromTo(
          contactInfoRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      if (resumeButtonRef.current) {
        tl.fromTo(
          resumeButtonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );
      }

      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { 
            opacity: 0, 
            y: 80,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
          },
          { 
            opacity: 1, 
            y: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.2
          }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { 
            opacity: 0,
            y: 20,
            filter: 'blur(5px)'
          },
          { 
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8
          },
          '-=0.8'
        );
      }

      if (typingTextRef.current && cursorRef.current) {
        const text = "Full-Stack Innovator | Bridging Web Development & Electronics Engineering";
        const chars = text.split('');
        
        typingTextRef.current.textContent = '';
        
        gsap.to(cursorRef.current, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: 'power1.inOut',
          delay: 1.5
        });

        chars.forEach((char, i) => {
          gsap.to(typingTextRef.current, {
            delay: i * 0.03 + 1,
            duration: 0,
            onComplete: () => {
              if (typingTextRef.current) {
                typingTextRef.current.textContent += char;
              }
            }
          });
        });
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)' 
          },
          '-=0.4'
        );
      }

      if (orbContainerRef.current) {
        const orbs = gsap.utils.toArray<HTMLDivElement>('.floating-orb');
        orbs.forEach((orb, i) => {
          gsap.to(orb, {
            y: i % 2 === 0 ? -20 : 15,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }

      const cta = ctaRef.current;
      if (cta) {
        const handleMouseEnter = () => {
          gsap.to(cta, {
            scale: 1.05,
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.7)',
            duration: 0.3
          });
        };

        const handleMouseLeave = () => {
          gsap.to(cta, {
            scale: 1,
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
            duration: 0.3
          });
        };

        cta.addEventListener('mouseenter', handleMouseEnter);
        cta.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          tl.kill();
          cta.removeEventListener('mouseenter', handleMouseEnter);
          cta.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }
  }, [is3DLoaded]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-end px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      {/* 3D Background Container */}
      <div className="absolute inset-0 z-0">
        {!is3DLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-900" />
        )}
        
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-cSfOHHYdC5MY7BY3vAgui0eS/"
          frameBorder="0"
          width="100%"
          height="100%"
          onLoad={() => setIs3DLoaded(true)}
          className="absolute inset-0"
          allow="fullscreen"
          allowFullScreen
          title="Interactive 3D Background"
          style={{ 
            zIndex: 0,
            opacity: is3DLoaded ? 0.9 : 0,
            transition: 'opacity 0.5s ease'
          }}
        />
      </div>

      {/* Floating orbs */}
      <div ref={orbContainerRef} className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`floating-orb absolute rounded-full ${
              i % 2 === 0 ? 'bg-indigo-500/30' : 'bg-blue-500/30'
            }`}
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(12px)'
            }}
          />
        ))}
      </div>

      {/* Right Side Content */}
      <div className="relative z-20 w-full max-w-md ml-auto mt-12 sm:mt-0">
        <h1
          ref={headlineRef}
          className="text-2xl sm:text-3xl md:text-4xl font-cinzel text-white mb-2 leading-tight"
        >
          <span 
            ref={nameRef}
            className="text-transparent bg-clip-text bg-gradient-to-r font-cinzel from-indigo-400 to-blue-500 block font-bold"
            style={{ lineHeight: '1.2' }}
          >
            SREEHARI P SHAIJU
          </span>
        </h1>

        <div ref={titleRef} className="overflow-hidden mb-3 sm:mb-4">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
            <span className="text-indigo-300 font-cinzel">Web Developer</span> 
            <span className="text-gray-300 mx-2">|</span> 
            <span className="text-blue-300 font-cinzel">Electronics Engineer</span>
          </p>
        </div>

        <p
          ref={subtitleRef}
          className="text-sm sm:text-base text-blue-400 mb-6 font-body h-10 sm:h-12 flex items-center"
        >
          <span ref={typingTextRef} className="inline-block"></span>
          <span ref={cursorRef} className="inline-block w-1 h-4 sm:h-5 bg-blue-400 ml-1"></span>
        </p>

        <div ref={contactInfoRef} className="flex flex-col space-y-3 sm:space-y-4 opacity-0 mb-6">
          <div className="flex items-center group">
            <FaEnvelope className="text-blue-400 text-base sm:text-lg mr-3 group-hover:text-blue-300 transition-colors duration-300" />
            <a 
              href="mailto:sreehariwsree@gmail.com" 
              className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              sreehariwsree@gmail.com
            </a>
          </div>
          <div className="flex items-center group">
            <FaPhone className="text-blue-400 text-base sm:text-lg mr-3 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="text-sm sm:text-base text-blue-400">9526308646</span>
          </div>
          <div className="flex items-center group">
            <FaWhatsapp className="text-blue-400 text-base sm:text-lg mr-3 group-hover:text-green-400 transition-colors duration-300" />
            <a 
              href="https://wa.me/9526308646" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-blue-400 hover:text-green-400 transition-colors duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            ref={resumeButtonRef}
            onClick={handleDownloadResume}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center opacity-0"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </button>
          <button
            ref={ctaRef}
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 relative overflow-hidden opacity-0"
            onClick={() => (window.location.href = '#contact')}
            style={{
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
            }}
          >
            Hire Me
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import { useRef, useEffect, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaEnvelope, FaPhone, FaWhatsapp, FaDownload } from 'react-icons/fa';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   const nameRef = useRef<HTMLSpanElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLButtonElement>(null);
//   const orbContainerRef = useRef<HTMLDivElement>(null);
//   const [is3DLoaded, setIs3DLoaded] = useState(false);
//   const typingTextRef = useRef<HTMLSpanElement>(null);
//   const cursorRef = useRef<HTMLSpanElement>(null);
//   const contactInfoRef = useRef<HTMLDivElement>(null);
//   const resumeButtonRef = useRef<HTMLButtonElement>(null);

//   const handleDownloadResume = () => {
//     // Path to your resume in the public folder
//     const resumeUrl = '/pdf/resume.pdf';
//     const link = document.createElement('a');
//     link.href = resumeUrl;
//     link.download = 'Sreehari_P_Shaiju_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   useEffect(() => {
//     // Set up animations
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//     // Only start animations when 3D is loaded
//     if (is3DLoaded) {
//       // Contact info animation
//       if (contactInfoRef.current) {
//         tl.fromTo(
//           contactInfoRef.current,
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 0.8 },
//           '-=0.6'
//         );
//       }

//       // Resume button animation
//       if (resumeButtonRef.current) {
//         tl.fromTo(
//           resumeButtonRef.current,
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.6 },
//           '-=0.4'
//         );
//       }

//       // Name animation
//       if (nameRef.current) {
//         tl.fromTo(
//           nameRef.current,
//           { 
//             opacity: 0, 
//             y: 80,
//             clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
//           },
//           { 
//             opacity: 1, 
//             y: 0,
//             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//             duration: 1.2
//           }
//         );
//       }

//       // Title animation
//       if (titleRef.current) {
//         tl.fromTo(
//           titleRef.current,
//           { 
//             opacity: 0,
//             x: 50,
//             filter: 'blur(5px)'
//           },
//           { 
//             opacity: 1,
//             x: 0,
//             filter: 'blur(0px)',
//             duration: 0.8
//           },
//           '-=0.8'
//         );
//       }

//       // Typing animation setup
//       if (typingTextRef.current && cursorRef.current) {
//         const text = "Full-Stack Innovator | Bridging Web Development & Electronics Engineering | Creating Smart Solutions with Code & Circuits";
//         const chars = text.split('');
        
//         // Clear the text initially
//         typingTextRef.current.textContent = '';
        
//         // Cursor blink animation
//         gsap.to(cursorRef.current, {
//           opacity: 0,
//           repeat: -1,
//           yoyo: true,
//           duration: 0.5,
//           ease: 'power1.inOut',
//           delay: 1.5 // Start blinking after typing completes
//         });

//         // Typing animation
//         chars.forEach((char, i) => {
//           gsap.to(typingTextRef.current, {
//             delay: i * 0.03 + 1, // Start after other animations
//             duration: 0,
//             onComplete: () => {
//               if (typingTextRef.current) {
//                 typingTextRef.current.textContent += char;
//               }
//             }
//           });
//         });
//       }

//       // CTA animation
//       if (ctaRef.current) {
//         tl.fromTo(
//           ctaRef.current,
//           { opacity: 0, scale: 0.8 },
//           { 
//             opacity: 1, 
//             scale: 1, 
//             duration: 0.6,
//             ease: 'elastic.out(1, 0.5)' 
//           },
//           '-=0.4'
//         );
//       }

//       // Floating orbs animation
//       if (orbContainerRef.current) {
//         const orbs = gsap.utils.toArray<HTMLDivElement>('.floating-orb');
//         orbs.forEach((orb, i) => {
//           gsap.to(orb, {
//             y: i % 2 === 0 ? -20 : 15,
//             duration: 3 + Math.random() * 2,
//             repeat: -1,
//             yoyo: true,
//             ease: 'sine.inOut'
//           });
//         });
//       }

//       // CTA hover animation
//       const cta = ctaRef.current;
//       if (cta) {
//         const handleMouseEnter = () => {
//           gsap.to(cta, {
//             scale: 1.05,
//             boxShadow: '0 0 20px rgba(99, 102, 241, 0.7)',
//             duration: 0.3
//           });
//         };

//         const handleMouseLeave = () => {
//           gsap.to(cta, {
//             scale: 1,
//             boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
//             duration: 0.3
//           });
//         };

//         cta.addEventListener('mouseenter', handleMouseEnter);
//         cta.addEventListener('mouseleave', handleMouseLeave);

//         // Cleanup
//         return () => {
//           tl.kill();
//           cta.removeEventListener('mouseenter', handleMouseEnter);
//           cta.removeEventListener('mouseleave', handleMouseLeave);
//         };
//       }
//     }
//   }, [is3DLoaded]);

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-8 md:px-16 lg:px-24"
//     >
//       {/* 3D Background Container */}
//       <div className="absolute inset-0 z-0">
//         {/* Fallback gradient background */}
//         {!is3DLoaded && (
//           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-900" />
//         )}
        
//         {/* Spline 3D Background */}
//         <iframe
//           src="https://my.spline.design/genkubgreetingrobot-cSfOHHYdC5MY7BY3vAgui0eS/"
//           frameBorder="0"
//           width="100%"
//           height="100%"
//           onLoad={() => setIs3DLoaded(true)}
//           className="absolute inset-0"
//           allow="fullscreen"
//           allowFullScreen
//           title="Interactive 3D Background"
//           style={{ 
//             zIndex: 0,
//             opacity: is3DLoaded ? 0.9 : 0,
//             transition: 'opacity 0.5s ease'
//           }}
//         />
//       </div>

//       {/* Floating orbs */}
//       <div ref={orbContainerRef} className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className={`floating-orb absolute rounded-full ${
//               i % 2 === 0 ? 'bg-indigo-500/30' : 'bg-blue-500/30'
//             }`}
//             style={{
//               width: `${20 + Math.random() * 30}px`,
//               height: `${20 + Math.random() * 30}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               filter: 'blur(12px)'
//             }}
//           />
//         ))}
//       </div>

//       {/* Left Side Contact Info */}
//       <div className="absolute left-8 md:left-16 lg:left-24 bottom-1/4 z-20">
//         <div ref={contactInfoRef} className="flex flex-col space-y-4 opacity-0">
//           <div className="flex items-center group">
//             <FaEnvelope className="text-blue-400 text-xl mr-3 group-hover:text-blue-300 transition-colors duration-300" />
//             <a 
//               href="mailto:sreehariwsree@gmail.com" 
//               className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
//             >
//               sreehariwsree@gmail.com
//             </a>
//           </div>
//           <div className="flex items-center group">
//             <FaPhone className="text-blue-400 text-xl mr-3 group-hover:text-blue-300 transition-colors duration-300" />
//             <span className="text-blue-400">9526308646</span>
//           </div>
//           <div className="flex items-center group">
//             <FaWhatsapp className="text-blue-400 text-xl mr-3 group-hover:text-green-400 transition-colors duration-300" />
//             <a 
//               href="https://wa.me/9526308646" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-green-400 transition-colors duration-300"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>

//         <button
//           ref={resumeButtonRef}
//           onClick={handleDownloadResume}
//           className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center opacity-0"
//         >
//           <FaDownload className="mr-2" />
//           Download Resume
//         </button>
//       </div>

//       {/* Right Side Content */}
//       <div className="relative z-20 max-w-2xl ml-auto">
//         <h1
//           ref={headlineRef}
//           className="text-4xl md:text-6xl font-cinzel text-white mb-2 leading-tight"
//         >
//           <span 
//             ref={nameRef}
//             className="text-transparent bg-clip-text bg-gradient-to-r font-cinzel from-indigo-400 to-blue-500 block"
//             style={{ lineHeight: '1.2' }}
//           >
//             SREEHARI P SHAIJU
//           </span>
//         </h1>

//         <div ref={titleRef} className="overflow-hidden">
//           <p className="text-2xl md:text-4xl font-medium text-white mb-6">
//             <span className="text-indigo-300 font-cinzel">Web Developer</span> 
//             <span className="text-gray-300 mx-2">|</span> 
//             <span className="text-blue-300 font-cinzel">Electronics Engineer</span>
//           </p>
//         </div>

//         <p
//           ref={subtitleRef}
//           className="text-base md:text-lg text-blue-400 mb-8 max-w-2xl ml-auto font-body h-16 flex items-center"
//         >
//           <span ref={typingTextRef} className="inline-block"></span>
//           <span ref={cursorRef} className="inline-block w-1 h-6 bg-blue-400 ml-1"></span>
//         </p>

//         <div className="flex justify-end">
//           <button
//             ref={ctaRef}
//             className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 relative overflow-hidden"
//             onClick={() => (window.location.href = '#contact')}
//             style={{
//               boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
//             }}
//           >
//             Connect Me
//             <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-300" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
