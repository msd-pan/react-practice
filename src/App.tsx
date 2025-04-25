import { GameBoard } from "@/components/GameBoard";
import { Player } from "@/components/Player";
import { useState } from "react";

export const App = () => {
  const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
};
