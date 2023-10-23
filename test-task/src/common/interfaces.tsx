import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';

export interface Data {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

export interface Sign {
  name: string;
  password: string;
}

export interface RefTypes {
  register: UseFormRegister<Sign>;
  handleSubmit: UseFormHandleSubmit<Sign>;
  errors: FieldErrors<Sign>;
  reset: UseFormReset<Sign>;
}
