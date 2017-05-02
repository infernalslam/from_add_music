import React, { Component } from 'react'

class Search extends Component {
  constructor (props) {
    super(props)
    this.search = this.props.search.bind(this)
    this.state = {
      keyword: ''
    }
    this.keyword = this.keyword.bind(this)
  }

  keyword (e) {
    this.setState({
      keyword: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div className='field is-grouped'>
          <p className='control is-expanded'>
            <input className='input' type='text' placeholder='Search youtube' onChange={this.keyword} />
          </p>
          <p className='control'>
            <a className='button is-info' onClick={this.search.bind(this, this.state.keyword)}>Search</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Search
