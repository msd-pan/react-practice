import { useState } from "react";

type PlayerProps = {
  name: string;
  symbol: "X" | "O";
  isActive: boolean;
  onNameChange: (symbol: "X" | "O", newUserName: string) => void;
};

export const Player = ({
  name,
  symbol,
  isActive,
  onNameChange,
}: PlayerProps) => {
  const [originName, setOriginName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing); // schedules a state update to true
    if (isEditing) onNameChange(symbol, originName);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginName(event.target.value);
  };

  let playerName = <span className="player-name">{originName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        value={originName}
        onChange={handleNameChange}
        required
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
