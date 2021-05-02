import React, { Component } from 'react';
import ApiService from '../../services/api-service';

export class DeleteForm extends Component {
    static defaultProps = {
        data: {},
        closeDeleteModal: () => {},
        deletedStatement: () => {}
    }
    closeModal = e => {
        e.preventDefault();
        this.props.closeDeleteModal();
    }
    handleDelete = e => {
        e.preventDefault();
        const order_id = this.props.data.order_id;
        ApiService.deleteStatement(order_id).then(() => {
            console.log(this.props.data.id)
            this.props.deletedStatement(this.props.data.id);
        })
    }
    render() {
        const data = this.props.data;
        return (
            <React.Fragment>
                <form className="updateModal"onSubmit={this.handleDelete}>
                    <button className="btn--close-modal" onClick={this.closeModal}>&times;</button>
                    <h3>Are you sure you want to delete</h3>
                    <p><span>Order: </span>{data.order_id}</p>
                    <p><span>Amount: </span>{data.total}</p>
                    <button type="submit"className="btn btn-outline-success mr-3">Yes</button>
                    <button className="btn btn-outline-danger" onClick={this.closeModal}>No</button>
                </form>
                <div className="overlay" onClick={this.closeModal}></div>
            </React.Fragment>
        )
    }
}

export default DeleteForm
