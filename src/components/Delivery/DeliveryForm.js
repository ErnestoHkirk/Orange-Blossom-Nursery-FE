import React, { Component } from 'react'
import './DeliveryForm.css';

export class DeliveryForm extends Component {
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
                {/*Delivery*/}
                <form 
                    className="Delivery"
                    onSubmit={this.handleAddDeliverySubmit}
                >
                    <div class="deliveryInfo">
                        <h2 class="order__nameInput">Please enter the delivery details:</h2>
                    </div>
                    <div className="dClientName">
                        <label htmlFor="dClientName"> Client Name: </label>
                        <select name="client" id="client">
                            <option value="">Susan</option>
                            <option value="">Sam</option>
                            <option value="">sara</option>
                            <option value="">sara2</option>
                        </select>
                    </div>
                    <div className="deliveryAddress">
                        <label htmlFor="deliveryAddress">Delivery address: </label>
                        <input
                            type="text"
                            name="address"
                            className="address"
                            required
                        />
                    </div>
                    <div className="deliveryDate">
                        <label htmlFor="deliverydate">Delivery date: </label>
                        <input
                            type="text"
                            name="ddate"
                            className="ddate"
                            required
                        />
                    </div>
                    <div className="deliveryDistance">
                        <label htmlFor="deliveryDistance">Delivery distance: </label>
                        <input
                            type="text"
                            name="ddistance"
                            className="ddistance"
                            required
                        />
                    </div>
                    <div className="deliveryFee">
                        <label htmlFor="fee">Delivery fee: </label>
                        <input
                            type="text"
                            name="dfee"
                            className="dfee"
                            required
                        />
                    </div>
                    <button
                        className="handleShow reciept"
                        type="submit"
                        name="submit">
                             {/* onclick="window.print()" */}
                        Submit
                    </button>
                    <button
                        className="handleShow reciept"
                        type="submit"
                        name="submit">
                             {/* onclick="window.print()" */}
                        Print Reciept
                    </button>
                    <p><br></br></p>
                </form>
                 {/*Delivery*/}
                 <form 
                    className="Delivery"
                    onSubmit={this.handleAddDeliverySubmit}
                >
                    
                    <div class="VendorInfo">
                        <h2 class="order__nameInput">Please enter Vendor Order details:</h2>
                    </div>
                    <div className="vendorID">
                        <label htmlFor="vendorID"> Vendor List: </label>
                        <select name="client" id="client">
                            <option value="">Vendor1</option>
                            <option value="">V2</option>
                            <option value="">V3</option>
                            <option value="">V4</option>
                        </select>
                    </div>
                    <div className="plantID">
                        <label htmlFor="plantID">Plant ID: </label>
                        <select name="client" id="client">
                            <option value="">plant1</option>
                            <option value="">p2</option>
                            <option value="">p3</option>
                            <option value="">p4</option>
                        </select>
                    </div>
                    <div className="arrivalDate">
                        <label htmlFor="arrivaldate">Arrival date: </label>
                        <input
                            type="text"
                            name="adate"
                            className="adate"
                            required
                        />
                    </div>
                    <div className="quantity">
                        <label htmlFor="dquantity">Quantity: </label>
                        <input
                            type="text"
                            name="quantity"
                            className="quantity"
                            required
                        />
                    </div>
                    <div className="totalCost">
                        <label htmlFor="fee">Total Cost: </label>
                        <input
                            type="text"
                            name="tCost"
                            className="tCost"
                            required
                        />
                    </div>
                    <button
                        className="handleShow reciept"
                        type="submit"
                        name="submit">
                             {/* onclick="window.print()" */}
                        Submit
                    </button>
                  
                    <p><br></br></p>
                </form>
                </React.Fragment>
        )
    }
}

export default DeliveryForm;
