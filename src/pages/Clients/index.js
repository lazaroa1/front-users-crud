/* eslint-disable array-callback-return */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ReactPaginate from "react-paginate";

import { getAge } from "../../utils";

const USER_INITIAL_VALUE = {
  name: "",
  cpf: "",
  login: "",
  birth_date: "",
  created_at: "",
  updated_at: "",
  status: "ativado",
};

const PER_PAGE = 1;

function Clients() {
  const navigate = useNavigate();
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const [filteredUsers, setFilteredUser] = useState([]);
  const [filters, setFilters] = useState(USER_INITIAL_VALUE);
  const [filterAge, setFilterAge] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const currentUsersPage = filteredUsers.slice(
    currentPage * PER_PAGE,
    currentPage * PER_PAGE + PER_PAGE
  );

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
    const getFilteredUsers = updatedUserStatus.filter((item) =>
      filteredUsers.some((zItem) => zItem.id === item.id)
    );

    localStorage.setItem("users", JSON.stringify(updatedUserStatus));

    setFilteredUser(getFilteredUsers);
  }

  function disableAllUsers() {
    const updatedUserStatus = savedUsers.map((user) => ({
      ...user,
      status: "inativado",
    }));

    localStorage.setItem("users", JSON.stringify(updatedUserStatus));

    setFilteredUser(updatedUserStatus);
  }

  function filterUser() {
    let users = [];
    users = savedUsers.filter((item) => {
      for (let key in filters) {
        if (filters[key] !== "") {
          return filters[key] !== "" && item[key] === filters[key];
        }
      }
    });

    if (filterAge && users.length > 0) {
      users = users.filter((item) => {
        const userAge = getAge(item.birth_date);
        const ubsersByAge = {
          eighteen_twentySix: userAge >= 18 && userAge <= 26,
          twentyFive_thirtyOne: userAge >= 25 && userAge <= 31,
          thirty_thirtySix: userAge >= 30 && userAge <= 36,
          thirtyFive_fortyOne: userAge >= 35 && userAge <= 41,
          forty: userAge >= 40,
        }[filterAge];

        return ubsersByAge;
      });
    }

    setFilteredUser(users);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
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
          <label htmlFor="login">CPF:</label>
          <input
            name="cpf"
            type="text"
            value={filters.cpf}
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
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            type="text"
            value={filters.status}
            onChange={changeFilter}
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
            value={filterAge}
            onChange={(event) => setFilterAge(event.target.value)}
          >
            <option value="">Selecione uma idade</option>
            <option value="eighteen_twentySix" key="1">
              Maior que 18 e menor que 26
            </option>
            <option value="twentyFive_thirtyOne" key="2">
              Maior que 25 e menor que 31
            </option>
            <option value="thirty_thirtySix" key="3">
              Maior que 30 e menor que 36
            </option>
            <option value="thirtyFive_fortyOne" key="4">
              Maior que 35 e menor que 41
            </option>
            <option value="forty" key="5">
              Maior que 40
            </option>
          </select>
        </div>
        <button onClick={filterUser}>Buscar</button>
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
      <ReactPaginate
        previousLabel="← Previous"
        nextLabel="Next →"
        pageCount={Math.ceil(filteredUsers.length / PER_PAGE)}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Clients;
