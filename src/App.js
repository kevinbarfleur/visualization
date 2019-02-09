import React, { Component } from 'react'

// Components
import Item from './components/Item'
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'

// Datas
import { formatedCompany, errors } from './data'

// Assets
const dashboard = [
  require('./assets/dashboard1.png'),
  require('./assets/dashboard2.png')
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formatedCompany,
      errors,
      print: 'all',
      isSearching: false,
      compress_ui: false
    }
  }

  handleChange = value => {
    this.setState({ print: value })
  }

  handleSearch = event => {
    const value = event.target.value.toLowerCase()
    if (value === '') {
      this.setState({ isSearching: false })
    } else {
      this.setState({ isSearching: true, sort: value })
    }
  }

  handleClick = event => {
    if (document.querySelector('.company_page')) {
      const target = document.querySelector('.company_page')
      target.parentNode.removeChild(target)
    }

    const container = this.refs.container

    container.style.cssText = `
      transition: .5s;
      width: 500px;
      transform: translateX(-110%);
    `
    this.setState({ compress_ui: true })
    this.handleCompanyPage(event.target, this.refs.app)
  }

  handleCompanyPage = (element, app) => {
    const html = `
      <div class='company_page'>
        <h1 class='company_page_title'>${element.innerHTML}</h1>
        <button class='exit_button'>&#8592; Return</button>
        <p>At vero eos et accusamus et iusto odio dignissimos 
        ducimus qui blanditiis praesentium voluptatum deleniti 
        atque corrupti quos dolores et quas molestias excepturi 
        sint occaecati cupiditate non provident, similique sunt 
        in culpa qui officia deserunt mollitia animi, id est 
        laborum et dolorum fuga.</p>
        <img class='dashboard_image' src=${dashboard[0]} />
        <p>At vero eos et accusamus et iusto odio dignissimos 
        ducimus qui blanditiis praesentium voluptatum deleniti 
        atque corrupti quos dolores et quas molestias excepturi 
        sint occaecati cupiditate non provident, similique sunt 
        in culpa qui officia deserunt mollitia animi, id est 
        laborum et dolorum fuga.</p>
        <img class='dashboard_image' src=${dashboard[1]} />
      </div>
    `
    const page = document.createElement('div')
    page.innerHTML = html
    app.appendChild(page)
    setTimeout(() => {
      page.childNodes[1].classList.add('active')
    }, 10)
    this.holderEvent()
  }

  holderEvent = () => {
    if (document.querySelector('.company_page')) {
      const page = document.querySelector('.company_page')
      const button = document.querySelector('.exit_button')
      button.addEventListener('click', () => {
        page.classList.remove('active')
        const container = this.refs.container
        container.style.cssText = `
          transition: .5s;
          transform: translateX(0%);
        `
        setTimeout(() => {
          button.parentElement.remove()
        }, 500)
        this.setState({ compress_ui: false })
      })
    }
  }

  render() {
    const status = this.state.errors
    const print = this.state.print
    const sort = this.state.sort
    const isSearching = this.state.isSearching
    const elements = this.state.formatedCompany
    const items = Object.keys(elements).map((item, key) => (
      <Item
        sort={sort}
        isSearching={isSearching}
        key={key}
        index={key}
        name={elements[item]}
        error={status[key]}
        print={print}
        handleClick={this.handleClick}
      />
    ))

    return (
      <div className="App" ref="app">
        <Header ui={this.state.compress_ui} />
        <ControlPanel
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          ui={this.state.compress_ui}
        />
        <div className="container" ref="container">
          {items}
        </div>
      </div>
    )
  }
}

export default App
