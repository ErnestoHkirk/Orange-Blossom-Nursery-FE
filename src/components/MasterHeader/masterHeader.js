import { Button } from 'react-bootstrap';
import './masterHeader.css';

function masterHeader () {
    return (
        <section class="masterHeader">
            <div class="container">
                <div class="masterHeader-subheading">Welcome To Orange Blossom Nursery!</div>
                <div class="masterHeader-heading text-uppercase">Botany plants lately?</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#">log in</a>
            </div>
        </section>  
    )
}

export default masterHeader;