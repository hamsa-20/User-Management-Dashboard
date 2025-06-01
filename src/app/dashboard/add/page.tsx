// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowLeft, UserPlus, Shield } from 'lucide-react';
// import { FormProvider } from '@/contexts/FormContext';
// // import { AddUserForm } from '@/components/AddUserForm';

// // Inline AddUserForm component
// function AddUserForm() {
//   const [currentStep, setCurrentStep] = React.useState(1);
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [formData, setFormData] = React.useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     department: '',
//     address: '',
//     password: '',
//     confirmPassword: ''
//   });
//   type FormErrors = {
//     fullName?: string;
//     email?: string;
//     phone?: string;
//     department?: string;
//     address?: string;
//     password?: string;
//     confirmPassword?: string;
//   };
//   const [errors, setErrors] = React.useState<FormErrors>({});

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateStep = (step: number) => {
//     const newErrors: FormErrors = {};

//     if (step === 1) {
//       if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//       if (!formData.email.trim()) newErrors.email = 'Email address is required';
//       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
//         newErrors.email = 'Please enter a valid email address';
//       if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
//     } else if (step === 2) {
//       if (!formData.department.trim()) newErrors.department = 'Department is required';
//       if (!formData.address.trim()) newErrors.address = 'Address is required';
//     } else if (step === 3) {
//       if (!formData.password.trim()) newErrors.password = 'Password is required';
//       else if (formData.password.length < 8) 
//         newErrors.password = 'Password must be at least 8 characters';
//       if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password';
//       else if (formData.password !== formData.confirmPassword) 
//         newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(prev => Math.min(prev + 1, 3));
//     }
//   };

//   const handleBack = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1));
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (validateStep(3)) {
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Progress Bar */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//             Step {currentStep} of 3
//           </span>
//           <span className="text-sm text-gray-500 dark:text-gray-400">
//             {currentStep === 1 ? 'Basic Information' : currentStep === 2 ? 'Additional Details' : 'Security Setup'}
//           </span>
//         </div>
//         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//           <motion.div
//             className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
//             initial={{ width: '33.33%' }}
//             animate={{ width: `${(currentStep / 3) * 100}%` }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           />
//         </div>
//       </div>

//       {/* Step Content */}
//       <motion.div
//         key={currentStep}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.3 }}
//         className="space-y-6"
//       >
//         {currentStep === 1 && (
//           <>
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                 Basic Information
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Please provide the user's basic details
//               </p>
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <UserPlus className="h-4 w-4 mr-2 text-gray-500" />
//                 Full Name
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 placeholder="Enter full name"
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.fullName 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               />
//               {errors.fullName && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.fullName}
//                 </p>
//               )}
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <ArrowLeft className="h-4 w-4 mr-2 text-gray-500" />
//                 Email Address
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter email address"
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.email 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.email}
//                 </p>
//               )}
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <Shield className="h-4 w-4 mr-2 text-gray-500" />
//                 Phone Number
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter phone number"
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.phone 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               />
//               {errors.phone && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.phone}
//                 </p>
//               )}
//             </div>
//           </>
//         )}

//         {currentStep === 2 && (
//           <>
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                 Additional Details
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Organization and location information
//               </p>
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <Shield className="h-4 w-4 mr-2 text-gray-500" />
//                 Department
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <select
//                 name="department"
//                 value={formData.department}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.department 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               >
//                 <option value="">Select Department</option>
//                 <option value="Human Resources">Human Resources</option>
//                 <option value="Engineering">Engineering</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Sales">Sales</option>
//                 <option value="Finance">Finance</option>
//                 <option value="Operations">Operations</option>
//               </select>
//               {errors.department && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.department}
//                 </p>
//               )}
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <ArrowLeft className="h-4 w-4 mr-2 text-gray-500" />
//                 Address
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 placeholder="Enter address"
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.address 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               />
//               {errors.address && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.address}
//                 </p>
//               )}
//             </div>
//           </>
//         )}

//         {currentStep === 3 && (
//           <>
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                 Security Setup
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Create secure login credentials
//               </p>
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <Shield className="h-4 w-4 mr-2 text-gray-500" />
//                 Password
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter password (min 8 characters)"
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.password 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               />
//               {errors.password && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.password}
//                 </p>
//               )}
//             </div>
            
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
//                 <Shield className="h-4 w-4 mr-2 text-gray-500" />
//                 Confirm Password
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 placeholder="Confirm password"
//                 className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
//                   errors.confirmPassword 
//                     ? 'border-red-300 dark:border-red-600' 
//                     : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }`}
//               />
//               {errors.confirmPassword && (
//                 <p className="text-sm text-red-500 flex items-center">
//                   <span className="mr-1">⚠</span>
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>
//           </>
//         )}
//       </motion.div>

//       {/* Navigation Buttons */}
//       <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
//         <button
//           type="button"
//           onClick={handleBack}
//           disabled={currentStep === 1}
//           className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
//             currentStep === 1
//               ? 'text-gray-400 cursor-not-allowed'
//               : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
//           }`}
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back
//         </button>

//         {currentStep < 3 ? (
//           <button
//             type="button"
//             onClick={handleNext}
//             className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Next
//             <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
//           </button>
//         ) : (
//           <button
//             type="submit"
//             className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             <UserPlus className="h-4 w-4 mr-2" />
//             Create User
//           </button>
//         )}
//       </div>
//     </form>
//   );
// }
// import { ThemeToggle } from '@/components/ThemeToggle';
// import { Button } from '@/components/ui/Button';

// export default function AddUserPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
//       {/* Top Navigation Bar */}
//       <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <Link href="/dashboard">
//               <Button 
//                 variant="outline" 
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to Dashboard
//               </Button>
//             </Link>
//             <ThemeToggle />
//           </div>
//         </div>
//       </div>

//       {/* Main Content - Centered */}
//       <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="w-full max-w-md mx-auto"
//         >
//           {/* Header Card */}
//           <div className="text-center mb-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4 shadow-lg"
//             >
//               <UserPlus className="h-6 w-6 text-white" />
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
//             >
//               Add New User
//             </motion.h1>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="text-sm text-gray-600 dark:text-gray-300 px-4 leading-relaxed"
//             >
//               Create a new user account with<br />secure access credentials
//             </motion.p>
//           </div>

//           {/* Form Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden"
//           >
//             {/* Form Header */}
//             <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
//                   <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     User Information
//                   </h2>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     Please fill in all required fields
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-6">
//               <FormProvider>
//                 <AddUserForm />
//               </FormProvider>
//             </div>
//           </motion.div>

//           {/* Footer Note */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="text-center mt-8"
//           >
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               All user data is encrypted and securely stored in compliance with data protection regulations
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, UserPlus, Shield } from 'lucide-react';
import { FormProvider } from '@/contexts/FormContext';
// import { AddUserForm } from '@/components/AddUserForm';

// Inline AddUserForm component
function AddUserForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  type FormErrors = {
    fullName?: string;
    email?: string;
    phone?: string;
    department?: string;
    address?: string;
    password?: string;
    confirmPassword?: string;
  };
  const [errors, setErrors] = React.useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
        newErrors.email = 'Please enter a valid email address';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    } else if (step === 2) {
      if (!formData.department.trim()) newErrors.department = 'Department is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
    } else if (step === 3) {
      if (!formData.password.trim()) newErrors.password = 'Password is required';
      else if (formData.password.length < 8) 
        newErrors.password = 'Password must be at least 8 characters';
      if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password';
      else if (formData.password !== formData.confirmPassword) 
        newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Step {currentStep} of 3
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentStep === 1 ? 'Basic Information' : currentStep === 2 ? 'Additional Details' : 'Security Setup'}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
            initial={{ width: '33.33%' }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {currentStep === 1 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Basic Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Please provide the user's basic details
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <UserPlus className="h-4 w-4 mr-2 text-gray-500" />
                Full Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter full name"
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.fullName 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              />
              {errors.fullName && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.fullName}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <ArrowLeft className="h-4 w-4 mr-2 text-gray-500" />
                Email Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.email 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.email}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-gray-500" />
                Phone Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.phone 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.phone}
                </p>
              )}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Additional Details
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Organization and location information
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-gray-500" />
                Department
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.department 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <option value="">Select Department</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
              </select>
              {errors.department && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.department}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <ArrowLeft className="h-4 w-4 mr-2 text-gray-500" />
                Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.address 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              />
              {errors.address && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.address}
                </p>
              )}
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Security Setup
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create secure login credentials
              </p>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-gray-500" />
                Password
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password (min 8 characters)"
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.password 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.password}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-gray-500" />
                Confirm Password
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.confirmPassword 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </>
        )}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            currentStep === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        {currentStep < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Next
            <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
          </button>
        ) : (
          <button
            type="submit"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Create User
          </button>
        )}
      </div>
    </form>
  );
}
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/Button';

export default function AddUserPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md mx-auto"
        >
          {/* Header Card */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4 shadow-lg"
            >
              <UserPlus className="h-6 w-6 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Add New User
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm text-gray-600 dark:text-gray-300 px-4 leading-relaxed"
            >
              Create a new user account with<br />secure access credentials
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    User Information
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Please fill in all required fields
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <FormProvider>
                <AddUserForm />
              </FormProvider>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              All user data is encrypted and securely stored in compliance with data protection regulations
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}