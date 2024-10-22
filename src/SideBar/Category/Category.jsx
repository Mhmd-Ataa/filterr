import React from 'react';
import "./Category.css";
import Input from "../../components/Input"

const Category = ({handleChange}) => {
    return <>
        <div>
            <h2 className="sidebarTitle">Category</h2>
            <div>
            <label className="sidebar-lable-container">
                <input onClick={handleChange} type="radio" value="" name="test1" />
                <span className="checkmark"></span>All
            </label>
            
            <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test1"/>
            <Input handleChange={handleChange} value="flats" title="Flats" name="test1"/>
            <Input handleChange={handleChange} value="sandals" title="Sandal" name="test1"/>
            <Input handleChange={handleChange} value="heels" title="Heels" name="test1"/>

            </div>



        </div>
    </>
}


export default Category;