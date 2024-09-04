import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './routes/root';
import AdddDepartment from './routes/AddDepartmenent';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='add-department' element={<AdddDepartment />} />
      </Routes>
    </div>
  );
}

export default App;
