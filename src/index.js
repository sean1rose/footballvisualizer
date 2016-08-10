import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import SpotifyWebApi from 'spotify-web-api-node';

const scopes = ['user-read-private', 'user-read-email'];
const redirectUri = 'http://localhost:8080/callback';
const clientId = 'bb5ef2b0db1d4d20984eca962452b2c3';
const state = 'CA';
const spotifyApi = new SpotifyWebApi();

/*
const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state);

console.log('authorizeUrl - ', authorizeUrl);
*/

spotifyApi.getAlbumTracks('392p3shh2jkxUxY2VHvlH8')
  .then((data) => {
    // console.log('channel orange tracks - ', data.body);
    for (var i = 0; i < data.body.items.length; i++){
      const current = data.body.items[i];
      console.log(current.track_number, ' - ', current.name, current.preview_url);
    }
  }, (err) => {
    console.log('error! - ', err);
  });

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hi</p>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
