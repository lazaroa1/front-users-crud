import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const USER_INITIAL_VALUE = {
  name: "",
  login: "",
  birth_date: "",
  created_at: "",
  updated_at: "",
  status: "actived",
};

function Clients() {
  const navigate = useNavigate();

  const [savedUsers, setSavedUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [filters, setFilters] = useState(USER_INITIAL_VALUE);

  function changeFilter(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  function changeStatus(newStatus, user_id) {
    const updatedUserStatus = savedUsers.map((user) => {
      if (user.id === user_id) {
        return { ...user, status: newStatus };
      }

      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUserStatus));

    setSavedUsers(updatedUserStatus);
  }

  function disableAllUsers() {
    const updatedUserStatus = savedUsers.map((user) => ({
      ...user,
      status: "inativado",
    }));

    localStorage.setItem("users", JSON.stringify(updatedUserStatus));

    setSavedUsers(updatedUserStatus);
  }

  return (
    <div>
      <h1>Consulta de usuários</h1>
      <button onClick={() => navigate("/client-info")}>Inserir um novo</button>
      <button onClick={disableAllUsers}>Remover usuário</button>
      <button onClick={() => navigate("/")}>Sair</button>
      <div>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            name="name"
            type="text"
            value={filters.name}
            onChange={changeFilter}
          />
        </div>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            name="login"
            type="text"
            value={filters.login}
            onChange={changeFilter}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            name="cpf"
            type="text"
            value={filters.cpf}
            onChange={changeFilter}
          />
        </div>
        <div>
          <label htmlFor="birth_date">Data de nascimento:</label>
          <input
            name="birth_date"
            type="date"
            value={filters.birth_date}
            onChange={changeFilter}
          />
        </div>
        <div>
          <label htmlFor="birth_date">Periodo de inserção:</label>
          <input
            name="created_at"
            type="date"
            value={filters.created_at}
            onChange={changeFilter}
          />
        </div>
        <div>
          <label htmlFor="birth_date">Periodo de alteração:</label>
          <input
            name="updated_at"
            type="date"
            value={filters.updated_at}
            onChange={changeFilter}
          />
        </div>
        <div>
          <label htmlFor="age">Status:</label>
          <select
            name="age"
            type="text"
            value={filters.age}
            onChange={changeFilter}
          >
            <option value="ativado" key="actived">
              Maior que 18 e menor que 26
            </option>
            <option value="inativado" key="inactivated">
              Maior que 25 e menor que 31
            </option>
            <option value="bloqueado" key="blocked">
              Maior que 30 e menor que 36
            </option>
            <option value="bloqueado" key="blocked">
              Maior que 35 e menor que 41
            </option>
            <option value="bloqueado" key="blocked">
              Maior que 40
            </option>
          </select>
        </div>
        <button onClick={disableAllUsers}>Buscar</button>
      </div>
      <table width="100%">
        <thead>
          <tr>
            <th>
              <p>Nome</p>
            </th>
            <th>
              <p>CPF</p>
            </th>
            <th>
              <p>Login</p>
            </th>
            <th>
              <p>Situação</p>
            </th>
            <th>
              <p>Periodo de Nascimento</p>
            </th>
            <th>
              <p>Periodo da Criação</p>
            </th>
            <th>
              <p>Periodo da Alteração</p>
            </th>
            <th>
              <p>Faixa Etaria</p>
            </th>
            <th>
              <p>...</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {savedUsers?.map((user) => (
            <tr key={user.id}>
              <td>
                <p>{user.name}</p>
              </td>
              <td>
                <p>{user.cpf}</p>
              </td>
              <td>
                <p>{user.login}</p>
              </td>
              <td>
                <select
                  name="status"
                  type="text"
                  value={user.status}
                  onChange={(event) =>
                    changeStatus(event.target.value, user.id)
                  }
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
              </td>
              <td>
                <p>{moment(user.birth_date).format("DD/MM/YYYY")}</p>
              </td>
              <td>
                <p>{moment(user.created_at).format("DD/MM/YYYY")}</p>
              </td>
              <td>
                <p>{moment(user.updated_at).format("DD/MM/YYYY")}</p>
              </td>
              <td>
                <p>{moment().diff(user.birth_date, "years")}</p>
              </td>
              <td>
                <button onClick={() => navigate(`/client-info/${user.id}`)}>
                  Alterar
                </button>
                <button onClick={() => changeStatus("inativado", user.id)}>
                  Desabilitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
