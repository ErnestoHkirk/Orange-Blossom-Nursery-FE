import React, { Component } from 'react';
import CustomerContext from '../../context/CustomerContext';
import NewCustomer from './NewCustomer';
import CustomerDisplay from '../Display/customer-display';
import './CustomerForm.css';

export class CustomerForm extends Component {
    static defaultProps = {
        addCustomerToOrder: () => {}
    }
    constructor(props){
        super(props)
        const state = {
            selectedCustomer: {},
            newCustomer: false
        }
        this.state = state;
    }
    static contextType = CustomerContext;
    handleNewClient = e => {
        e.preventDefault();
        this.setState({newCustomer: true});
    }
    handleCustomerChange = e => {
        const selected = this.context.customers[e.target.value -1];
        this.setState({selectedCustomer: selected});
        console.log(selected.id, 'iddd')
        this.props.addCustomerToOrder(selected.id)
    }
    handleNewCustomer = customer => {
        const idx = this.context.customers.length;
        this.context.addNewCustomer(customer);
        const selected = this.context.customers[idx];
        this.setState({newCustomer: false, selectedCustomer: selected});
    }
    closeCustomerModal = () => {
        this.setState({newCustomer: false});
    }
    render() {
        const { customers } = this.context;
        return (
            <React.Fragment>
                <form className="">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <label className="mr-4" for="client text-center">Select Client: </label>
                        <select  className="mr-4" name="client" onChange={ (e)=> this.handleCustomerChange(e)} id="client">
                        <option value="none" selected disabled hidden >Select a Customer</option>
                            {customers.map(client => {
                                return (<option key={client.id} value={client.id}>{client.client_name}</option>)
                            })}
                        </select>
                        <button className="btn btn-primary" onClick={(e)=> this.handleNewClient(e)}>Add New Client</button>
                        </div>
                       
                    </div>
                    <div>
            
                    </div>
                    {Object.keys(this.state.selectedCustomer).length !== 0 && <CustomerDisplay data={this.state.selectedCustomer}/>}
                </form>
                {this.state.newCustomer !== false && <NewCustomer closeCustomerModal={this.closeCustomerModal} onCustomerAdd={this.handleNewCustomer}/>}
              
            </React.Fragment>
        )
    }
}

export default CustomerForm;
