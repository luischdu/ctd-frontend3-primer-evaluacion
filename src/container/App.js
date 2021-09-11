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
    let option = e.target.id;
    console.log(option);
    if (this.state.contador >= 7) {
      alert("Fin del juego");
    } else if (option === "A" && this.state.seleccionPrevia !== "A") {
      this.setState({
        seleccionPrevia: option,
        contador: this.state.contador + 1,
      });
    } else if (option === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        seleccionPrevia: option,
        contador: this.state.contador + 2,
      });
    } else if (option === "B" && this.state.seleccionPrevia !== "A") {
      this.setState({
        seleccionPrevia: option,
        contador: this.state.contador + 2,
      });
    } else if (option === "B" && this.state.seleccionPrevia === "A") {
      this.setState({
        seleccionPrevia: option,
        contador: this.state.contador + 3,
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
