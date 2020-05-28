import React from 'react';
import ReactDOM from 'react-dom';
import {tweets} from './tweets'
import Tweet from '../containers/Tweet';


class App extends React.Component {
  render() {
    return (
      <div>
        {tweets.map(tweet =>
            <Tweet
                tweet={tweet} />
            )}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");