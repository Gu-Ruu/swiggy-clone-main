import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http//dummy/avatar.com",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Gu-Ruu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    //Method
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" />
        <h2>Name:{name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: rudrakantverma_</h4>
      </div>
    );
  }
}

export default UserClass;
