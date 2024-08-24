import handleMoveSubmit from "../utils/handleMovesSubmit"

const Moves = ({pokeMoves, setPokeMoves, moves}) => {
  console.log(pokeMoves)
  if (pokeMoves.length > 1) {
    return (
      pokeMoves.map(move => 
        <p>{move}</p>
      )
    )
  } else {
    return (
      <>
        <form onSubmit={(e) => 
          setPokeMoves(handleMoveSubmit(e))
        }>
          <label htmlFor="move1">Move 1:</label>
          <select name="move1" className="move1">
            {moves.map((move) => (<option value={move.move.name}>{move.move.name}</option>))}
          </select>
          <label htmlFor="move2">Move 2:</label>
          <select name="move2" className="move2">
            {moves.map((move) => (<option value={move.move.name}>{move.move.name}</option>))}
          </select>
          <label htmlFor="move3">Move 3:</label>
          <select name="move3" className="move3">
            {moves.map((move) => (<option value={move.move.name}>{move.move.name}</option>))}
          </select>
          <label htmlFor="move4">Move 4:</label>
          <select name="move4" className="move4">
            {moves.map((move) => (<option value={move.move.name}>{move.move.name}</option>))}
          </select>
          <button type="submit">Set Moves!</button>
        </form>
      </>
    )
  }
}

export default Moves