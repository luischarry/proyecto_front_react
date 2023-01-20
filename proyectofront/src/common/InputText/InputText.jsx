
import React from 'react';

export const InputText = ({type, name, placeholder, functionHandler}) => {

    return (
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={(e)=>functionHandler(e)} 
            className='inputDesign' 
        />
    )
}