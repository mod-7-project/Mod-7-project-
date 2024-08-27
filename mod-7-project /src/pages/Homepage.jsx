import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="banner">
      <div className="slider" style={{ '--quantity': 7 }}>
        <div className="item" style={{ '--position': 1 }}>
          <img src="/src/images/heels.jpg" alt="Heels" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <img src="/src/images/charzard2.png" alt="Charizard" />
        </div>
        <div className="item" style={{ '--position': 3 }}>
          <img src="/src/images/pikachu.jpg" alt="Pikachu" />
        </div>
        <div className="item" style={{ '--position': 4 }}>
          <img src="/src/images/found.jpg" alt="Umbreon" />
        </div>
        <div className="item" style={{ '--position': 5 }}>
          <img src="/src/images/squirt2.png" alt="Squirtle" />
        </div>
        <div className="item" style={{ '--position': 6 }}>
          <img src="/src/images/bulbasaur2.png" alt="Bulbasaur" />
        </div>
        <div className="item" style={{ '--position': 7 }}>
          <img src="/src/images/snorlax2.png" alt="Snorlax" />
        </div>
      </div>

      <div className="content">
        <div className="button-container" style={{ position: 'absolute', bottom: '2rem', right: '5px', backgroundColor: '#007bff' }}>
          <Link to="/AllPokemon" className="go-home" style={{ padding: '10px 20px', fontSize: '19px', cursor: 'pointer', color: '#fff', textDecoration: 'none' }}>
            See All Pokémon
          </Link>
        </div>
        
        <h1 data-content="Pokemon">Pokemon</h1>
        <div className="model"></div>
      </div>
    </main>
  );
};

export default HomePage;

