

import { Component } from "react";


export default class Scores extends Component{

    render() {
        
        const scoress = this.props.scores.map((score, idx) => {
            return(
                <div key={idx}>
                    <p>{score.date}</p>
                    <p>{score.score}</p>
                </div>
            )
        })

        return(
            <>
            {scoress}
            </>
        )
    }
}