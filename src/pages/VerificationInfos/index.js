import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { Container } from "./styles";

function VerificationInfos() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users"));

  const [userLogin, setUserLogin] = useState("");

  function verificationInfo() {
    const haveUser = users.some((user) => user.login === userLogin);
    alert(haveUser, users);

    if (haveUser) {
      navigate(`/new-password/${userLogin}`);
    } else {
      toast.error("Não possui nenhum usuário com esse login");
    }
  }

  return (
    <Container>
      <Layout>
        <h1>Verifição de dados</h1>
        <div>
          <label htmlFor="login">Login:</label>
          <Input
            name="login"
            type="text"
            value={userLogin}
            onChange={(event) => setUserLogin(event.target.value)}
          />
        </div>
        <Button onClick={() => verificationInfo({})}>
          verificar infomações
        </Button>
      </Layout>
    </Container>
  );
}

export default VerificationInfos;
