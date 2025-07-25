import { useState } from 'react';
import { motion } from 'framer-motion';
import AgricultureProject from './AgricultureProject';
import PetFeederProject from './PetFeederProject';

type AcademicProject = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  github: string;
  report: string;
};

type InternshipProject = {
  title: string;
  description: string;
  technologies: string[];
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const academicProjects: AcademicProject[] = [
    {
      id: 'agriculture',
      title: 'Multipurpose Agriculture Machine',
      shortDescription: 'IoT-enabled agricultural vehicle with multiple functions',
      description: 'Engineered an IoT-enabled Multipurpose Agricultural Vehicle equipped with ploughing, seed sowing, watering, grass cutting, camera monitoring, and buzzer systems, seamlessly controlled via a website to enhance farming automation and efficiency.',
      features: [
        'IoT-enabled remote control',
        'Multi-functional agricultural operations',
        'Real-time camera monitoring',
        'Web-based control interface'
      ],
      github: '',
      report: '/projects/agriculture.pdf'
    },
    {
      id: 'petcare',
      title: 'Pet Care System',
      shortDescription: 'Remote monitoring system for pet owners',
      description: 'The system allows for remote control and monitoring through a web-based dashboard, providing convenience and peace of mind for pet owners.',
      features: [
        'Automated feeding system',
        'Remote monitoring',
        'Web-based dashboard',
        'Real-time alerts'
      ],
      github: 'https://github.com/Sreeharips1/petfeeder_miniproject.git',
      report: ''
    }
  ];

  const internshipProjects: InternshipProject[] = [
    {
      title: 'Restaurant Management System (POS)',
      description: 'A comprehensive Point of Sale system for restaurant operations including order management, billing, and inventory tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'GYM Landing Page',
      description: 'A responsive marketing website for a gym with membership signup, class schedules, and trainer information.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'GYM Management System',
      description: 'Full-stack application for gym administration including member management, attendance tracking, and payment processing.',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'Docker']
    }
  ];

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-semibold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 ">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Academic research and professional development work
          </p>
        </motion.div>

        {/* Academic Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left border-b-2 border-blue-100 pb-2">
            Academic Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Code
                      </a>
                    )}
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internship Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left border-b-2 border-blue-100 pb-2">
            Internship Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Detail Modals */}
        {activeProject === 'agriculture' && (
          <AgricultureProject onClose={handleCloseProject} />
        )}

        {activeProject === 'petcare' && (
          <PetFeederProject onClose={handleCloseProject} />
        )}
      </div>
    </section>
  );
};

export default Projects;