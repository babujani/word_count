import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  countLetters = event => {
    const {value} = event.target
    this.setState({count: value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="pg-bg">
        <div className="container-box">
          <div>
            <h1>
              Calculate the
              <br /> Letters you enter
            </h1>

            <label htmlFor="input-note">Enter the phrase</label>
            <br />
            <input
              id="input-note"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.countLetters}
            />

            <div className="count-box">
              <p>No.of letters: {count.length}</p>
            </div>
          </div>
          <img
            className="cal-img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
