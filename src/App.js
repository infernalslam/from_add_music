import React, { Component } from 'react'
import Search from './components/search'
import Youtube from './components/youtube'
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
          <div className='column'>2
          </div>
        </div>
      </div>
    )
  }
}

export default App
