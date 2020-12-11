

/**
 * 
 * @param {event} e reads the property name from css. 
 */

 export function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    // remove 'playing' style of the presed key.
    e.target.classList.remove('playing');
  }