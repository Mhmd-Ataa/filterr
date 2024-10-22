import React from 'react';
import "./Color.css";
import Input from "../../components/Input"


const Color = ({handleChange}) => {
    return <>

        <div className=" mt-3 ">


            <div>
                <label className="sidebar-lable-container">
                    <input onClick={handleChange} type="radio" value="" name="test3"  />
                    <span className="checkmark all"></span>All
                </label>

                <Input handleChange={handleChange} value="black" title="Black" name="test3" color="black" />
                <Input handleChange={handleChange} value="blue" title="Blue"  name="test3" color="blue" />
                <Input handleChange={handleChange} value="green" title="Green"  name="test3" color="green"/>
                <Input handleChange={handleChange} value="white" title="White" name="test3"color="white" />

            </div>
        </div>
    </>
}


export default Color;