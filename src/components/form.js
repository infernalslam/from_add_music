import React, { Component } from 'react'

class Form extends Component {
  render () {
    return (
      <div>
        <div className='field'>
          <label className='label'>storage upload Firebase <span className='tag is-danger is-large'>Upload Click!</span></label>
          <p className='control'>
            <input className='input' type='text' placeholder='Artist' />
          </p>
          <p className='control'>
            <input className='input' type='text' placeholder='Album' />
          </p>
          <p className='control'>
            <input className='input' type='text' placeholder='PR' />
          </p>
        </div>
      </div>
    )
  }
}

export default Form
