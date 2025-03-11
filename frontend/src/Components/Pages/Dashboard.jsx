import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const initialDevices = [
  { name: "Laptops", image: "src/assets/Laptop 1.jpeg", total: 0 },
  { name: "Printers", image: "src/assets/Printer.jpeg", total: 0 },
  { name: "Monitors", image: "src/assets/Monitor.jpeg", total: 0 },
  { name: "Projectors", image: "src/assets/Projector.jpeg", total: 0 },
  { name: "Scanners", image: "src/assets/Scanner.jpeg", total: 0 },
  { name: "Desktops", image: "src/assets/Desktop.jpeg", total: 0 },
  { name: "Digital Cameras", image: "src/assets/Digital Camera 1.jpeg", total: 0 }
];

const Dashboard = () => {
  const [devices, setDevices] = useState(initialDevices);

  useEffect(() => {
    axios.get("http://localhost:5000/devices/count-by-type")
      .then(response => {
        const fetchedData = response.data;

        // Merge API data with predefined devices
        const updatedDevices = devices.map(device => {
          const matchingDevice = fetchedData.find(d => d.device_type === device.name);
          return matchingDevice ? { ...device, total: matchingDevice.total } : device;
        });

        setDevices(updatedDevices);
      })
      .catch(error => {
        console.error("Error fetching device counts:", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Equipment Management Dashboard</h1>
      <div className="cards-container">
        {devices.map((device, index) => (
          <div className="card" key={index}>
            <img src={device.image} alt={device.name} className="device-image" />
            <div className="card-info">
              <h2>{device.name}</h2>
              <p>Total Available: {device.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
