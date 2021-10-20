import { React } from "react";

import "./Admin.css";
import AdminBody from "./AdminBody/AdminBody";
import AdminHeader from "./AdminHeader/AdminHeader";

const Admin = () => {
  return (
    <div className="Admin">
      <AdminHeader></AdminHeader>
      <AdminBody></AdminBody>
    </div>
  );
};

export default Admin;
