import { useState } from "react";

import { GameBoard } from "@/components/GameBoard";
import { Log } from "@/components/Log";
import { Player } from "@/components/Player";

import { WINNING_COMBINATIONS } from "@/winning-combinations";
import { GameOver } from "@/components/GameOver";

const initialGameBoard: ("X" | "O" | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  const gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner: "X" | "O" | null = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      winner = firstSquareSymbol;
  }

  const hadDraw = gameTurns.length == 9;

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

  const handleRestart = () => {
    setGameTurns([]);
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hadDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};
