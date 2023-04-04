import { useContext, useEffect, useState } from "react";
import {
  AddButton,
  ContactInfo,
  ContactItem,
  ContactList,
  DeleteButton,
  EditButton,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  Title,
  Wrapper,
  WrapperHeader,
} from "../../styles/dashboard";
import { EditContactModalProps, iContact } from "../../interfaces/Contact";
import {
  Backdrop,
  Form,
  Input,
  ModalWrapper,
  SubmitButton,
  Title as TitleModal,
} from "../../styles/dashboard/modal_add_contact";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";

export const Dashboard = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<iContact | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { userContacts, setUserContacts } = useContext(AuthContext);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await api.get("/contact", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (Array.isArray(response.data)) {
          setUserContacts(response.data);
        }
      } catch (error) {
        console.error("Error fetching user contacts:", error);
      }
    };
    fetchContacts();
  }, [setUserContacts]);

  const handleDelete = async (contact: iContact) => {
    setUserContacts(userContacts.filter((item) => item.id !== contact.id));

    const token = localStorage.getItem("userToken");
    await api.delete(`/contact/${contact.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const handleAddContact = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEditContact = (contact: iContact) => {
    setSelectedContact(contact);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleUpdateContact = (updatedContact: iContact) => {
    setUserContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditModalOpen(false);
  };

  return (
    <Wrapper>
      <Title>Contact List</Title>
      <ContactList>
        {userContacts.map((contact) => (
          <ContactItem key={contact.id}>
            <ContactInfo>
              {contact.name} - {contact.email} - {contact.phone}
            </ContactInfo>
            <div>
              <EditButton onClick={() => handleEditContact(contact)}>
                Edit
              </EditButton>
              <DeleteButton onClick={() => handleDelete(contact)}>
                Delete
              </DeleteButton>
            </div>
          </ContactItem>
        ))}
      </ContactList>
      <AddButton onClick={handleAddContact}>Add Contact</AddButton>
      {modalOpen && <ContactModal onClose={handleCloseModal} />}
      {editModalOpen && selectedContact && (
        <EditContactModal
          contact={selectedContact}
          onClose={handleCloseEditModal}
          onUpdate={handleUpdateContact}
        />
      )}
    </Wrapper>
  );
};

export const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
  };

  return (
    <WrapperHeader>
      <Logo>Logo</Logo>
      <Menu>
        <MenuItem>
          <MenuLink href="#">Contato</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Sobre</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Suporte</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink onClick={handleLogout}>Logout</MenuLink>
        </MenuItem>
      </Menu>
    </WrapperHeader>
  );
};

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<iContact>({
    name: "",
    email: "",
    phone: "",
  });

  const { setUserContacts } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("userToken");
      await api.post("/contact", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsSubmitting(false);
      setUserContacts((prevContacts) => [...prevContacts, formData]);
      onClose();
    } catch (error) {
      console.error("Error creating contact:", error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <TitleModal>Create Contact</TitleModal>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating.." : "Create"}
          </SubmitButton>
        </Form>
      </ModalWrapper>
    </Backdrop>
  );
};

const EditContactModal: React.FC<EditContactModalProps> = ({
  contact,
  onClose,
  onUpdate,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<iContact>(contact);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("userToken");
      await api.patch(`/contact/${contact.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsSubmitting(false);
      onUpdate(formData);
      onClose();
    } catch (error) {
      console.error("Error updating contact:", error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <Title>Edit Contact</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Atualizando..." : "Atualizar"}
          </SubmitButton>
        </Form>
      </ModalWrapper>
    </Backdrop>
  );
};
