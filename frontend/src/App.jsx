import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarSidebar from "./Components/NavbarSidebar/NavbarSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import AddEquipment from "./Components/Pages/AddEquipment";
import EquipmentList from "./Components/Pages/EquipmentList";
import Assignment from "./Components/Pages/Assignments";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use NavbarSidebar as the main layout */}
        <Route path="/" element={<NavbarSidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="Home" element={<Dashboard />} />
          <Route path="AddEquipment" element={<AddEquipment />} />
          <Route path="EquipmentList" element={<EquipmentList />} />
          <Route path="Assignments" element={<Assignment />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
