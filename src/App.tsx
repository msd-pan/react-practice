import { Player } from "@/components/Player";

export const App = () => {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player1" symbol="X" />
          <Player name="player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
};
