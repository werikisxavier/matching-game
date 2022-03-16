import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack(imageSource, altImage) {
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = (event) => {
    const $cardFrontBack = event.target.closest(".card-front-back");

    $cardFrontBack.classList.toggle("-active");
  };

  return /*html*/ `
  <article class= "card-front-back" onclick="cardFrontBack.handleClick(event)">
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
