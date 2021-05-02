import React, { Component } from 'react'
import StatementContext from '../../context/StatementContext';
import UpdateClient from '../Form/UpdateStatement';

export class StatementDisplay extends Component {
    static contextType = StatementContext;
    constructor(props){
        super(props)
        const state = {
            currentClient: {},
            updateClient: false
        }
        this.state = state;
    }
    handleUpdate = id =>{
        const copy = this.context.openStatements.filter(el => el.id === id);
        this.setState({updateClient: true, currentClient: copy[0]});
    }
    handleUpdateStatement = (id, data) => {
        this.context.updateStatement(id, data);
        this.setState({updateClient: false, currentClient: {}});
    }
    closeModal = () => {
        this.setState({updateClient:false, currentClient: {}});
    }
    render() {
        const { openStatements } = this.context;
        return (
            <React.Fragment>
                <div class="row justify-content-between">
                    {openStatements.map(statement => {
                        return (
                            <div className="card col-md-4"key={statement.id}>
                                <h4 className="card-title text-uppercase">Order Number : <span>{statement.order_id}</span></h4>
                                <p>Client ID : <span>{statement.client_id}</span></p>
                                <p>Employee ID : <span>{statement.employee_id}</span></p>
                                <p>Interest Rate : <span>{statement.interest_rate}</span></p>
                                <p>Order Date : <span>{statement.order_date}</span></p>
                                <p>Amount Paid: {statement.amount_paid}</p>
                                <p>Paid : <span>{statement.paid.toString()}</span></p>
                                <p>Total : <span>{statement.total}</span></p>
                                <button class="btn btn-primary mb-3"onClick={()=> this.handleUpdate(statement.id)}>Update</button>
                            </div>
                        )
                    })}
                </div>
            {this.state.updateClient !== false && <UpdateClient data={this.state.currentClient} closeModal={this.closeModal} updatedStatement={this.handleUpdateStatement}/>}
            </React.Fragment>
        )
    }
}

export default StatementDisplay
