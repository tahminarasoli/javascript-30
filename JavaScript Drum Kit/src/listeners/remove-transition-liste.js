import { removeTransition } from '../handlers/remove-transition.js'

// calls removeTransition function from handlers 'remove-transition.js'.

 const keys = Array.from(document.querySelectorAll('.key'));
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));