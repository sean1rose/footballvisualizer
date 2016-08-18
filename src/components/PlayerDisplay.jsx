import React from 'react';

const PlayerDisplay = (props) => {
  // const players = props.players.map((player) => <li>{player.Name}</li>);
  // console.log('*playerdisplay - ', props);
  const player = props.searchedPlayer;
  console.log('PLAYER - ', player);
  return (
		<div>
			<h3>
				Name: {player.Name}
			</h3>
			<h4>
				Position: {player.Position}
			</h4>
			<h4>
				ADP: {player.AverageDraftPosition}
			</h4>
			<h4>
				Projected Pts: {player.ProjectedFantasyPoints}
			</h4>
		</div>
  );
};

PlayerDisplay.propTypes = {
  searchedPlayer: React.PropTypes.object.isRequired,
};

export default PlayerDisplay;