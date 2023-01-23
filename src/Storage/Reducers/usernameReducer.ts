import { ActionTypes } from "../../Constants/ActionTypes";

const intialState = {
    username: '',
}

const usernameReducer = (state: any = intialState, action: any) => {
    switch(action.type) {
        case ActionTypes.SET_USERNAME :
            return {...state, username: action.payload};
        default :
            return state;
    }
}

export default usernameReducer;