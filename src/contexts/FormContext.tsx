'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { FormData } from '@/types';

interface FormContextType {
  formData: FormData;
  updateFormData: (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => void;
  resetForm: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

const initialFormData: FormData = {
  basicInfo: { name: '', email: '' },
  address: { street: '', city: '', zipcode: '' },
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('userFormData');
    const savedStep = localStorage.getItem('userFormStep');
    
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading form data:', error);
      }
    }
    
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  // Save to localStorage whenever formData or currentStep changes
  useEffect(() => {
    localStorage.setItem('userFormData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('userFormStep', currentStep.toString());
  }, [currentStep]);

  const updateFormData = (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
    setFormData(prev => ({
      ...prev,
      [step]: { ...prev[step], ...data }
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    localStorage.removeItem('userFormData');
    localStorage.removeItem('userFormStep');
  };

  return (
    <FormContext.Provider value={{
      formData,
      updateFormData,
      resetForm,
      currentStep,
      setCurrentStep
    }}>
      {children}
    </FormContext.Provider>
  );
};