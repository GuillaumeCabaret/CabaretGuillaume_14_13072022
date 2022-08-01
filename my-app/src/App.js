import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import NewEmployee from './pages/NewEmployee/NewEmployee';
import ViewEmployee from './pages/ViewEmployee/ViewEmployee';
import { useDispatch } from "react-redux";
import { add_employee} from "./app/employeeReducer";

function App() {
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   if (localStorage.getItem("employeeList") !== null) {

  //   }
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewEmployee/>}>          
        </Route>
        <Route path="/employees" element={<ViewEmployee/>}>      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;