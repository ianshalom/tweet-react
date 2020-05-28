import React from 'react';


class Body extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.body}</p>

        <span>Retweets: <strong>{this.props.retweet}</strong></span>   <span>Favorite Count: <strong>{this.props.favorite}</strong></span>
      </div>
    );
  }
}

export default Body;