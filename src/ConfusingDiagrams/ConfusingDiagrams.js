import React from 'react'
import {
  Appear,
  Image,
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'

/* eslint-disable global-require */
const images = {
  dsclutter0: require('./img/0.jpg'),
  dsclutter1: require('./img/1.jpg'),
  dsclutter2: require('./img/2.jpg'),
  dsclutter3: require('./img/3.png'),
  dsclutter4: require('./img/4.jpg'),
  dsclutter5: require('./img/5.jpg'),
}
/* eslint-enable global-require */

preloader(images)

export default class ConfusingDiagrams extends React.PureComponent {
  getImageStyles = (i) => {
    const degMap = {
      0: -4,
      1: 2,
      2: -6,
      3: -2,
      4: 1,
      5: -3,
    }
    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: `translateY(-70%) translateX(-50%) rotateZ(${degMap[i]}deg)`,
      boxShadow: '0 0.5rem 1rem rgba(100,100,100,0.5)',
      maxHeight: 800,
    }
  }
  render() {
    const containerStyles = {
      position: 'relative',
      maxWidth: '100%',
      height: 800,
    }
    return (
      <div style={containerStyles}>
        <Image style={this.getImageStyles(0)} src={images.dsclutter0} height="auto" width="100%" />
        <Appear>
          <Image style={this.getImageStyles(1)} src={images.dsclutter1} height={1200} width="auto" />
        </Appear>
        <Appear>
          <Image style={this.getImageStyles(2)} src={images.dsclutter2} height="auto" width="auto" />
        </Appear>
        <Appear>
          <Image style={this.getImageStyles(3)} src={images.dsclutter3} height="auto" width="100%" />
        </Appear>
        <Appear>
          <Image style={this.getImageStyles(4)} src={images.dsclutter4} height="auto" width="100%" />
        </Appear>
        <Appear>
          <Image style={this.getImageStyles(5)} src={images.dsclutter5} height="auto" width="100%" />
        </Appear>
      </div>
    )
  }
}
