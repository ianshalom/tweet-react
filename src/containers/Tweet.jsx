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
          created={this.props.tweet.created_at}
          body={this.props.tweet.text}
          retweet={this.props.tweet.retweet_count}
          favorite={this.props.tweet.favorite_count}
          />
          <hr></hr>
      </div>
    );
  }
}

export default Tweet;