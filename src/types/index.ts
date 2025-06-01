export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export interface NewUser {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export interface FormData {
  basicInfo: {
    name: string;
    email: string;
  };
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export interface FormErrors {
  name?: string;
  email?: string;
  street?: string;
  city?: string;
  zipcode?: string;
}