import User from "./user";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../Utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <div>
        <h1>About</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold px-4">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is React </h2>
        {/* <User name={"Anurag verma (funtion)"} /> */}
        <UserClass name={"Anurag Verma (Class)"} location={"India"} />
        {/* <UserClass name={"Elon Verma (Class)"} location={"US"} /> */}
      </div>
    );
  }
}

export default About;
