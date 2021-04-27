// import React, { Component } from 'react'
import React, {Component} from 'react';
import DeliveryForm from '../components/Delivery/DeliveryForm';

export class Delivery extends Component {
    render() {
        return (
            <section class="section" id="section--customer">
                    <DeliveryForm/>
            </section>
        )
    }
}

export default Delivery
