import React, { useEffect } from 'react';
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

    //const [allRentals, setAllRentals] = useState([]);
    
    useEffect(() => {

        if (userRDX.userPass.token === '') {
            navigate("/");


        }
    }, []);
    // useEffect(() => {
    //     if (allRentals===0){
    //         AllrentalsUser(userRDX.userPass.token.data.token,userRDX.userPass.user._id)
    //         .then(resultado => {
    //             console.log(resultado.data)
    //             setAllRentals(resultado.data)
    //         }).catch(error => console.log(error))
    //     }
    // },[allRentals])


    return (
       
        <div className='profileDesign'>
             {console.log("aqui",userRDX)}
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
            {/* {allRentals.length > 0 && allRentals.map(
                    rental => {
                        return (
                            <table class="table">
                            <div key={rental._id}><div>
                                
                                <tbody>
                                <tr><td><p>fecha inicio</p>{rental.fechaInicio}</td> <td>Precio{rental.importe}</td> <td>{rental.serieId.name}</td><td>{rental.fechaFin}</td>  </tr>
                                </tbody> 
                                
                            </div>
                            </div>
                            </table>
                        )
                    }
                )} */}

        </div>
    )
}