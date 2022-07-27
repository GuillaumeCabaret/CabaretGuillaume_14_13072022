import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
function ViewEmployee(props) {
  
    return (
        <>
            <h1>Current Employees</h1>
                <Table />
            <Link to="/">Home</Link>
        </>
    )
}

export default ViewEmployee; 