import * as React from 'react'

export const Card = ({ id, children }) => {
  return <div id={id} className="card">
    <div className="container">
      {children}
    </div>
  </div>
}