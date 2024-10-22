import React from 'react';
import data from "../db/data";


const Card = ({img,title,star,reviews,newPrice,prevPrice}) => {
    return <>

        <div className="card ">
            
            <img src={img} alt={title} className="card-img w-100" />
            <div className="card-details">
                <h4 className="cardTitle">{title}</h4>
                <div className="card-review d-flex">
                    {star}
                    <span className="total-price">{reviews}</span>
                </div>
                <div className="card-price d-flex justify-content-between">
                    <div className="price">
                        <del className="me-2">{newPrice}</del>{prevPrice}
                    </div>
                    <div className="bag">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default Card;