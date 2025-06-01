// import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Mail, Phone, MapPin } from 'lucide-react';
// import { User as UserType } from '@/types';

// interface UserCardProps {
//   user: UserType;
//   index: number;
// }

// export const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: index * 0.1 }}
//       className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 dark:border-gray-700"
//     >
//       <div className="flex items-start space-x-4">
//         <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
//           <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
//             {user.name}
//           </h3>
//           <div className="space-y-2">
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <Mail className="w-4 h-4 mr-2" />
//               <span className="text-sm">{user.email}</span>
//             </div>
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <Phone className="w-4 h-4 mr-2" />
//               <span className="text-sm">{user.phone}</span>
//             </div>
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <MapPin className="w-4 h-4 mr-2" />
//               <span className="text-sm">{user.address.city}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// import React from 'react';
// import { motion } from 'framer-motion';
// import { User, Mail, Phone, MapPin } from 'lucide-react';
// import { User as UserType } from '@/types';

// interface UserCardProps {
//   user: UserType;
//   index: number;
// }

// export const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: index * 0.1 }}
//       className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
//     >
//       <div className="flex items-start space-x-4">
//         <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
//           <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
//             {user.name}
//           </h3>
//           <div className="space-y-2">
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <Mail className="w-4 h-4 mr-2" />
//               <span className="text-sm">{user.email}</span>
//             </div>
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <Phone className="w-4 h-4 mr-2" />
//               <span className="text-sm">{user.phone}</span>
//             </div>
//             <div className="flex items-center text-gray-600 dark:text-gray-400">
//               <MapPin className="w-4 h-4 mr-2" />
//               <span className="text-sm">{user.address.city}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { User as UserType } from '@/types';
// import { Card } from './Card';

interface UserCardProps {
  user: UserType;
  index: number;
}

export const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 p-6 border border-gray-200 dark:border-gray-700" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full flex-shrink-0">
          <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 min-w-0"> {/* min-w-0 is important for flex items to allow truncation */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 truncate">
            {user.name}
          </h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2 truncate">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center space-x-2 truncate">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.phone}</span>
            </div>
            <div className="flex items-center space-x-2 truncate">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.address.city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
