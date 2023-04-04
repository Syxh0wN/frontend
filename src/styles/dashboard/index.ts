import styled from "styled-components";

export const WrapperHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #50bbff;
`;

export const Logo = styled.div`
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-right: 16px;
`;

export const MenuLink = styled.a`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(49, 93, 137, 0.1), 0 1px 3px rgba(49, 93, 137, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: "Arial", sans-serif;
  font-size: 24px;
  color: #000000;
  text-align: center;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f7f7f7;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(49, 93, 137, 0.1);
`;

export const ContactInfo = styled.span`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  color: #000000;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  cursor: pointer;
`;

export const EditButton = styled(Button)`
  background-color: #50bbff;
  color: #ffffff;
  margin-right: 8px;
`;

export const DeleteButton = styled(Button)`
  background-color: #ff5050;
  color: #ffffff;
`;

export const AddButton = styled(Button)`
  background-color: #50bbff;
  color: #ffffff;
  margin-top: 16px;
`;
