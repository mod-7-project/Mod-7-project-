import handleMoveSubmit from "../utils/handleMovesSubmit"
import capitalPokeName from "../utils/capitalPokeName"

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
        <form id="moves-form"onSubmit={(e) => 
          setPokeMoves(handleMoveSubmit(e))
        }>
          <label className="moves"htmlFor="move1">Move 1:</label>
          <select name="move1">
            {moves.map((move) => (<option value={capitalPokeName(move.move.name)}>{capitalPokeName(move.move.name)}</option>))}
          </select>
          <label className="moves"htmlFor="move2">Move 2:</label>
          <select name="move2">
            {moves.map((move) => (<option value={capitalPokeName(move.move.name)}>{capitalPokeName(move.move.name)}</option>))}
          </select>
          <label className="moves" htmlFor="move3">Move 3:</label>
          <select name="move3">
            {moves.map((move) => (<option value={capitalPokeName(move.move.name)}>{capitalPokeName(move.move.name)}</option>))}
          </select>
          <label className="moves" htmlFor="move4">Move 4:</label>
          <select name="move4">
            {moves.map((move) => (<option value={capitalPokeName(move.move.name)}>{capitalPokeName(move.move.name)}</option>))}
          </select>
          <button className="add-team-button" type="submit">Set Moves!</button>
        </form>
      </>
    )
  }
}

export default Moves