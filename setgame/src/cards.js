import React from 'react'
import images from './images'

const cards = ({images}) => {
  {images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)
  }
}


export default cards
