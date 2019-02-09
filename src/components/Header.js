import React from 'react'

const Header = ({ ui }) => {
  let status = ''
  if (ui) {
    status = ui === true ? 'header compressed' : 'header'
  } else {
    status = 'header'
  }

  return (
    <div className={status}>
      <h1>
        <span>V</span>ISUALISATION<span className="span_dot">.</span>
      </h1>
    </div>
  )
}

export default Header
