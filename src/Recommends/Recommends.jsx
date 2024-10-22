import React from 'react';
import Buttons from '../components/Buttons';
import "./Recommends.css"

const Recommends = ({ handleClick }) => {
    return <>
        <div className="Recommends">
            <div className="recommends-title">
                <h2>Recommends</h2>
            </div>
            <div className="recommends-btns">
                <Buttons onClickHandler={handleClick} value="" title="All Products" />
                <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
                <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
                <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
                <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />

            </div>
        </div>
    </>
}



export default Recommends;