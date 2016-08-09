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
  }

  handleInputChange(event) {
    // need to manage this change in state
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return <input onChange={this.handleInputChange} />;
  }
}

export default SearchBar;
