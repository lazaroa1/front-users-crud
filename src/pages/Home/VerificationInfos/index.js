import { useNavigate } from "react-router-dom";

function VerificationInfos() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>VERIFICATION INFOS</h1>
      <button onClick={() => navigate("/new-password")}>
        verificar infomações
      </button>
    </div>
  );
}

export default VerificationInfos;
