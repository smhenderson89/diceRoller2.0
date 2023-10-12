import React from 'react'

const DiceRoll =() => {
  return (
    <div>
    <h4>Choose Dice to Roll</h4>
        <label htmlFor="Dice Roll">Roll Dice</label>
        <select>
          <option value = "d6">d6</option>
        </select>
        <button type = "button">Submit</button>
        <br></br>
        <h3>Result</h3>
        <div className = "diceRoll"></div>
    </div>

  )
}

export default DiceRoll