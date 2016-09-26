var USER_DATA = {
  name: 'Roger Li',
  username: 'rogeyroo',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13606902_10208641809499382_3313042003470816875_n.jpg?oh=58938b6ebc57177d875d093779c899de&oe=58825205'
}

 React = require('react')
var ReactDOM = require('react-dom');


var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var Link = React.createClass({
  render: function () {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com' + this.proprs.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  redner: function(){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
