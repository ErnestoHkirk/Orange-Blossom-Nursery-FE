import React from 'react';
import {Link} from 'react-router-dom';

export default function dashboard() {
    return (
        <div>
            <Link to="/">New Order</Link>
            <Link to="/">Vendor Order</Link>
            <Link to="/">Delivery Form</Link>
            <Link to="/">Pending Order</Link>
            <Link to="/">Statment</Link>
        </div>
    )
}
