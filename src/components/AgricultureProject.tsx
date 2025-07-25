import { motion } from 'framer-motion';

type AgricultureProjectProps = {
  onClose: () => void;
};

const AgricultureProject = ({ onClose }: AgricultureProjectProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Multipurpose Agriculture Machine
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Project Summary:</h4>
            <p className="text-gray-600">
              Engineered an IoT-enabled Multipurpose Agricultural Vehicle equipped with ploughing, 
              seed sowing, watering, grass cutting, camera monitoring, and buzzer systems, 
              seamlessly controlled via a website to enhance farming automation and efficiency.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {[
                'IoT-enabled remote control',
                'Multi-functional agricultural operations',
                'Real-time camera monitoring',
                'Web-based control interface'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Project Photos:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['agri1.jpg', 'agri2.jpg', 'agri3.jpg'].map((photo, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img 
                    src={`/projects/${photo}`} 
                    alt={`Agriculture project photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects/agriculture.pdf"
              download="Agriculture_Project_Report.pdf"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Report
            </a>
            <a
              href="https://wa.me/9526308646?text=I'm interested in your Agriculture Machine project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AgricultureProject;



// import { motion } from 'framer-motion';

// type AgricultureProjectProps = {
//   onClose: () => void;
// };

// const AgricultureProject = ({ onClose }: AgricultureProjectProps) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         transition={{ duration: 0.2 }}
//         className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <h3 className="text-2xl font-bold text-gray-800">
//               Multipurpose Agriculture Machine
//             </h3>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//               aria-label="Close modal"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-medium text-gray-700 mb-2">Project Summary:</h4>
//             <p className="text-gray-600">
//               Engineered an IoT-enabled Multipurpose Agricultural Vehicle equipped with ploughing, 
//               seed sowing, watering, grass cutting, camera monitoring, and buzzer systems, 
//               seamlessly controlled via a website to enhance farming automation and efficiency.
//             </p>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
//             <ul className="space-y-2">
//               {[
//                 'IoT-enabled remote control',
//                 'Multi-functional agricultural operations',
//                 'Real-time camera monitoring',
//                 'Web-based control interface'
//               ].map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-blue-500 mr-2">•</span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-medium text-gray-700 mb-2">Project Photos:</h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
//                   <span className="text-gray-400">Photo {i} - Coming soon</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <a
//               href="/projects/agriculture.pdf"
//               download="Agriculture_Project_Report.pdf"
//               className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               Download Report
//             </a>
//             <a
//               href="https://wa.me/9526308646?text=I'm interested in your Agriculture Machine project"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               Contact on WhatsApp
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default AgricultureProject;