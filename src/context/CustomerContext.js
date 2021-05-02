import React, { createContext, Component } from 'react';
import apiService from '../services/api-service';

const CustomerContext = createContext({
    customers: [],
    error: null,
    addNewCustomer: () => {},
    setError: () => {},
    clearError: () => {}
})

export default CustomerContext;

export class CustomerProvider extends Component {
    constructor(props){
        super(props)
        const state = {
            customers: [],
            error: null
        }
        this.state = state;
    }

    setError = error => this.setState({ error });

    clearError = () =>  this.setState({ error: null });
    async componentDidMount() {
        try {
          await apiService.getAllCustomers().then(customers => {
              console.log('customer', customers);
             this.setState({ customers });
          });
        }
        catch (error){
          console.log({ error });
        }
      };
    addNewCustomer = customer => {
        console.log('here')
        const customerList = [...this.state.customers];
        const id = this.state.customers.length + 1;
        customer.id = id;
        customerList.push(customer);
        this.setState({customers: customerList});
    }

    render() {
        const value = {
            customers: this.state.customers,
            error: this.state.error,
            addNewCustomer: this.addNewCustomer,
            setError: this.setError,
            clearError: this.clearError
        }
        return (
            <CustomerContext.Provider value={value}>
                {this.props.children}
            </CustomerContext.Provider>
        )
    }
}