
import React, { useState } from 'react';
import './SerieDetail.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
//Imports RDX
import { useSelector } from "react-redux";
import { serieData } from '../serieSlice';
import { userData } from '../User/userSlice';
import { poster_default } from '../../services/utiles';
import { postRent } from '../../services/apiCalls';

export const SerieDetail = () => {

    const detailRdx = useSelector(serieData);
    const detailUsr = useSelector(userData);

    const navigate = useNavigate();
    //Funciones....
    //Hooks
    const [msg, setMsg] = useState('');

    const Rentme = () => {
        //aquí llamaremos a la función que se comunica con la API
        let body = {

            //id de la serie...
            idSerie: detailRdx.choosen._id,
            idUser: detailUsr.userPass.user._id,
            rentalDate: dayjs().format('DD/MM/YYYY'),
            returnDate: dayjs().add(7, 'days').format('DD/MM/YYYY'),
            price: 12,
            nameserie:detailRdx.choosen.name
        }
        postRent(body, detailUsr.userPass.token.data.token)
            .then(resultado => {
                setMsg(resultado.data.data)
                //Después de haber realizado el pedido, llevamos al main
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch(error => {
                setMsg(error.message);
            });
    }

    return (
        <div className='serieDesign'>
            {detailRdx.choosen.id !== '' &&
                <div className='serieDetailCard'>

                    <div><div className='name'>{detailRdx.choosen.name}</div>
                        {detailRdx.choosen.original_name !== detailRdx.choosen.name &&
                            <div>{detailRdx.choosen.original_name}
                            </div>
                        }
                        <div>{detailRdx.choosen.first_air_date}</div>
                        <div className='overview'>{detailRdx.choosen.overview !== '' ? detailRdx.choosen.overview : "No overview available"}</div>
                    </div>
                    <div><img className='detailPoster' src={`${poster_default}${detailRdx.choosen.poster_path}`} /></div>


                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder alquilar la película */}

                    {detailUsr.userPass.token !== '' &&

                        <div onClick={() => Rentme()} className='rentDesign'>ALQUILAME</div>
                    }
                    <div>{msg}</div>
                </div>

            }
        </div>
    )

}