import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Container } from "./styles";

function Login() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const [loginForm, setLoginForm] = useState({ login: "", password: "" });

  function changeValue(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  function login({ login, password }) {
    // const haveUser = users.some(
    //   (user) => user.login === login && user.password === password
    // );

    // if (haveUser) {
    //   const user = users.filter((item) => item.login === login)[0];

    //   sessionStorage.setItem("loggedUser", JSON.stringify(user));

    navigate("/users");
    // } else {
    //   toast.error("Login ou Senha incorreto(a)");
    // }
  }

  return (
    <Container>
      <Layout>
        <h1>Faça seu login</h1>
        <div>
          <label htmlFor="login">Login:</label>
          <Input
            name="login"
            type="text"
            value={loginForm.login}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <Input
            name="password"
            type="password"
            value={loginForm.password}
            onChange={changeValue}
            autoComplete="on"
          />
        </div>
        <a href="/verification-infos">esqueci minha senha</a>
        <a href="/user-info">cadastrar usuário</a>
        <Button onClick={() => login(loginForm)}>Login</Button>
      </Layout>
    </Container>
  );
}

export default Login;
