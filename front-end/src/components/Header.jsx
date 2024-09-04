import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Employee Management System</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Employees</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Departments</a>
      </li>
    </ul>
  </div>
</nav>
  )
}
export default Header;