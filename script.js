const ButtonsRus = {
  Backquote: 'ё', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'Backspace', Tab: 'Tab', KeyQ: 'й', KeyW: 'ц', KeyE: 'у', KeyR: 'к', KeyT: 'е', KeyY: 'н', KeyU: 'г', KeyI: 'ш', KeyO: 'щ', KeyP: 'з', BracketLeft: 'х', BracketRight: 'ъ', Backslash: '\\', CapsLock: 'CapsLock', KeyA: 'ф', KeyS: 'ы', KeyD: 'в', KeyF: 'а', KeyG: 'п', KeyH: 'р', KeyJ: 'о', KeyK: 'л', KeyL: 'д', Semicolon: 'ж', Quote: 'э', Enter: 'Enter', ShiftLeft: 'Shift', KeyZ: 'я', KeyX: 'ч', KeyC: 'с', KeyV: 'м', KeyB: 'и', KeyN: 'т', KeyM: 'ь', Comma: 'б', Period: 'ю', Slash: '.', ArrowUp: '▲', ShiftRight: 'Shift', ControlLeft: 'CTRL', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ControlRight: 'CTRL', ArrowLeft: '◄', ArrowDown: '▼', ArrowRight: '►',
};

const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', '<main class="main"><h1 class="h1">Virtual Keyboard</h1><div class="keyboard"></div></main>');
const keyboard = document.querySelector('.keyboard');

Object.keys(ButtonsRus).forEach((key) => {
  const div = document.createElement('div');
  div.innerHTML = ButtonsRus[key];
  keyboard.append(div);
  div.classList.add(key);
  div.classList.add('keyboard__key');
  if (key === 'Backspace' || key === 'CapsLock' || key === 'Enter') {
    div.classList.add('keyboard__key_2din');
  }
  if (key === 'ShiftLeft') {
    div.classList.add('keyboard__key_2_5din');
  }
  if (key === 'Tab' || key === 'ShiftRight' || key === 'ControlLeft' || key === 'MetaLeft' || key === 'ControlRight') {
    div.classList.add('keyboard__key_1_5din');
  }
  if (key === 'Space') {
    div.classList.add('keyboard__key_space');
  }
});
