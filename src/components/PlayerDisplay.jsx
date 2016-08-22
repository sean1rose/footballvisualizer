import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SimpleBarChart from './SimpleBarChart.jsx';
// console.log('recharts - ', BarChart);

const PlayerDisplay = (props) => {
  // const players = props.players.map((player) => <li>{player.Name}</li>);
  console.log('*playerdisplay - ', props);
  var player = props.searchedPlayer;
  console.log('*props.searchedPlayerData - ', props.searchedPlayerData);
  var playerData = props.searchedPlayerData;
  // need to do this cuz React renders it right away initially, where values are still undefined, resulting in errors
  if (Object.keys(props.searchedPlayer).length > 0 && props.searchedPlayer.constructor === Object && Object.keys(props.searchedPlayerData).length > 0 && props.searchedPlayerData.constructor === Object){
	  player = props.searchedPlayer;
  	// console.log("!!!!! MADE IT IN HERE - ", player, props.searchedPlayer);
	  // console.log("!!!!! 2 - ", props);
	  playerData = props.searchedPlayerData;
	  const playerSeasonStats = props.searchedPlayerData.PlayerSeason;
	  const topWrAverage = props.topWrAverage;
	  var playerName = player.Name;
	  var playerPointsPerTarget = (playerSeasonStats.FantasyPoints / playerSeasonStats.ReceivingTargets);
	  console.log('#playerSeasonStats - ', playerPointsPerTarget);
	  var top8Avg = 'Top 8 Avg';
	  var barChartData = [
	  	// stat #1: fantasyPoints
	  	{name: 'Fantasy Points', [playerName]: playerSeasonStats.FantasyPoints, [top8Avg]: topWrAverage.fantasyPoints},
	  	{name: 'Fantasy Pts PPR', [playerName]: playerSeasonStats.FantasyPointsPPR, [top8Avg]: topWrAverage.fantasyPointsPPR},
	  	{name: 'Targets', [playerName]: playerSeasonStats.ReceivingTargets, [top8Avg]: topWrAverage.receivingTargets},
	  	{name: 'Receptions', [playerName]: playerSeasonStats.Receptions, [top8Avg]: topWrAverage.receptions},
	  	{name: 'Reciving Yards', [playerName]: playerSeasonStats.ReceivingYards, [top8Avg]: topWrAverage.receivingYards},
	  	{name: 'Touchdowns', [playerName]: playerSeasonStats.Touchdowns, [top8Avg]: topWrAverage.offensiveTouchdowns},
	  	{name: 'Points per Target', [playerName]: playerPointsPerTarget, [top8Avg]: topWrAverage.pointsPerTarget}
	  ];
	  var fantasyPointsData = [barChartData[0]];
	  var fantasyPointsPPRData = [barChartData[1]];
	  var receptionsData = [barChartData[2]];
	  var receivingYardsData = [barChartData[3]];
	  var targetsData = [barChartData[4]];
	  var tdData = [barChartData[5]];
	  var pointsPerTargetData = [barChartData[6]];

	  // console.log('#playerName - ', playerName);
	  // console.log('#playerSeasonStats.FantasyPoints - ', playerSeasonStats.FantasyPoints);
	  // console.log('#PLAYER - ', player);
	  // console.log('#props.searchedPlayerData - ', playerSeasonStats);
	  // console.log('#topWrAverage in PlayerDisplay - ', topWrAverage);
	  console.log('#barChartData - ', barChartData);
  }
  return (
		<div>
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
			<div style={PlayerDisplay.styles.div}>
				<SimpleBarChart data={fantasyPointsData} playerName={playerName} top8Avg={top8Avg} />
				<SimpleBarChart data={fantasyPointsPPRData} playerName={playerName} top8Avg={top8Avg} />
				<SimpleBarChart data={receptionsData} playerName={playerName} top8Avg={top8Avg} />
				<SimpleBarChart data={receivingYardsData} playerName={playerName} top8Avg={top8Avg} />
				<SimpleBarChart data={targetsData} playerName={playerName} top8Avg={top8Avg} />
				<SimpleBarChart data={tdData} playerName={playerName} top8Avg={top8Avg} />
				<SimpleBarChart data={pointsPerTargetData} playerName={playerName} top8Avg={top8Avg} />
			</div>
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
		display: 'flex'
	},
	h: {
		textAlign: 'center'
	}
}

export default PlayerDisplay;