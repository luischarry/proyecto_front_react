import React, { useState,useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
//Imports de RDX
//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { AllrentalsUser} from '../../../services/apiCalls'
export const Profile = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);

    const [allRentals, setAllRentals] = useState([]);
    
    useEffect(() => {

        if (userRDX.userPass.token === '') {
            navigate("/");


        }

    }, []);

    useEffect(() => {
        
        if (allRentals.length===0){
            
            AllrentalsUser(userRDX.userPass.token.data.token,userRDX.userPass.user._id)
            .then(resultado => {
                
                setAllRentals(resultado.data)
            }).catch(error => console.log(error))
        }
    },[allRentals])


    return (
       
        <div className='profileDesign'>
            <div className='profile'>
                <header>
                    <h1>TU PERFIL</h1> 
                </header>
                <div>
                    <h3>Nombre: {userRDX.userPass.user.name}</h3>
                    
                </div>
                <div>
                    <h3>Apellido: {userRDX.userPass.user.surname}</h3> 
                   
                </div>
                <div>
                    <h3>Email: {userRDX.userPass.user.email}</h3>
                    
                </div>
                <div>
                    <h3>DNI: {userRDX.userPass.user.dni}</h3>
                    
                </div>
            </div>
            <div><h2>ALQUILERES REALIZADOS</h2></div>
            <div>
                {allRentals.length >0 &&
                
                allRentals.map(
                    rental=>{
                        return (
                            <div>
                                <div key={rental._id}>

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Fecha Inicio</th>
                                                <th>Fecha Fin</th>
                                                <th>Nombre de la Serie</th>
                                                <th>Valor del Alquiler</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{rental.fechaInicio}</td>
                                                <td>{rental.fechaFin}</td>
                                                <td>{rental.nameserie}</td>
                                                <td>{rental.importe} €</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                )
                }
            </div>
            
        </div>
    )
}