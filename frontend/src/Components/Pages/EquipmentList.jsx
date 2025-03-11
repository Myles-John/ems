import React, { useState } from "react";
import "./EquipmentList.css";

const EquipmentList = () => {
    // Sample Equipment Data (Replace with API data fetch)
    const [equipment, setEquipment] = useState([
        { id: 1, type: "Laptop", brand: "Dell", model: "XPS 13", serial: "12345A", status: "available", location: "IT Dept", assignedTo: null },
        { id: 2, type: "Printer", brand: "HP", model: "LaserJet 1020", serial: "67890B", status: "assigned", location: "HR Office", assignedTo: "John Doe" },
        { id: 3, type: "Monitor", brand: "LG", model: "UltraFine", serial: "98765C", status: "under_maintenance", location: "IT Dept", assignedTo: null },
        { id: 4, type: "Projector", brand: "Epson", model: "EB-S41", serial: "54321D", status: "disposed", location: "Store Room", assignedTo: null },
    ]);

    const [filter, setFilter] = useState("all");

    // Filtered Equipment List
    const filteredEquipment = equipment.filter(item => filter === "all" || item.status === filter);

    return (
        <div className="equipment-container">
            {/* Summary Cards */}
            <div className="summary-cards">
                <div className="card available">Total: {equipment.length}</div>
                <div className="card assigned">Assigned: {equipment.filter(e => e.status === "assigned").length}</div>
                <div className="card available">Available: {equipment.filter(e => e.status === "available").length}</div>
                <div className="card maintenance">Under Maintenance: {equipment.filter(e => e.status === "under_maintenance").length}</div>
                <div className="card disposed">Disposed: {equipment.filter(e => e.status === "disposed").length}</div>
            </div>

            {/* Filter Dropdown */}
            <div className="filter-bar">
                <label>Filter by Status:</label>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="available">Available</option>
                    <option value="assigned">Assigned</option>
                    <option value="under_maintenance">Under Maintenance</option>
                    <option value="disposed">Disposed</option>
                </select>
            </div>

            {/* Equipment Table */}
            <div className="table-container">
                <table className="equipment-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Serial</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Assigned To</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEquipment.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.type}</td>
                                <td>{item.brand}</td>
                                <td>{item.model}</td>
                                <td>{item.serial}</td>
                                <td className={`status ${item.status}`}>{item.status}</td>
                                <td>{item.location}</td>
                                <td>{item.assignedTo || "N/A"}</td>
                                <td>
                                    <button className="view">View</button>
                                    {item.status === "available" && <button className="assign">Assign</button>}
                                    {item.status === "assigned" && <button className="return">Return</button>}
                                    {item.status !== "disposed" && <button className="dispose">Dispose</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EquipmentList;
