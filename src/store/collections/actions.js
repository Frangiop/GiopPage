import axios from 'axios'

import {
    GET_COLLECTIONS,
    GET_COLLECTIONS_OK,
    GET_COLLECTIONS_FAIL    

    } from './actionTypes'
    

export function actionGetCollections(){
return {
    type : GET_COLLECTIONS
}
}

export function actionGetCollectionsOk(collections){ {/*aqui usamos para el componente*/}
    return {
        type:GET_COLLECTIONS_OK,
        payload:collections
    }
}

export function actionGetCollectionsFail(error){
     return {
        type:GET_COLLECTIONS_FAIL,
        payload:error,
     }
}



    
export function getCollections(){
    return async (dispatch) =>{
        dispatch(actionGetCollections())
        try {
            const response = await axios.get("http://localhost:3000/cuadros")
             dispatch(actionGetCollectionsOk(response.data))
        } catch(error){
            dispatch(actionGetCollectionsFail(error))
        }
    }
}
