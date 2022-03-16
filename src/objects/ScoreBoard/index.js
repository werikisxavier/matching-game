import './style.css';
import PlayerName from "../../components/PlayerName";

function ScoreBoard(PlayerOne,PlayerTwo) {
  return /*html*/ `
    <header class= "score-board">
    ${PlayerName(PlayerOne)}
    ${PlayerName(PlayerTwo)}
    </header>
    `;
}

export default ScoreBoard;
