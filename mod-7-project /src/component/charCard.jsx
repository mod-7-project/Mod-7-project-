const ChardCard = ({name, image }) => {
  return (
    <div className="ui card">
      <div>
        <div className="image">
          <img src={image} alt=""/>
        </div>
        <div className = "nameContainer">
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default ChardCard