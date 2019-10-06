import axios from 'axios';
import {
    GET_PRICES_SUCCESS,
    GET_CITIES_SUCCESS,
    GET_CITIES_FAIL,
    GET_PRICES_FAIL
} from './types';
const URL_ROOT = "http://localhost:8000/";

export const getCities = () => async dispatch =>{
    let dataTest = [
        {
            city: "Ejemplo 1",
            id: 1
        },
        {
            city: "Ejemplo 2",
            id: 2
        },
        {
            city: "Ejemplo 3",
            id: 3
        }
    ];
    try {
        //let { data } = await axios.get(`${URL_ROOT}/get-cities`);
        //dispatch({type: GET_CITIES_SUCCESS, payload: data });
        dispatch({type: GET_CITIES_SUCCESS, payload:  dataTest });

    }catch (error){
        console.log(error);
        dispatch({type: GET_CITIES_FAIL, payload: "Error al buscar las ciudades. Vuelve a intentarlo" });
    }
} 
export const getPrices = (city, type) => async dispatch =>{
   
    try {
        let { data } = await axios.post(`${URL_ROOT}/predict`,{
            type: type,
            id:city
        })
        dispatch({type: GET_PRICES_SUCCESS, payload: data });
        
    }catch (error){
        console.log(error);
        dispatch({type: GET_PRICES_FAIL, payload: "Error al buscar los costos. Vuelve a intentarlo" });
    }
} 