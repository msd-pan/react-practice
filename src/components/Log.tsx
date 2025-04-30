type LogProps = {
  turns: { square: { row: number; col: number }; player: "X" | "O" }[];
};

export const Log = ({ turns }: LogProps) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.col}${turn.square.row}`}>
          {turn.player} selected col {turn.square.col}, row {turn.square.row}
        </li>
      ))}
    </ol>
  );
};
