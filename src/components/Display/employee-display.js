import React, {useContext } from 'react';
import EmployeeContext from '../../context/EmployeeContext';

export default function EmployeeDisplay(props) {
    const employee = useContext(EmployeeContext);
    return (
        <div class="">
            <h2 class="text-uppercase">Employee : {employee.user.name}</h2>
        </div>
    )
}
