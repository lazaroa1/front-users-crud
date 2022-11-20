import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ReactPaginate from "react-paginate";

import { Container } from "./styles";

function UsersTable({ users, savedUsers, filteredUsers, setFilteredUser }) {
  const navigate = useNavigate();
  const PER_PAGE = 1;
  const [currentPage, setCurrentPage] = useState(0);
  const currentUsersPage = filteredUsers.slice(
    currentPage * PER_PAGE,
    currentPage * PER_PAGE + PER_PAGE
  );

  function changeStatus(newStatus, user_id) {
    const updatedUserStatus = savedUsers.map((user) => {
      if (user.id === user_id) {
        return { ...user, status: newStatus };
      }

      return user;
    });

    const getFilteredUsers = updatedUserStatus.filter((item) =>
      filteredUsers.some((zItem) => zItem.id === item.id)
    );

    localStorage.setItem("users", JSON.stringify(updatedUserStatus));

    setFilteredUser(getFilteredUsers);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <Container>
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
          {currentUsersPage?.map((user) => (
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
                <button onClick={() => navigate(`/user-info/${user.id}`)}>
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
      <ReactPaginate
        previousLabel="← Previous"
        nextLabel="Next →"
        pageCount={Math.ceil(filteredUsers.length / PER_PAGE)}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </Container>
  );
}

export default UsersTable;
