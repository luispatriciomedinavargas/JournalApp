import { types } from "../types/types";
/*
//no autenticado
{

}

//autenticado
{
    uid:'1234af',
    name:'Patricio'
}
*/


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                iud: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {

            }

        default:
            return state;
    }

}