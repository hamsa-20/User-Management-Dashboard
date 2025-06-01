import { FormErrors } from '@/types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateBasicInfo = (name: string, email: string): FormErrors => {
  const errors: FormErrors = {};
  
  if (!name.trim()) {
    errors.name = 'Name is required';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return errors;
};

export const validateAddress = (street: string, city: string, zipcode: string): FormErrors => {
  const errors: FormErrors = {};
  
  if (!street.trim()) {
    errors.street = 'Street address is required';
  }
  
  if (!city.trim()) {
    errors.city = 'City is required';
  }
  
  if (!zipcode.trim()) {
    errors.zipcode = 'Zip code is required';
  } else if (!/^\d{5}(-\d{4})?$/.test(zipcode)) {
    errors.zipcode = 'Please enter a valid zip code (12345 or 12345-6789)';
  }
  
  return errors;
};