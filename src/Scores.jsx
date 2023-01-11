import React, { Component } from "react";
import StudentScores from "./StudentScores";


export default class Scores extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.bio}</p>
                

                <StudentScores 
                    scores={this.props.scores}
                />


            </div>
        )
    }
}