import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.add = this.props.add.bind(this)
    this.state = {
      artist: '',
      album: '',
      pr: ''
    }
    this.artist = this.artist.bind(this)
    this.album = this.album.bind(this)
    this.pr = this.pr.bind(this)
  }

  artist (e) {
    this.setState({
      artist: e.target.value
    })
  }

  album (e) {
    this.setState({
      album: e.target.value
    })
  }

  pr (e) {
    this.setState({
      pr: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div className='field'>
          <label className='label'> storage upload Firebase
          <span className='tag is-danger is-large' onClick={this.add.bind(this, this.state)}>Upload Click!</span>
          </label>
          <p className='control'>
            <input className='input' type='text' onChange={this.artist} placeholder='Artist' />
          </p>
          <p className='control'>
            <input className='input' type='text' onChange={this.album} placeholder='Album' />
          </p>
          <p className='control'>
            <input className='input' type='text' onChange={this.pr}placeholder='PR' />
          </p>
        </div>
      </div>
    )
  }
}

export default Form
