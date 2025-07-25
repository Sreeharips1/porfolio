import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["Home", "About", "Experience", "Certifications", "Projects", "Contact"];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          My Portfolio
        </motion.h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24}  as="svg" /> : <FiMenu size={24}  as="svg" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <ul className="flex flex-col py-2 px-4">
            {navItems.map((item) => (
              <motion.li 
                key={item}
                whileTap={{ scale: 0.98 }}
                className="border-b border-gray-100 last:border-b-0"
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = ["Home", "About", "Experience", "Certifications", "Projects", "Contact"];

//   return (
//     <motion.header 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 120, damping: 20 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}
//     >
//       <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <motion.h1 
//           whileHover={{ scale: 1.05 }}
//           className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
//         >
//           My Portfolio
//         </motion.h1>
        
//         <ul className="flex gap-6">
//           {navItems.map((item) => (
//             <motion.li 
//               key={item}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <a 
//                 href={`#${item.toLowerCase()}`} 
//                 className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
//               >
//                 {item}
//                 <motion.span 
//                   className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
//                   whileHover={{ width: '100%' }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;
