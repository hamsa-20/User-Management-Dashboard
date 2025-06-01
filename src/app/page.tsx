// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Users, UserPlus, BarChart3 } from 'lucide-react';
// import { Button } from '@/components/ui/Button';
// import { Card } from '@/components/ui/Card';
// import { ThemeToggle } from '@/components/ThemeToggle';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
//       {/* Header */}
//       <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Users className="w-8 h-8 text-blue-600 mr-3" />
//               <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//                 User Management
//               </h1>
//             </div>
//             <ThemeToggle />
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 flex items-center justify-center">
//         <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          
//           {/* Hero Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
//               Welcome to Your Dashboard
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//               Manage your users efficiently with our clean and intuitive interface
//             </p>
//           </motion.div>

//           {/* Action Cards */}
//           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto justify-items-center">
            
//             {/* View Dashboard Card */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="w-full max-w-sm"
//             >
//               <Card className="h-full p-8 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
//                 <div className="text-center">
//                   <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                     View Dashboard
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-8">
//                     Browse and manage your existing users with powerful search and filtering tools
//                   </p>
//                   <Link href="/dashboard" passHref>
//                     <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
//                       Go to Dashboard
//                     </Button>
//                   </Link>
//                 </div>
//               </Card>
//             </motion.div>

//             {/* Add New User Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="w-full max-w-sm"
//             >
//               <Card className="h-full p-8 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
//                 <div className="text-center">
//                   <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <UserPlus className="w-8 h-8 text-green-600 dark:text-green-400" />
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//                     Add New User
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-8">
//                     Create new user accounts with our simple and intuitive form interface
//                   </p>
//                   <Link href="/dashboard/add" passHref>
//                     <Button className="w-full py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white">
//                       Add User
//                     </Button>
//                   </Link>
//                 </div>
//               </Card>
//             </motion.div>
//           </div>


//         </div>
//       </main>
//     </div>
//   );
// }
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, UserPlus, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                User Management
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Welcome to Your Dashboard
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Manage your users efficiently with our clean and intuitive interface
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
              
              {/* View Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full p-8 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      View Dashboard
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Browse and manage your existing users with powerful search and filtering tools
                    </p>
                    <Link href="/dashboard" passHref>
                      <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                        Go to Dashboard
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>

              {/* Add New User Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full p-8 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <UserPlus className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      Add New User
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Create new user accounts with our simple and intuitive form interface
                    </p>
                    <Link href="/dashboard/add" passHref>
                      <Button className="w-full py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white">
                        Add User
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}