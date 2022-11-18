import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const USER_INITIAL_VALUE = {
  name: "",
  login: "",
  password: "",
  email: "",
  telephone: "",
  cpf: "",
  birth_date: "",
  mother_name: "",
  status: "actived",
};

function Infos() {
  const navigate = useNavigate();
  const { id } = useParams();
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [user, setUser] = useState(USER_INITIAL_VALUE);

  function changeValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function onSubmit() {
    if (id) {
      const updatedUserStatus = savedUsers.map((item) => {
        if (item.id === Number(id)) {
          return { ...user, updated_at: moment().format("YYYY-MM-DD") };
        }

        return item;
      });
      localStorage.setItem("users", JSON.stringify(updatedUserStatus));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...savedUsers,
          {
            ...user,
            id: savedUsers.length + 1,
            created_at: moment().format("YYYY-MM-DD"),
            updated_at: moment().format("YYYY-MM-DD"),
          },
        ])
      );
    }

    navigate("/clients");
  }

  useMemo(() => {
    if (id) {
      const user = JSON.parse(localStorage.getItem("users"));

      setUser(user[id - 1]);
    }
  }, [id]);

  return (
    <div>
      <h1>INFOS</h1>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            type="text"
            value={user.name}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            name="login"
            type="text"
            value={user.login}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={changeValue}
            autoComplete="on"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="telephone">Telefone:</label>
          <input
            name="telephone"
            type="text"
            value={user.telephone}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            name="cpf"
            type="text"
            value={user.cpf}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="birth_date">Data de nascimento:</label>
          <input
            name="birth_date"
            type="date"
            value={user.birth_date}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="mother_name">Nome da mãe:</label>
          <input
            name="mother_name"
            type="text"
            value={user.mother_name}
            onChange={changeValue}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
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
          </select>
        </div>
      </form>
      <button onClick={onSubmit}>{id ? "Salvar alteração" : "Salvar"}</button>
    </div>
  );
}

export default Infos;
