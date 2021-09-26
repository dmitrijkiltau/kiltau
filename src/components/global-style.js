import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;

    @media (max-width: 61rem) {
      font-size: clamp(1rem, 1.5vw, 2rem);
    }

    --color-primary: hsl(0deg 0% 100%);
    --color-primary-96: hsl(0deg 0% 96%);
    --color-primary-80: hsl(0deg 0% 80%);
    --color-primary-50: hsl(0deg 0% 50%);

    --color-secondary: hsl(0deg 0% 0%);

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
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }

  h2, h2, h3, h4, h5, h6, p, ul {
    margin: 0 0 1rem 0;

    &:last-child {
      margin: 0;
    }
  }

  h2, h2, h3, h4, h5, h6 {
    line-height: 1.5;
    color: var(--color-primary-96);
    font-weight: 500;
  }

  p, a, li {
    line-height: 1.5;
    font-size: 1.125rem;
    color: var(--color-primary-80);
  }

  a {
    text-decoration: none;
    transition: all .2s ease-in-out;

    &:hover {
      color: var(--color-primary-50);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;

    div {
      width: 100% !important;
      height: 100% !important;
    }
  }

  svg {
    height: 1em;
    margin-bottom: -0.125em;
  }
`

export default GlobalStyle
