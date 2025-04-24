import { useState } from "react";

type PlayerProps = {
  name: string;
  symbol: string;
};

export const Player = ({ name, symbol }: PlayerProps) => {
  const [originName, setOriginName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing); // schedules a state update to true
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
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
