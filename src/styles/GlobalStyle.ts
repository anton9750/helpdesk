import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html { font-size: 112.5%; scroll-behavior: smooth; }

  body {
    margin: 0;
    font-family: 'Nunito', 'Segoe UI', system-ui, sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 { color: ${({ theme }) => theme.colors.navy}; line-height: 1.15; margin: 0; }
  p { margin: 0; }
  img, svg { max-width: 100%; }

  a:focus-visible, button:focus-visible, input:focus-visible, summary:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    * { transition: none !important; }
  }
`
