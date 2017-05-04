import React, { Component } from 'react'
import Search from './components/search'
import Youtube from './components/youtube'
import Form from './components/form'
import './App.css'
import youtube from 'youtube-finder'
const client = youtube.createClient({ key: 'AIzaSyDvwXUsN2hDGHCvrUeclxFFffgGLlGv8OE' })

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
      tracks: []
    }
    this.search = this.search.bind(this)
    this.listYoutube = this.listYoutube.bind(this)
  }
  add (data) {
    console.log('data : ', data)
  }
  search (keyword) {
    let params = {
      part: 'snippet',
      q: keyword,
      maxResults: 50
    }
    console.log(params)
    let vm = this
    client.search(params, function (err, data) {
      if (err) console.log(err)
      vm.setState({ list: data.items })
      console.log(vm.state.list)
    })
  }
  listYoutube (id, title, pic) {
    let data = {
      id: id,
      title: title,
      pic: pic
    }
    this.state.tracks.push(data)
    this.setState({tracks: this.state.tracks})
    console.log(this.state.tracks)
  }
  render () {
    return (
      <div>
        <Search search={this.search.bind(this)} />
        <div className='columns'>
          <div className='column'>
            <br />
            {
              this.state.list.map((item) => {
                console.log(item)
                return (
                  <Youtube listYoutube={this.listYoutube} id={item.id.videoId} title={item.snippet.title} pic={item.snippet.thumbnails.high.url} />
                )
              }) 
            }
          </div>
          <div className='column'>
            <Form add={this.add} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
