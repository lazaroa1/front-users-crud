/* eslint-disable array-callback-return */
import { useState } from "react";

import FunctionsButtons from "./FunctionsButtons";
import Filters from "./Filters";
import UsersTable from "./UsersTable";
import { Container } from "./styles";

function Clients() {
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const [filteredUsers, setFilteredUser] = useState([]);

  return (
    <Container>
      <div className="content">
        <h1>Consultar usuário(s)</h1>
        <FunctionsButtons savedUsers={savedUsers} />
        <Filters
          savedUsers={savedUsers}
          filteredUsers={filteredUsers}
          setFilteredUser={setFilteredUser}
        />
        {filteredUsers.length > 0 && (
          <UsersTable
            savedUsers={savedUsers}
            filteredUsers={filteredUsers}
            setFilteredUser={setFilteredUser}
          />
        )}
      </div>
    </Container>
  );
}

export default Clients;
