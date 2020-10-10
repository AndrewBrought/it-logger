import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case ADD_LOG:
            return {
                ...state,
                // We're taking the logs array, because state is immutable - so we can't just push onto it,
                // we set it to an array and use the spread operator to spread across state.logs and add onto it
                // our action.payload - which is the new log that comes from the server
                logs: [...state.logs, action.payload],
                loading: false
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                // We're mapping through the logs and comparing each log to the action.payload, if match,
                // then we're returning the updated log (action.payload) else return the log in state
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            }
        case LOGS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
