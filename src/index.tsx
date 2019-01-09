import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>hello</div>
    )
  }
}

// Render your table
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
