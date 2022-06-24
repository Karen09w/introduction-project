import React from 'react'

export default function BrowserCard({name,image,className}) {
  return (
    <div className={className}>
        <img src={image} alt={name} />
    </div>
  )
}
