import React from 'react';

const PlayerList = (props) => {
  const players = props.players.map((player) => <li>{player.Name}</li>);

  return (
    <ul>
      {players}
    </ul>
  );
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired,
};

export default PlayerList;