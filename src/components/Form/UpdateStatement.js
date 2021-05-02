import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import './modal.css';

export class UpdateStatement extends Component {
    static defaultProps = {
        data: {},
        updatedStatement: () => {},
        closeModal: () => {}
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            interest_rate: e.target.interest_rate.value,
            amount_paid: e.target.amount_paid.value,
            paid: e.target.paid.value
        }

        const id = this.props.data.id;
        ApiService.patchStatement(id, data).then(() => {
            this.props.updatedStatement(id, data);
        })
    }
    closeModal = e => {
        e.preventDefault();
        this.props.closeModal();
    }
    render() {
        const data = this.props.data;
        return (
            <div>
                <form class="updateModal"onSubmit={this.handleSubmit}>
                    <button class="btn--close-modal" onClick={this.closeModal}>&times;</button>
                    <h3 className="modal-title text-left">Order Number: {data.order_id}</h3>
                    <h4 className="text-left">Order Date: {data.order_date}</h4>
                    <h4 className="text-left">Amount: {data.total}</h4>
                    <label htmlFor="name">interest Rate: </label><br/>
                    <input type="text" name="interest_rate" className="name" placeholder={data.interest_rate}/><br/>
                    <label htmlFor="name">Amount Paid: </label><br/>
                    <input type="text" name="amount_paid" className="name" placeholder={data.amount_paid}/><br/>
                    <label htmlFor="name">paid: </label><br/>
                    <input type="text" name="paid" className="name" placeholder={data.paid.toString() }/><br/>
                    <button className="btn btn-primary mt-4" type="submit">Update</button>
                </form>
                <div class="overlay" onClick={this.closeModal}></div>
            </div>
        )
    }
}

export default UpdateStatement
