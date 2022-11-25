import * as React from 'react'

export const Input = ({ type, id, value, onChange, prepend, append }) => {
  return <div className="input" data-prepend={prepend || undefined} data-append={append || undefined}>
    <input type={type || 'text'} id={id} value={value || ''} onChange={onChange} />
  </div>
}