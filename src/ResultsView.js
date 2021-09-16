import React from 'react';

export default class ResultsView extends React.Component {
  render() {
    return (
      <ul>
        {this.props.results.map((result) => <li key={Math.random(3000.0)}>{result}</li>)}
      </ul>
    )
  }
}
