import React, { Component } from "react";
import { UserContext, ChannelContext } from "../App";
class ComponentF extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(username) => {
          return (
            <div>
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      {" "}
                      hello {username} from {channel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ComponentF;
