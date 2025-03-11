import React, { useState } from "react";
import "./Assignments.css";

const Assignments = () => {
    const [assignments, setAssignments] = useState([
        { id: 1, device: "Dell Laptop", assignedTo: "John Doe", dateAssigned: "2024-02-10", expectedReturn: "2024-02-20", status: "assigned" },
        { id: 2, device: "HP Printer", assignedTo: "Jane Smith", dateAssigned: "2024-01-25", expectedReturn: "2024-02-10", status: "overdue" },
        { id: 3, device: "LG Monitor", assignedTo: "Mark Lee", dateAssigned: "2024-02-01", expectedReturn: "2024-02-15", status: "returned" }
    ]);
    
    const [filter, setFilter] = useState("all");

    const filteredAssignments = assignments.filter(item => filter === "all" || item.status === filter);

    return (
        <div className="assignments-container">
            <div className="summary-cards">
                <div className="card total">Total: {assignments.length}</div>
                <div className="card assigned">Assigned: {assignments.filter(a => a.status === "assigned").length}</div>
                <div className="card overdue">Overdue: {assignments.filter(a => a.status === "overdue").length}</div>
                <div className="card returned">Returned: {assignments.filter(a => a.status === "returned").length}</div>
            </div>
            
            <div className="filter-bar">
                <label>Filter by Status:</label>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="assigned">Assigned</option>
                    <option value="overdue">Overdue</option>
                    <option value="returned">Returned</option>
                </select>
            </div>
            
            <div className="table-container">
                <table className="assignments-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Device</th>
                            <th>Assigned To</th>
                            <th>Date Assigned</th>
                            <th>Expected Return</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAssignments.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.device}</td>
                                <td>{item.assignedTo}</td>
                                <td>{item.dateAssigned}</td>
                                <td>{item.expectedReturn}</td>
                                <td className={`status ${item.status}`}>{item.status}</td>
                                <td>
                                    {item.status === "assigned" && <button className="return">Return</button>}
                                    {item.status === "overdue" && <button className="mark-returned">Mark Returned</button>}
                                    {item.status === "returned" && <button className="view">View</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Assignments;
