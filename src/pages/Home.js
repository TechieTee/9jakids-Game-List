import { useEffect, useState } from 'react';
import './styles.css';
import { Data } from "../Data"
import { v4 as uuidv4 } from 'uuid';

import TopNav from '../components/TopNav';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Search from '../components/Search';
function App() {

   const [query, setQuery] = useState('');

    const [games, setGames] = useState(Data);
   const [filteredGames, setFilteredGames] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    // setQuery(event.target.value);

    event.preventDefault();
  };

  const refresh = () => {
    // it re-renders the component
    setFilteredGames(Data);
  };

  useEffect(() => {
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) =>
          game.Topic.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 2500);
  }, [games, query]);

  const handleAcademic = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) => game.Group.toLowerCase().includes('academic'))
      );
    }, 2500);
  };

  const handleFinLit = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) =>
          game.Group.toLowerCase().includes('financial literacy')
        )
      );
    }, 2500);
  };

  const handleFinLevel = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) =>
          game.Level.toLowerCase().includes('financial literacy')
        )
      );
    }, 2500);
  };

  const handleKeyStage1 = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) => game.Level.toLowerCase().includes('key stage 1'))
      );
    }, 2500);
  };

  const handleKeyStage2 = () => {
    setFilteredGames(false);
    setTimeout(async () => {
      setFilteredGames(
        games.filter((game) => game.Level.toLowerCase().includes('key stage 2'))
      );
    }, 2500);
  };



  return (
    <div className="App">
      <TopNav/>
      <Nav/>
      <Banner/>
      <h3 className='Games'>Popular Games</h3>
      <Search
          query={query}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          Group={filteredGames.Group}
          Level={filteredGames.Level}
          handleAcademic={handleAcademic}
          handleFinLit={handleFinLit}
          handleFinLevel={handleFinLevel}
          handleKeyStage1={handleKeyStage1}
          handleKeyStage2={handleKeyStage2}
          refresh={refresh}
        />
      {!filteredGames ? (
         
           <span style={{margin:"auto"}}>loading data...</span>
          
        ) : (
          
            <div className="Grid">
            {filteredGames &&
              filteredGames.map((game) => (
                <Card game={game} key={uuidv4()} />
              ))}
          </div>
        )}
       <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
