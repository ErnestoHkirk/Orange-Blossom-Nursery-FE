import React, { Component } from 'react'

export class CustomerForm extends Component {
    render() {
        return (
            <React.Fragment>
                <form class="order__form">
                    <div class="order__employee">
                        <h2 class="order__nameInput">Employee: <span>Name</span></h2>
                    </div>
                    <div >
                        <label for="customer">Select Customer: </label>
                        <select name="customer" id="customer">
                            <option value="">Susan</option>
                            <option value="">Sam</option>
                            <option value="">sara</option>
                            <option value="">sara2</option>
                        </select>
                        <button>New Client</button>
                        <div>
                            <h2>Client:</h2>
                            <h3>Contact:</h3>
                            <p>phone:</p>
                            <p>Address</p>
                            <p>City</p>
                            <p>State</p>
                            <p>ZIP</p>                            
                        </div>
                    </div>
                    <div>
                    <label for="plant">Select Plant: </label>
                        <select name="plant" id="plant">
                            <option value="">Susan</option>
                            <option value="">Sam</option>
                            <option value="">sara</option>
                            <option value="">sara2</option>
                        </select>
                        <button>new plant</button>
                        <div>
                            <h2>Client:</h2>
                            <h3>Contact:</h3>
                            <p>phone:</p>
                            <p>Address</p>
                            <p>City</p>
                            <p>State</p>
                            <p>ZIP</p>  
                            <button>add plant</button>                          
                        </div>
                        <div>
                            <div>Current Order</div>
                        </div>
                    </div>
                    <input  class="order__submit" type="submit" name="submit" id="" value="submit"/>
                </form>
                <div class="order__clientModal">new client modal</div>
                <div class="order__plantModal">New plant modal</div>
            </React.Fragment>
        )
    }
}

export default CustomerForm;
