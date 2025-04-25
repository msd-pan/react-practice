import { GameBoard } from "@/components/GameBoard";
import { Log } from "@/components/Log";
import { Player } from "@/components/Player";
import { useState } from "react";

export const App = () => {
  const [gameTurns, setGameTurns] = useState<
    { square: { row: number; col: number }; player: "X" | "O" }[]
  >([]);
  const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer: "X" | "O" = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X")
        currentPlayer = "O";

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
};
