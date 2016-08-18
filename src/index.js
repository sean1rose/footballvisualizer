import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import PlayerList from './components/PlayerList';
import PlayerDisplay from './components/PlayerDisplay';
import * as fantasyApi from './api/fantasyApi';


class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      players: [],
      searchedPlayer: {},
    });


    this.getPlayers = this.getPlayers.bind(this);
    this.processPlayers = this.processPlayers.bind(this);
    this.processSearchedPlayer = this.processSearchedPlayer.bind(this)
    this.getPlayer = this.getPlayer.bind(this);
  }

  getPlayer(player) {
    // callback called by child component to send data back to parent
    this.setState({
      searchedPlayer: player
    });
    console.log('THISSSSSS - ', player, this.state);
  }

  getPlayers() {
    fantasyApi.getPlayers(this.processPlayers);
  }

  processSearchedPlayer(payload) {
    this.setState({
      searchedPlayer: payload
    });
  }

  processPlayers(payload) {
    this.setState({
      players: payload,
    });
    console.log('THIS - ', this.state);
  }

        // <PlayerList players={this.state.players} />
  render() {
    return (
      <div>        
        <SearchBar getPlayers={this.getPlayers} getPlayer={this.getPlayer} />
        <PlayerDisplay searchedPlayer={this.state.searchedPlayer} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
