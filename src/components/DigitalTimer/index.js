// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="bg">
        <h1 className="heading">Digital Timer</h1>
        <div className="bgImageMain">
          <div className="bgImage">
            <div className="whiteColoredBg">
              <p>Paused</p>
            </div>
          </div>

          <div className="clockContainer">
            <div className="startAndPauseContainer">
              <div className="startContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="imageIcon"
                />
                <p>Start</p>
              </div>
              <div className="resetContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="imageIcon"
                />
                <p>Reset</p>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="increaseDecreaseContainer">
              <p>-</p>
              <div className="numberContainer">
                <p>25</p>
              </div>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
