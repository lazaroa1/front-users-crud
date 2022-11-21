import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

import SelectComponent from "../../../components/SelectComponent";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";
import { formatCpf, formatTelephoneNumber } from "../../../utils";
import { Container } from "./styles";

const USER_INITIAL_VALUE = {
  name: "",
  login: "",
  password: "",
  email: "",
  telephone: "",
  cpf: "",
  birth_date: "",
  mother_name: "",
  status: "ativado",
};

function Infos() {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem("users"));
  const loggedUsers = JSON.parse(sessionStorage.getItem("loggedUser"));
  const [user, setUser] = useState(USER_INITIAL_VALUE);

  function changeValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function onSubmit() {
    if (id) {
      updateUser();
    } else {
      createUser();
    }
  }

  function createUser() {
    const userExists = users.some((item) => item.login === user.login);

    for (let key in user) {
      if (user[key] === "") {
        return toast.warn("Todos os campos devem ser preenchidos");
      }
    }

    if (!userExists) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          {
            ...user,
            id: users.length + 1,
            created_at: moment().format("YYYY-MM-DD"),
            updated_at: moment().format("YYYY-MM-DD"),
          },
        ])
      );
      if (loggedUsers) {
        navigate("/users");
      } else {
        navigate("/");
      }

      toast.success("Usuário cadastrado");
    } else {
      toast.error("Login ja cadastrado");
    }
  }

  function updateUser() {
    const user_id = Number(id);
    const userExists = users.some(
      (item) => item.id !== user_id && item.login === user.login
    );

    if (!userExists) {
      const updatedUserStatus = users.map((item) => {
        if (item.id === user_id) {
          return { ...user, updated_at: moment().format("YYYY-MM-DD") };
        }
        return item;
      });
      localStorage.setItem("users", JSON.stringify(updatedUserStatus));

      navigate("/users");

      toast.success("Usuário alterado");
    } else {
      toast.error("Login ja cadastrado");
    }
  }

  useMemo(() => {
    if (id) {
      const user = JSON.parse(localStorage.getItem("users"));

      setUser(user[id - 1]);
    }
  }, [id]);

  return (
    <Container>
      <Layout size="high">
        <h1>{id ? "Edição" : "Cadastro"} do usuário</h1>
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <Input
              required
              name="name"
              type="text"
              value={user.name}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="login">Login:</label>
            <Input
              name="login"
              type="text"
              value={user.login}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <Input
              name="password"
              type="password"
              value={user.password}
              onChange={changeValue}
              autoComplete="on"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <Input
              name="email"
              type="email"
              value={user.email}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="telephone">Telefone:</label>
            <Input
              name="telephone"
              type="text"
              maxLength={13}
              value={formatTelephoneNumber(user.telephone)}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="cpf">CPF:</label>
            <Input
              name="cpf"
              type="text"
              maxLength={14}
              value={formatCpf(user.cpf)}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="mother_name">Nome da mãe:</label>
            <Input
              name="mother_name"
              type="text"
              value={user.mother_name}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="birth_date">Data de nascimento:</label>
            <Input
              name="birth_date"
              type="date"
              value={user.birth_date}
              onChange={changeValue}
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <SelectComponent
              name="status"
              type="text"
              value={user.status}
              onChange={changeValue}
            >
              <option value="ativado" key="actived">
                Ativado
              </option>
              <option value="inativado" key="inactivated">
                Inativado
              </option>
              <option value="bloqueado" key="blocked">
                Bloqueado
              </option>
            </SelectComponent>
          </div>
        </form>
        <Button onClick={onSubmit}>{id ? "Salvar alteração" : "Salvar"}</Button>
      </Layout>
    </Container>
  );
}

export default Infos;
