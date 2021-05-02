import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import './modal.css';

export class NewCustomer extends Component {
    static defaultProps = {
        onCustomerAdd: () => {},
        closeCustomerModal: ()=> {}
    }
    state = {error: null};
    handleCustomerSubmit = e => {
        e.preventDefault();
        const data = {
            billing_account: e.target.billing_account.value,
            client_account_manager: e.target.client_account_manager.value,
            client_address: e.target.client_address.value,
            client_city: e.target.client_city.value,
            client_contact: e.target.client_contact.value,
            client_name: e.target.client_name.value,
            client_phone: e.target.client_phone.value,
            client_state: e.target.client_state.value,
            client_zip: e.target.client_zip.value,
            email_address: e.target.email_address.value
        }
        ApiService.postCustomer(data).then(res => {
            console.log(res)
            this.props.onCustomerAdd(data);
        }).catch(res => {
            this.setState({error: res.error})
        })
    }
    closeModal = e => {
        e.preventDefault();
        this.props.closeCustomerModal();
    }
    render() {
        const {error} = this.state
        return (
           <React.Fragment>
                <form 
                    className="updateModal"
                    onSubmit={this.handleCustomerSubmit}
                >
                    <h2>Enter Customer Info</h2>
                    <button class="btn--close-modal" onClick={this.closeModal}>&times;</button>
                       <div role="alert">
                {error && <p className="red">{error}</p>}
                </div>
                    <div className="customerContact">
                        <label htmlFor="customer">Company Name: </label>
                        <input type="text" name="client_name" className="customer" required />
                    </div>
                    <div className="customerContact">
                        <label htmlFor="customer">Contact: </label>
                        <input type="text" name="client_contact" className="customer" required />
                    </div>
                    <div className="customerEmail">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email_address" className="email" required />
                    </div>
                    <div className="customerEmail">
                        <label htmlFor="email">Billing: </label>
                        <input type="text" name="billing_account" className="email" required />
                    </div>
                    <div className="customerEmail">
                        <label htmlFor="email">Account Manager: </label>
                        <input type="text" name="client_account_manager" className="email" required />
                    </div>

                    <div className="customerAddress">
                        <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            name="client_address"
                            className="address"
                            required
                        />
                    </div>
                    <div className="customerCity">
                        <label htmlFor="city">City: </label>
                        <input
                            type="text"
                            name="client_city"
                            className="city"
                            required
                        />
                    </div>
                    <div className="customerState">
                        <label htmlFor="state">State: </label>
                        <input
                            type="text"
                            name="client_state"
                            className="state"
                            required
                        />
                    </div>
                    <div className="customerZipcode">
                        <label htmlFor="zip">Zip Code: </label>
                        <input
                            type="text"
                            name="client_zip"
                            className="zip"
                            required
                        />
                    </div>
                    <div className="customerPhone">
                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            type="text"
                            name="client_phone"
                            className="phone"
                            required
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        name="submit">
                        Register New Client
                    </button>
                </form>
                <div class="overlay" onClick={this.closeModal}></div>
           </React.Fragment>
        )
    }
}

export default NewCustomer
