import React, { Component } from 'react'
import './CustomerForm.css';

export class CustomerForm extends Component {
    handleNewClient=()=>{
        console.log(document.querySelector('.NewClient'))
        document.querySelector('.NewClient').classList.remove("hidden");
        }

    handleNewPlant=()=>{
        console.log(document.querySelector('.NewPlant'))
        document.querySelector('.NewPlant').classList.remove("hidden");
        }

    render() {
        return (
            <React.Fragment>
                <form class="order__form">
                    {/* <div class="order__employee">
                        <h2 class="order__nameInput">Employee: <span>Name</span></h2>
                        <h2 class="order__nameInput">Create New Order</h2>
                    </div> */}
                    <div >
                        <label for="client">Select Client: </label>
                        <select name="client" id="client">
                            <option value="">Susan</option>
                            <option value="">Sam</option>
                            <option value="">sara</option>
                            <option value="">sara2</option>
                        </select>
                        <button onClick={()=> this.handleNewClient()}>Add New Client</button>
                        <div>
                            <h2>Client Name:</h2>
                            <h4>Billing:</h4>
                            <h4>Phone:</h4>
                            <h4>Address:</h4>
                            <h4>City:</h4>
                            <h4>State:</h4>
                            <h4>ZIP:</h4>                            
                        </div>
                    </div>
                    <div>
                    {/* <label for="plant">Select Plant: </label>
                        <select name="plant" id="plant">
                            <option value="">Rosemary</option>
                            <option value="">plant1</option>
                            <option value="">plant2</option>
                            <option value="">plant3</option>
                        </select> */}
                        <button onClick={()=> this.handleNewPlant()}>New Plant</button>
                        {/* <div>
                            <h4>Plant Name:</h4>
                            <h4>Grow Time:</h4>
                            <h4>Description:</h4>
                            <h4>Price:</h4> */}
                            {/* <button>add plant</button>  */}                        
                        {/* </div> */}
                        {/* 
                        <div>
                            <div>Current Order</div>
                        </div>
                        */} 
                    </div>
                    <div class="order__plant">
                        <h2 class="order__nameInput">Finalize Order:</h2>
                    </div>
                    <div className="plantOrder">
                        <label htmlFor="plantID">Plant Order ID: </label>
                        <input
                            type="text"
                            name="plantID"
                            className="plantID"
                            required
                        />
                    </div>
                    <div className="plantQuantity">
                        <label htmlFor="contact">Enter Order Quantity: </label>
                        <input
                            type="text"
                            name="Quantity"
                            className="Quantity"
                            required
                        />
                    </div>
                    <input className="order__submit" type="submit" name="submit" id="" value="submit"/>
                    <p><br></br></p>
                </form>

                {/*Add New Client*/}
                <form 
                    className="NewClient hidden"
                    onSubmit={this.handleRegistrationCustomerSubmit}
                >
                    <div class="order__client">
                        <h2 class="order__nameInput">Account Manager: <span>Name</span></h2>
                    </div>
                    <div class="order__employee">
                        <h2 class="order__nameInput">Please enter the contact information of the client:</h2>
                    </div>
                    <div className="customerContact">
                        <label htmlFor="customer">Company Name: </label>
                        <input
                            type="text"
                            name="customer"
                            className="customer"
                            required
                        />
                    </div>
                    <div className="customerEmail">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            name="email"
                            className="email"
                            required
                        />
                    </div>
                    <div className="customerAddress">
                        <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            name="address"
                            className="address"
                            required
                        />
                    </div>
                    <div className="customerCity">
                        <label htmlFor="city">City: </label>
                        <input
                            type="text"
                            name="city"
                            className="city"
                            required
                        />
                    </div>
                    <div className="customerState">
                        <label htmlFor="state">State: </label>
                        <input
                            type="text"
                            name="state"
                            className="state"
                            required
                        />
                    </div>
                    <div className="customerZipcode">
                        <label htmlFor="zip">Zip Code: </label>
                        <input
                            type="text"
                            name="zip"
                            className="zip"
                            required
                        />
                    </div>
                    <div className="customerPhone">
                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            type="text"
                            name="phone"
                            className="phone"
                            required
                        />
                    </div>
                    <button
                        className="registrationCustomerSubmit"
                        type="submit"
                        name="submit">
                        Register New Client
                    </button>
                    <p><br></br></p>
                </form>

                {/*Add New Plant*/}
                <form 
                    className="NewPlant hidden"
                    onSubmit={this.handleAddPlantSubmit}
                >
                    <div class="order__client">
                        <h2 class="order__nameInput">Account Manager: <span>Name</span></h2>
                    </div>
                    <div class="order__plant">
                        <h2 class="order__nameInput">Please enter the new plant information:</h2>
                    </div>
                    <div className="plantName">
                        <label htmlFor="name">Plant Name: </label>
                        <input
                            type="text"
                            name="name"
                            className="name"
                            required
                        />
                    </div>
                    <div className="plantTime">
                        <label htmlFor="time">Grow Time: </label>
                        <input
                            type="text"
                            name="time"
                            className="time"
                            required
                        />
                    </div>
                    <div className="plantDescription">
                        <label htmlFor="description">Description: </label>
                        <input
                            type="text"
                            name="description"
                            className="description"
                            required
                        />
                    </div>
                    <div className="plantPrice">
                        <label htmlFor="price">Price: </label>
                        <input
                            type="text"
                            name="price"
                            className="price"
                            required
                        />
                    </div>
                    <button
                        className="handleAddPlantSubmit"
                        type="submit"
                        name="submit">
                        Add Plant
                    </button>
                    <p><br></br></p>
                </form>
                </React.Fragment>
        )
    }
}

export default CustomerForm;
