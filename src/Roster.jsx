import React, { Component } from "react";
import Scores from "./Scores";

export default class Roster extends Component {
    render() {

        // const eachScore = this.props.scores.map((score, idx) => {
        //     return (
        //         <Scores 
        //             date={score.date}
        //             score={score.score}
        //             key={`score-${idx}`}
        //         />
        //     )
        // })
        const studentArr = []
        this.props.students.forEach((student, idx) => {
            studentArr.push(
                <Scores 
                    key={idx}
                    name={student.name}
                    bio={student.bio}
                    scores={student.scores}
                />
            )
        })

        return (
            <div>
                
                {/* <h1>{this.props.name}</h1>
                <h4>{this.props.bio}</h4>
                
                {eachScore} */}


                {studentArr}


            </div>
        )
    }
}