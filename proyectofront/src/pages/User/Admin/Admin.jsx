import React, { useState, useEffect } from 'react';
import './Admin.css';

import {useNavigate} from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allUsersAdmin } from '../../../services/apiCalls';

export const Admin = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);

    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        //Me conecto a redux para ver las credenciales de usuario y comprobar que su rol es admin...
        if(userRDX.userPass.user.rol !== 'admin'){
            navigate("/");
        }

    },[])

    useEffect(()=>{

        if(allUsers.length === 0){

            allUsersAdmin()
                .then(resultado => {
                    
                    //seteo el hook de los usuarios...
                    console.log(userRDX)
                    setAllUsers(resultado.data);
                })
                .catch(error => console.log(error));
        };

    },[allUsers]);

    return (
        <div className='adminDesign'>
            {allUsers.length > 0 &&
            
                allUsers.map(
                    user => {
                        return (
                            <div key={user._id}><div>
                                {user.name} {user.surname} {user.email}
                                </div>
                            </div>
                            
                        )
                    }
                )
            }

        </div>
    )
};