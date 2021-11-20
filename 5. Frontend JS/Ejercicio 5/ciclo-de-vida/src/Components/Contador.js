import React from "react";

export default class Contador extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log("El componente Contador será eliminado");
  }
  render() {
    return <h3>{this.props.contador}</h3>;
  }
}
