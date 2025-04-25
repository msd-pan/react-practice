import { useState } from "react";

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type GameBoardProps = {
  onSelectSquare: () => void;
  activePlayerSymbol: "X" | "O";
};

export const GameBoard = ({
  onSelectSquare,
  activePlayerSymbol,
}: GameBoardProps) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((preGameBoard) => {
      const updatedBoard = [
        ...preGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
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
