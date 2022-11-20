import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import VerificationInfos from "../pages/VerificationInfos";
import ChangePassword from "../pages/ChangePassword";
import Clients from "../pages/Clients";
import Infos from "../pages/Clients/Infos";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verification-infos" element={<VerificationInfos />} />
      <Route path="/new-password/:login" element={<ChangePassword />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/client-info" element={<Infos />} />
      <Route path="/client-info/:id" element={<Infos />} />
    </Routes>
  );
}
