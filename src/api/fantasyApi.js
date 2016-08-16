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