import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function NewPassword() {
  const navigate = useNavigate();
  const { login } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const [password, setPassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  function changeValue(e) {
    setPassword({ ...password, [e.target.name]: e.target.value });
  }

  function changePassword({ newPassword, confirmNewPassword }) {
    if (newPassword === confirmNewPassword) {
      const updatedUserStatus = users.map((item) => {
        if (item.login === login) {
          return { ...item, password: newPassword };
        }

        return item;
      });
      localStorage.setItem("users", JSON.stringify(updatedUserStatus));

      navigate("/");

      toast.success("Senha alterada com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.error("As senhas não são idênticas", {
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
      <h1>NEW PASSWORD</h1>
      <form>
        <div>
          <label>Nova senha:</label>
          <input
            name="newPassword"
            type="password"
            value={password.newPassword}
            onChange={changeValue}
            autoComplete="on"
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            name="confirmNewPassword"
            type="password"
            value={password.confirmNewPassword}
            onChange={changeValue}
            autoComplete="on"
          />
        </div>
      </form>
      <button onClick={() => changePassword(password)}>nova senha</button>
    </div>
  );
}

export default NewPassword;
