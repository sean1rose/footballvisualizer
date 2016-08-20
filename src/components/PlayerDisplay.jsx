import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// console.log('recharts - ', BarChart);

const PlayerDisplay = (props) => {
  // const players = props.players.map((player) => <li>{player.Name}</li>);
  console.log('*playerdisplay - ', props);
  var player = props.searchedPlayer;
  console.log('*props.searchedPlayerData - ', props.searchedPlayerData);
  var playerData = props.searchedPlayerData;
  if (Object.keys(props.searchedPlayer).length > 0 && props.searchedPlayer.constructor === Object && Object.keys(props.searchedPlayerData).length > 0 && props.searchedPlayerData.constructor === Object){
	  player = props.searchedPlayer;
  	// console.log("!!!!! MADE IT IN HERE - ", player, props.searchedPlayer);
	  // console.log("!!!!! 2 - ", props);
	  playerData = props.searchedPlayerData;
	  const playerSeasonStats = props.searchedPlayerData.PlayerSeason;
	  const topWrAverage = props.topWrAverage;
	  const playerName = player.Name;
	  // console.log('#playerSeasonStats - ', playerSeasonStats);
	  const top8Avg = 'Top 8 Avg';
	  const barChartData = [
	  	// stat #1: fantasyPoints
	  	{name: 'Fantasy Pts', [playerName]: playerSeasonStats.FantasyPoints, [top8Avg]: topWrAverage.fantasyPoints},
	  	{name: 'Fantasy Pts PPR', [playerName]: playerSeasonStats.FantasyPointsPPR, [top8Avg]: topWrAverage.fantasyPointsPPR},
	  	{name: 'TDs', [playerName]: playerSeasonStats.Touchdowns, [top8Avg]: topWrAverage.offensiveTouchdowns}
	  ];
	  // console.log('#playerName - ', playerName);
	  // console.log('#playerSeasonStats.FantasyPoints - ', playerSeasonStats.FantasyPoints);
	  // console.log('#PLAYER - ', player);
	  // console.log('#props.searchedPlayerData - ', playerSeasonStats);
	  // console.log('#topWrAverage in PlayerDisplay - ', topWrAverage);
	  console.log('#barChartData - ', barChartData);
	  
  }
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