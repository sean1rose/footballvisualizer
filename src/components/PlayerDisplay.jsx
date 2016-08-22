import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
	  	{name: 'Fantasy Pts', [playerName]: playerSeasonStats.FantasyPoints, [top8Avg]: topWrAverage.fantasyPoints},
	  	{name: 'Fantasy Pts PPR', [playerName]: playerSeasonStats.FantasyPointsPPR, [top8Avg]: topWrAverage.fantasyPointsPPR},
	  	{name: 'Targets', [playerName]: playerSeasonStats.ReceivingTargets, [top8Avg]: topWrAverage.receivingTargets},
	  	{name: 'Receptions', [playerName]: playerSeasonStats.Receptions, [top8Avg]: topWrAverage.receptions},
	  	// {name: 'Reciving Yards', [playerName]: playerSeasonStats.ReceivingYards, [top8Avg]: topWrAverage.receivingYards},
	  	{name: 'TDs', [playerName]: playerSeasonStats.Touchdowns, [top8Avg]: topWrAverage.offensiveTouchdowns},
	  	{name: 'Points per Target', [playerName]: playerPointsPerTarget, [top8Avg]: topWrAverage.pointsPerTarget}
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
    	<BarChart width={900} height={450} data={barChartData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey={playerName} fill="#8884d8" />
       <Bar dataKey={top8Avg} fill="#82ca9d" />
      </BarChart>
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