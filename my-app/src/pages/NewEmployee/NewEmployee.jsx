import { Modal } from "modalgcx";

import { Link } from 'react-router-dom';
import Form from "../../components/Form/Form";
import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { modal_visibility } from "../../app/employeeReducer";

function NewEmployee(props) {

   const isOpen = useSelector((state) => state.modalVisibility); 
   const dispatch = useDispatch()

    function closeModal() {
        dispatch(modal_visibility(false))
    }

    return (
        <>
            <div className="header">
                <h1>HRnet</h1>
                <Link to="/employees">View Current Employees</Link>
                <h2>Create Employee</h2>
            </div>
            <Form></Form>
            <Modal isOpen={isOpen} closeModal={closeModal} customBtn={(props) => <button onClick={props.onClick}>X</button>}></Modal>
        </>
    )
}

export default NewEmployee; 