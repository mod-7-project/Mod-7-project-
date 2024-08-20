const PokemonCard = ({name, frontSprite}) => {
  return (
    <div className="ui card">
      <div>
        <div className="image">
          <img src="frontSprite" alt="pokemon name"/>
        </div>
        <div className = "nameContainer">
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  )
}