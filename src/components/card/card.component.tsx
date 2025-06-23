import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};
const Card = ({ monster }: CardProps) => {
  const { name, email } = monster;
  return (
    <div className="card-container">
      <img
        alt={`clever monster ${name}`}
        src={`https://robohash.org/${name}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
