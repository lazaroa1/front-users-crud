import { useNavigate } from "react-router-dom";

function NewPassword() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>NEW PASSWORD</h1>
      <button onClick={() => navigate("/")}>nova senha</button>
    </div>
  );
}

export default NewPassword;
