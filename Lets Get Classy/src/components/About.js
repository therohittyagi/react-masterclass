// import User from "./User";
import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Food Odering App From Namaste js</h2>

//       <User name={"Rohit (func)"} location={"Delhi"} />
//       <UserClass name={"Rohit (class)"} location={"Delhi"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parrent componentDidMount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Food Odering App From Namaste js</h2>
        <UserClass name={"First (class)"} location={"Delhi"} />
        {/* <UserClass name={"Secont (class)"} location={"Delhi"} /> */}

      </div>
    );
  }
}

export default About;
