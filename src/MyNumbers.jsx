import React, { PureComponent } from "react";

export default class MyNumbers extends PureComponent {
  render() {
    return (
      <div>
        <div>Estos son tus numeros: {this.props.myNumbers}</div>
      </div>
    );
  }
}
