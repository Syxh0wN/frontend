import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 500px;
  width: 65%;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(49, 93, 137, 0.1), 0 1px 3px rgba(49, 93, 137, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #56cdff, #50bbff);
`;

export const Input = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  box-shadow: 0 1px 3px rgba(49, 93, 137, 0.1);

  &:focus {
    box-shadow: 0 0 5px #50bbff;
  }
`;

export const Title = styled.h1`
  font-family: "Arial", sans-serif;
  font-size: 32px;
  color: #ffffff;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px;
`;

export const Checkbox = styled.input`
  width: 1em;
  height: 1em;
`;

export const Label = styled.label`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: #000000;
`;

export const Button = styled.button`
  width: 80%;
  background-image: linear-gradient(to right, #50bbff, #56cdff);
  color: #ffffff;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 6px rgba(49, 93, 137, 0.1), 0 1px 3px rgba(49, 93, 137, 0.1);
  margin-top: 15px;
`;

export const SignupPrompt = styled.p`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: #000000;
  text-align: center;
  margin-top: 16px;
`;

export const SignupLink = styled.a`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: #50bbff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
