import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import employees from "./seed/employees.json";
import EmployeeCard from "./components/Card";

function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(false);
  const [employee, setEmployees] = useState(employees);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleFilterName() {
    if (!filtered) {
      setEmployees(employee.sort((x, y) => (x.name > y.name) ? 1 : -1));
      setFiltered(true);
    } else {
      setEmployees(employee.sort((x, y) => (x.name > y.name) ? -1 : 1));
      setFiltered(false);
    }
  }

  function handleFilterDepartment() {
    if (!filtered) {
      setEmployees(employee.sort((x, y) => (x.department > y.department) ? 1 : -1));
      setFiltered(true);
    } else {
      setEmployees(employee.sort((x, y) => (x.department > y.department) ? -1 : 1));
      setFiltered(false);
    }
  }

  function handleFilterRole() {
    if (!filtered) {
      setEmployees(employee.sort((x, y) => (x.role > y.role) ? 1 : -1));
      setFiltered(true);
    } else {
      setEmployees(employee.sort((x, y) => (x.role > y.role) ? -1 : 1));
      setFiltered(false);
    }
  }

  return (
    <div>
      <Navbar
        search={search}
        onSearch={handleSearch}
        handleFilterName={handleFilterName}
        handleFilterDepartment={handleFilterDepartment}
        handleFilterRole={handleFilterRole}
      />
      <Wrapper>
        {employees.map(e => {
          console.log(e);
          return (<EmployeeCard {...e} />)
        })}
      </Wrapper>
    </div>
  );
}

export default App;
