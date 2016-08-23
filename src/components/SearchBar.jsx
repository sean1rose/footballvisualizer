// stateful component that tracks internal state, has a render method, implements other methods
import React from 'react';
import * as fantasyApi from '../api/fantasyApi';

class SearchBar extends React.Component {
  // declare constructor func, pass it the component's props
  constructor(props) {
    // call SearchBar's parent constructor via the super call
    // (if don't call super, then this will be undefined)...
    super(props);
    this.state = {
      searchTerm: '',
      searchedPlayer: {},
      searchedPlayerData: {},
      topWrAverage: {},
      topRbAverage: {},
      topQbAverage: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    // need to manage this change in state
    this.setState({
      searchTerm: event.target.value,
    });
  }


  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('search - ', this.state.searchTerm);
      const firstName = this.state.searchTerm.split(" ")[0].toLowerCase();
      const lastName = this.state.searchTerm.split(" ")[1].toLowerCase();
      console.log(firstName + lastName);
      this.props.getPlayers();
      // split name

      // fantasyApi.getPlayers(this.processPlayers);

      fantasyApi.getPlayer(firstName, lastName)
        .then(dataObj => {
          // set player obj as state
          this.setState({
            searchedPlayer: dataObj
          });
          console.log('1state - ', this.state.searchedPlayer);
          this.props.getPlayer(dataObj);

          fantasyApi.getPlayerData(dataObj.PlayerID, '2015REG')
            .then(response => {
              console.log('searchBar getPlayerData call response - ', response);
              this.setState({
                searchedPlayerData: response,
              });
              console.log('!!!state in search bar after call - ', this.state);
              this.props.getPlayerData(response);

              // if dataObj.FantasyPosition == 'WR' -> getTopWideReceivers
              // console.log('response - ', response);
              switch (response.FantasyPosition){
                case 'WR':
                fantasyApi.getTop8WideReceivers()
                  .then(players => {
                    var topWrAverage = fantasyApi.getTopWideReceiversAverage(players);
                    console.log('------------topWideRecivers AVERAGE! - ', topWrAverage);
                    this.setState({
                      topWrAverage: topWrAverage
                    })
                    this.props.getTopWideReceiversAverage(topWrAverage);
                  })
                  break;
                case 'RB':
                  //
                  break;
                case 'QB':
                  //
                  break;
              }

            })



        });

    }
  }


  render() {
    return (
      <div style={SearchBar.styles.div}>
        <h3>Search for a Player</h3>
        <input
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={SearchBar.styles.input}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getPlayers: React.PropTypes.func.isRequired,
  getPlayer: React.PropTypes.func.isRequired,
  getPlayerData: React.PropTypes.func.isRequired,
};

SearchBar.styles = {
  div: {
    textAlign: 'center',
  },
  input: {
    width: '60%',
  },
};

export default SearchBar;
