import React, { Component } from 'react'
// import youtube from 'youtube-finder'
// const client = youtube.createClient({ key: 'AIzaSyAZ3RMSs6jrRFtL7auC6i02dAFo2ccO8S8' })

class Youtube extends Component {
  render () {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img src='http://bulma.io/images/placeholders/128x128.png' />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Youtube
