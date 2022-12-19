import { updateCurrentSettings } from './store';
import { storeSettings } from './store';//maybe will not work without this import


const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function () { updateCurrentSettings('TURN_OFF') } )

