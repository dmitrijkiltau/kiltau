import * as React from 'react'
import { Link } from 'gatsby'
import { Section } from './section'

export const Hero = ({ className, path, children }) => {
  return <Section id="hero" className={className}>
    {children}

    {path && <div className="more">
      <Link to={path}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </Link>
    </div>}
  </Section>
}