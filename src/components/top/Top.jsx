import React from 'react';


class Top extends React.Component {
  render() {
    return (
      <div>
        Username: <strong> {this.props.user}</strong>    Name: <strong>{this.props.name}</strong> Created at: <strong>{this.props.created}</strong>
      </div>
    );
  }
}

export default Top;