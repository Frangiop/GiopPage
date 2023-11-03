import axios from 'axios'

import {
    GET_DIGITALARTS,
    GET_DIGITALARTS_OK,
    GET_DIGITALARTS_FAIL

    } from './actionTypes'
    

export function actionGetDigitalArts(){
return {
    type : GET_DIGITALARTS
}
}

export function actionGetDigitalArtsOk(digitalarts){ {/*aqui usamos para el componente*/}
    return {
        type:GET_DIGITALARTS_OK,
        payload:digitalarts
    }
}

export function actionGetDigitalArtsFail(error){
     return {
        type:GET_DIGITALARTS_FAIL,
        payload:error,
     }
}



    
export function getDigitalArts(){
    return async (dispatch) =>{
        dispatch(actionGetDigitalArts())
        try {
            const response = await axios.get("http://localhost:3000/cuadros")
             dispatch(actionGetDigitalArtsOk(response.data))
        } catch(error){
            dispatch(actionGetDigitalArtsFail(error))
        }
    }
}
