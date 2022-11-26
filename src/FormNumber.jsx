import React, { PureComponent } from "react";

export default class FormNumber extends PureComponent {
  render() {
    return (
      <>
        <div>Contador: {this.props.count}</div>
        <button onClick={() => this.props.incrementCount()}>Incrementar</button>
        <button onClick={() => this.props.decrementCount()}>Decrementar</button>
        <button onClick={() => this.props.addNumber(this.props.count)}>
          Add
        </button>
      </>
    );
  }
}
