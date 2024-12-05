import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Update with your backend API URL

export const getVehicles = async () => {
  try {
    const response = await axios.get(`${API_URL}/vehicles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};


export const addVehicle = async (vehicleData) => {
  try {
    const response = await axios.post(`${API_URL}/add-vehicle`, vehicleData);
    return response.data;
  } catch (error) {
    console.error("Error adding vehicle:", error);
    throw error;
  }
};


export const updateVehicle = async (vehicleId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/update-vehicle/${vehicleId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating vehicle:", error);
    throw error;
  }
};


export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-vehicle/${vehicleId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    throw error;
  }
};
