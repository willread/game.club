import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

import { fetchGames } from '../actions'

require('./Switcher.styl')

class Switcher extends Component {
  constructor(props) {
    super(props);

    this.searchTerm = ''

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.props.dispatch(fetchGames(this.searchTerm));
  }

  onChange(event) {
    this.searchTerm = event.target.value;
  }

  render() {
    return (
      <div className="switcher">
        <input onChange={this.onChange}></input>
        <button onClick={this.onClick}>Search</button>
        {this.props.isFetching ? 'Loading...' : ''}
        <ul>
          {this.props.games.map((game, index) =>
            <li key={index}>{game.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

Switcher.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return state.games;
}

export default connect(mapStateToProps)(Switcher);