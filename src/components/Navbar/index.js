import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-custom navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1200px-Dunder_Mifflin%2C_Inc.svg.png"
                        alt="Dunder Mifflin"
                        height="75"
                    ></img></li>
                <li className="nav-item">
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            placeholder="Enter Name, Dept, or Role"
                            aria-label="Search"
                            type="text"
                            onChange={props.handleSearch}
                            required></input>
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => props.setSearchTerm("lastName")}>Search by Last Name</button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => props.setSearchTerm("firstName")}>Search by First Name</button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => props.setSearchTerm("department")}>Search by Department</button>
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => props.setSearchTerm("role")}>Search by Role</button>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;