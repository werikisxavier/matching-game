import './style.css';
import CardGame from "../CardGame";

function CardFrontBack(imageSource,altImage) {
  return /*html*/ `
<article class= "card-front-back">
${CardGame()}
${CardGame(imageSource,altImage)}
</article>
`;
}

export default CardFrontBack;
