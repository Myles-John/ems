import React from "react";
import { FaBars, FaTachometerAlt, FaPlus, FaList, FaTasks, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarSidebar.css";

const NavbarSidebar = ({ isOpen, toggleSidebar }) => {
  const handleLogout = () => {
    alert("You have been logged out!");
  };

  return (
    <div className="layout">
      {/* Navbar */}
      <nav className="navbar">
        {!isOpen && (
          <button className="menu-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        )}
        
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <img src="src/assets/vraLogo1.png" alt="logo" className="custom-image" />
        </div>
        <button className="menu-btn1" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <ul>
          <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/AddEquipment"><FaPlus /> Add New Equipment</Link></li>
          <li><Link to="/EquipmentList"><FaList /> Equipment List</Link></li>
          <li><Link to="/assignments"><FaTasks /> Assignments</Link></li>
          <li><Link to="/reports"><FaChartBar /> Reports</Link></li>
          <li><Link to="/settings"><FaCog /> Settings</Link></li>
          <li><Link to="/logout" onClick={handleLogout}><FaSignOutAlt /> Log out</Link></li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; EMS 2025 powered by MIS . All Rights Reserved.
      </footer>
    </div>
  );
};

export default NavbarSidebar;
