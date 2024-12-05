import React, { useState } from 'react';
import { addVehicle } from '../services/vehicleService';

const AddVehicleForm = () => {
  const [carModel, setCarModel] = useState('');
  const [carMake, setCarMake] = useState('');
  const [yearOfMfg, setYearOfMfg] = useState('');
  const [basePrice, setBasePrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vehicleData = { carModel, carMake, yearOfMfg, basePrice };
    
    try {
      await addVehicle(vehicleData);
      alert('Vehicle added successfully');
    } catch (error) {
      console.error("Error adding vehicle:", error);
    }
  };

  return (
    <div>
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Car Make"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year of Manufacture"
          value={yearOfMfg}
          onChange={(e) => setYearOfMfg(e.target.value)}
        />
        <input
          type="number"
          placeholder="Base Price"
          value={basePrice}
          onChange={(e) => setBasePrice(e.target.value)}
        />
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicleForm;
