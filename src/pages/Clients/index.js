import { useNavigate } from "react-router-dom";

function Clients() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CLIENT INDEX</h1>
      <button onClick={() => navigate("/client-info")}>
        adicionar um novo cliente
      </button>
      <button onClick={() => navigate("/client-info/1")}>editar cliente</button>
    </div>
  );
}

export default Clients;
