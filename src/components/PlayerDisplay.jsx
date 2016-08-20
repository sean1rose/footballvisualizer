import React from 'react';
import {LineChart, XAxis} from 'recharts';
// console.log('recharts - ', LineChart);

const PlayerDisplay = (props) => {
  // const players = props.players.map((player) => <li>{player.Name}</li>);
  // console.log('*playerdisplay - ', props);
  const player = props.searchedPlayer;
  const playerData = props.searchedPlayerData;
  const topWrAverage = props.topWrAverage;
  // console.log('PLAYER - ', player);
  // console.log('props.searchedPlayerData - ', playerData);
  console.log('topWrAverage in PlayerDisplay - ', topWrAverage);
  return (
		<div style={PlayerDisplay.styles.div}>
			<h4 style={PlayerDisplay.styles.h}>
				Name: {player.Name}
			</h4>
			<h5 style={PlayerDisplay.styles.h}>
				Position: {player.Position}
			</h5>
			<h5 style={PlayerDisplay.styles.h}>
				ADP: {player.AverageDraftPosition}
			</h5>
			<h5 style={PlayerDisplay.styles.h}>
				Projected Pts: {player.ProjectedFantasyPoints}
			</h5>
			<h5 style={PlayerDisplay.styles.h}>
				Player ID: {player.PlayerID}
			</h5>
		</div>
  );
};

PlayerDisplay.propTypes = {
  searchedPlayer: React.PropTypes.object.isRequired,
  searchedPlayerData: React.PropTypes.object.isRequired,
  topWrAverage: React.PropTypes.object.isRequired,
};


PlayerDisplay.styles = {
	div: {

	},
	h: {
		textAlign: 'center'
	}
}

export default PlayerDisplay;