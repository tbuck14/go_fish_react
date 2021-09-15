import React from 'react';

export default class ResultsView extends React.Component {
  render() {
    return (
      <ul>
        {this.props.results.map((result) => <li>{result}</li>)}
      </ul>
    )
  }
}
