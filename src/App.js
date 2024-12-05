import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VehicleList from './components/VehicleList';
import AddVehicleForm from './components/AddVehicleForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/add-vehicle">Add Vehicle</Link>
        </nav>

        <Routes>
          <Route exact path="/" component={VehicleList} />
          <Route path="/add-vehicle" component={AddVehicleForm} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
