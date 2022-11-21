/* eslint-disable array-callback-return */
import { useState } from "react";
import { toast } from "react-toastify";

import Input from "../../../components/Input";
import SelectComponent from "../../../components/SelectComponent";
import { getAge, formatCpf } from "../../../utils";
import { Container, IconSearch } from "./styles";

const USER_INITIAL_VALUE = {
  name: "",
  cpf: "",
  login: "",
  birth_date: "",
  created_at: "",
  updated_at: "",
  status: "ativado",
};

function Filters({ savedUsers, setFilteredUser }) {
  const [filters, setFilters] = useState(USER_INITIAL_VALUE);
  const [filterAge, setFilterAge] = useState("");

  function changeFilter(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
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
    toast.success(
      `Foi encontrado ${users.length} de ${savedUsers.length} usuários`
    );
    setFilteredUser(users);
  }

  return (
    <Container>
      <div>
        <label htmlFor="name">Nome:</label>
        <Input
          name="name"
          type="text"
          value={filters.name}
          onChange={changeFilter}
        />
      </div>
      <div>
        <label htmlFor="login">CPF:</label>
        <Input
          name="cpf"
          type="text"
          maxLength={14}
          value={formatCpf(filters.cpf)}
          onChange={changeFilter}
        />
      </div>
      <div>
        <label htmlFor="login">Login:</label>
        <Input
          name="login"
          type="text"
          value={filters.login}
          onChange={changeFilter}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <SelectComponent
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
        </SelectComponent>
      </div>
      <div>
        <label htmlFor="birth_date">Data de nascimento:</label>
        <Input
          name="birth_date"
          type="date"
          value={filters.birth_date}
          onChange={changeFilter}
        />
      </div>
      <div>
        <label htmlFor="birth_date">Periodo de inserção:</label>
        <Input
          name="created_at"
          type="date"
          value={filters.created_at}
          onChange={changeFilter}
        />
      </div>
      <div>
        <label htmlFor="birth_date">Periodo de alteração:</label>
        <Input
          name="updated_at"
          type="date"
          value={filters.updated_at}
          onChange={changeFilter}
        />
      </div>
      <div>
        <label htmlFor="age">Idade:</label>
        <SelectComponent
          name="age"
          type="text"
          value={filterAge}
          onChange={(event) => setFilterAge(event.target.value)}
        >
          <option value="">...Selecione</option>
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
        </SelectComponent>
      </div>
      <div className="btn-filter" onClick={filterUser}>
        <IconSearch />
      </div>
    </Container>
  );
}

export default Filters;
