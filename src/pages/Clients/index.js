import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Clients() {
  const navigate = useNavigate();

  const [savedUsers, setSavedUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const changeStatus = useCallback(
    (newStatus, user_id) => {
      const updatedUserStatus = savedUsers.map((user) => {
        if (user.id === user_id) {
          return { ...user, status: newStatus };
        }

        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUserStatus));

      setSavedUsers(updatedUserStatus);
    },
    [savedUsers]
  );

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
