import { localConfig, globalState, switchSettingDrawerVisible, isMacOS } from '@/logic'

const keydownTaskMap = new Map()

export const addKeydownTask = (key: string, task: (e: KeyboardEvent) => void) => {
  keydownTaskMap.set(key, task)
}

export const removeKeydownTask = (key: string) => {
  keydownTaskMap.delete(key)
}

export const startKeydown = () => {
  document.onkeydown = (e: KeyboardEvent) => {
    // 在'搜索框'、'备忘录'、'设置抽屉'内时忽略按键事件
    if (globalState.isSettingDrawerVisible || globalState.isSearchFocused || globalState.isMemoFocused) {
      if (e.key === 'Escape') {
        switchSettingDrawerVisible(false)
      }
      return
    }
    for (const task of keydownTaskMap.values()) {
      task(e)
    }
  }
}

export const stopKeydown = () => {
  document.onkeydown = null
}

export const KEYCAP_TYPE_OPTION = [
  { label: 'FLAT', value: 'flat' },
  { label: 'GMK', value: 'gmk' },
  { label: 'DSA', value: 'dsa' },
]

export const KEYCAP_PREINSTALL_OPTION = [
  { label: 'Granite', value: 'granite' },
  { label: 'Dark', value: 'dark' },
  { label: 'Bentō', value: 'bento' },
  { label: 'Olivia', value: 'olivia' },
  { label: 'Oblivion', value: 'oblivion' },
  { label: 'Oblivion W', value: 'oblivionW' },
  { label: 'Classic Olivetti', value: 'classicOlivetti' },
  { label: 'Shiko', value: 'shiko' },
  { label: 'HHKB', value: 'hhkb' },
  { label: 'Honeywell', value: 'honeywell' },
  { label: 'Hana', value: 'hana' },
  { label: 'RF 10th', value: 'rf10th' },
  { label: 'Raindrop', value: 'raindrop' },
  { label: 'Carbon', value: 'carbon' },
  { label: 'Hyperfuse', value: 'hyperfuse' },
  { label: 'Jukebox', value: 'jukebox' },
  { label: 'Valentine', value: 'valentine' },
  { label: 'EVA01', value: 'eva01' },
  { label: 'Pulse', value: 'pulse' },
  { label: 'RoyalNavy', value: 'royalNavy' },
  { label: 'Dolch', value: 'dolch' },
  { label: 'Lime', value: 'lime' },
  { label: 'Eve', value: 'eve' },
  { label: 'Godspeed', value: 'godspeed' },
  { label: 'Jamón', value: 'jamon' },
  { label: 'White on Black', value: 'whiteOnBlack' },
  { label: 'βeta', value: 'beta' },
  { label: 'DMG', value: 'dmg' },
  { label: 'Symbiosis', value: 'symbiosis' },
  { label: 'Posh Blue', value: 'poshBlue' },
  { label: 'Posh Pink', value: 'poshPink' },
  { label: 'Pitta', value: 'pitta' },
]

export const KEYCAP_PREINSTALL_MAP = {
  hana: {
    mainFontColor: 'rgba(165, 152, 197, 1)',
    mainBackgroundColor: 'rgba(239, 239, 234, 1)',
    emphasisOneFontColor: 'rgba(239, 239, 234, 1)',
    emphasisOneBackgroundColor: 'rgba(165, 152, 197, 1)',
    emphasisTwoFontColor: 'rgba(239, 239, 234, 1)',
    emphasisTwoBackgroundColor: 'rgba(165, 152, 197, 1)',
  },
  hhkb: {
    mainFontColor: 'rgba(34, 34, 34, 1)',
    mainBackgroundColor: 'rgba(234, 230, 231, 1)',
    emphasisOneFontColor: 'rgba(34, 34, 34, 1)',
    emphasisOneBackgroundColor: 'rgba(203, 205, 218, 1)',
    emphasisTwoFontColor: 'rgba(34, 34, 34, 1)',
    emphasisTwoBackgroundColor: 'rgba(203, 205, 218, 1)',
  },
  rf10th: {
    mainFontColor: 'rgba(34, 34, 34, 1)',
    mainBackgroundColor: 'rgba(152, 151, 147, 1)',
    emphasisOneFontColor: 'rgba(34, 34, 34, 1)',
    emphasisOneBackgroundColor: 'rgba(102, 136, 170, 1)',
    emphasisTwoFontColor: 'rgba(34, 34, 34, 1)',
    emphasisTwoBackgroundColor: 'rgba(102, 136, 170, 1)',
  },
  raindrop: {
    mainFontColor: 'rgba(0,115,162,1.0)',
    mainBackgroundColor: 'rgba(229,228,223,1.0)',
    emphasisOneFontColor: 'rgba(229,228,223,1.0)',
    emphasisOneBackgroundColor: 'rgba(0,115,162,1.0)',
    emphasisTwoFontColor: 'rgba(229,228,223,1.0)',
    emphasisTwoBackgroundColor: 'rgba(0,115,162,1.0)',
  },
  carbon: {
    mainFontColor: 'rgba(87,93,94,1.0)',
    mainBackgroundColor: 'rgba(227,217,198,1.0)',
    emphasisOneFontColor: 'rgba(237,107,33,1.0)',
    emphasisOneBackgroundColor: 'rgba(87,93,94,1.0)',
    emphasisTwoFontColor: 'rgba(87,93,94,1.0)',
    emphasisTwoBackgroundColor: 'rgba(237,107,33,1.0)',
  },
  honeywell: {
    mainFontColor: 'rgba(33,34,36,1.0)',
    mainBackgroundColor: 'rgba(239,239,234,1.0)',
    emphasisOneFontColor: 'rgba(239,239,234,1.0)',
    emphasisOneBackgroundColor: 'rgba(87,87,87,1.0)',
    emphasisTwoFontColor: 'rgba(239,239,234,1.0)',
    emphasisTwoBackgroundColor: 'rgba(176,28,17,1.0)',
  },
  hyperfuse: {
    mainFontColor: 'rgba(108,56,123,1.0)',
    mainBackgroundColor: 'rgba(196,196,192,1.0)',
    emphasisOneFontColor: 'rgba(93,206,186,1.0)',
    emphasisOneBackgroundColor: 'rgba(99,105,106,1.0)',
    emphasisTwoFontColor: 'rgba(93,206,186,1.0)',
    emphasisTwoBackgroundColor: 'rgba(99,105,106,1.0)',
  },
  granite: {
    mainFontColor: 'rgba(82,85,84,1.0)',
    mainBackgroundColor: 'rgba(230,232,227,1.0)',
    emphasisOneFontColor: 'rgba(34,34,34,1.0)',
    emphasisOneBackgroundColor: 'rgba(160,164,167,1.0)',
    emphasisTwoFontColor: 'rgba(34,34,34,1.0)',
    emphasisTwoBackgroundColor: 'rgba(160,164,167,1.0)',
  },
  jukebox: {
    mainFontColor: 'rgba(165,27,27,1.0)',
    mainBackgroundColor: 'rgba(217,201,171,1.0)',
    emphasisOneFontColor: 'rgba(165,27,27,1.0)',
    emphasisOneBackgroundColor: 'rgba(105,208,165,1.0)',
    emphasisTwoFontColor: 'rgba(217,201,171,1.0)',
    emphasisTwoBackgroundColor: 'rgba(165,27,27,1.0)',
  },
  valentine: {
    mainFontColor: 'rgba(220,144,188,1.0)',
    mainBackgroundColor: 'rgba(239,239,234,1.0)',
    emphasisOneFontColor: 'rgba(239,239,234,1.0)',
    emphasisOneBackgroundColor: 'rgba(220,144,188,1.0)',
    emphasisTwoFontColor: 'rgba(239,239,234,1.0)',
    emphasisTwoBackgroundColor: 'rgba(220,144,188,1.0)',
  },
  eva01: {
    mainFontColor: 'rgba(147,194,71,1.0)',
    mainBackgroundColor: 'rgba(89,34,84,1.0)',
    emphasisOneFontColor: 'rgba(89,34,84,1.0)',
    emphasisOneBackgroundColor: 'rgba(147,194,71,1.0)',
    emphasisTwoFontColor: 'rgba(89,34,84,1.0)',
    emphasisTwoBackgroundColor: 'rgba(147,194,71,1.0)',
  },
  pulse: {
    mainFontColor: 'rgba(0,166,180,1.0)',
    mainBackgroundColor: 'rgba(33,34,36,1.0)',
    emphasisOneFontColor: 'rgba(33,34,36,1.0)',
    emphasisOneBackgroundColor: 'rgba(0,166,180,1.0)',
    emphasisTwoFontColor: 'rgba(33,34,36,1.0)',
    emphasisTwoBackgroundColor: 'rgba(0,166,180,1.0)',
  },
  royalNavy: {
    mainFontColor: 'rgba(47,61,111,1.0)',
    mainBackgroundColor: 'rgba(240,240,240,1.0)',
    emphasisOneFontColor: 'rgba(240,240,240,1.0)',
    emphasisOneBackgroundColor: 'rgba(47,61,111,1.0)',
    emphasisTwoFontColor: 'rgba(240,240,240,1.0)',
    emphasisTwoBackgroundColor: 'rgba(169,47,13,1.0)',
  },
  dolch: {
    mainFontColor: 'rgba(228,222,221,1.0)',
    mainBackgroundColor: 'rgba(95,92,82,1.0)',
    emphasisOneFontColor: 'rgba(228,222,221,1.0)',
    emphasisOneBackgroundColor: 'rgba(51,52,48,1.0)',
    emphasisTwoFontColor: 'rgba(228,222,221,1.0)',
    emphasisTwoBackgroundColor: 'rgba(0,164,169,1.0)',
  },
  dark: {
    mainFontColor: 'rgba(228,222,221,1.0)',
    mainBackgroundColor: 'rgba(95,92,82,1.0)',
    emphasisOneFontColor: 'rgba(228,222,221,1.0)',
    emphasisOneBackgroundColor: 'rgba(51,52,48,1.0)',
    emphasisTwoFontColor: 'rgba(228,222,221,1.0)',
    emphasisTwoBackgroundColor: 'rgba(51,52,48,1.0)',
  },
  classicOlivetti: {
    mainFontColor: 'rgba(9,101,237,1.0)',
    mainBackgroundColor: 'rgba(245,245,245,1.0)',
    emphasisOneFontColor: 'rgba(9,101,237,1.0)',
    emphasisOneBackgroundColor: 'rgba(207,205,194,1.0)',
    emphasisTwoFontColor: 'rgba(245,245,245,1.0)',
    emphasisTwoBackgroundColor: 'rgba(9,101,237,1.0)',
  },
  lime: {
    mainFontColor: 'rgba(147,194,71,1.0)',
    mainBackgroundColor: 'rgba(229,228,223,1.0)',
    emphasisOneFontColor: 'rgba(229,228,223,1.0)',
    emphasisOneBackgroundColor: 'rgba(124,135,142,1.0)',
    emphasisTwoFontColor: 'rgba(229,228,223,1.0)',
    emphasisTwoBackgroundColor: 'rgba(147,194,71,1.0)',
  },
  eve: {
    mainFontColor: 'rgba(51,51,51,1.0)',
    mainBackgroundColor: 'rgba(212,208,199,1.0)',
    emphasisOneFontColor: 'rgba(39,133,219,1.0)',
    emphasisOneBackgroundColor: 'rgba(51,51,51,1.0)',
    emphasisTwoFontColor: 'rgba(212,208,199,1.0)',
    emphasisTwoBackgroundColor: 'rgba(39,133,219,1.0)',
  },
  godspeed: {
    mainFontColor: 'rgba(102,102,102,1.0)',
    mainBackgroundColor: 'rgba(211,205,193,1.0)',
    emphasisOneFontColor: 'rgba(211,205,193,1.0)',
    emphasisOneBackgroundColor: 'rgba(106,148,177,1.0)',
    emphasisTwoFontColor: 'rgba(102,102,102,1.0)',
    emphasisTwoBackgroundColor: 'rgba(249,235,116,1.0)',
  },
  bento: {
    mainFontColor: 'rgba(72,121,146,1.0)',
    mainBackgroundColor: 'rgba(255,244,240,1.0)',
    emphasisOneFontColor: 'rgba(248,118,126,1.0)',
    emphasisOneBackgroundColor: 'rgba(72,121,146,1.0)',
    emphasisTwoFontColor: 'rgba(255,244,240,1.0)',
    emphasisTwoBackgroundColor: 'rgba(248,118,126,1.0)',
  },
  jamon: {
    mainFontColor: 'rgba(242,235,215,1.0)',
    mainBackgroundColor: 'rgba(140,48,58,1.0)',
    emphasisOneFontColor: 'rgba(242,235,215,1.0)',
    emphasisOneBackgroundColor: 'rgba(178,52,60,1.0)',
    emphasisTwoFontColor: 'rgba(66,68,70,1.0)',
    emphasisTwoBackgroundColor: 'rgba(242,235,215,1.0)',
  },
  whiteOnBlack: {
    mainFontColor: 'rgba(239,239,234,1.0)',
    mainBackgroundColor: 'rgba(34,34,34,1.0)',
    emphasisOneFontColor: 'rgba(239,239,234,1.0)',
    emphasisOneBackgroundColor: 'rgba(34,34,34,1.0)',
    emphasisTwoFontColor: 'rgba(239,239,234,1.0)',
    emphasisTwoBackgroundColor: 'rgba(34,34,34,1.0)',
  },
  beta: {
    mainFontColor: 'rgba(51,51,51,1.0)',
    mainBackgroundColor: 'rgba(220,214,196,1.0)',
    emphasisOneFontColor: 'rgba(51,51,51,1.0)',
    emphasisOneBackgroundColor: 'rgba(114,116,115,1.0)',
    emphasisTwoFontColor: 'rgba(51,51,51,1.0)',
    emphasisTwoBackgroundColor: 'rgba(221,118,50,1.0)',
  },
  dmg: {
    mainFontColor: 'rgba(29,23,112,1.0)',
    mainBackgroundColor: 'rgba(209,205,202,1.0)',
    emphasisOneFontColor: 'rgba(29,23,112,1.0)',
    emphasisOneBackgroundColor: 'rgba(127,131,137,1.0)',
    emphasisTwoFontColor: 'rgba(209,205,202,1.0)',
    emphasisTwoBackgroundColor: 'rgba(114,33,88,1.0)',
  },
  shiko: {
    mainFontColor: 'rgba(122,153,172,1.0)',
    mainBackgroundColor: 'rgba(221,229,237,1.0)',
    emphasisOneFontColor: 'rgba(221,229,237,1.0)',
    emphasisOneBackgroundColor: 'rgba(122,153,172,1.0)',
    emphasisTwoFontColor: 'rgba(221,229,237,1.0)',
    emphasisTwoBackgroundColor: 'rgba(161,209,238,1.0)',
  },
  olivia: {
    mainFontColor: 'rgba(34,34,34,1.0)',
    mainBackgroundColor: 'rgba(225,219,209,1.0)',
    emphasisOneFontColor: 'rgba(224,177,159,1.0)',
    emphasisOneBackgroundColor: 'rgba(55,54,52,1.0)',
    emphasisTwoFontColor: 'rgba(34,34,34,1.0)',
    emphasisTwoBackgroundColor: 'rgba(224,177,159,1.0)',
  },
  oblivion: {
    mainFontColor: 'rgba(222,222,202,1.0)',
    mainBackgroundColor: 'rgba(107,114,115,1.0)',
    emphasisOneFontColor: 'rgba(222,222,202,1.0)',
    emphasisOneBackgroundColor: 'rgba(71,73,70,1.0)',
    emphasisTwoFontColor: 'rgba(222,222,202,1.0)',
    emphasisTwoBackgroundColor: 'rgba(41,127,169,1.0)',
  },
  oblivionW: {
    mainFontColor: 'rgba(71,73,70,1.0)',
    mainBackgroundColor: 'rgba(231,232,229,1.0)',
    emphasisOneFontColor: 'rgba(222,222,202,1.0)',
    emphasisOneBackgroundColor: 'rgba(71,73,70,1.0)',
    emphasisTwoFontColor: 'rgba(222,222,202,1.0)',
    emphasisTwoBackgroundColor: 'rgba(41,127,169,1.0)',
  },
  symbiosis: {
    mainFontColor: 'rgba(229,228,223,1.0)',
    mainBackgroundColor: 'rgba(116,123,123,1.0)',
    emphasisOneFontColor: 'rgba(229,228,223,1.0)',
    emphasisOneBackgroundColor: 'rgba(0,115,162,1.0)',
    emphasisTwoFontColor: 'rgba(0,115,162,1.0)',
    emphasisTwoBackgroundColor: 'rgba(255,172,0,1.0)',
  },
  poshBlue: {
    mainFontColor: 'rgba(34,45,90,1.0)',
    mainBackgroundColor: 'rgba(225,219,209,1.0)',
    emphasisOneFontColor: 'rgba(216,160,166,1.0)',
    emphasisOneBackgroundColor: 'rgba(34,45,90,1.0)',
    emphasisTwoFontColor: 'rgba(34,45,90,1.0)',
    emphasisTwoBackgroundColor: 'rgba(216,160,166,1.0)',
  },
  poshPink: {
    mainFontColor: 'rgba(34,45,90,1.0)',
    mainBackgroundColor: 'rgba(225,219,209,1.0)',
    emphasisOneFontColor: 'rgba(34,45,90,1.0)',
    emphasisOneBackgroundColor: 'rgba(216,160,166,1.0)',
    emphasisTwoFontColor: 'rgba(216,160,166,1.0)',
    emphasisTwoBackgroundColor: 'rgba(34,45,90,1.0)',
  },
  pitta: {
    mainFontColor: 'rgba(51,51,51,1.0)',
    mainBackgroundColor: 'rgba(238,230,211,1.0)',
    emphasisOneFontColor: 'rgba(51,51,51,1.0)',
    emphasisOneBackgroundColor: 'rgba(204,192,166,1.0)',
    emphasisTwoFontColor: 'rgba(51,51,51,1.0)',
    emphasisTwoBackgroundColor: 'rgba(60,220,198,1.0)',
  },
}

export const KEYBOARD_CODE_TO_DEFAULT_CONFIG = {
  // 0
  Escape: { label: 'Esc', textAlign: 'left', size: 1 },
  F1: { label: 'F1', textAlign: 'center', size: 1 },
  F2: { label: 'F2', textAlign: 'center', size: 1 },
  F3: { label: 'F3', textAlign: 'center', size: 1 },
  F4: { label: 'F4', textAlign: 'center', size: 1 },
  F5: { label: 'F5', textAlign: 'center', size: 1 },
  F6: { label: 'F6', textAlign: 'center', size: 1 },
  F7: { label: 'F7', textAlign: 'center', size: 1 },
  F8: { label: 'F8', textAlign: 'center', size: 1 },
  F9: { label: 'F9', textAlign: 'center', size: 1 },
  F10: { label: 'F10', textAlign: 'center', size: 1 },
  F11: { label: 'F11', textAlign: 'center', size: 1 },
  F12: { label: 'F12', textAlign: 'center', size: 1 },
  F13: { label: 'F13', textAlign: 'center', size: 1 },
  F14: { label: 'F14', textAlign: 'center', size: 1 },
  F15: { label: 'F15', textAlign: 'center', size: 1 },
  // 1
  Backquote: { label: '` ~', textAlign: 'center', size: 1 },
  Digit1: { label: '1', textAlign: 'center', size: 1 },
  Digit2: { label: '2', textAlign: 'center', size: 1 },
  Digit3: { label: '3', textAlign: 'center', size: 1 },
  Digit4: { label: '4', textAlign: 'center', size: 1 },
  Digit5: { label: '5', textAlign: 'center', size: 1 },
  Digit6: { label: '6', textAlign: 'center', size: 1 },
  Digit7: { label: '7', textAlign: 'center', size: 1 },
  Digit8: { label: '8', textAlign: 'center', size: 1 },
  Digit9: { label: '9', textAlign: 'center', size: 1 },
  Digit0: { label: '0', textAlign: 'center', size: 1 },
  Minus: { label: '-', textAlign: 'center', size: 1 },
  Equal: { label: '+', textAlign: 'center', size: 1 },
  Backspace: { label: '⌫', textAlign: 'right', size: 2 },
  // 2
  Tab: { label: '⇥', textAlign: 'left', size: 1.5 },
  KeyQ: { label: 'Q', textAlign: 'center', size: 1 },
  KeyW: { label: 'W', textAlign: 'center', size: 1 },
  KeyE: { label: 'E', textAlign: 'center', size: 1 },
  KeyR: { label: 'R', textAlign: 'center', size: 1 },
  KeyT: { label: 'T', textAlign: 'center', size: 1 },
  KeyY: { label: 'Y', textAlign: 'center', size: 1 },
  KeyU: { label: 'U', textAlign: 'center', size: 1 },
  KeyI: { label: 'I', textAlign: 'center', size: 1 },
  KeyO: { label: 'O', textAlign: 'center', size: 1 },
  KeyP: { label: 'P', textAlign: 'center', size: 1 },
  BracketLeft: { label: '{ [', textAlign: 'center', size: 1 },
  BracketRight: { label: '] }', textAlign: 'center', size: 1 },
  Backslash: { label: '| \\', textAlign: 'center', size: 1.5 },
  // 3
  CapsLock: { label: 'Caps', textAlign: 'left', size: 1.75 },
  KeyA: { label: 'A', textAlign: 'center', size: 1 },
  KeyS: { label: 'S', textAlign: 'center', size: 1 },
  KeyD: { label: 'D', textAlign: 'center', size: 1 },
  KeyF: { label: 'F', textAlign: 'center', size: 1 },
  KeyG: { label: 'G', textAlign: 'center', size: 1 },
  KeyH: { label: 'H', textAlign: 'center', size: 1 },
  KeyJ: { label: 'J', textAlign: 'center', size: 1 },
  KeyK: { label: 'K', textAlign: 'center', size: 1 },
  KeyL: { label: 'L', textAlign: 'center', size: 1 },
  Semicolon: { label: ': ;', textAlign: 'center', size: 1 },
  Quote: { label: '" \'', textAlign: 'center', size: 1 },
  Enter: { label: '⏎', textAlign: 'right', size: 2.25 },
  // 4
  ShiftLeft: { label: '⇧', alias: 'LShift', textAlign: 'left', size: 2.25 },
  KeyZ: { label: 'Z', textAlign: 'center', size: 1 },
  KeyX: { label: 'X', textAlign: 'center', size: 1 },
  KeyC: { label: 'C', textAlign: 'center', size: 1 },
  KeyV: { label: 'V', textAlign: 'center', size: 1 },
  KeyB: { label: 'B', textAlign: 'center', size: 1 },
  KeyN: { label: 'N', textAlign: 'center', size: 1 },
  KeyM: { label: 'M', textAlign: 'center', size: 1 },
  Comma: { label: '< ,', textAlign: 'center', size: 1 },
  Period: { label: '> .', textAlign: 'center', size: 1 },
  Slash: { label: '? /', textAlign: 'center', size: 1 },
  ShiftRight: { label: '⇧', alias: 'RShift', textAlign: 'right', size: 2.75 },
  // 5
  ControlLeft: { label: isMacOS() ? '⌃' : 'Ctrl', alias: 'LCtrl', textAlign: 'left', size: 1.25 },
  MetaLeft: { label: isMacOS() ? '⌘' : 'Meta', alias: 'LMeta', textAlign: 'left', size: 1.25 },
  AltLeft: { label: isMacOS() ? '⌥' : 'Alt', alias: 'LAlt', textAlign: 'left', size: 1.25 },
  Space: { label: '', textAlign: 'center', size: 6.25 },
  AltRight: { label: isMacOS() ? '⌥' : 'Alt', alias: 'RAlt', textAlign: 'left', size: 1.25 },
  MetaRight: { label: isMacOS() ? '⌘' : 'Meta', alias: 'RMeta', textAlign: 'left', size: 1.25 },
  ControlRight: { label: isMacOS() ? '⌃' : 'Ctrl', alias: 'RCtrl', textAlign: 'left', size: 1.25 },
  Fn: { label: 'Fn', textAlign: 'left', size: 1.25 },
  // Edit
  Insert: { label: 'Ins', textAlign: 'center', size: 1 },
  Delete: { label: 'Del', textAlign: 'center', size: 1 },
  Home: { label: 'Home', textAlign: 'center', size: 1 },
  End: { label: 'End', textAlign: 'center', size: 1 },
  PageUp: { label: 'PgUp', textAlign: 'center', size: 1 },
  PageDown: { label: 'PgDn', textAlign: 'center', size: 1 },
  // Navigation
  ArrowUp: { label: '↑', textAlign: 'center', size: 1 },
  ArrowDown: { label: '↓', textAlign: 'center', size: 1 },
  ArrowLeft: { label: '←', textAlign: 'center', size: 1 },
  ArrowRight: { label: '→', textAlign: 'center', size: 1 },
}

export const KEYBOARD_COMMAND_ALLOW_KEYCODE_LIST = [
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
]

export const KEYBOARD_NOT_ALLOW_KEYCODE_LIST = [
  'Escape',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'F13',
  'F14',
  'F15',
  'Backspace',
  'Tab',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'MetaRight',
  'ControlRight',
  'Insert',
  'Delete',
  'Home',
  'End',
  'PageUp',
  'PageDown',
]

export const KEYBOARD_TYPE_OPTION = [
  { label: 'HHKB', value: 'hhkb' },
  { label: '33', value: '33' },
  { label: '45', value: '45' },
  { label: '47', value: '47' },
  { label: '43', value: '43' },
  { label: '53', value: '53' },
  { label: '57', value: '57' },
  { label: '61', value: 61 },
  { label: '64', value: 64 },
  { label: '67', value: 67 },
  { label: '68', value: 68 },
  { label: '80', value: 80 },
  { label: '84', value: 84 },
  { label: '87', value: 87 },
]

const KEYBOARD_TYPE_CONFIG = {
  hhkb: {
    isMacOS: true,
    list: [
      ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Backquote'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
      ['ControlLeft', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'Fn'],
      ['AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight'],
    ],
    emphasisOneKeys: ['Escape', 'Backquote', 'Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn'],
    emphasisTwoKeys: [],
    custom: {
      Backslash: { size: 1 },
      Backspace: { size: 1.5 },
      ControlLeft: { size: 1.75 },
      ShiftRight: { size: 1.75 },
      Fn: { size: 1 },
      AltLeft: { size: 1, marginLeft: 1.5 },
      MetaLeft: { size: 1.5 },
      Space: { size: 6 },
      AltRight: { size: 1, marginRight: 2.5 },
      MetaRight: { size: 1.5 },
    },
  },
  33: {
    isMacOS: false,
    list: [
      ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight'],
      ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
      ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'],
    ],
    emphasisOneKeys: [],
    emphasisTwoKeys: [],
    custom: {
      KeyQ: { marginLeft: 1.5 },
      KeyA: { marginLeft: 1.75 },
      KeyZ: { marginLeft: 2.25 },
      Quote: { marginRight: 0.75 },
      Slash: { marginRight: 1.25 },
    },
  },
  45: {
    isMacOS: false,
    list: [
      ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'],
      ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight'],
      ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
      ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'],
    ],
    emphasisOneKeys: [],
    emphasisTwoKeys: [],
    custom: {
      Digit1: { marginLeft: 1 },
      KeyQ: { marginLeft: 1.5 },
      KeyA: { marginLeft: 1.75 },
      KeyZ: { marginLeft: 2.25 },
      Equal: { marginRight: 0.5 },
      Quote: { marginRight: 0.75 },
      Slash: { marginRight: 1.25 },
    },
  },
  47: {
    isMacOS: false,
    list: [
      ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
      ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'],
    ],
    emphasisOneKeys: ['Backspace'],
    emphasisTwoKeys: [],
    custom: {
      Digit1: { marginLeft: 1 },
      KeyQ: { marginLeft: 1.5 },
      KeyA: { marginLeft: 1.75 },
      KeyZ: { marginLeft: 2.25 },
      Quote: { marginRight: 2.25 },
      Slash: { marginRight: 2.75 },
    },
  },
  43: {
    isMacOS: false,
    list: [
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
    ],
    emphasisOneKeys: ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight'],
    emphasisTwoKeys: ['Enter'],
    custom: {},
  },
  53: {
    isMacOS: false,
    list: [
      ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
    ],
    emphasisOneKeys: ['Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight'],
    emphasisTwoKeys: ['Escape', 'Enter'],
    custom: {},
  },
  57: {
    isMacOS: false,
    list: [
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'Fn', 'ControlRight'],
    ],
    emphasisOneKeys: ['Escape', 'Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn'],
    emphasisTwoKeys: ['Escape', 'Enter'],
    custom: {},
  },
  61: {
    isMacOS: false,
    list: [
      ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'Fn', 'AltRight', 'MetaRight', 'ControlRight'],
    ],
    emphasisOneKeys: ['Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown'],
    emphasisTwoKeys: ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    custom: {},
  },
  64: {
    isMacOS: false,
    list: [
      ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Delete'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ],
    emphasisOneKeys: ['Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown'],
    emphasisTwoKeys: ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    custom: {
      ShiftLeft: { size: 2 },
      ShiftRight: { size: 1, textAlign: 'center' },
      AltRight: { size: 1 },
      Fn: { size: 1 },
    },
  },
  67: {
    isMacOS: false,
    list: [
      ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Backquote'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'PageUp'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'PageDown'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Fn'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ],
    emphasisOneKeys: ['Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown'],
    emphasisTwoKeys: ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    custom: {
      ShiftRight: { size: 1.75 },
      ArrowLeft: { marginLeft: 0.5 },
      Fn: { size: 1, textAlign: 'center' },
    },
  },
  68: {
    isMacOS: false,
    list: [
      ['Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Backquote'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'PageUp'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'PageDown'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ],
    emphasisOneKeys: ['Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown'],
    emphasisTwoKeys: ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    custom: {
      ShiftRight: { size: 1.75 },
      AltRight: { size: 1 },
      Fn: { size: 1 },
      ControlRight: { size: 1 },
    },
  },
  80: {
    isMacOS: false,
    list: [
      ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Delete'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'PageUp'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'PageDown'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ],
    emphasisOneKeys: ['F5', 'F6', 'F7', 'F8', 'F13', 'F14', 'F15', 'Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    emphasisTwoKeys: ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    custom: {
      F1: { marginLeft: 1 },
      F2: { marginBottom: 0.25 },
      F3: { marginBottom: 0.25 },
      F4: { marginBottom: 0.25 },
      F5: { marginLeft: 0.5, marginBottom: 0.25 },
      F6: { marginBottom: 0.25 },
      F7: { marginBottom: 0.25 },
      F8: { marginBottom: 0.25 },
      F9: { marginLeft: 0.5, marginBottom: 0.25 },
      F10: { marginBottom: 0.25 },
      F11: { marginBottom: 0.25 },
      F12: { marginBottom: 0.25, marginRight: 1.25 },
      ShiftRight: { size: 1.75 },
      AltRight: { size: 1 },
      Fn: { size: 1 },
      ControlRight: { size: 1 },
      Delete: { marginLeft: 0.25 },
      PageUp: { marginLeft: 0.25 },
      PageDown: { marginLeft: 0.25 },
      ArrowUp: { marginRight: 1.25 },
      ArrowRight: { marginRight: 0.25 },
    },
  },
  84: {
    isMacOS: false,
    list: [
      ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'Delete'],
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Home'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'PageUp'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'PageDown'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'End'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ],
    emphasisOneKeys: ['F5', 'F6', 'F7', 'F8', 'F13', 'F14', 'F15', 'Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown'],
    emphasisTwoKeys: ['Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    custom: {
      F1: { ShiftRight: 1.75 },
      ShiftRight: { size: 1.75 },
      AltRight: { size: 1 },
      Fn: { size: 1 },
      ControlRight: { size: 1 },
    },
  },
  87: {
    isMacOS: false,
    list: [
      ['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15'],
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'MetaRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ],
    emphasisOneKeys: ['F5', 'F6', 'F7', 'F8', 'F13', 'F14', 'F15', 'Backquote', 'Backspace', 'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight', 'Fn', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
    emphasisTwoKeys: ['Escape', 'Enter'],
    custom: {
      Escape: { marginBottom: 0.25 },
      F1: { marginLeft: 1 },
      F2: { marginBottom: 0.25 },
      F3: { marginBottom: 0.25 },
      F4: { marginBottom: 0.25 },
      F5: { marginLeft: 0.5, marginBottom: 0.25 },
      F6: { marginBottom: 0.25 },
      F7: { marginBottom: 0.25 },
      F8: { marginBottom: 0.25 },
      F9: { marginLeft: 0.5, marginBottom: 0.25 },
      F10: { marginBottom: 0.25 },
      F11: { marginBottom: 0.25 },
      F12: { marginBottom: 0.25 },
      F13: { marginLeft: 0.5, marginBottom: 0.25 },
      F14: { marginBottom: 0.25 },
      F15: { marginBottom: 0.25 },
      Insert: { marginLeft: 0.5 },
      Delete: { marginLeft: 0.5 },
      ArrowUp: { marginLeft: 1.5, marginRight: 1 },
      ArrowLeft: { marginLeft: 0.5 },
      Enter: { marginRight: 3.5 },
    },
  },
}

export const currKeyboardConfig = computed(() => {
  const res = KEYBOARD_TYPE_CONFIG[localConfig.bookmark.keyboardType] as {
    isMacOS: boolean
    list: string[][]
    emphasisOneKeys: string[]
    emphasisTwoKeys: string[]
    custom: {
      [key: string]: KeyboardConfigItem
    }
  }
  // if Mac, swap option & command
  if (!res.isMacOS && isMacOS() && localConfig.bookmark.keyboardType !== 'hhkb') {
    res.isMacOS = true
    const lastRowIndex = res.list.length - 1
    let leftAltIndex = -1
    let leftMetaIndex = -1
    let rightAltIndex = -1
    let rightMetaIndex = -1
    for (let index = 0, len = res.list[lastRowIndex].length; index < len; index++) {
      const item = res.list[lastRowIndex][index]
      if (item === 'AltLeft') {
        leftAltIndex = index
      } else if (item === 'MetaLeft') {
        leftMetaIndex = index
      } else if (item === 'AltRight') {
        rightAltIndex = index
      } else if (item === 'MetaRight') {
        rightMetaIndex = index
      }
    }
    if (leftAltIndex !== -1 && leftMetaIndex !== -1) {
      [res.list[lastRowIndex][leftMetaIndex], res.list[lastRowIndex][leftAltIndex]] = [res.list[lastRowIndex][leftAltIndex], res.list[lastRowIndex][leftMetaIndex]]
    }
    if (rightAltIndex !== -1 && rightMetaIndex !== -1) {
      [res.list[lastRowIndex][rightMetaIndex], res.list[lastRowIndex][rightAltIndex]] = [res.list[lastRowIndex][rightAltIndex], res.list[lastRowIndex][rightMetaIndex]]
    }
  }
  return res
})

export const keyboardCurrentModelAllKeyList = computed(() => currKeyboardConfig.value.list.flat(Infinity))
