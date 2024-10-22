import React from 'react';

const Input = ({handleChange,value,color,title,name}) => {
    return <>
        <label className="sidebar-lable-container ">
            <input onClick={handleChange} value={value} type="radio" name={name}/>
            <span className="checkmark " style={{background:color}}></span>{title}
        </label>

    </>
}


export default Input;