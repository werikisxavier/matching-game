import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack(imageSource, altImage) {
  return /*html*/ `
<article class= "card-front-back">
  <div class= "card -front">
    ${CardGame()}
  </div>

  <div class= "card -back">
    ${CardGame(imageSource, altImage)}
  </div>
</article>
`;
}


export default CardFrontBack;
