import Dropdown from "../Dropdown/Dropdown";

import { useState } from "react";
import { store } from "../../store";
import { modal_visibility } from "../../employeeReducer";

function Form(props) {

    const [firstname, setFirstname] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        store.dispatch(modal_visibility(true))        
    }
    return (        
        <>
            <form class="form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)}></input>
                <label>Last Name</label>
                <label>Department</label>
                <Dropdown></Dropdown>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form; 