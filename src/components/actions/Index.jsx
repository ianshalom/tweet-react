import React from 'react';
import Top from '../top/Top';
import Body from '../body/Body';


class Index extends React.Component {
  render() {
    return (
      <div>
          <Top user={this.props.user} name={this.props.name} created={this.props.created}/>
          <Body body={this.props.body} retweet={this.props.retweet} favorite={this.props.favorite}/>
      </div>
    );
  }
}

export default Index;