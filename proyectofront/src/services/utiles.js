
import { decodeToken } from "react-jwt";

export const Decoder = (token) => {

    const decodedToken = decodeToken(token);

    return decodedToken;
    
}

export const poster_default = 'https://image.tmdb.org/t/p/original';