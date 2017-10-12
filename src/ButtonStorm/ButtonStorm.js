import React from 'react'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move'
import * as images from './img/*.png'

export default class ButtonStorm extends React.PureComponent {
  static propTypes = {
    maxImages: PropTypes.number,
    initialInterval: PropTypes.number,
  }
  static defaultProps = {
    maxImages: 75,
    initialInterval: 3000,
  }
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
  _interval = undefined
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
    if(count > this.props.maxImages) {
      return
    }
    this.setState({
      count,
    })
    if(typeof this._interval === 'undefined') {
      this._interval = this.props.initialInterval
      this._tid = setTimeout(() => this.tick(), 10)
    } else {
      this._tid = setTimeout(() => this.tick(), this._interval)
    }
    const nextInterval = (this._interval - (this._interval / 5))
    this._interval = Math.max(nextInterval, 100)
  }
  render() {
    if(Object.keys(this.imageDimensions).length === 0) {
      return null
    }
    const { maxImages } = this.props
    const { count } = this.state
    const max = Math.min(count, maxImages)
    const imgKeys = Object.keys(images)
    const imgCount = imgKeys.length
    const $images = new Array(max).fill(null).map((_null, i) => {
      const imgIndex = i % imgCount
      const imgKey = imgKeys[imgIndex]
      const imgContainerStyle = {
        width: this.imageDimensions[imgKey].w * 2,
        height: this.imageDimensions[imgKey].h * 2,
        margin: 10,
      }
      const imgStyle = {
        backgroundImage: `url(${images[imgKey]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }
      /* eslint-disable react/no-array-index-key */
      return (
        <div key={i} style={imgContainerStyle}>
          <div style={imgStyle} />
        </div>
      )
    })

    const containerStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateY(-20%)',
    }

    return (
      <FlipMove
        style={containerStyle}
        duration={Math.max(Math.min(this._interval * 0.5, 500), 100) || 300}
      >
        {$images}
      </FlipMove>
    )
  }
}
