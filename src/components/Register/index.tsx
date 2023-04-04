import { FormEvent, useState } from "react";
import {
  Container,
  Form,
  Button,
  Input,
  Left,
  Right,
  SignupLink,
  SignupPrompt,
  Subtitle,
  Title,
  Wrapper,
} from "../../styles/login";
import { useNavigate } from "react-router-dom";
import { putRegister } from "../../contexts/AuthContext";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await putRegister({ name, email, password, phone }, navigate);

    // Após o registro bem-sucedido, limpe os campos de entrada.
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="00 000000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button type="submit">Register</Button>
          </Form>
          <SignupPrompt>
            Already have an account?{" "}
            <SignupLink onClick={handleLoginClick}>Sign In!</SignupLink>
          </SignupPrompt>
        </Left>
        <Right>
          <Title>Create Account</Title>
          <Subtitle>
            Join us today! Please fill in your details to create your account.
          </Subtitle>
        </Right>
      </Wrapper>
    </Container>
  );
};
