
import { configureStore } from '@reduxjs/toolkit';

const UPDATE_SETTINGS = '[settings] Update settings';

//can't be used, this is JS
//should be covered by Unit tests
//enum SettingsOptions {
//  Show = "SHOW", 
//  SendViaEmail = "SEND_VIA_EMAIL",
//  TurnOff = "TURN_OFF"
//}

// Dispatch binding functions
const bindUpdateSettings = (currentSettingsValue) => storeSettings.dispatch(updateSettings(currentSettingsValue));


export function updateCurrentSettings(currentSettingsValue) {
    console.log('current settings option', currentSettingsValue);
    bindUpdateSettings(currentSettingsValue);
}

// Increase total todo count
function updateSettings(currentSettingsValue){
    return {
        type: UPDATE_SETTINGS,
        payload: {currentSettingsValue}
    }
}

const storeSettings = configureStore({ reducer: reducer_SETTINGS_update });

//can be used for test purpose 
//export const SOME_VALUE = 'value from store';
   
console.log(storeSettings.getState());

function reducer_SETTINGS_update(state = {currentSettingsValue: null}, action){
    switch(action.type){
        case UPDATE_SETTINGS:
            return {...state, currentSettingsValue: action.payload.currentSettingsValue};
        default:
            return state;
    }
}

export default storeSettings;