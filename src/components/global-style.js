import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;

    @media (max-width: 86rem) {
      font-size: clamp(1rem, 1.5vw, 2rem);
    }

    --color-primary: hsl(0deg 0% 0%);

    --color-secondary: hsl(0deg 0% 100%);
    --color-secondary-96: hsl(0deg 0% 96%);
    --color-secondary-80: hsl(0deg 0% 80%);
    --color-secondary-50: hsl(0deg 0% 50%);

    --color-accent-96: hsl(200deg 66% 88%);
    --color-accent-75: hsl(200deg 19% 69%);
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Work Sans", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    background-color: var(--color-primary);
  }

  p {
    font-size: 1.125em;
    color: var(--color-secondary-80);
  }

  a {
    text-decoration: none;
    color: var(--color-secondary-80);
    transition: all .2s ease-in-out;

    &:hover {
      color: var(--color-secondary-50);
    }
  }

  svg {
    height: 1em;
    margin-bottom: -0.125em;
  }
`

export default GlobalStyle
