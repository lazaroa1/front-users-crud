import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import VerificationInfos from "../pages/VerificationInfos";
import ChangePassword from "../pages/ChangePassword";
import Users from "../pages/Users";
import Infos from "../pages/Users/Infos";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verification-infos" element={<VerificationInfos />} />
      <Route path="/new-password/:login" element={<ChangePassword />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user-info" element={<Infos />} />
      <Route path="/user-info/:id" element={<Infos />} />
    </Routes>
  );
}
