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
	  // console.log('#playerSeasonStats - ', playerPointsPerTarget);
	  var playerFantasyPointsPerGame = (playerSeasonStats.FantasyPoints / playerSeasonStats.Played);
	  var playerFantasyPointsPPRPerGame = (playerSeasonStats.FantasyPointsPPR / playerSeasonStats.Played);
	  var playerTargetsPerGame = (playerSeasonStats.ReceivingTargets / playerSeasonStats.Played);
	  var playerYardsPerGame = (playerSeasonStats.ReceivingYards / playerSeasonStats.Played);
	  var receptionsPerGame = (playerSeasonStats.Receptions / playerSeasonStats.Played);
	  console.log('props.topWrAverage - ', props.topWrAverage);
	  var position = props.searchedPlayerData.FantasyPosition == "WR" ? " WR " : props.searchedPlayerData.FantasyPosition == "RB" ? " RB " : props.searchedPlayerData.FantasyPosition == "QB" ? " QB " : '';
	  var topAvg = 'Top ' + props.topWrAverage.numberOfPlayers + position + 'Avg';
	  // var topAvg = 'Top 8 Avg';
	  
	  var barChartData = [
	  	// stat #1: fantasyPoints
	  	{name: 'Fantasy Points', [playerName]: playerSeasonStats.FantasyPoints, [topAvg]: topWrAverage.fantasyPoints},
	  	{name: 'Fantasy Pts PPR', [playerName]: playerSeasonStats.FantasyPointsPPR, [topAvg]: topWrAverage.fantasyPointsPPR},
	  	{name: 'Catches', [playerName]: playerSeasonStats.Receptions, [topAvg]: topWrAverage.receptions},
	  	{name: 'Reciving Yards', [playerName]: playerSeasonStats.ReceivingYards, [topAvg]: topWrAverage.receivingYards},
	  	{name: 'Targets', [playerName]: playerSeasonStats.ReceivingTargets, [topAvg]: topWrAverage.receivingTargets},
	  	{name: 'Touchdowns', [playerName]: playerSeasonStats.Touchdowns, [topAvg]: topWrAverage.offensiveTouchdowns},
	  	{name: 'Points per Target', [playerName]: playerPointsPerTarget, [topAvg]: topWrAverage.pointsPerTarget},
	  	{name: 'Fantasy Pts/gm', [playerName]: playerFantasyPointsPerGame, [topAvg]: topWrAverage.fantasyPointsPerGame},
	  	{name: 'PPR Fantasy Pts/gm', [playerName]: playerFantasyPointsPPRPerGame, [topAvg]: topWrAverage.fantasyPointsPerGamePPR},
	  	{name: 'Targets/gm', [playerName]: playerTargetsPerGame, [topAvg]: topWrAverage.receivingTargetsPerGame},
	  	{name: 'Receiving Yds/gm', [playerName]: playerYardsPerGame, [topAvg]: topWrAverage.receivingYardsPerGame},
	  	{name: 'Catches/gm', [playerName]: receptionsPerGame, [topAvg]: topWrAverage.receptionsPerGame}
	  ];
	  
	  var fantasyPointsData = [barChartData[0]];
	  var fantasyPointsPPRData = [barChartData[1]];
	  var receptionsData = [barChartData[2]];
	  var receivingYardsData = [barChartData[3]];
	  var targetsData = [barChartData[4]];
	  var tdData = [barChartData[5]];
	  var pointsPerTargetData = [barChartData[6]];
	  var fantasyPointsPerGameData = [barChartData[7]];
	  var fantasyPointsPPRPerGameData = [barChartData[8]];
	  var targetsPerGameData = [barChartData[9]];
	  var yardsPerGameData = [barChartData[10]];
	  var receptionsPerGameData = [barChartData[11]];

	  

	  // var fantasyPointsData = {name: 'Fantasy Points', [playerName]: playerSeasonStats.FantasyPoints, [top8Avg]: topWrAverage.fantasyPoints};
	  // var fantasyPointsPPRData = {name: 'Fantasy Pts PPR', [playerName]: playerSeasonStats.FantasyPointsPPR, [top8Avg]: topWrAverage.fantasyPointsPPR};
	  // var receptionsData = {name: 'Receptions', [playerName]: playerSeasonStats.Receptions, [top8Avg]: topWrAverage.receptions};
	  // var receivingYardsData = {name: 'Receiving Yards', [playerName]: playerSeasonStats.ReceivingYards, [top8Avg]: topWrAverage.receivingYards};
	  // var targetsData = {name: 'Targets', [playerName]: playerSeasonStats.ReceivingTargets, [top8Avg]: topWrAverage.receivingTargets};
	  // var tdData = {name: 'Touchdowns', [playerName]: playerSeasonStats.Touchdowns, [top8Avg]: topWrAverage.offensiveTouchdowns};
	  // var pointsPerTargetData = {name: 'Points per Target', [playerName]: playerPointsPerTarget, [top8Avg]: topWrAverage.pointsPerTarget};
	  // var fantasyPointsPerGameData = {name: 'Fantasy Pts/gm', [playerName]: playerFantasyPointsPerGame, [top8Avg]: topWrAverage.fantasyPointsPerGame};
	  // var fantasyPointsPPRPerGameData = {name: 'PPR Fantasy Pts/gm', [playerName]: playerFantasyPointsPPRPerGame, [top8Avg]: topWrAverage.fantasyPointsPerGamePPR};
	  // var targetsPerGameData = {name: 'Targets/gm', [playerName]: playerTargetsPerGame, [top8Avg]: topWrAverage.receivingTargetsPerGame};
	  // var yardsPerGameData = {name: 'Receiving Yds/gm', [playerName]: playerYardsPerGame, [top8Avg]: topWrAverage.receivingYardsPerGame};
	  // console.log('#playerName - ', playerName);
	  // console.log('#playerSeasonStats.FantasyPoints - ', playerSeasonStats.FantasyPoints);
	  // console.log('#PLAYER - ', player);
	  // console.log('#props.searchedPlayerData - ', playerSeasonStats);
	  // console.log('#topWrAverage in PlayerDisplay - ', topWrAverage);
	  // console.log('#barChartData - ', barChartData);
  }
  return (
		<div>
			<div style={PlayerDisplay.styles.container}>
				<img style={PlayerDisplay.styles.i} src={props.searchedPlayerData.PhotoUrl} />
				<h4 style={PlayerDisplay.styles.h}>
					{player.Name}
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
				<h5>
				PlayerID: {player.PlayerID}
				</h5>
			</div>
			<div style={PlayerDisplay.styles.div}>

				<SimpleBarChart data={fantasyPointsData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={fantasyPointsPerGameData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={fantasyPointsPPRData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={fantasyPointsPPRPerGameData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={receptionsData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={receptionsPerGameData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={receivingYardsData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={yardsPerGameData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={targetsData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={targetsPerGameData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={tdData} playerName={playerName} topAvg={topAvg} />
				<SimpleBarChart data={pointsPerTargetData} playerName={playerName} topAvg={topAvg} />

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
	container: {
		marginLeft: '40%',
		marginTop: '1%'
	},
	div: {
		display: 'flex'
	},
	i: {
		float: 'left',
		marginRight: '3%'
	},
	h: {
		// textAlign: 'center'
	}
}

export default PlayerDisplay;