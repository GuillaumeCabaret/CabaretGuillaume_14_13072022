
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../Dropdown/Dropdown";
import "./Form.css"
import addDays from 'date-fns/addDays'

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import { add_employee, modal_visibility } from "../../app/employeeReducer";

import states from "../../data/state.json";
import dropDepartment from "../../data/department.json";

function Form() {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirhtDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [countryState, setCountrystate] = useState(states[0].name);
    const [zip, setZip] = useState('');
    const [department, setDepartment] = useState(dropDepartment[0].name);
    const employeesData = useSelector(state => state.employees)
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(modal_visibility(true))
        const values = {firstName,lastName,dateOfBirth: birthDate.toUTCString(),startDate: startDate.toUTCString(),street,city,state:countryState,zipCode: zip,department};
        dispatch(add_employee(values))
        localStorage.setItem("employeeList",JSON.stringify([...employeesData, values]))

    }
    return (        
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} required></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} required></input>
                <label htmlFor="birthDate">Date of birth</label>
                <DatePicker id ="birthdate" 
                data-testid="birthdate" 
                selected={birthDate}
                minDate={new Date().setDate(1)}
                maxDate={addDays(new Date(), 30)} 
                onChange={(date) => {
                    setBirhtDate(date)
                }}/>
                <label htmlFor="startDate">Start date</label>
                <DatePicker id ="startDate" 
                minDate={new Date().setDate(1)}
                maxDate={addDays(new Date(), 30)}
                data-testid="startdate" 
                selected={startDate} 
                onChange={(date) => {
                    setStartDate(date)
                }}/>
                <div className="address">
                    <p className="addressTitle">Address</p>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" onChange={(e) => setStreet(e.target.value)} required></input>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" onChange={(e) => setCity(e.target.value)} required></input>
                    <label htmlFor="state">State</label>
                    <Dropdown values={states} callback={setCountrystate} id={"state"} value={countryState}></Dropdown>
                    <label htmlFor="zip">Zip Code</label>
                    <input type="number" id="zip" onChange={(e) => setZip(e.target.value)} required></input>
                </div>
                <label htmlFor="department">Department</label>
                <Dropdown values={dropDepartment} callback={setDepartment} id={"department"} value={department}></Dropdown>
                <input className="buttonSubmit" type="submit" data-testid="submitButton"></input>
            </form>  
        </>
        
    )
}

export default Form;