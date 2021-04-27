import React from 'react';
import {Link} from 'react-router-dom';

export default function dashboard() {
    return (
        <React.Fragment>

                <Link to="/">New Order</Link>
                <Link to="/">Vendor Order</Link>
                <Link to="/">Delivery Form</Link>
                <Link to="/">Pending Order</Link>
                <Link to="/">Statement</Link>
        </React.Fragment>
    )
}
