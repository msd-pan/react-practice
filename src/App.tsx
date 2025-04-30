import { GameBoard } from "@/components/GameBoard";
import { Log } from "@/components/Log";
import { Player } from "@/components/Player";
import { useState } from "react";

type GameTurns = { square: { row: number; col: number }; player: "X" | "O" }[];

const deriveActivePlaer = (gameTurns: GameTurns) => {
  let currentPlayer: "X" | "O" = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
};

export const App = () => {
  const [gameTurns, setGameTurns] = useState<
    { square: { row: number; col: number }; player: "X" | "O" }[]
  >([]);
  // const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");

  const activePlayer = deriveActivePlaer(gameTurns);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlaer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      console.log(updatedTurns);

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
      <Log turns={gameTurns} />
    </main>
  );
};
