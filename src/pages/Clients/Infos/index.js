import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  created_at: moment().format("YYYY-MM-DD"),
  updated_at: moment().format("YYYY-MM-DD"),
};

function Infos() {
  const navigate = useNavigate();
  const [user, setUser] = useState(USER_INITIAL_VALUE);

  function changeValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>INFOS</h1>
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
        <input name="cpf" type="text" value={user.cpf} onChange={changeValue} />
      </div>
      <div>
        <label htmlFor="birth_date">Login:</label>
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
          <option value="actived" key="actived">
            Ativado
          </option>
          <option value="inactivated" key="inactivated">
            Inativado
          </option>
          <option value="blocked" key="blocked">
            Bloqueado
          </option>
        </select>
      </div>
      <button onClick={() => navigate("/clients")}>salvar</button>
    </div>
  );
}

export default Infos;
