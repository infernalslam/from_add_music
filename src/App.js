import React, { Component } from 'react'
import Search from './components/search'
import Youtube from './components/youtube'
import Form from './components/form'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
      params: {}
    }
  }
  add (data) {
    console.log('data : ', data)
  }
  search (keyword) {
    console.log(keyword)
    // let params = {
    //   part: 'snippet',
    //   q: keyword,
    //   maxResults: 50
    // }
    // this.setState({})
  }
  render () {
    return (
      <div>
        <Search search={this.search.bind(this)} />
        <div className='columns'>
          <div className='column'>
            <br />
            <Youtube />
          </div>
          <div className='column'>
            <Form add={this.add.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
