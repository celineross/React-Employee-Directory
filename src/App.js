import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import employees from "./seed/employees.json";
import EmployeeCard from "./components/Card";


function App() {
    const [state, setState] = React.useState({
        employees: [],
        filtered: [],
        searchBy: ""
    })

    React.useEffect(() => {
        const mapped = employees.map(e => ({
            ...e,
            firstName: e.name.first,
            lastName: e.name.last
        }))

        setState(state => ({
            ...state,
            employees: mapped,
            filtered: mapped
        }))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();

        setState({
            ...state,
            filtered: state.employees.filter(emp => emp[state.searchBy].toLowerCase().includes(e.target.value.toLowerCase()))
        });
    }

    const setSearchTerm = term => setState({ ...state, searchBy: term })

    return (
        <div>
            <Navbar
                handleSearch={handleSearch}
                setSearchTerm={setSearchTerm}
            />
            <Wrapper>

                {
                    state.filtered.map(e => <div>{JSON.stringify(e)}</div>)
                }
                {/* <EmployeeCard />

        {employees.map(e => {
          console.log(e);
          return (<EmployeeCard {...e} />)
        })} */}
            </Wrapper>
        </div>
    );
}

export default App;


//notes
// 1. rather than immediately call setEmployees, try starting by making a new variable "filteredArray" and make an array of just the employees that match the query.
// 2. console.log it to ensure that's working, then throw it in setEmployees
// 3. check to make sure your Wrapper is mapping the right array. Right now it's mapping "employees"

// be careful with the array.filter method; it's weird in that it returns an array of the deleted items... so make sure step 1 and 2 are done right before moving forward!

// 1. array.filter (this method's probably the quickest way to get this done)
// 2. array.forEach( thing => if(thing.property === search){ push to some "result" variable }
// 3. array.map (probably not as good as filter)