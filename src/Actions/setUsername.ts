import { ActionTypes } from "../Constants/ActionTypes"

export const setUsername = (dispatch: any, data: string) => {
    dispatch({
        type: ActionTypes.SET_USERNAME,
        payload: data
    });
}