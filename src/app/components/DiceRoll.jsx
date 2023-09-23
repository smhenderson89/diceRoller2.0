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

    </div>

  )
}

export default DiceRoll