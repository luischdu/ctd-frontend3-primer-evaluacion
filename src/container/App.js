import React, { Component } from "react";
import History from "../components/History";
import Log from "../components/Log";
import Options from "../components/Options";
import data from "../components/data.json";

let historial = [];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seleccionPrevia: "",
      contador: 0,
    };
  }

  componentDidUpdate() {
    historial.push(this.state.seleccionPrevia);
  }

  handleClick = (e) => {
    if (e.target.id === "A") {
      this.setState({
        seleccionPrevia: "A",
        contador: this.state.contador + 1,
      });
    } else {
      this.setState({
        seleccionPrevia: "B",
        contador: this.state.contador + 1,
      });
    }
  };


  render() {
    return (
      <div className="App">
        <div className="layout">
          
          <History historia={data[this.state.contador].historia} />
          <Options
            handleClick={this.handleClick}
            opcionA={data[this.state.contador].opciones.a}
            opcionB={data[this.state.contador].opciones.b}
          />
          <Log
            seleccionPrevia={this.state.seleccionPrevia}
            historial={historial.map((selecion, index) => (
              <li key={index}>{selecion}</li>
            ))}
          />
        </div>
      </div>
    );
  }
}

export default App;
