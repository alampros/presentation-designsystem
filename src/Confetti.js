import React from 'react'
import PropTypes from 'prop-types'
import sizeMe from 'react-sizeme'
import ReactConfetti from 'react-confetti'

export default sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(class Confetti extends React.PureComponent {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ReactConfetti {...this.props.size} numberOfPieces={500} recycle={false} />
        <h3>fin.</h3>
      </div>
    )
  }
})
