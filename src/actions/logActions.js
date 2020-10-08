import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";


// In here is where we'll have any actions
//The first we want to have is to fetch the logs


// ** THIS IS THE SAME AS THE CODE IN ACTION BELOW

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//
//         const res = await fetch('/logs');
//         const data = await res.json();
//
//         dispatch({
//            type: GET_LOGS,
//             payload: data
//         });
//     }
// };

export const getLogs = () => async dispatch => {
    try{
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
           type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
