import {
    GET_COLLECTIONS,
    GET_COLLECTIONS_OK,
    GET_COLLECTIONS_FAIL
    
    } from './actionTypes'
    
    
    const initialState={
        collections:[],
        loadingCollections:false,
        error: {
             message:""
        }
    }
    
    export default function CollectionsReducer(state = initialState,action) {
        switch(action.type){
             case GET_COLLECTIONS:
    
                state = {...state, loadingCollections:true}
                 break 
    
             case GET_COLLECTIONS_OK:
                state={...state,loadingCollections:false , collections:action.payload}
                 break
                 
             case GET_COLLECTIONS_FAIL:
                  state={...state,loadingCollections:false, collections:[], error :{message:action.payload} }
                  break // aquie posts[] lo tenia sin s 
    
                        
                  default:
                    break
    }
    return state
    }
