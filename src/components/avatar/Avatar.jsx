import React from 'react';


class Avatar extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
      </div>
    );
  }
}

export default Avatar;