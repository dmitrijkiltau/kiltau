import React, { useRef, useState, useEffect, useLayoutEffect } from "react"
import { Card } from "./card"

export const Accordion = ({ id, title, description, icon, children }) => {
  const contentRef = useRef()
  const [height, setHeight] = useState(undefined)
  const [open, setOpen] = useState(false)

  const handleOpen = (e) => {
    if (!e.target.closest('.toggle') && open) return;
    setHeight(contentRef.current.scrollHeight)
    setOpen(!open)
  }

  
  useLayoutEffect(() => {
    setTimeout(() => setHeight(contentRef.current.scrollHeight), 100)
  }, [])

  useEffect(() => {
    setTimeout(() => contentRef.current.style.setProperty('transition-duration', '2s'), 200)
  }, [])

  return <div id={id} className="accordion" onClick={handleOpen} data-open={open ? '' : undefined} role="presentation">
    <Card>
      <div className="header">
        <button className="toggle" onClick={handleOpen} aria-label={title}>
          {icon}

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" className="icon">
            <path fill="currentColor" d="M256 80V48h-64v176H16v64h176v176h64V288h176v-64H256V80z" />
          </svg>
        </button>

        <div className="title">
          <h3 className="left">{title}</h3>
          <h3 className="center">{title}</h3>
        </div>

        <div className="description">
          <p className="left">{description}</p>
          <p className="center">{description}</p>
        </div>
      </div>

      <div className="content" ref={contentRef} onLoad={e => console.log(e)} style={{ '--content-height': `${height}px` }}>
        {children}
      </div>
    </Card>
  </div>
}