import React from 'react';
import "./Sidebar.css";
import Category from './Category/Category';
import Price from './Price/Price';
import Color from './Color/Color';

const Sidebar = ({handleChange}) => {
    return <>
    <div className="sildbar-container d-flex flex-column   pt-4 ">
        <div className="logo mb-4">
        <i class="fa-solid fa-cart-shopping icon mb-4"></i>
        </div>
        
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </div>
    </>
}


export default Sidebar;