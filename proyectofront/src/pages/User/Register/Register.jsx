
import React, { useState, useEffect } from 'react';
import './Register.css';
import { InputText } from '../../../common/InputText/InputText';
import {useNavigate} from 'react-router-dom';
import { postRegister } from '../../../services/apiCalls';
import { errorCheck } from '../../../services/utiles';

export const Register = () => {
const [credenciales, setCredenciales]=useState({
    name:'',
    surname:'',
    password: '',
    dni:'',
    email: '',
    phone:'',
    numerotc: '',

})
const [usuarioError, setUsuarioError] = useState({
    nameError: '',
    surnameError: '',
    passwordError: '',
    dniError: '',
    emailError: '',
    phoneError: '',
    countryError: ''
})
const navigate = useNavigate();
const registerInputHandler = (e)=>{
    setCredenciales((prevState)=>({...prevState, 
        [e.target.name] : e.target.value
        
    }));;
}
const registerErrorHandler = (e) => {

    let error = '';
    console.log(registerErrorHandler)
    error = errorCheck(e.target.name, e.target.value);


    setUsuarioError((prevState)=>({...prevState, 
        [e.target.name + 'Error'] : error
    }));
    
}
const Registrame = () => {

    //Desde aqui llamamos al servicio....
    postRegister(credenciales)
        .then(
            resultado => {

                console.log(resultado);

                setTimeout(()=>{
                    navigate("/")
                },750);
            }
        )
        .catch(error => console.log(error));
}



    return (
        <div className='registerDesign'>
            
            <InputText 
            type={'text'} 
            name={'name'} 
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'Nombre completo'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.nameError}</div>
            <InputText 
            type={'text'} 
            name={'surname'}
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}  
            placeholder={'Apellido completo'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.surnameError}</div>
            <InputText 
            type={'password'} 
            name={'password'} 
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'pass'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.passwordError}</div>
            <InputText 
            type={'text'} 
            name={'dni'} 
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'DNI'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.dniError}</div>
            <InputText 
            type={'email'} 
            name={'email'} 
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'Correo electronico'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.emailError}</div>
            <InputText 
            type={'text'} 
            name={'phone'} 
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'telefono'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.phoneError}</div>
            <InputText 
            type={'text'} 
            name={'numerotc'} 
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'numero de cuenta '} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}/>
             <div className='errorText'>{usuarioError.nameError}</div>
            <div className='registerButtonDesign' onClick={()=>Registrame()}>Registrame</div>
            
        </div>
    );
};