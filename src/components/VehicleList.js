import React, { useEffect, useState } from 'react';
import { getVehicles, deleteVehicle } from '../services/vehicleService';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteVehicle(id);
      setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
    <div>
      <h2>Vehicle List</h2>
      <table>
        <thead>
          <tr>
            <th>Car Model</th>
            <th>Car Make</th>
            <th>Year of Mfg</th>
            <th>Base Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.carModel}</td>
              <td>{vehicle.carMake}</td>
              <td>{vehicle.yearOfMfg}</td>
              <td>{vehicle.basePrice}</td>
              <td>
                <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
