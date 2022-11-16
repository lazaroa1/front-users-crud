import { useNavigate } from "react-router-dom";

function Infos() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>INFOS</h1>
      <button onClick={() => navigate("/clients")}>salvar</button>
    </div>
  );
}

export default Infos;
