import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const users =
    JSON.parse(localStorage.getItem("users")) ||
    localStorage.setItem(
      JSON.stringify([{ id: 1, login: "adm", password: "123" }])
    );
  const [loginForm, setLoginForm] = useState({ login: "", password: "" });

  function changeValue(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  function login({ login, password }) {
    const haveUser = users.some(
      (user) => user.login === login && user.password === password
    );

    if (haveUser) {
      navigate("/clients");
    } else {
      toast.error("Login ou Senha incorreto(a)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <label htmlFor="login">Login:</label>
        <input
          name="login"
          type="text"
          value={loginForm.login}
          onChange={changeValue}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          name="password"
          type="password"
          value={loginForm.password}
          onChange={changeValue}
          autoComplete="on"
        />
      </div>
      <button onClick={() => login(loginForm)}>login</button>
      <button onClick={() => navigate("/verification-infos")}>
        esqueci minha senha
      </button>
    </div>
  );
}

export default Login;
