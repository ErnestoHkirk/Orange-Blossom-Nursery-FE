import { Image, Button } from 'react-bootstrap';
import orange from '../assets/orange-tulip.png';
import './home.css';

function Home () {
    return(
        <section class="masterHeader">
            <div class="container">
                <div class="masterHeader-subheading">Welcome To Orange Blossom Nursery!</div>
                <div class="masterHeader-heading text-uppercase">We should put our tulips together.</div>
             <Button variant="info">LOG IN</Button>
            </div>
        </section>  
    )
}

export default Home;