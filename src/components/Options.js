import React from 'react'

const Options = ({player, handlePlayerOption}) => {
    return (
        <form>
            <select id="player1_input" value={player} className="choice" onChange={handlePlayerOption}>
                <option value="X" name="playerOne" className="opt">X</option>
                <option value="O" name="playerTwo" className="opt-opt">O</option>
            </select>
        </form>
    )
}

export default Options