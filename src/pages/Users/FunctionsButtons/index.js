import { useNavigate } from "react-router-dom";

import PdfPage from "../../../utils/PdfPage";
import { exportToExcel } from "../../../utils";
import { Container, PdfButton } from "./styles";

function FunctionsButtons({ savedUsers }) {
  const navigate = useNavigate();

  function disableAllUsers() {
    const updatedUserStatus = savedUsers.map((user) => ({
      ...user,
      status: "inativado",
    }));

    localStorage.setItem("users", JSON.stringify(updatedUserStatus));
  }

  return (
    <Container>
      <button onClick={() => navigate("/user-info")}>Inserir usuário</button>
      <button onClick={disableAllUsers}>Remover usuário</button>
      <button onClick={() => navigate("/")}>Deslogar</button>
      {savedUsers.length > 0 && (
        <>
          <button onClick={() => exportToExcel(savedUsers, "Users")}>
            Baixar excel
          </button>
          <PdfButton document={<PdfPage />} fileName="Users.pdf">
            Baixar pdf
          </PdfButton>
        </>
      )}
    </Container>
  );
}

export default FunctionsButtons;
