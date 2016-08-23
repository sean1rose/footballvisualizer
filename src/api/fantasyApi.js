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
export function getTop8WideReceivers(){
  // Antonio Brown - 11056
  // Julio Jones - 13291
  // Odell Beckham - 16389
  // Deandre Hopkins - 14986
  // Dez Bryant - 11270
  // AJ Green - 12845
  // Allen Robinson - 16263
  // Jordy Nelson - 4556
  // const topWideReceivers = [];
  let promises = [];
  const topEightReceivers = [11056, 13291, 11667, 16263, 16389, 14986, 13460, 12845];
  topEightReceivers.forEach((singleReceiver) =>{
    promises.push(getPlayerData(singleReceiver));
  });
  return axios.all(promises)
    .then(axios.spread(function(player1, player2, player3, player4, player5, player6, player7, player8){
      const topEightWideReceivers = [player1, player2, player3, player4, player5, player6, player7, player8];
      console.log('top 8 wide receivers! - ', topEightWideReceivers);
      return topEightWideReceivers;
    }));

  // how can i refactor this so that i feed it an array (w/ 20 or 30 players) and then loop thru the array and add a getPlayerData function call w/ each iteration as an argument...
  /*
  return axios.all([getPlayerData(11056), getPlayerData(13291), getPlayerData(16389), getPlayerData(14986), getPlayerData(11270), getPlayerData(12845), getPlayerData(16263), getPlayerData(4556)])
    .then(axios.spread(function(player1, player2, player3, player4, player5, player6, player7, player8){
        const topWideReceivers = [player1, player2, player3, player4, player5, player6, player7, player8];
        console.log('-------- topWideReceivers - ', topWideReceivers);
        return topWideReceivers;
    }))
    */
}

export function getTop20WideReceivers(){
  /*
  Antonio (11056), Julio (13291), Brandon (11667), A-Rob (16263), Odell (16389), DeAndre (14986), Doug Baldwin (13460), AJ (12845), Calvin (6029), Decker (11182), 
  Fitz (5571), Cooks (16568), Jarvis Landry (16568), Demaryius (11197), Hurns (16253), Sammy (16003), Maclin (8914), Sanders (11063), Tavon (15215), Crabtree (9331), 
  */
  let promises = [];
  const topTwentyReceivers = [11056, 13291, 11667, 16263, 16389, 14986, 13460, 12845, 6029, 11182, 5571, 16568, 11197, 16253, 16003, 8914, 11063, 15215, 9331, 15974];
  topTwentyReceivers.forEach((singleReceiver) => {
    promises.push(getPlayerData(singleReceiver));
  });
  return axios.all(promises)
    .then(axios.spread((player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20) => {
      const top20WideReceivers = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20];
      console.log('!!!! TOP 20 WORKED!!!! - ', top20WideReceivers);
      return top20WideReceivers;
    }));
}

export function getTop30WideReceivers(){
  /*
  Jordan Matthews (15974), John Brown (16640), TY Hilton (14005), James Jones (6302), Amari Cooper (16765), Mike Evans (16597), Randall Cobb (13227), Travis Benjamin (13887), Rueben Randle (14242), Kamar Aiken (12722), Michael Floyd (14478)
  */
  let promises = [];
  const topThirtyReceivers = [11056, 13291, 11667, 16263, 16389, 14986, 13460, 12845, 6029, 11182, 5571, 16568, 11197, 16253, 16003, 8914, 11063, 15215, 9331, 15974, 15974, 16640, 14005, 6302, 16765, 16597, 13227, 13887, 14242, 12722, 14478];
  topThirtyReceivers.forEach((singleReceiver) => {
    promises.push(getPlayerData(singleReceiver));
  });
  return axios.all(promises)
    .then(axios.spread((player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20,player21,player22,player23,player24,player25,player26,player27,player28,player29,player30) => {
      const top30WideReceivers = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,player16,player17,player18,player19,player20,player21,player22,player23,player24,player25,player26,player27,player28,player29,player30];
      console.log('!!!! TOP 30 WORKED!!!! - ', top30WideReceivers);
      return top30WideReceivers;
    }));
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
