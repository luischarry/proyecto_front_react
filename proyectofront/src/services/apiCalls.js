
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