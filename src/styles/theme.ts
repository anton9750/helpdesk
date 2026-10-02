export const theme = {
  colors: {
    bg: '#fdf8f1',
    surface: '#ffffff',
    navy: '#12306b',
    navyStrong: '#0b3b8c',
    green: '#2f6b2a',
    text: '#23314d',
    muted: '#4a5a78',
    border: '#dbe5f3',
    red: '#d62c2c',
    focus: '#f2a900',
  },
  tones: {
    blue: { bg: '#f1f6fd', border: '#d5e3f6', iconBg: '#cfe0f5' },
    green: { bg: '#f3f8ee', border: '#dbe8cf', iconBg: '#d9e9cb' },
    cream: { bg: '#fffdf8', border: '#eadfc9', iconBg: '#f3e8d2' },
  },
  buttons: {
    blue: { bg: '#3b73bd', fg: '#ffffff', border: '#3b73bd' },
    green: { bg: '#468036', fg: '#ffffff', border: '#468036' },
    navy: { bg: '#0b3b8c', fg: '#ffffff', border: '#0b3b8c' },
    outline: { bg: '#ffffff', fg: '#12306b', border: '#12306b' },
    danger: { bg: '#ffffff', fg: '#a11d1d', border: '#a11d1d' },
  },
  radius: { card: '22px', button: '14px' },
  shadow: { card: '0 6px 22px rgba(18, 48, 107, 0.08)' },
  maxWidth: '1180px',
  bp: { md: '980px', sm: '640px' },
}

export type AppTheme = typeof theme
export type Tone = keyof AppTheme['tones']
export type ButtonVariant = keyof AppTheme['buttons']
