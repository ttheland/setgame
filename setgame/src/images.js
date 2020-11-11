import React from 'react'

var context = require.context('./assets/cards', true, /\.(png)$/)
var files = {}

context.keys().forEach((filename) => {
  files[filename] = context(filename)
});

console.log(files)


const images = [
  {
    id: 1,
    src: './assets/cards/one_blue_full_diamond.png',
    title: 'one blue full diamond',
    description:'asdasd'
  },
  {
    id: 2,
    src:'./assets/cards/one_blue_full_oval.png',
    title:'one blue full oval',
    description:'asd'
  }
]

export default images
