const ButtonsRus = {
  Backquote: 'ё', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'BACKSPACE', Tab: 'TAB', KeyQ: 'й', KeyW: 'ц', KeyE: 'у', KeyR: 'к', KeyT: 'е', KeyY: 'н', KeyU: 'г', KeyI: 'ш', KeyO: 'щ', KeyP: 'з', BracketLeft: 'х', BracketRight: 'ъ', Backslash: '\\', CapsLock: 'CAPSLOCK', KeyA: 'ф', KeyS: 'ы', KeyD: 'в', KeyF: 'а', KeyG: 'п', KeyH: 'р', KeyJ: 'о', KeyK: 'л', KeyL: 'д', Semicolon: 'ж', Quote: 'э', Enter: 'ENTER', ShiftLeft: 'SHIFT', KeyZ: 'я', KeyX: 'ч', KeyC: 'с', KeyV: 'м', KeyB: 'и', KeyN: 'т', KeyM: 'ь', Comma: 'б', Period: 'ю', Slash: '.', ArrowUp: '▲', ShiftRight: 'SHIFT', ControlLeft: 'CTRL', MetaLeft: 'WIN', AltLeft: 'ALT', Space: ' ', AltRight: 'ALT', ControlRight: 'CTRL', ArrowLeft: '◄', ArrowDown: '▼', ArrowRight: '►',
};
const ButtonsEng = {
  Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: 'BACKSPACE', Tab: 'TAB', KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't', KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p', BracketLeft: '[', BracketRight: ']', Backslash: '\\', CapsLock: 'CAPSLOCK', KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g', KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l', Semicolon: ';', Quote: "'", Enter: 'ENTER', ShiftLeft: 'SHIFT', KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b', KeyN: 'n', KeyM: 'm', Comma: ',', Period: '.', Slash: '/', ArrowUp: '▲', ShiftRight: 'SHIFT', ControlLeft: 'CTRL', MetaLeft: 'WIN', AltLeft: 'ALT', Space: ' ', AltRight: 'ALT', ControlRight: 'CTRL', ArrowLeft: '◄', ArrowDown: '▼', ArrowRight: '►',
};

let caps = false;
let lang = 'rus';
let textareaPosition;

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', '<main class="main"><div class="wrapper"><h1 class="h1">Virtual Keyboard</h1><textarea class="textarea"></textarea><div class="keyboard"></div></div></main>');

const textarea = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');

function initKeyBoard(key) {
  const div = document.createElement('div');
  if (lang === 'rus') {
    if (caps === true) {
      div.innerHTML = ButtonsRus[key].toUpperCase();
    } else {
      div.innerHTML = ButtonsRus[key];
    }
  } else if (caps === true) {
    div.innerHTML = ButtonsEng[key].toUpperCase();
  } else {
    div.innerHTML = ButtonsEng[key];
  }
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
}

function languageСhange() {
  document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey) {
      if (lang === 'rus') {
        lang = 'eng';
      } else {
        lang = 'rus';
      }
      keyboard.innerHTML = '';
      Object.keys(ButtonsRus).forEach((key) => {
        initKeyBoard(key);
      });
    }
  });
}

function capsСhange() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      if (caps === false) {
        caps = true;
      } else {
        caps = false;
      }
      keyboard.innerHTML = '';
      Object.keys(ButtonsRus).forEach((key) => {
        initKeyBoard(key);
      });
    }
  });
  keyboard.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      if (event.target.textContent === 'CAPSLOCK') {
        if (caps === false) {
          caps = true;
        } else {
          caps = false;
        }
      }
    }
    keyboard.innerHTML = '';
    Object.keys(ButtonsRus).forEach((key) => {
      initKeyBoard(key);
    });
  });
}

function backspaceFunc() {
  if (textareaPosition <= 0) {
    textareaPosition = textarea.selectionStart;
  }
  let txtemp = textarea.value;
  txtemp = txtemp.slice(0, textareaPosition - 1) + txtemp.slice(textareaPosition, txtemp.length);
  textarea.value = txtemp;
  console.log(textareaPosition);
  textareaPosition -= 1;
}

function enterFunc() {
  textarea.value += '\n';
}

capsСhange();
languageСhange();

Object.keys(ButtonsRus).forEach((key) => {
  initKeyBoard(key);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (lang === 'rus') {
    if (caps === false) {
      Object.keys(ButtonsRus).forEach((key) => {
        if (event.code === key) {
          if (event.code === 'Backspace') {
            backspaceFunc();
          }
          if (event.code === 'Enter') {
            enterFunc();
          }
          if (!(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey || event.code === 'CapsLock' || event.code === 'Backspace' || event.code === 'Enter')) {
            textarea.value += ButtonsRus[`${key}`];
          }
        }
      });
    }
    if (caps === true) {
      Object.keys(ButtonsRus).forEach((key) => {
        if (event.code === key) {
          if (event.code === 'Backspace') {
            backspaceFunc();
          }
          if (event.code === 'Enter') {
            enterFunc();
          }
          if (!(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey || event.code === 'CapsLock' || event.code === 'Backspace' || event.code === 'Enter')) {
            textarea.value += ButtonsRus[`${key}`].toUpperCase();
          }
        }
      });
    }
  }
  if (lang === 'eng') {
    if (caps === false) {
      Object.keys(ButtonsEng).forEach((key) => {
        if (event.code === key) {
          if (event.code === 'Backspace') {
            backspaceFunc();
          }
          if (event.code === 'Enter') {
            enterFunc();
          }
          if (!(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey || event.code === 'CapsLock' || event.code === 'Backspace' || event.code === 'Enter')) {
            textarea.value += ButtonsEng[`${key}`];
          }
        }
      });
    }
    if (caps === true) {
      Object.keys(ButtonsEng).forEach((key) => {
        if (event.code === key) {
          if (event.code === 'Backspace') {
            backspaceFunc();
          }
          if (event.code === 'Enter') {
            enterFunc();
          }
          if (!(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey || event.code === 'CapsLock' || event.code === 'Backspace' || event.code === 'Enter')) {
            textarea.value += ButtonsEng[`${key}`].toUpperCase();
          }
        }
      });
    }
  }
});

document.addEventListener('click', () => {
  textareaPosition = textarea.selectionStart;
});

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('keyboard__key')) {
    console.log(event.target);
    if (!(event.target.textContent === 'SHIFT' || event.target.textContent === 'ALT' || event.target.textContent === 'CTRL' || event.target.textContent === 'TAB' || event.target.textContent === 'CAPSLOCK' || event.target.textContent === 'BACKSPACE' || event.target.textContent === 'WIN' || event.target.textContent === 'ENTER')) {
      textarea.value += event.target.textContent;
      textareaPosition = textarea.selectionStart;
    }
    if (event.target.textContent === 'BACKSPACE') {
      backspaceFunc();
    }
    if (event.target.textContent === 'ENTER') {
      enterFunc();
    }
  }
});
