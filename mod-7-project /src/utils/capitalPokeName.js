const capitalPokeName = (name) => {
  const words = name.split('-')

  const capitalizedPokeNameParts = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())

  return capitalizedPokeNameParts.join(" ")
  
}

export default capitalPokeName