const handleMoveSubmit = (e) => {
  e.preventDefault()
  console.log(e.target.move1.value)
  return [e.target.move1.value, 
          e.target.move2.value,
          e.target.move3.value,
          e.target.move4.value
        ]
}

export default handleMoveSubmit