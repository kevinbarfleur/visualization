import React from 'react'
import ReactTooltip from 'react-tooltip'

import '../styles/style.css'

const Item = ({ sort, isSearching, name, error, print, handleClick }) => {
  const tooltipTemplate = (
    <div>
      <h2 style={{ padding: '20px' }}>Company Tooltip</h2>
      <br />
      <p>
        Information: Lorem ipsum dolor <br />
        sit amet, consectetur adipiscing elit,
        <br />
        sed do eiusmod tempor incididunt <br />
        ut labore et dolore magna aliqua. Ut
        <br />
        enim ad minim veniam, quis nostrud <br />
        exercitation ullamco laboris nisi ut
        <br />
        aliquip ex ea commodo consequat.
        <br />
      </p>
      <br />
      <ul style={{ padding: '20px' }}>
        <li>Caractéristique 1</li>
        <br />
        <li>Caractéristique 2</li>
        <br />
        <li>Caractéristique 3</li>
        <br />
        <li>etc ...</li>
        <br />
      </ul>
    </div>
  )
  const tooltip = element => (
    <ReactTooltip id={element} place="bottom" type="dark" effect="solid">
      {tooltipTemplate}
    </ReactTooltip>
  )

  const item_false = (
    <a data-tip="React-tooltip" data-for="item_false">
      <div className="item item_false" onClick={handleClick}>
        {name}
      </div>
      {tooltip('item_false')}
    </a>
  )
  const item_true = (
    <a data-tip="React-tooltip" data-for="item_true">
      <div className="item item_true" onClick={handleClick}>
        {name}
      </div>
      {tooltip('item_true')}
    </a>
  )

  const item = () => {
    if (print === 'all') {
      if (error === false) {
        return item_false
      } else if (error === true) {
        return item_true
      }
    } else if (print === 'clean') {
      if (error === false) {
        return item_false
      } else if (error === true) {
        return null
      }
    } else if (print === 'error') {
      if (error === false) {
        return null
      } else if (error === true) {
        return item_true
      }
    }
  }

  if (isSearching === true) {
    if (name.toLowerCase().includes(sort)) {
      return item()
    } else {
      return null
    }
  } else if (isSearching === false) {
    return item()
  }
}

export default Item
