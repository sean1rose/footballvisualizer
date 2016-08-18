// stateful component that tracks internal state, has a render method, implements other methods
import React from 'react';

class SearchBar extends React.Component {
  // declare constructor func, pass it the component's props
  constructor(props) {
    // call SearchBar's parent constructor via the super call
    // (if don't call super, then this will be undefined)...
    super(props);
    this.state = {
      searchTerm: '',
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
      // this.props.getAlbums(this.state.searchTerm);
      this.props.getPlayers();
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
  // getAlbums: React.PropTypes.func.isRequired,
  getPlayers: React.PropTypes.func.isRequired
};

SearchBar.styles = {
  div: {
    margin: 30,
    textAlign: 'center',
  },
  input: {
    width: '60%',
  },
};

export default SearchBar;
