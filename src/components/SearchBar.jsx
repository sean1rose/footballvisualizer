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
      value: '8',
    };
    this.change = this.change.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.callFantasyApi = this.callFantasyApi.bind(this);
  }

  change(event) {
    this.setState({
      value: event.target.value,
    });
    if (this.state.searchTerm != '')
      this.callFantasyApi();
  }

  handleInputChange(event) {
    // need to manage this change in state
    this.setState({
      searchTerm: event.target.value,
    });
  }

  callFantasyApi(){
    const first = this.state.searchTerm.split(" ")[0].toLowerCase();
    const last = this.state.searchTerm.split(" ")[1].toLowerCase();
    // console.log('ENTER - this.state - ', this.state);
    this.props.getPlayers();

     fantasyApi.getPlayer(first, last)
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
                  switch (this.state.value){
                    case '8':
                      fantasyApi.getTop8WideReceivers()
                        .then(players => {
                          var topWrAverage = fantasyApi.getTopWideReceiversAverage(players);
                          console.log('------------topWideRecivers AVERAGE! - ', topWrAverage);
                          this.setState({
                            topWrAverage: topWrAverage
                          })
                          this.props.getTopWideReceiversAverage(topWrAverage);
                        });
                      break;
                    case '20':
                      fantasyApi.getTop20WideReceivers()
                        .then(players => {
                          var topWrAverage = fantasyApi.getTopWideReceiversAverage(players);
                          console.log('------------topWideRecivers AVERAGE! - ', topWrAverage);
                          this.setState({
                            topWrAverage: topWrAverage
                          })
                          this.props.getTopWideReceiversAverage(topWrAverage);
                        });
                      break;
                    case '30':
                      fantasyApi.getTop30WideReceivers()
                        .then(players => {
                          var topWrAverage = fantasyApi.getTopWideReceiversAverage(players);
                          console.log('------------topWideRecivers AVERAGE! - ', topWrAverage);
                          this.setState({
                            topWrAverage: topWrAverage
                          })
                          this.props.getTopWideReceiversAverage(topWrAverage);
                        });
                      break
                  }
                  break;
                case 'RB':
                  switch(this.state.value){
                    case '8':
                      fantasyApi.getTop8RunningBacks()
                        .then(players => {
                          console.log("GOT TOP 8 RBS! - ", players);
                          // var topRBAverage = fantasyApi.getTopRunningBacksAverage(players);
                          // this.setState({
                          //   topRbAverage: topRbAverage
                          // });
                          // this.props.getTopRunningBacksAverage(topRbAverage);
                        })
                      break;
                    case '20':
                      fantasyApi.getTop20RunningBacks()
                        .then(players => {
                          console.log("GOT TOP 20 RBS! - ", players);
                          // var topRBAverage = fantasyApi.getTopRunningBacksAverage(players);
                          // this.setState({
                          //   topRbAverage: topRbAverage
                          // });
                          // this.props.getTopRunningBacksAverage(topRbAverage);
                        })
                      break;
                    case '30':
                      fantasyApi.getTop30RunningBacks()
                        .then(players => {
                          console.log("GOT TOP 30 RBS! - ", players);
                          // var topRBAverage = fantasyApi.getTopRunningBacksAverage(players);
                          // this.setState({
                          //   topRbAverage: topRbAverage
                          // });
                          // this.props.getTopRunningBacksAverage(topRbAverage);
                        })
                      break;
                  }
                  //
                  break;
                case 'QB':
                  //
                  break;
              }

            })
        });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('search - ', this.state.searchTerm);
      const firstName = this.state.searchTerm.split(" ")[0].toLowerCase();
      const lastName = this.state.searchTerm.split(" ")[1].toLowerCase();
      // console.log('ENTER - this.state - ', this.state);
      this.props.getPlayers();
      // split name

      this.callFantasyApi();

    }
  }


  render() {
    return (
      <div style={SearchBar.styles.div}>
        <h3>Compare a Player</h3>
        <input
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={SearchBar.styles.input}
        />
          <select style={SearchBar.styles.select} onChange={this.change} value={this.state.value}>
            <option value="8">vs. Top 8</option>
            <option value="20">vs. Top 20</option>
            <option value="30">vs. Top 30</option>
          </select>
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
  select: {
    marginLeft: '10px',
  }
};

export default SearchBar;
