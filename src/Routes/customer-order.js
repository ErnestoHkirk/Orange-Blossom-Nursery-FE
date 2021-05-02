import React from 'react';
import EmployeeDisplay from '../components/Display/employee-display';
import PlantOrderDisplay from '../components/Display/plant-order-display';
import PlantContext from '../context/PlantContext';
import DeliveryForm from '../components/Form/DeliveryForm';
import CustomerForm from '../components/Form/CustomerForm';
import PlantForm from '../components/Form/PlantForm';

export class CustomerOrder extends React.Component {
    static contextType = PlantContext;
    constructor(props){
        super(props)
        const state = {
            finalizeOrder: false,
            customer: null
        }
        this.state = state;
    }
    handleNewPlant = plant => {
        console.log('here', plant);
        this.context.addPlant(plant);
    }
    handlePlantOrder = (id,quantity) => {
        this.context.addToOrder(id,quantity);
    }
    handleOrder = () => {
        this.setState({finalizeOrder: true});
    }
    handleCustomer = id => {
        this.setState({customer: id })
    }
    handleCompletedOrder = () => {
        this.context.clearOrder();
        this.props.history.push("/dashboard");
    }
 
    render() {
        const { plants } = this.context;
        return (
            <section class="container mt-3" id="section--customer">
                <h2 className="font-weight-bold">Create New Order</h2>
                <EmployeeDisplay/>
                <CustomerForm addCustomerToOrder={this.handleCustomer}/>
                <PlantForm plants={plants} addNewPlant={this.handleNewPlant} addPlantOrder={this.handlePlantOrder}/>
                <PlantOrderDisplay/>
                <button className="btn btn-primary" onClick={this.handleOrder}> Complete Order </button>
                {this.state.finalizeOrder !== false && <DeliveryForm order={this.context.order} closeDeliveryModal={this.closeDeliveryModal} customer={this.state.customer} handleCompletedOrder={this.handleCompletedOrder}/>}
            </section>
        )
    }
}

export default CustomerOrder
