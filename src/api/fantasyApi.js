import axios from 'axios';

function fetch(request, callback) {
  const config = {
    headers: {
      'Ocp-Apim-Subscription-Key': '440dcc431d9341e3915cae86b0afa30c'
    }
  };
  axios.get(request, config)
    .then(response => {
      console.log('response data - ', response.data);
      callback(response.data);
    });
}

export function getPlayers(callback) {
  const request = "https://api.fantasydata.net/v3/nfl/stats/JSON/FantasyPlayers";
  fetch(request, callback);
}

export function getPlayer(firstName, lastName) {
  const request = "https://api.fantasydata.net/v3/nfl/stats/JSON/FantasyPlayers";
  const config = {
    headers: {
      'Ocp-Apim-Subscription-Key': '440dcc431d9341e3915cae86b0afa30c'
    }
  };
  return axios.get(request, config)
    .then(response => {
      const allPlayers = response.data;
      for (var i = 0; i < allPlayers.length; i++){
        const currentPlayer = allPlayers[i];
        const currentFirst = currentPlayer.Name.split(" ")[0].toLowerCase();
        const currentLast = currentPlayer.Name.split(" ")[1].toLowerCase();
        if (firstName == currentFirst){
          if (lastName == currentLast){
            // callback(currentPlayer);
            return currentPlayer;
          }
        }
      }
    })
}

export function getPlayerData(playerId, year) {
  const request = `https://api.fantasydata.net/v3/nfl/stats/JSON/Player/${playerId}`
  // {}.PlayerSeason 

  // 2015 reg season stats
  // const request = `https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerSeasonStatsByPlayerID/${year}/${playerId}`
  const config = {
    headers: {
      'Ocp-Apim-Subscription-Key': '440dcc431d9341e3915cae86b0afa30c'
    }
  };
  return axios.get(request, config)
    .then(response => {
      console.log('in getPlayerData API call - ', response);
      const searchedPlayerData = response.data;
      return searchedPlayerData;
    })
}

// top 8
// top 12
// top 16
// top 24
export function getTopWideReceivers(){
  // Antonio Brown - 11056
  // Julio Jones - 13291
  // Odell Beckham - 16389
  // Deandre Hopkins - 14986
  // Dez Bryant - 11270
  // AJ Green - 12845
  // Allen Robinson - 16263
  // Jordy Nelson - 4556
  // const topWideReceivers = [];
  return axios.all([getPlayerData(11056), getPlayerData(13291), getPlayerData(16389), getPlayerData(14986), getPlayerData(11270), getPlayerData(12845), getPlayerData(16263), getPlayerData(4556)])
    .then(axios.spread(function(player1, player2, player3, player4, player5, player6, player7, player8){
        const topWideReceivers = [player1, player2, player3, player4, player5, player6, player7, player8];
        console.log('-------- topWideReceivers - ', topWideReceivers);
        return topWideReceivers;
    }))
}

export function getTopWideReceiversAverage(topWideReceiversArray){
  var fantasyPoints = 0; 
  var fantasyPointsPPR = 0; 
  var offensiveTouchdowns = 0;
  var receivingTargets = 0;
  var receivingTouchdowns = 0;
  var receivingYards = 0;
  var receptions = 0;
  var pointsPerTarget = 0;
  var fantasyPointsPerGame = 0;
  var fantasyPointsPerGamePPR = 0;
  var fantasyPointsPPR = 0;
  var receivingTargetsPerGame = 0;
  var receivingYardsPerGame = 0;
  var receptionsPerGame = 0;
  for (var i = 0; i < topWideReceiversArray.length; i++){
    const currentPlayer = topWideReceiversArray[i];
    const currentPlayerStats = currentPlayer.PlayerSeason;
    fantasyPoints += currentPlayerStats.FantasyPoints;
    fantasyPointsPerGame += currentPlayerStats.FantasyPoints;
    fantasyPointsPPR += currentPlayerStats.FantasyPointsPPR;
    fantasyPointsPerGamePPR += currentPlayerStats.FantasyPointsPPR;
    offensiveTouchdowns += currentPlayerStats.OffensiveTouchdowns;
    receivingTargets += currentPlayerStats.ReceivingTargets;
    receivingTargetsPerGame += currentPlayerStats.ReceivingTargets;
    receivingTouchdowns += currentPlayerStats.ReceivingTouchdowns;
    receivingYards += currentPlayerStats.ReceivingYards;
    receivingYardsPerGame += currentPlayerStats.ReceivingYards;
    receptions += currentPlayerStats.Receptions;
    receptionsPerGame += currentPlayerStats.Receptions;
  }
  pointsPerTarget = fantasyPoints / receivingTargets;
  fantasyPoints = fantasyPoints / topWideReceiversArray.length;
  fantasyPointsPPR /= topWideReceiversArray.length;
  offensiveTouchdowns /= topWideReceiversArray.length;
  receivingTargets /= topWideReceiversArray.length;
  receivingTouchdowns /= topWideReceiversArray.length;
  receivingYards /= topWideReceiversArray.length;
  receptions /= topWideReceiversArray.length;
  fantasyPointsPerGame /= topWideReceiversArray.length;
  fantasyPointsPerGame /= 16;
  fantasyPointsPerGamePPR /= topWideReceiversArray.length;
  fantasyPointsPerGamePPR /= 16;
  receivingTargetsPerGame /= topWideReceiversArray.length;
  receivingTargetsPerGame /= 16;
  receivingYardsPerGame /= topWideReceiversArray.length;
  receivingYardsPerGame /= 16;
  receptionsPerGame /= topWideReceiversArray.length;
  receptionsPerGame /= 16;
  return {
    pointsPerTarget: pointsPerTarget,
    fantasyPoints: fantasyPoints,
    fantasyPointsPerGame: fantasyPointsPerGame,
    fantasyPointsPPR: fantasyPointsPPR,
    fantasyPointsPerGamePPR: fantasyPointsPerGamePPR, 
    offensiveTouchdowns: offensiveTouchdowns,
    receivingTargets: receivingTargets,
    receivingTargetsPerGame: receivingTargetsPerGame,
    receivingTouchdowns: receivingTouchdowns,
    receivingYards: receivingYards,
    receivingYardsPerGame: receivingYardsPerGame,
    receptions: receptions,
    receptionsPerGame: receptionsPerGame,
  }
}
