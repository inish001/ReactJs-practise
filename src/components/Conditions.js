// conditional rendering

import React, { Component } from "react";
class Conditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //   // 1.if/else
    // if (this.state.isLoggedIn) {

    //   return <div>Welcome Nishant</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // 2. Element Variable using javascript variables to store element
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Nishant</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    // 3. ternary conditional operator
    // return(
    //     this.state.isLoggedIn ? 
    //     <div>Welcome Nishant</div> :
    //     <div>Welcome Guest</div>
    // )

    // 4. short circuit opertor
    return 
    (<>
        {this.state.isLoggedIn && <div>Welcome Nishant</div>}


        </>)
  }
}
export default Conditions;
