import React, { Component } from 'react'

class ControlPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const input = this.refs.sortInput
    this.setState({ print: input.value })
  }

  handleChange = event => {
    const input = event.target
    this.props.handleChange(input.value)
  }

  render() {
    const ui = this.props.ui

    if (this.refs.panel) {
      const panel = this.refs.panel
      if (ui === true) {
        panel.classList.add('compressed')
      } else if (ui === false) {
        panel.classList.remove('compressed')
      }
    }

    return (
      <div className="control_panel" ref="panel">
        <select
          ref="sortInput"
          id="sort_input"
          name="sort"
          onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="error">Errors</option>
          <option value="clean">Clean</option>
        </select>
        <br />
        <input
          type="text"
          id="search"
          placeholder="search..."
          onChange={this.props.handleSearch}
        />
      </div>
    )
  }
}

export default ControlPanel
