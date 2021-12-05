import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../asserts/cake11.jpg';
import '../css/Home.css';


function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
            <h1>Sweet Basket</h1><br></br>
            <p>Hungry? Why Wait? Grab A Sweet Treat!!!</p>
            <Link to="/Services">
                <Button>Order Now</Button>
            </Link>
            </div>

 </div>
    )
}

export default Home
