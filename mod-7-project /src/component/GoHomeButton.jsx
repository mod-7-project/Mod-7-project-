import { Link } from 'react-router-dom'

const GoHomeButton = () => {
  return (
    <Link to='/'>
     <button className="ui button fluid">
        Go Home
      </button>
    </Link>
  )
}

export default GoHomeButton;
