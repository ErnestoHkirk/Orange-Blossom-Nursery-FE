import React, { Component } from 'react'
import './StatementForm.css';

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
                {/*Statement*/}
                <form 
                    className="Statement"
                    onSubmit={this.handleAddStatementSubmit}
                >
                    <div class="Statment">
                        <h2 class="Statment__Input">Statement:</h2>
                    </div>
                    <div className="statementName">
                        <label htmlFor="statmentclientName"> Client Name: </label>
                        <select name="client" id="client">
                            <option value="">Susan</option>
                            <option value="">Sam</option>
                            <option value="">sara</option>
                            <option value="">sara2</option>
                        </select>
                    </div>
                    <div>
                        <h2>Client Name:</h2>
                        <h4>Billing:</h4>
                        <h4>Phone:</h4>
                        <h4>Address:</h4>
                        <h4>City:</h4>
                        <h4>State:</h4>
                        <h4>ZIP:</h4>                            
                    </div>
                    <div className="ctotal">
                        <label htmlFor="ctotal">Cost total: </label>
                        <input
                            type="text"
                            name="total"
                            className="total"
                            required
                        />
                    </div>
                    <div className="payDate">
                        <label htmlFor="payDate">Date Paid: </label>
                        <input
                            type="text"
                            name="paid"
                            className="paid"
                            required
                        />
                    </div>
                  
                    <button
                        className="handleShow reciept"
                        type="submit"
                        name="submit">
                            
                        Submit
                    </button>
                    <p><br></br></p>
                </form>
                </React.Fragment>
        )
    }
}

export default DeliveryForm;
