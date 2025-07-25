import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Replace these with your actual certificate image paths
  const certificationImages = [
    "/certificates/webgeon-cert.jpg", // Place in public/certificates folder
    "/certificates/IBM.AI.jpg",
    "/certificates/embedded-cert.jpg",
    "/certificates/python.jpg",
    "/certificates/vega-cert.jpg",
    
  ];

  const certifications = [
    {
      title: "Web Developer Intern",
      issuer: "WebGeon Solutions",
      date: "Jan 2025 - Jun 2025",
      description: "Completed 6-month intensive internship focusing on modern web development technologies including React, Next.js, and Node.js.",
      skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      title: "Generative AI powered application",
      issuer: "IBM through Coursera",
      date: "Jul 2024",
      description: "Specialized Course covering core concepts of generative AI ,Build generative AI-powered applications and chatbots using LLMs, retrieval-augmented generation(RAG),Integrate speech-to-text (STT) and text-to-speech (TTS) technologies",
      skills: ["Prompt Engineering", "Generative AI", "Artificial Intelligence and Machine Learning (AI/ML)", "IBM Cloud"],
    },
    {
      title: "Embedded Systems Intern",
      issuer: "Codtech Solutions",
      date: "Aug 2023 - Sept 2023",
      description: "Hands-on training in embedded systems design, microcontroller programming, and IoT applications.",
      skills: ["C/C++", "Arduino", "Esp", "IoT Protocols"],
    },
    {
      title: "Python Full Stack Development",
      issuer: "Techmaghi",
      date: "Jun 2021 - Aug 2021",
      description: "Comprehensive training in Python backend development with Django and frontend integration.",
      skills: ["Python", "Django", "HTML/CSS", "JavaScript", "REST APIs"],
    },
    {
      title: "Workshop on Vega Processor",
      issuer: "CDAC Trivandrum",
      date: "June 2024",
      description: "Hands on projects using sensors,led etc with microcontroller.",
      skills: ["app controlled functions", "Microcontrollers", "sensors", "motors"],
    },
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % certifications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [certifications.length]);

  const handleDownload = (imageUrl: string, filename?: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = filename || "certificate.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 ">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Validated skills and professional development achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                animate={{
                  borderColor: activeCert === index ? "#3b82f6" : "#e5e7eb",
                  boxShadow: activeCert === index ? "0 10px 25px -5px rgba(59, 130, 246, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveCert(index)}
                className={`bg-white p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${activeCert === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                    <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {index === 0 ? 'Latest': 'Completed'}
                  </div>
                </div>
                <p className="mt-3 text-gray-600">{cert.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="sticky top-24 h-fit"
          >
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <motion.div
                key={activeCert}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={certificationImages[activeCert]}
                    alt={`${certifications[activeCert].title} Certificate`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <button
                    onClick={() => handleDownload(
                      certificationImages[activeCert],
                      `${certifications[activeCert].issuer.replace(/\s+/g, '-')}-certificate.jpg`
                    )}
                    className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                  <a
                    href={certificationImages[activeCert]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Full
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">About This Certification</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Skills Validated:</h4>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {certifications[activeCert].skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Verification:</h4>
                  <p className="mt-1 text-gray-600">This certification can be verified through the issuing organization's official records.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;