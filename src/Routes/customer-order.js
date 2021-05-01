import React from 'react';
import EmployeeDisplay from '../components/Display/employee-display';
import PlantContext from '../context/PlantContext';

import CustomerForm from '../components/Form/CustomerForm';
import PlantForm from '../components/Form/PlantForm';

export class CustomerOrder extends React.Component {
    static contextType = PlantContext;

    render() {
        const { plants } = this.context;
        return (
            <section class="section" id="section--customer">
                <h2>Create New Order</h2>
                <EmployeeDisplay/>
                <CustomerForm />
                <PlantForm plants={plants}/>
            </section>
        )
    }
}

export default CustomerOrder
