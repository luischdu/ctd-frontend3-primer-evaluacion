import React, { Component } from 'react'


export default class History extends Component {
      render() {
        return (
            <div>
                <h1 className="historia">
                    {this.props.historia}
                </h1>
            </div>
        )
    }
}
