import 'bootstrap/dist/css/bootstrap.css';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateDepartment from './routes/UpdateDepartment';
import AdddDepartment from './routes/AddDepartmenent';
import Employees from './routes/Employee';
import AddEmployee from './routes/AddEmployee';
import UpdateEmployee from './routes/UpdateEmployee';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "add-department",
    element: <AdddDepartment />
  },
  {
    path: "update-department/:id",
    element: <UpdateDepartment />
  },
  {
    path: 'add-employee',
    element: <AddEmployee />
  },
  {
    path: 'employee',
    element: <Employees />
  },
  {
    path: 'update-employee/:id',
    element: <UpdateEmployee />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);