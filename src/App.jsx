import React, { PureComponent } from "react";
import MyNumbers from "./MyNumbers";
import FormNumber from "./FormNumber";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      myNumbers: [],
      stock: 5,
    };
  }
  incrementCount = () => {
    if (this.state.count >= this.state.stock) {
      console.log("No hay mas stock");
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };
  decrementCount = () => {
    if (this.state.count === 0) {
      console.log("No puedes seleccionar una cantidad negativa");
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  addNumber = (num) => {
    this.setState({
      myNumbers: [...this.state.myNumbers, num],
    });
  };

  render() {
    return (
      <>
        <MyNumbers myNumbers={this.state.myNumbers} />
        <FormNumber
          count={this.state.count}
          addNumber={this.addNumber}
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
        />
      </>
    );
  }
}
