'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, User, MapPin, Eye } from 'lucide-react';
import { useForm } from '@/contexts/FormContext';
import { validateBasicInfo, validateAddress } from '@/utils/validation';
import { FormErrors } from '@/types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card } from './ui/Card';
import { Toast } from './ui/Toast';

export const AddUserForm: React.FC = () => {
  const { formData, updateFormData, resetForm, currentStep, setCurrentStep } = useForm();
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleBasicInfoChange = (field: 'name' | 'email', value: string) => {
    updateFormData('basicInfo', { [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleAddressChange = (field: 'street' | 'city' | 'zipcode', value: string) => {
    updateFormData('address', { [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateCurrentStep = (): boolean => {
    let stepErrors: FormErrors = {};

    if (currentStep === 1) {
      stepErrors = validateBasicInfo(formData.basicInfo.name, formData.basicInfo.email);
    } else if (currentStep === 2) {
      stepErrors = validateAddress(formData.address.street, formData.address.city, formData.address.zipcode);
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    const newUser = {
      name: formData.basicInfo.name,
      email: formData.basicInfo.email,
      phone: '555-0123', // Default phone
      address: {
        street: formData.address.street,
        city: formData.address.city,
        zipcode: formData.address.zipcode,
      },
    };

    console.log('New User Data:', newUser);
    showToast('User added successfully!', 'success');
    
    // Reset form after successful submission
    setTimeout(() => {
      resetForm();
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Basic Info', icon: User },
    { number: 2, title: 'Address', icon: MapPin },
    { number: 3, title: 'Review', icon: Eye },
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
            currentStep >= step.number
              ? 'bg-blue-600 border-blue-600 text-white'
              : 'border-gray-300 text-gray-400'
          }`}>
            <step.icon className="w-5 h-5" />
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-2 transition-colors ${
              currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Basic Information</h2>
      <Input
        label="Full Name"
        value={formData.basicInfo.name}
        onChange={(value) => handleBasicInfoChange('name', value)}
        error={errors.name}
        placeholder="Enter your full name"
        required
      />
      <Input
        label="Email Address"
        type="email"
        value={formData.basicInfo.email}
        onChange={(value) => handleBasicInfoChange('email', value)}
        error={errors.email}
        placeholder="Enter your email address"
        required
      />
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Address Information</h2>
      <Input
        label="Street Address"
        value={formData.address.street}
        onChange={(value) => handleAddressChange('street', value)}
        error={errors.street}
        placeholder="Enter your street address"
        required
      />
      <Input
        label="City"
        value={formData.address.city}
        onChange={(value) => handleAddressChange('city', value)}
        error={errors.city}
        placeholder="Enter your city"
        required
      />
      <Input
        label="Zip Code"
        value={formData.address.zipcode}
        onChange={(value) => handleAddressChange('zipcode', value)}
        error={errors.zipcode}
        placeholder="12345 or 12345-6789"
        required
      />
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Review & Confirm</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Basic Information</h3>
          <p className="text-gray-600 dark:text-gray-400">Name: {formData.basicInfo.name}</p>
          <p className="text-gray-600 dark:text-gray-400">Email: {formData.basicInfo.email}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Address</h3>
          <p className="text-gray-600 dark:text-gray-400">Street: {formData.address.street}</p>
          <p className="text-gray-600 dark:text-gray-400">City: {formData.address.city}</p>
          <p className="text-gray-600 dark:text-gray-400">Zip: {formData.address.zipcode}</p>
        </div>
      </div>
    </motion.div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        {renderStepIndicator()}
        
        <AnimatePresence mode="wait">
          {renderCurrentStep()}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < 3 ? (
            <Button onClick={handleNext} className="flex items-center">
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              Submit
            </Button>
          )}
        </div>
      </Card>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
};