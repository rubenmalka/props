import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey, my name is {this.props.name}!</h1>;
        <p>mon nom est {this.props.lastName}!</p>
      </div>
    );
  }
}

export default Child;
