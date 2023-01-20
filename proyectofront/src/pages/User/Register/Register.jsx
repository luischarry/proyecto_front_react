
import React, { useState, useEffect } from 'react';
import './Register.css';
import { InputText } from '../../../common/InputText/InputText';
import {useNavigate} from 'react-router-dom';
import { postRegister } from '../../../services/apiCalls';

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
const navigate = useNavigate();
const registerInputHandler = (e)=>{
    setCredenciales((prevState)=>({...prevState, 
        [e.target.name] : e.target.value
        
    }));;
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
            <pre>{JSON.stringify(credenciales, null, 2)}</pre>
            <InputText type={'text'} name={'name'} placeholder={'Nombre completo'} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={'surname'} placeholder={'Apellido completo'} functionHandler={registerInputHandler}/>
            <InputText type={'password'} name={'password'} placeholder={'pass'} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={'dni'} placeholder={'DNI'} functionHandler={registerInputHandler}/>
            <InputText type={'email'} name={'email'} placeholder={'Correo electronico'} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={'phone'} placeholder={'telefono'} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={'numerotc'} placeholder={'numero de cuenta '} functionHandler={registerInputHandler}/>
            <div className='registerButtonDesign' onClick={()=>Registrame()}>Registrame</div>
            
        </div>
    );
};