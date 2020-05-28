import React from 'react';
import Actions from '../components/actions/Index';
import Avatar from '../components/avatar/Avatar';


class Tweet extends React.Component {
  render() {
    return (
      <div>
      <Avatar img={this.props.tweet.user.profile_image_url_https} />
      <Actions
          user={this.props.tweet.user.screen_name}
          name={this.props.tweet.user.name}
          body={this.props.tweet.text} />
      </div>
    );
  }
}

export default Tweet;