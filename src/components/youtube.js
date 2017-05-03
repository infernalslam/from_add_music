import React, {Component} from 'react'

class Youtube extends Component {
    constructor(props){
      super(props)
      // this.listYoutube = this.props.listYoutube.bind(this)
    }
  render () {
    const { 
      id = 'loading', 
      title = 'loading',
      pic = 'loading'
    } = this.props
    console.log(pic)
    return (
      <div className='box' onClick={this.props.listYoutube.bind(this, id, title, pic)}>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img src={pic} role='presentation' />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{title}</strong>
                <br />
                {id}
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Youtube



// const Youtube = ({id, title, pic, listYoutube}) => {
//   return (
//     <div className='box'>
//         <article className='media'>
//           <div className='media-left'>
//             <figure className='image is-64x64'>
//               <img src={pic} role='presentation' />
//             </figure>
//           </div>
//           <div className='media-content'>
//             <div className='content'>
//               <p>
//                 <strong>{title}</strong>
//                 <br />
//                 {id}
//               </p>
//             </div>
//           </div>
//         </article>
//       </div>
//   )
// }
  


// export default Youtube
