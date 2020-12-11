
/**
 * 
 * @param {event} e reads the keycode when key presed.
 * plays the sound related to that particular key.
 * 
 */
 export function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
// call css class playing to change the apearance of key when presed.
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }