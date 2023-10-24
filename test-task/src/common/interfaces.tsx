import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';

export interface Resp {
  count: number;
  next: string;
  previous: string;
  results: Data[];
}

export interface Data {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  adress: string;
}

export interface Sign {
  login: string;
  password: string;
}

export interface RefTypes {
  register: UseFormRegister<Sign>;
  handleSubmit: UseFormHandleSubmit<Sign>;
  errors: FieldErrors<Sign>;
  reset: UseFormReset<Sign>;
}

export interface ModalProps {
  visible: boolean;
  content: Data;
  onClose: () => void;
  edit: string;
}

export const emptyData: Data = {
  id: 0,
  name: '',
  email: '',
  birthday_date: '',
  phone_number: '',
  adress: '',
};
