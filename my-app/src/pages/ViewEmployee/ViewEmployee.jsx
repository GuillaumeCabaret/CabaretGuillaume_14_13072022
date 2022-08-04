import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
function ViewEmployee(props) {
  
    return (
        <>
            <h1>Current Employees</h1>
            <Link className='home' to="/">Home</Link>
                <Table />
            
        </>
    )
}

export default ViewEmployee; 