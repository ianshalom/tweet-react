import React from 'react';


class Body extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Body;