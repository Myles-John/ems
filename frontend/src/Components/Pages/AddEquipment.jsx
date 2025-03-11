import { useState } from "react";
import "./AddEquipment.css";

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    unique_identifier: "",
    brand: "",
    model: "",
    serial_number: "",
    vra_tag: "",
    purchase_date: "",
    location: "",
    status: "available",
    assigned_to_user_id: "",
    date_assigned: "",
    batch_id: "",
    type_id: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Equipment Data Submitted:", formData);
    // Add API call to submit formData to backend

    
    fetch("http://localhost:5050/device/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Error adding equipment");
        }
        return response.json();
      })
      .then(data => {
        console.log("Success:", data);
        alert("Equipment added successfully");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error adding equipment");
      });
    
  };

  return (
    <div className="add-equipment-container">
      <h2>Add New Equipment</h2>
      <form onSubmit={handleSubmit} className="equipment-form">
        <input type="text" name="unique_identifier" placeholder="Unique Identifier" value={formData.unique_identifier} onChange={handleChange} required />
        <input type="text" name="device_type" placeholder="Type of Device" value={formData.device_type} onChange={handleChange} required />
        <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
        <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required />
        <input type="text" name="serial_number" placeholder="Serial Number" value={formData.serial_number} onChange={handleChange} required />
        <input type="text" name="vra_tag" placeholder="VRA Tag" value={formData.vra_tag} onChange={handleChange} required />
        <input type="date" name="purchase_date" value={formData.purchase_date} onChange={handleChange} required data-placeholder="Purchase Date"/>
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} /> 
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="available">Available</option>
          <option value="assigned">Assigned</option>
          <option value="under_maintenance">Under Maintenance</option>
          <option value="damaged">Damaged</option>
          <option value="disposed">Disposed</option>
        </select>
        <input type="text" name="assigned_to_user_id" placeholder="Assigned User ID" value={formData.assigned_to_user_id} onChange={handleChange} />
        <input type="date" name="date_assigned" placeholder="Date Assigned"  value={formData.date_assigned} onChange={handleChange} data-placeholder="Assigned Date"/>
        <input type="text" name="batch_id" placeholder="Batch ID" value={formData.batch_id} onChange={handleChange} required />
        <input type="text" name="type_id" placeholder="Device Type ID" value={formData.type_id} onChange={handleChange} required />
        <button type="submit">Add Equipment</button>
      </form>
    </div>
  );
};

export default AddEquipment;
