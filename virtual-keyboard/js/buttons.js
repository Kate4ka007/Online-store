import langIcon from '../assets/icons/langIcon';

const buttons = [
  {
    type: 'other',
    content: { ru: 'ё', en: '`' },
    altContent: { ru: 'ё', en: '~' },
    code: 'Backquote',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '1', en: '1' },
    altContent: { ru: '!', en: '!' },
    code: 'Digit1',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '2', en: '2' },
    altContent: { ru: '"', en: '@' },
    code: 'Digit2',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '3', en: '3' },
    altContent: { ru: '№', en: '#' },
    code: 'Digit3',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '4', en: '4' },
    altContent: { ru: ';', en: '$' },
    code: 'Digit4',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '5', en: '5' },
    altContent: { ru: '%', en: '%' },
    code: 'Digit5',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '6', en: '6' },
    altContent: { ru: ':', en: '^' },
    code: 'Digit6',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '7', en: '7' },
    altContent: { ru: '?', en: '&' },
    code: 'Digit7',
    width: 'normal',
    row: 1,
  },
  {
    type: 'digits',
    content: { ru: '8', en: '8' },
    altContent: { ru: '*', en: '*' },
    code: 'Digit8',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '9', en: '9' },
    altContent: { ru: '(', en: '(' },
    code: 'Digit9',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '0', en: '0' },
    altContent: { ru: ')', en: ')' },
    code: 'Digit0',
    width: 'normal',
    row: 2,
  },
  {
    type: 'other',
    content: { ru: '-', en: '-' },
    altContent: { ru: '_', en: '_' },
    code: 'Minus',
    width: 'normal',
    row: 2,
  },
  {
    type: 'other',
    content: { ru: '=', en: '=' },
    altContent: { ru: '+', en: '+' },
    code: 'Equal',
    width: 'normal',
    row: 2,
  },
  {
    type: 'functional',
    content: { ru: 'DEL', en: 'DEL' },
    altContent: { ru: 'DEL', en: 'DEL' },
    code: 'Delete',
    width: 'medium',
    row: 3,
  },
  {
    type: 'functional',
    content: { ru: 'Tab', en: 'Tab' },
    altContent: { ru: 'Tab', en: 'Tab' },
    code: 'Tab',
    width: 'medium',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'й', en: 'q' },
    altContent: { ru: 'й', en: 'q' },
    code: 'KeyQ',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'ц', en: 'w' },
    altContent: { ru: 'ц', en: 'w' },
    code: 'KeyW',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'у', en: 'e' },
    altContent: { ru: 'у', en: 'e' },
    code: 'KeyE',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'к', en: 'r' },
    altContent: { ru: 'к', en: 'r' },
    code: 'KeyR',
    width: 'normal',
    row: 2,
  },
  {
    type: 'letter',
    content: { ru: 'е', en: 't' },
    altContent: { ru: 'е', en: 't' },
    code: 'KeyT',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'н', en: 'y' },
    altContent: { ru: 'н', en: 'y' },
    code: 'KeyY',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'г', en: 'u' },
    altContent: { ru: 'г', en: 'u' },
    code: 'KeyU',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'ш', en: 'i' },
    altContent: { ru: 'ш', en: 'i' },
    code: 'KeyI',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'щ', en: 'o' },
    altContent: { ru: 'щ', en: 'o' },
    code: 'KeyO',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'з', en: 'p' },
    altContent: { ru: 'з', en: 'p' },
    code: 'KeyP',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: 'х', en: '[' },
    altContent: { ru: 'х', en: '{' },
    code: 'BracketLeft',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: 'ъ', en: ']' },
    altContent: { ru: 'ъ', en: '}' },
    code: 'BracketRight',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: '\\', en: '\\' },
    altContent: { ru: '/', en: '|' },
    code: 'Backslash',
    width: 'normal',
    row: 3,
  },
  {
    type: 'functional',
    content: { ru: 'Caps Lock', en: 'Caps Lock' },
    altContent: { ru: 'Caps Lock', en: 'Caps Lock' },
    code: 'CapsLock',
    width: 'wide',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ф', en: 'a' },
    altContent: { ru: 'ф', en: 'a' },
    code: 'KeyA',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ы', en: 's' },
    altContent: { ru: 'ы', en: 's' },
    code: 'KeyS',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'в', en: 'd' },
    altContent: { ru: 'в', en: 'd' },
    code: 'KeyD',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'а', en: 'f' },
    altContent: { ru: 'а', en: 'f' },
    code: 'KeyF',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'п', en: 'g' },
    altContent: { ru: 'п', en: 'g' },
    code: 'KeyG',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'р', en: 'h' },
    altContent: { ru: 'р', en: 'h' },
    code: 'KeyH',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'о', en: 'j' },
    altContent: { ru: 'о', en: 'j' },
    code: 'KeyJ',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'л', en: 'k' },
    altContent: { ru: 'л', en: 'k' },
    code: 'KeyK',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'д', en: 'l' },
    altContent: { ru: 'д', en: 'l' },
    code: 'KeyL',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ж', en: ';' },
    altContent: { ru: 'ж', en: ':' },
    code: 'Semicolon',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'э', en: '\'' },
    altContent: { ru: 'э', en: '"' },
    code: 'Quote',
    width: 'normal',
    row: 4,
  },
  {
    type: 'functional',
    content: { ru: 'ENTER', en: 'ENTER' },
    altContent: { ru: 'ENTER', en: 'ENTER' },
    code: 'Enter',
    width: 'wideplus',
    row: 4,
  },
  {
    type: 'functional',
    content: { ru: 'Shift', en: 'Shift' },
    altContent: { ru: 'Shift', en: 'Shift' },
    code: 'ShiftLeft',
    width: 'wideplus',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'я', en: 'z' },
    altContent: { ru: 'я', en: 'z' },
    code: 'KeyZ',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ч', en: 'x' },
    altContent: { ru: 'ч', en: 'x' },
    code: 'KeyX',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'с', en: 'c' },
    altContent: { ru: 'с', en: 'c' },
    code: 'KeyC',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'м', en: 'v' },
    altContent: { ru: 'м', en: 'v' },
    code: 'KeyV',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'и', en: 'b' },
    altContent: { ru: 'и', en: 'b' },
    code: 'KeyB',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'т', en: 'n' },
    altContent: { ru: 'т', en: 'n' },
    code: 'KeyN',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ь', en: 'm' },
    altContent: { ru: 'ь', en: 'm' },
    code: 'KeyM',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'б', en: ',' },
    altContent: { ru: 'б', en: '<' },
    code: 'Comma',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ю', en: '.' },
    altContent: { ru: 'ю', en: '>' },
    code: 'Period',
    width: 'normal',
    row: 5,
  },
  {
    type: 'other',
    content: { ru: '.', en: '/' },
    altContent: { ru: ',', en: '?' },
    code: 'Slash',
    width: 'normal',
    row: 5,
  },
  {
    type: 'functional',
    content: { ru: 'Shift', en: 'Shift' },
    altContent: { ru: 'Shift', en: 'Shift' },
    code: 'ShiftRight',
    width: 'normal',
    row: 5,
  },
  {
    type: 'functional',
    content: { ru: 'Ctrl', en: 'Ctrl' },
    altContent: { ru: 'Ctrl', en: 'Ctrl' },
    code: 'ControlLeft',
    width: 'medium',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: `${langIcon}RU`, en: `${langIcon}EN` },
    altContent: { ru: `${langIcon}RU`, en: `${langIcon}EN` },
    code: 'MetaLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Alt', en: 'Alt' },
    altContent: { ru: 'Alt', en: 'Alt' },
    code: 'AltLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '&nbsp;', en: '&nbsp;' },
    altContent: { ru: '&nbsp;', en: '&nbsp;' },
    code: 'Space',
    width: 'overwide',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Alt', en: 'Alt' },
    altContent: { ru: 'Alt', en: 'Alt' },
    code: 'AltRight',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Ctrl', en: 'Ctrl' },
    altContent: { ru: 'Ctrl', en: 'Ctrl' },
    code: 'ControlRight',
    width: 'medium',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '◄', en: '◄' },
    altContent: { ru: '◄', en: '◄' },
    code: 'ArrowLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '▲', en: '▲' },
    altContent: { ru: '▲', en: '▲' },
    code: 'ArrowUp',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '▼', en: '▼' },
    altContent: { ru: '▼', en: '▼' },
    code: 'ArrowDown',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '►', en: '►' },
    altContent: { ru: '►', en: '►' },
    code: 'ArrowRight',
    width: 'normal',
    row: 6,
  },
];

export default buttons;
