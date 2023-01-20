
import React from 'react';
import './SerieDetail.css';

//Imports RDX
import { useSelector } from "react-redux";
import { serieData } from '../serieSlice';
import { userData } from '../User/userSlice';
import { poster_default } from '../../services/utiles';

export const SerieDetail = () => {

    //Instanciar los datos de Redux...

    const detailRdx = useSelector(serieData);
    const detailUsr = useSelector(userData);

    //Funciones....

    const Rentme = () => {

        //aquí llamaremos a la función que se comunica con la API
        //que podemos encontrarla en services
        //encargada de realizar el pedido....... le pasaremos detailRdx y detailUsr
        //porque ahi tendremos la id de user y la id de la peli
    }

    return(
        <div className='serieDesign'>
            {detailRdx.choosen.id !== '' &&
            
                <div className='serieDetailCard'>
                    <div>{detailRdx.choosen.name}</div>

                    {detailRdx.choosen.original_name !== detailRdx.choosen.name &&

                        <div>{detailRdx.choosen.original_name}</div>
                    }
                    <div><img className='detailPoster' src={`${poster_default}${detailRdx.choosen.poster_path}`}/></div>
                    <div>{detailRdx.choosen.first_air_date}</div>
                    <div>{detailRdx.choosen.overview !== '' ? detailRdx.choosen.overview : "No overview available"}</div>

                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder alquilar la película */}

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>RentMe()} className='rentDesign'>ALQUILAME</div>
                    }
                </div>
            
            }
        </div>
    )

}