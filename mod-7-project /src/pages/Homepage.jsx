import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='banner'>
      <div className="slider" style={{ '--quantity': 6 }}>
        <div className="item" style={{ '--position': 1 }}>
          <img src="/src/images/bulbasaur2.png" alt="Bulbasaur" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <img src="/src/images/charzard2.png" alt="Charizard" />
        </div>
        <div className="item" style={{ '--position': 3 }}>
          <img src='/src/images/pikachu.jpg' alt="Pikachu" />
        </div>
        <div className="item" style={{ '--position': 4 }}>
          <img src="/src/images/snorlax2.png" alt="Snorlax" />
        </div>
        <div className="item" style={{ '--position': 5 }}>
          <img src="/src/images/squirt2.png" alt="Squirtle" />
        </div>
        <div className="item" style={{ '--position': 6 }}>
          <img src="/src/images/umbreon.webp" alt="Umbreon" />
        </div>
      </div>

      <div className="content">
        <h1 data-content="Pokemon">Pokemon</h1>
        <div className="model"></div>

        <div className="button-container" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/AllPokemon" className="back-home-button">
          <button>Go back to Pokemon</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
