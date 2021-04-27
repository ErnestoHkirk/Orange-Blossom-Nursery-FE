import React from 'react';
import EmployeeDisplay from '../components/Display/employee-display';
import PlantContext from '../context/PlantContext';
import CustomerForm from '../components/Form/CustomerForm';
import PlantForm from '../components/Form/PlantForm';

export class CustomerOrder extends React.Component {
    static contextType = PlantContext;

    render() {
        const { plants } = this.context;
        console.log('1', plants);
        return (
            <section class="section" id="section--customer">
                <EmployeeDisplay/>
                <CustomerForm />
                <PlantForm plants={plants}/>
            </section>
        )
    }
}

export default CustomerOrder
