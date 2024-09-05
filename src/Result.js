import React from "react";

function Result ({secretNumber, term}) {
    let result;

if(term) {
    if(term > secretNumber) {
        result = 'Higher';
    }else if(term < secretNumber) {
        result = 'Lower';
    }else if (term == secretNumber) {
        result = 'Yipee! Correct';
    } else {
        result = 'Enter valid Input';
    }
}

    return <h3>You Guesssed : {result}</h3>
}

export default Result;