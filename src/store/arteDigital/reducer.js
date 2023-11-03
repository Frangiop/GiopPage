import {
    GET_DIGITALARTS,
    GET_DIGITALARTS_OK,
    GET_DIGITALARTS_FAIL
    
    } from './actionTypes'
    
    
    const initialState={
        digitalarts:[],
        loadingCollections:false,
        error: {
             message:""
        }
    }
    
    export default function DigitalartsReducer(state = initialState,action) {
        switch(action.type){
             case GET_DIGITALARTS:
    
                state = {...state, loadingDigitalarts:true}
                 break 
    
             case GET_DIGITALARTS_OK:
                state={...state,loadingDigitalarts:false , digitalarts:action.payload}
                 break
                 
             case GET_DIGITALARTS_FAIL:
                  state={...state,loadingDigitalarts:false, digitalarts:[], error :{message:action.payload} }
                  break // aquie posts[] lo tenia sin s 
    
                        
                  default:
                    break
    }
    return state
    }
