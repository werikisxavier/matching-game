import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";

function BoardGame(amountCards) {
  
  const $htmlCardFrontBack = CardFrontBack("logo-css","Logo CSS");
  const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

  return `
  <section class="board-game">
  ${$htmlContent}
  </section>
  `;

}

export default BoardGame;
