import React, { useRef, useState, useEffect } from "react"
import { Card } from "./card"

export const Accordion = ({ id, title, description, icon, children }) => {
  const contentRef = useRef()
  const [height, setHeight] = useState(undefined)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setHeight(contentRef.current.scrollHeight)
    setOpen(!open)
  }

  useEffect(() => {
    setTimeout(() => setHeight(contentRef.current.scrollHeight), 500)
  }, [])

  return (
    <div id={id} className="accordion" data-open={open ? '' : undefined}>
      <Card>
        <div className="header">
          <button className="toggle" onClick={handleOpen}>
            {icon}

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" className="icon">
              <path fill="currentColor" d="M256 80V48h-64v176H16v64h176v176h64V288h176v-64H256V80z" />
            </svg>
          </button>

          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>

        <div className="content" ref={contentRef} style={{ '--content-height': `${height}px` }}>
          {children}
        </div>
      </Card>
    </div>
  )
}