
import React from 'react';
import { poster_default } from '../../services/utiles';
import './CardSerie.css';

export const CardSerie = ({ serie }) => {

    return (
        <div className='cardSerieDesign'>
            <div className='title'>{serie.name !== '' ? serie.name : "Nombre no disponible"}</div>
            <div><img className='posterDesign' src={`${poster_default}${serie.poster_path}`}/></div>
            <div>{serie.first_air_date !== '' ? serie.first_air_date : "TBA"}</div>
        </div>
       

    )
}

