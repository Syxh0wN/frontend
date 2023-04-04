export interface iContact {
  id?: number;
  name: string;
  email: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EditContactModalProps {
  contact: iContact;
  onClose: () => void;
  onUpdate: (updatedContact: iContact) => void;
}
