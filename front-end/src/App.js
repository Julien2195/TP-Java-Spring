import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AdddDepartment from './pages/AddDepartmenent';
import UpdateDepartment from './pages/UpdateDepartment';
function App() {
  let { userId } = useParams();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add-department' element={<AdddDepartment />} />
        <Route path='update-department' element={<UpdateDepartment />} />
      </Routes>
    </div>
  );
}

export default App;
