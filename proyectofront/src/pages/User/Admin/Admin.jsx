import React, { useState, useEffect } from 'react';
import './Admin.css';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allUsersAdmin, allRentalsAdmin } from '../../../services/apiCalls';

export const Admin = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);

    const [allUsers, setAllUsers] = useState([]);
    const [allRentals, setAllRentals] = useState([]);

    useEffect(() => {
        //Me conecto a redux para ver las credenciales de usuario y comprobar que su rol es admin...
        if (userRDX.userPass.user.rol !== 'admin') {
            navigate("/");
        }

    }, [])

    useEffect(() => {

        if (allUsers.length === 0) {

            allUsersAdmin(userRDX.userPass.token.data.token)
                .then(resultado => {

                    //seteo el hook de los usuarios...
                    setAllUsers(resultado.data);
                })
                .catch(error => console.log(error));
        };


    }, [allUsers]);

    useEffect(() => {
        if (allRentals.length === 0) {
            allRentalsAdmin(userRDX.userPass.token.data.token)
                .then(resultado => {
                    console.log(resultado.data)
                    setAllRentals(resultado.data)
                }).catch(error => console.log(error))
        }
    }, [allRentals])
    return (
        <div className='adminDesign'>
            <div>  {allUsers.length > 0 &&

                allUsers.map(
                    user => {
                        return (
                            <div>
                                <div key={user._id}>

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Email del usuario</th>
                                                <th>Nombre</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{user.email}</td>
                                                <td>{user.name}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                )
            }</div>

            <div>{allRentals.length > 0 && allRentals.map(
                rental => {
                    return (

                        <div >
                            <div key={rental._id}>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Email del usuario</th>
                                            <th>Fecha de inicio </th>
                                            <th>Fecha de fin </th>
                                            <th>Precio </th>
                                            <th>Serie alquilada</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{rental.userId.email}</td>
                                            <td>{rental.fechaInicio}</td>
                                            <td>{rental.fechaFin}</td>
                                            <td>{rental.importe}</td>
                                            <td>{rental.serieId.name}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    )
                }
            )}
            </div>

        </div>
    )
};
{/* <p>fecha inicio</p>{rental.fechaInicio}</td> <td>Precio{rental.importe}</td> <td>{rental.serieId.name}</td><td>{rental.userId.email}</td> <td>{rental.fechaFin}</td>  */ }