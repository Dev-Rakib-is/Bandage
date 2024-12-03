import React from 'react'

const Container = ({ className, children}) => {
  return (
    <div className={`m-auto max-w-[1050px] ${className}`}>{children}</div>
  )
}

export default Container