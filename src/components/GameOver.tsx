type GameOverProps = {
  winner: "X" | "O" | null;
};

export const GameOver = ({ winner }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>it's a draw!</p>}
      <p>
        <button>Rematch</button>
      </p>
    </div>
  );
};
