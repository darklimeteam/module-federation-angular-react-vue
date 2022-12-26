
import {configureStore} from '@reduxjs/toolkit';

const UPDATE_SETTINGS = '[settings] Update settings';

//can't be used, this is JS
//should be covered by Unit tests
// enum SettingsOptions {
//  Show = "SHOW",
//  SendViaEmail = "SEND_VIA_EMAIL",
//  TurnOff = "TURN_OFF"
// }

// export enum SettingsOptions {
//     SHOW,
//     SEND_VIA_EMAIL,
//     NOT_SHOW
// }

// Dispatch binding functions
const bindUpdateSettings = (selectedOption) => Store.dispatch(updateSettings(selectedOption));


export function updateCurrentSettings(selectedOption) {
    console.log('current settings option', selectedOption);
    bindUpdateSettings(selectedOption);
}

// Increase total todo count
function updateSettings(currentSettingsValue){
    return {
        type: 'UPDATE_SETTINGS',
        payload: currentSettingsValue,
    }
}

export function getState() {
    return Store.getState();
}

const Store = configureStore({ reducer: reducer_SETTINGS_update });

//can be used for test purpose 
//export const SOME_VALUE = 'value from store';
   
console.log(Store.getState());

function reducer_SETTINGS_update(state = {currentSettingsValue: 1}, action){
    switch(action.type){
        case 'UPDATE_SETTINGS':
            return {...state, currentSettingsValue: action.payload};
        default:
            return state;
    }
}

// export default storeSettings;
export default Store;
