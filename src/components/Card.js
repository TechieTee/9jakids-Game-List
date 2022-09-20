import { v4 as uuidv4 } from 'uuid';

const Card = ({ game }) => {
  return (
    <div
      className="Cardd"
      key={uuidv4()}
    ><div className='img'> <img
    src={game.GameImage}
    alt="game"
   
  /></div>
     
      <div className="details">
        <h3 className="title">{game.GameTitle}</h3>
        <p className="description">{game.GameDescription}</p>
      </div>
    </div>
  );
};

export default Card;
