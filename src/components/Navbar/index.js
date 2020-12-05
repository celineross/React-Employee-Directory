import React, { useState } from "react";
import "./style.css";
import employees from "../../seed/employees.json";

function Navbar() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(false);
    const [employees, setEmployees] = useState(employees);

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleFilterName() {
        if (!filter) {

        }
    }

    // function handleFilterDepartment() {

    // }

    // function handleFilterRole() {

    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            placeholder="Enter Name, Dept, or Role"
                            aria-label="Search"
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            required></input>
                        <button onClick={handleFilterName}>Search by Name</button>
                        {/* <button onClick={handleFilterDepartment}>Search by Department</button> */}
                        {/* <button onClick={handleFilterRole}>Search by Role</button> */}
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;