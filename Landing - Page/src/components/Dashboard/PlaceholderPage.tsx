import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

const PlaceholderPage = ({ 
  title, 
  description = 'This section is under development and will be available soon.' 
}: PlaceholderPageProps) => {
  const location = useLocation();
  
  // Extract the section name from the path
  const sectionName = location.pathname.split('/').pop() || 'page';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6"
    >
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6] rounded-full opacity-20 blur-3xl"></div>
        <div className="relative bg-[#111717] border border-[#1A1F1F] rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00FFC6] to-[#1ED5A6] text-[#0A0F0F] text-2xl font-bold mb-6">
            {title[0]}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-[#A1A1AA] text-lg mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6] hover:opacity-90 text-[#0A0F0F] font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Dashboard
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-[#1A1F1F] hover:bg-[#2D3436] text-white font-medium rounded-lg transition-all duration-200 border border-[#2D3436] flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * item }}
            className="bg-[#111717] border border-[#1A1F1F] rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1A1F1F] flex items-center justify-center text-[#00FFC6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="font-medium text-white mb-2">Feature {item}</h3>
            <p className="text-sm text-[#A1A1AA]">Coming soon to {sectionName}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlaceholderPage;
