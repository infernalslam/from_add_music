import React, { Component } from 'react'
import Search from './components/search'
import Youtube from './components/youtube'
import Form from './components/form'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: []
    }
  }
  render () {
    return (
      <div>
        <Search />
        <div className='columns'>
          <div className='column'>
            <br />
            <Youtube />
          </div>
          <div className='column'>
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

export default App
