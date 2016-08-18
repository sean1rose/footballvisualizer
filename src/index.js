import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import PlayerList from './components/PlayerList';
import * as fantasyApi from './api/fantasyApi';


class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      players: [],
    });


    this.getPlayers = this.getPlayers.bind(this);
    this.processPlayers = this.processPlayers.bind(this);
  }


  getPlayers() {
    fantasyApi.getPlayers(this.processPlayers);
  }



  processPlayers(payload) {
    this.setState({
      players: payload,
    })
  }

  render() {
    return (
      <div>        
        <SearchBar getPlayers={this.getPlayers} />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
