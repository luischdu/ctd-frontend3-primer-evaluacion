import React, { Component } from 'react'

export class Options extends Component {
    render() {
        return (
            <div className='opciones'>
                <div className="opcion">
                    <button id="A"
                        onClick={this.props.handleClick}
                        className="botones">
                        A
                    </button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id="B"
                        onClick={this.props.handleClick}
                        className="botones">
                        B
                    </button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        )
    }
}

export default Options
