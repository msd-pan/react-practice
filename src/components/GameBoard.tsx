import { useState } from "react";

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((preGameBoard) => {
      const updatedBoard = [
        ...preGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    handleSelectSquare(rowIndex, colIndex);
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
