import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={() => navigate("/clients")}>login</button>
      <button onClick={() => navigate("/verification-infos")}>
        esqueci minha senha
      </button>
    </div>
  );
}

export default Login;
