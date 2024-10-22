import React from 'react';
import Card from '../components/Card';
import "./Products.css"

const Products = ({ results }) => {
    return <>
        <section className="card-container d-flex flex-wrap">
       
                
                    {results}

                
           
        </section>
    </>
}



export default Products;