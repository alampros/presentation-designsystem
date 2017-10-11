import React from 'react'
import { SpringGrid, enterExitStyle, layout } from 'react-stonecutter'
import * as images from './img/*.png'

export default class ButtonStorm extends React.PureComponent {
  state = {
    count: -1,
  }
  componentDidMount() {
    this.loadImageDimensions()
      .then(this.tick)
  }
  componentWillUnmount() {
    clearTimeout(this._tid)
  }
  _tid = undefined
  imageDimensions = {}
  loadImageDimensions = () => {
    return Promise.all(Object.keys(images).map(k => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          this.imageDimensions[k] = {
            w: img.width,
            h: img.height,
          }
          resolve()
        }
        img.onerror = reject
        img.src = images[k]
      })
    }))
  }
  tick = () => {
    const count = this.state.count + 1
    if(count > Object.keys(images).length) {
      return
    }
    this.setState({
      count,
    })
    this._tid = setTimeout(() => this.tick(), 1000)
  }
  render() {
    const { count } = this.state
    const $images = Object.keys(images).map((k, i) => {
      if(i > count) {
        return null
      }
      const containerStyle = {
        width: 100,
        height: 50,
      }
      const imgStyle = {
        backgroundImage: `url(${images[k]})`,
        backgroundSize: 'fill',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }
      return (
        <div key={k} style={containerStyle}>
          <div style={imgStyle} />
        </div>
      )
    }).filter(c => c)

    return (
      <SpringGrid
        columns={4}
        columnWidth={100}
        gutterWidth={10}
        gutterHeight={10}
        layout={layout.simple}
        springConfig={{
          stiffness: 180,
          damping: 20,
        }}
        {...enterExitStyle.fromCenter}
        style={{
          margin: '0 auto',
        }}
      >
        {$images}
      </SpringGrid>
    )
  }
}
