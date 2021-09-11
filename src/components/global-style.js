import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --font-size-default: 16px;

    @media (max-width: 120rem) {
      --font-size-default: 1vw;
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
    font-size: var(--font-size-default);
  }

  p {
    font-size: 1.125rem;
    color: var(--color-secondary-80);
  }

  a {
    color: var(--color-secondary-80);
    transition: all .2s ease-in-out;

    &:hover {
      color: var(--color-secondary-50);
    }
  }

  svg {
    height: 1rem;
    margin-bottom: -0.125rem;
  }
`

export default GlobalStyle
