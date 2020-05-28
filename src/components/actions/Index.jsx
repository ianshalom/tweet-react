import React from 'react';
import Top from '../top/Top';
import Body from '../body/Body';


class Index extends React.Component {
  render() {
    return (
      <div>
          <Top user={this.props.user} name={this.props.name} />
          <Body body={this.props.body} />
      </div>
    );
  }
}

export default Index;