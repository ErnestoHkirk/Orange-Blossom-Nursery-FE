import React, { Component } from 'react'
import StatementContext from '../../context/StatementContext';
import UpdateClient from '../Form/UpdateStatement';
import DeleteModal from '../Form/DeleteForm';

export class StatementDisplay extends Component {
    static contextType = StatementContext;
    constructor(props){
        super(props)
        const state = {
            currentClient: {},
            updateClient: false,
            deleteStatement: false
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
    handleDeletedStatement = (id) => {
        this.context.deleteStatement(id);
        this.setState({deleteStatement: false, currentClient: {}});
    }
    closeModal = () => {
        this.setState({updateClient:false, currentClient: {}});
    }
    closeDeleteModal = () => {
        this.setState({deleteStatement: false, currentClient:{}});
    }
    handleDelete = id => {
        const copy = this.context.openStatements.filter(el => el.id === id);
        this.setState({deleteStatement: true, currentClient: copy[0]});
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
                                <div class="row">
                                    <button class="btn btn-primary mb-3 mr-3 ml-3"onClick={()=> this.handleUpdate(statement.id)}>Update</button>
                                    <button class="btn btn-outline-danger mb-3" onClick={()=> this.handleDelete(statement.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            {this.state.updateClient !== false && <UpdateClient data={this.state.currentClient} closeModal={this.closeModal} updatedStatement={this.handleUpdateStatement}/>}
            {this.state.deleteStatement !== false && <DeleteModal data={this.state.currentClient} closeDeleteModal={this.closeDeleteModal} deletedStatement={this.handleDeletedStatement}/>}
            </React.Fragment>
        )
    }
}

export default StatementDisplay
