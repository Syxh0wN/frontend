import { FormEvent, useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  Checkbox,
  CheckboxWrapper,
  Input,
  Label,
  Left,
  Right,
  SignupLink,
  SignupPrompt,
  Subtitle,
  Title,
  Wrapper,
} from "../../styles/login";
import { useNavigate } from "react-router-dom";
import { AuthContext, putLogin } from "../../contexts/AuthContext";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Implemente a lógica de autenticação aqui.

    await putLogin({ email, password }, setToken);

    // Após a autenticação bem-sucedida, limpe os campos de entrada.
    setEmail("");
    setPassword("");
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();

    navigate("/register");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Form onSubmit={handleSubmit}>
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
            <CheckboxWrapper>
              <div>
                <Checkbox type="checkbox" id="remember-me" />
                <Label htmlFor="remember-me">Remember me</Label>
              </div>
              <Label htmlFor="forgot-password">Forgot Password</Label>
            </CheckboxWrapper>
            <Button type="submit">Sign In</Button>
            <SignupPrompt>
              Don't have an account?{" "}
              <SignupLink onClick={handleRegisterClick}>Create!</SignupLink>
            </SignupPrompt>
          </Form>
        </Left>
        <Right>
          <Title>Welcome Back!</Title>
          <Subtitle>
            We're glad to see you again. Please enter your login details.
          </Subtitle>
        </Right>
      </Wrapper>
    </Container>
  );
};
