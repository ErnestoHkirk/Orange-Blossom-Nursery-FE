import React from 'react';
import {Link} from 'react-router-dom';

export default function dashboard() {
    return (
        <section class="container mt-4">
            <div class="row justify-content-around">
                <Link class="col-4 btn btn-outline-primary " to="/customerOrder">New Order</Link>
                <Link class="col-4 btn btn-outline-primary " to="/statement">Statement</Link>
            </div>
        </section>
    )
}
