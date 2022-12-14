import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import { formatCpf } from "../../../utils";
import { Container, IconPencil, IconX, Pagination } from "./styles";

function UsersTable({ users, savedUsers, filteredUsers, setFilteredUser }) {
  const navigate = useNavigate();
  const PER_PAGE = 10;
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
      <table width="100%" cellPadding={0} cellSpacing={0}>
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
                <p>{formatCpf(user.cpf)}</p>
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
                <div>
                  <div
                    className="btn-filter"
                    onClick={() => navigate(`/user-info/${user.id}`)}
                  >
                    <IconPencil />
                  </div>
                  <div
                    className="btn-filter"
                    onClick={() => changeStatus("inativado", user.id)}
                  >
                    <IconX />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <Pagination
          previousLabel="Voltar"
          nextLabel="Proximo"
          pageCount={Math.ceil(filteredUsers.length / PER_PAGE)}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          previousClassName="previus"
          nextClassName="next"
          activeClassName="page"
          pageClassName="teste"
        />
      </div>
    </Container>
  );
}

export default UsersTable;
