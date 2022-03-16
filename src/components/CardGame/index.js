import "./style.css";

function CardGame(imageSource = "alura-pixel", altImage = "Alura Logo") {
  return `
    <article class= "card-game">
        <img src="src/images/${imageSource}.png" alt="${altImage}">
    </article>
    `;
}

export default CardGame;
