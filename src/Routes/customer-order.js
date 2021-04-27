import React from 'react';
import EmployeeDisplay from '../components/Display/employee-display';
import PlantContext from '../context/PlantContext';
import CustomerForm from '../components/Form/CustomerForm';
import PlantForm from '../components/Form/PlantForm';

<<<<<<< HEAD
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
=======
export default function CustomerOrder() {
    return (
        <section class="section" id="section--order">
            <CustomerForm/>
       </section>
    )
>>>>>>> ee42f6d33e8b964ba8ba1713bd86b27b9e8656df
}

export default CustomerOrder
