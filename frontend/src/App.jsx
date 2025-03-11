import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarSidebar from "./Components/NavbarSidebar/NavbarSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import AddEquipment from "./Components/Pages/AddEquipment";
import EquipmentList from "./Components/Pages/EquipmentList";
import Assignment from "./Components/Pages/Assignments";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
  <React.StrictMode>
    <Router>
    <div className="app-container">
          <NavbarSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className={`dashboard-container ${isOpen ? "shifted" : ""}`}>
    </div>
    </div>  
      
     
      <Routes>
        <Route path="/" element={<h1>Welcome to the Equipment Management System</h1>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddEquipment" element={<AddEquipment />} />
        <Route path="/EquipmentList" element={<EquipmentList />} />
        <Route path="Assignments" element={<Assignment/>} />
      </Routes>
    </Router>
  </React.StrictMode>
  );
};

export default App;
