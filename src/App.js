import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import employees from "./seed/employees.json";
import EmployeeCard from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
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
