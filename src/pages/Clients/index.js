import { useNavigate } from "react-router-dom";
import moment from "moment";

function Clients() {
  const navigate = useNavigate();
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div>
      <h1>Consulta de usuarios</h1>
      <button onClick={() => navigate("/client-info")}>Inserir um novo</button>
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
              <p>Periodo de Inserção</p>
            </th>
            <th>
              <p>Periodo da Alteração</p>
            </th>
            <th>
              <p>Faixa Etaria</p>
            </th>
            <tr>
              <th>...</th>
            </tr>
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
                <p>{user.status}</p>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
