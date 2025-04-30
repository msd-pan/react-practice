type GameBoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: (string | null)[][];
};

export const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
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
