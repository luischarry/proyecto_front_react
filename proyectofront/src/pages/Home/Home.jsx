
import React, { useState, useEffect } from 'react';
import { CardSerie } from '../../common/CardSerie/CardSerie';
import { getSeries } from '../../services/apiCalls';
import './Home.css';

import Loading from './loading.gif';

import { useNavigate } from 'react-router-dom';

//RDX imports......
import { useSelector, useDispatch } from "react-redux";
import { serieData, select } from '../serieSlice';

export const Home = () => {

    //Instanciamos dispatch para poder ejecutar accionces en el estado de Redux
    const dispatch = useDispatch();

    //Instanciamos los datos de las series desde Redux
    const datosReduxSeries = useSelector(serieData);

    //Instanciamos useNavigate en navigate para poder movernos por el router
    const navigate = useNavigate();

    const [series, setSeries] = useState([]);

    useEffect(() => {

        
        if (series.length === 0) {

            setTimeout(() => {
                
                getSeries()
                    .then(
                        resultado => {
                            
                            setSeries(resultado.data);
                        }
                    )
                    .catch(error => console.log(error));

            }, 1000);
        };

    }, [series]);



    const Choosen = (serie) => {

        //guardar en Redux la serie escogida
        dispatch(select({ choosen: serie }))

        //se redirecciona a los detalles de la serie

        setTimeout(() => {
            navigate("/detail");
        }, 250);

    }

    return (
        <div className='homeDesign'>

            {datosReduxSeries.series.length > 0 ? (

                //Si entramos aqui es porque tenemos series de Redux....

                <div className='rosterDesign'>

                    {datosReduxSeries.series.map(

                        serie => {
                            return (
                                <div key={serie._id} onClick={() => Choosen(serie)} >

                                    <CardSerie serie={serie} />
                                </div>
                            )
                        }
                    )}
                </div>

            ) : (

                series.length > 0 ? (
                    //se mapea en hook con las series guardadas
                    <ul className='rosterDesign'>
                        {series.map(
                            serie => {
                                return (
                                    <div onClick={() => Choosen(serie)} key={serie.id}>

                                        <CardSerie serie={serie} />
                                    </div>
                                )
                            }
                        )}
                    </ul>
                ) : (
                    <div><img className="loadingGif" src={Loading} alt="Cargando" /></div>
                )
            )
            }
        </div>
    );
};