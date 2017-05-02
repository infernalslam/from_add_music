import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div>
        <div className='field is-grouped'>
          <p className='control is-expanded'>
            <input className='input' type='text' placeholder='Search youtube' />
          </p>
          <p className='control'>
            <a className='button is-info'>Search</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Search
