import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(49, 93, 137, 0.1), 0 1px 3px rgba(49, 93, 137, 0.1);
  z-index: 101;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-family: "Arial", sans-serif;
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  cursor: pointer;
  background-color: #50bbff;
  color: #ffffff;
`;
