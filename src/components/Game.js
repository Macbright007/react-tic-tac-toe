import React, { useEffect, useState } from 'react'
import Board from './Board'
import Options from './Options'


//Representation of winning combinations on each cell
const winning_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]



const Game = () => {
    const [player, setplayer] = useState("X")
    const cells = new Array(9).fill()
    const [cellEntries, setCellEntries] = useState(cells) 

    const handleCellEntry = (index) => {
        setCellEntries(cellEntries => {
            const newCellEntries = [...cellEntries]
            newCellEntries[index] = player
            return newCellEntries
        })
        setplayer(player === 'X' ? "O" : "X")
    }
    
    const handlePlayerOption = (e) => {
        setplayer(e.target.value)
    }

    
function checkwin() {
    winning_conditions.forEach(wins => {
        const lastPlayer = player === 'X' ? 'O' : 'X'
        let check = wins.every(indexOf => cellEntries[indexOf] === lastPlayer)

        if (check) {
            alert("player " + lastPlayer + " won")
            return true
        }

    })

    return false
}

// to check for draw or a tie
function checkDraw() {
    let isDraw = true

    cellEntries.forEach(entry => {
        if(!entry) isDraw = false
    })

    if(!isDraw) {
        return false
    }
    alert("It's a Draw/Tie !!!!!")
    return true
}

useEffect(() => {
    if(!checkwin()) {
        checkDraw()
    }else {
        setCellEntries(cells)
    }
    console.log('set cell entries', checkwin())
}, [cellEntries])


    return (
        <div className="container">
            <div className="top_icon">
                <div className="options">
                    <span className="times">X</span>
                    <span className="open">O</span>
                </div>

                <button className="btn"><span>X</span>Turn</button>
                <button id="reset" className="btn-btn">
                    <i className="bi bi-arrow-clockwise"></i>
                </button>
            </div>

            <Board cells={cells} cellEntries={cellEntries} onCellClick={handleCellEntry} />
            <div className="card_option">
                <Options player={player} handlePlayerOption={handlePlayerOption} />
                {/* <Options player={player} handlePlayerOption={handlePlayerOption}/> */}
            </div>
        </div>
    )
}

export default Game