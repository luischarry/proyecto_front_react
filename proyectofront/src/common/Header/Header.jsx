
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


//modifica redux
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";
import { serieData, find, clear } from "../../pages/serieSlice";
import { InputText } from '../InputText/InputText';
import { getSearch } from '../../services/apiCalls';
export const Header = () => {

    
    const dispatch = useDispatch();
    //Initial es un objeto de JavaScript que es igual que el estado de redux por defecto, 
    //para pasárselo luego cuando haga el logout
    const initial = {
        token: '',
        user: {}
    }
    //hook para busqueda
    const [search, setSearch] = useState([])

    //Guardo en la constante datosReduxUsuario, los datos que me traigo del state de redux (userData)
    const datosReduxUsuario = useSelector(userData);
    const datosReduxSeries = useSelector(serieData)
    useEffect(() => {
        if (search !== "") {
            getSearch(search)
                .then(resultado => {
                    dispatch(find({ series: resultado.data }))
                })
                .catch(error => console.log(error))
        } else if (search === "" && datosReduxSeries.series.length > 0) {

            //Si borramos lo que había escrito o no nay nada, limpiamos las series de REDUX
            dispatch(clear({ choosen: {}, series: [] }));
        }

    }, [search])


    //Instanciamos el método useNavigate 

    const navigate = useNavigate();
    

    const ResetHome = () => {

        //primero limpiamos búsquedas posibles de Redux
        dispatch(clear({choosen : {}, series: []}));

        //redirigimos a Home
        navigate("/")

    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className='headerDesign'>
            <div onClick={() => ResetHome()} className='logoDesignHeader'><img className='cameraAvatar' src="https://cnbl-cdn.bamgrid.com/assets/e41020c93fec10692725897c2cffbc75a1c59a6855b2cb702d85b45c596a81e7/original" alt="Start+" /></div>
            <div className='searchDesign'>
                <InputText 
                type={"text"} 
                name={"search"} 
                placeholder={"Busqueda"}
                className={'inputDesign'} 
                functionHandler={handleSearch} />
            </div>
            <div className='headerLinksDesign'>
                {datosReduxUsuario.userPass.user.rol === "admin" &&               
                    <div onClick={()=>navigate("/admin")} className='linkDesign'>admin</div>           
                }
                {datosReduxUsuario.userPass.token !== "" ?
                    (<>
                        <div onClick={() => navigate("/profile")} className='linkDesign' >{datosReduxUsuario.userPass?.user?.name}</div>
                        <div className='linkDesign' onClick={() => dispatch(logout({ userPass: initial }))}>logout</div>
                    </>)
                    : (//Entraremos en el else si el token que hay en Redux está vacio (comillas vacias.)....
                        //La primera vez que entramos en la aplicación, siempre entrará aquí por defecto
                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>register</div>
                        </>
                    )
                }
            </div>
        </div>
    );
};


