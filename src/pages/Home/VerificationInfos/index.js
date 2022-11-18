import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function VerificationInfos() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users"));

  const [userLogin, setUserLogin] = useState("");

  function verificationInfo() {
    const haveUser = users.some((user) => user.login === userLogin);

    if (haveUser) {
      navigate(`/new-password/${userLogin}`);
    } else {
      toast.error("Não possui nenhum usuário com esse login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }

  return (
    <div>
      <h1>VERIFICATION INFOS</h1>
      <div>
        <label htmlFor="login">Login:</label>
        <input
          name="login"
          type="text"
          value={userLogin}
          onChange={(event) => setUserLogin(event.target.value)}
        />
      </div>
      <button onClick={verificationInfo}>verificar infomações</button>
    </div>
  );
}

export default VerificationInfos;
