import React  from 'react'

const Board = ({cells, cellEntries, onCellClick}) => {
  
    
    return (
        <div className="board">
            {cells.map((_, id) => (
                <button key={id} className="card" onClick={() => onCellClick(id)}>{cellEntries[id]}</button>
            ))}
            {/* <button className="card_sky"><span className="play">player 1</span> </button>
            <button className="card_white"><span className="play">Ties</span></button>
            <button className="card_yellow"><span className="play">Player 2</span></button> */}
        </div>
    )
}

export default Board