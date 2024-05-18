import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   //   count2: 2,
    // };

    // console.log(props);
    console.log(`${this.props.name}  Constructor`);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default loc",
        avatar_url: "https://avatars.githubusercontent.com/u/160161512?v=4",
      },
    };
  }

  async componentDidMount() {
    console.log(`${this.props.name} Component did mount`);

    // API call
    const data = await fetch(" https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");

  }

  render() {
    // const { name1, location } = this.props;
    // const { count } = this.state;

    console.log(`${this.props.name} render`);

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h2>Count = {count}</h2> */}
        {/* <h2>Count2 = {count2}</h2> */}
        {/* <button
          onClick={() => {
            // Never update your state variable directly
            this.setState({
              count: this.state.count + 1,
              // count2: this.state.count2 + 1
            });
          }}
        >
          +
        </button> */}
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: @therohittyagi </h4>
      </div>
    );
  }
}

export default UserClass;

{
  /* <Render phase> */
}
// Parent Constructor
// Parent render
// . First (class)  Constructor
// . First (class) render
// . Secont (class)  Constructor
// . Secont (class) render

{
  /* <Commit  phase> */
  // Dom updated in single batch
}
// . First (class) Component did mount
// . Secont (class) Component did mount
// Parrent componentDidMount

// ------Mounting Cycle------
// constructor (dummy)
// render (dummy)
//        - <Html loaded dummy data>
// componentDidMount()
//        - Api Call
//        - thissetState

// ------Updating Clycle -----
// render(API Data)
//        - <Html loaded api data>
// componentDidMount()
