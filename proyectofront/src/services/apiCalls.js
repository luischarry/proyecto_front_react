
import axios from 'axios';

const root = 'http://localhost:5500/';
const root2 = 'https://api.themoviedb.org/3';
const api_key = '210d6a5dd3f16419ce349c9f1b200d6d';

export const postLogin = async (credenciales) => {

     return await axios.post(`${root}users/login`, credenciales);

};

export const postRegister = async (userData) => {
    return await axios.post(`${root}users/`, userData);
    
}

export const getSeries = async () => {

    //return await axios.get(`${root2}/tv/popular?api_key=${api_key}&language=en-US&page=1`);
    return await axios.get(`${root}series`);
}

export const getSearch = async (search) => {
    return await axios.get(`${root}series/name/${search}`);
}
export const postRent = async (body, token) => {
    // console.log('entra a la llamada')
    // console.log(body);
    // console.log(token);
   let config={
    headers:{Authorization: `Bearer ${token}`}
   }
   
   //await axios.post(`${root}rentals`,body,config)
   //const resultado = {data: 'El pedido se ha realizado correctamente'} 
   return await axios.post(`${root}rentals/`,body,config)
  


    //Las dos líneas que hay a continuación hacen referencia a poder hacer el pedido en este caso ya que no dispongo de una API
    //const resultado = {data: 'El pedido se ha realizado correctamente'}
    //return resultado;
    
}

export const allUsersAdmin = async (token) => {

    //Esta sería la forma en la que conectaríamos con la API para traernos todos los users en modo admin

    // let config = {
    //     method: 'get', //aqui especifico el protocolo http
    //     url : `${root}allUsers`, //este sería mi endpoint del backend de admin que trae todos los users
    //     body, //el body que contiene los datos
    //     headers: { 
    //         'Authorization': 'Bearer ' + token
    //       }
    // }

    // return await axios.get(config);

    // const resultado = [
    //     {id: 3,name: 'Pepito', surname: 'Garcia', age: 28 },
    //     {id: 2,name: 'Pepita', surname: 'Perez', age: 23},
    //     {id: 1,name: 'Manolito', surname: 'Sanchez', age: 18},
    //     {id: 56,name: 'Manolita', surname: 'Rodriguez', age: 50}
    // ];

    //return resultado;
    return await axios.get(`${root}users/allusers`);
}