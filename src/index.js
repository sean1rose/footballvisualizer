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
      searchedPlayerData: {},
      topWrAverage: {},
    });


    this.getPlayers = this.getPlayers.bind(this);
    this.processPlayers = this.processPlayers.bind(this);
    this.processSearchedPlayer = this.processSearchedPlayer.bind(this)
    this.getPlayer = this.getPlayer.bind(this);
    this.getPlayerData = this.getPlayerData.bind(this);
    this.getTopWideReceiversAverage = this.getTopWideReceiversAverage.bind(this);
  }

  getPlayer(player) {
    // callback called by child component to send data back to parent
    this.setState({
      searchedPlayer: player
    });
    // console.log('THISSSSSS - ', player, this.state);
  }

  getPlayers() {
    fantasyApi.getPlayers(this.processPlayers);
  }

  getPlayerData(player) {
    this.setState({
      searchedPlayerData: player
    });
    console.log('searchedPlayerData in index.js - ', player, this.state);
  }

  getTopWideReceiversAverage(average) {
    this.setState({
      topWrAverage: average
    });
    console.log('getTopWideReceiversAverage + this.state in index.js - ', average, this.state);
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
    // console.log('THIS - ', this.state);
  }

        // <PlayerList players={this.state.players} />
  render() {
    return (
      <div>        
        <SearchBar getPlayers={this.getPlayers} getPlayer={this.getPlayer} getPlayerData={this.getPlayerData} getTopWideReceiversAverage={this.getTopWideReceiversAverage}/>
        <PlayerDisplay searchedPlayer={this.state.searchedPlayer} searchedPlayerData={this.state.searchedPlayerData} topWrAverage={this.state.topWrAverage} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
