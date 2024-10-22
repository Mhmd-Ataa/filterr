import React from 'react';
import "./Nav.css"

const Nav = ({ handleInputChange, query }) => {
    return <>
    <nav className="d-flex align-items-center justify-content-around py-4">

        <div className="navInput">
            <input type="text" placeholder="Enter your search shoes" onChange={handleInputChange}
          value={query}/>
        </div>

        <div className="NavIcons d-flex">
            <a href="#">
                <i class="fa-regular fa-heart icon"></i>
            </a>
            <a href="#">
                <i class="fa-solid fa-cart-shopping icon"></i>
            </a>
            <a href="#">
                <i class="fa-solid fa-user icon"></i>
            </a>
        </div>
    </nav>
</>

}


export default Nav;