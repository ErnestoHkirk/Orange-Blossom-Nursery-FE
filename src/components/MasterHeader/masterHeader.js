import React from 'react';
import {Link} from 'react-router-dom';
import './masterHeader.css';

function masterHeader () {
    return (
        <section class="masterHeader">
            <div class="container">
                <div class="masterHeader-subheading">Welcome To Orange Blossom Nursery!</div>
                <div class="masterHeader-heading text-uppercase">Botany plants lately?</div>
                <Link class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/login">log in</Link>
            </div>
        </section>  
    )
}

export default masterHeader;