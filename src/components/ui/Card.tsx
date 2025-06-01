// import React from 'react';
// import { motion } from 'framer-motion';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
