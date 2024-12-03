import React from 'react'

const Menu = ({ className, children}) => {
  return (
    <ul className={`${className}`}>{children}</ul>
  )
}

export default Menu