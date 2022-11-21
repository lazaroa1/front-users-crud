import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Container } from "./styles";

function ChangePassword() {
  const navigate = useNavigate();
  const { login } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const [password, setPassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  function changeValue(e) {
    setPassword({ ...password, [e.target.name]: e.target.value });
  }

  function changePassword({ newPassword, confirmNewPassword }) {
    if (newPassword === confirmNewPassword) {
      const updatedUserStatus = users.map((item) => {
        if (item.login === login) {
          return { ...item, password: newPassword };
        }

        return item;
      });
      localStorage.setItem("users", JSON.stringify(updatedUserStatus));

      navigate("/");

      toast.success("Senha alterada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.error("As senhas não são idênticas");
    }
  }

  return (
    <Container>
      <Layout>
        <h1>Nova senha</h1>
        <form>
          <div>
            <label>Nova senha:</label>
            <Input
              name="newPassword"
              type="password"
              value={password.newPassword}
              onChange={changeValue}
              autoComplete="on"
            />
          </div>
          <div>
            <label>Senha:</label>
            <Input
              name="confirmNewPassword"
              type="password"
              value={password.confirmNewPassword}
              onChange={changeValue}
              autoComplete="on"
            />
          </div>
        </form>
        <Button onClick={() => changePassword(password)}>
          Confirmar senha
        </Button>
      </Layout>
    </Container>
  );
}

export default ChangePassword;
