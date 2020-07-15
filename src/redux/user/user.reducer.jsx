import {UserActionTypes} from './user.types'

/**
 * Reducer that stores the state of our current user.
 */
const INITIAL_STATE = {
    currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            // Send original state + action payload.
            return {
                ...state, 
                currentUser: action.payload
            }    
        default:
            return state; // Default return. Send unaltered state.
    }
}

export default userReducer;