import axios from 'axios';

function fetch(request, callback) {
  const config = {
    headers: {
      'Ocp-Apim-Subscription-Key': '0302b5d54fb14225895de4f49c09b210'
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
      'Ocp-Apim-Subscription-Key': '0302b5d54fb14225895de4f49c09b210'
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

