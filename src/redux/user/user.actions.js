import {UserActionTypes} from './user.types'

/**
 * Actions are payloads of information that send data from your application to your store. 
 * They are the only source of information for the store. You send them to the store using store.dispatch().
 * 
 * Actions must have a type property that indicates the type of action being performed.
 * Types should typically be defined as string constants.
 * @param {*} user 
 */
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // action type
    payload: user // information
});
