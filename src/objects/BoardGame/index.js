import CardGame from "../../components/CardGame";
import PlayerName from "../../components/PlayerName";
import "./style.css";

function BoardGame(amountCards) {
  
  const $htmlCardGame = CardGame();
  const $playerOne = PlayerName(1);
  const $playerTwo = PlayerName(2);
  const $htmlContent = $htmlCardGame.repeat(amountCards);

  return `
  <section class="board-game">
  ${$playerOne}
  ${$playerTwo}
  ${$htmlContent}
  </section>
  `;

}

export default BoardGame;
