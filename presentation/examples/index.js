module.exports =
`
// index.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Redbox from 'redbox-react';
import Presentation from './presentation';
const ErrorReporter = ({error}) => {
  return <Redbox error={error}/>
};
ErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};
ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation/>
  </AppContainer>,
  document.getElementById('root'),
);
if (module.hot) {
  module.hot.accept('./presentation', () => {
    const Next = require('./presentation').default;
    ReactDOM.render(
      <AppContainer errorReporter={ErrorReporter}>
        <Next/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

`;
