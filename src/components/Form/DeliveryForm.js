import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import './modal.css';

export class DeliveryForm extends Component {
    static defaultProps = {
        handleCompletedOrder: () => {},
        closeDeliveryModal:() => {}
    }
    handleSubmit = e => {
        e.preventDefault();
        const order = this.props.order;
        const customer = this.props.customer;
        const delivery = {
            delivery_date: e.target.delivery_date.value,
            delivery_time: e.target.delivery_time.value,
            delivery_distance: e.target.delivery_distance.value,
            delivery_fee_rate: e.target.delivery_fee_rate.value
        }
        ApiService.postNewOrder(order, customer, delivery).then(res => {
            console.log(res)
            this.props.handleCompletedOrder();
        }).catch(res => {
            this.setState({error: res.error})
        })
    }
    render() {
        return (
            <React.Fragment>
                <form className="updateModal" onSubmit={this.handleSubmit}>
                    <h3>Delivery</h3>
                    <label htmlFor="time">Delivery Date: </label>
                    <input type="text" name="delivery_date" className="time" required /> <br/>
                    <label htmlFor="time">Delivery Time: </label>
                    <input type="text" name="delivery_time" className="time" required /> <br/>
                    <label htmlFor="time">Delivery Distance: </label>
                    <input type="text" name="delivery_distance" className="time" required /> <br/>
                    <label htmlFor="time">Delivery Fee: </label>
                    <input type="text" name="delivery_fee_rate" className="time" required /> <br/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <div class="overlay" ></div>
            </React.Fragment>
        )
    }
}

export default DeliveryForm
