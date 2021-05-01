import React, {useContext } from 'react';
import EmployeeContext from '../../context/EmployeeContext';

export default function EmployeeDisplay(props) {
    const employee = useContext(EmployeeContext);
    return (
        <div class="employee">
            <h2 class="employee__header u-uppercase">Employeee : {employee.user.name}</h2>
        </div>
    )
}
