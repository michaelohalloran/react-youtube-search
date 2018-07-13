import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
        //set the term for our search
        this.props.onSearchTermChange(event.target.value);
    }

  render() {
    return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={this.onInputChange}
            />
            {/* Value of the input: {this.state.term} */}
        </div>
    )
  }
}

export default SearchBar;
