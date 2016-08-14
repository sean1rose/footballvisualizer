import axios from 'axios';

// import SpotifyWebApi from 'spotify-web-api-node';
// const scopes = ['user-read-private', 'user-read-email'];
// const redirectUri = 'http://localhost:8080/callback';
// const clientId = 'bb5ef2b0db1d4d20984eca962452b2c3';
// const state = 'CA';
// const spotifyApi = new SpotifyWebApi();

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      console.log('response data - ', response.data);
      callback(response.data);
    });
}

export function getAlbums(artist, callback) {
  const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
  fetch(request, callback);
}

export function getTracks(albumId, callback) {
  const request = `https://api.spotify.com/v1/albums/${albumId}`;
  fetch(request, callback);
}


// export function getAlbums(artist, callback) {
//  const artist = `artist:${artist}`;
//  spotifyApi.getAlbums
// }

// spotifyApi.getAlbumTracks('392p3shh2jkxUxY2VHvlH8')
//   .then((data) => {
//     // console.log('channel orange tracks - ', data.body);
//     for (var i = 0; i < data.body.items.length; i++){
//       const current = data.body.items[i];
//       console.log(current.track_number, ' - ', current.name, current.preview_url);
//     }
//   }, (err) => {
//     console.log('error! - ', err);
//   });
