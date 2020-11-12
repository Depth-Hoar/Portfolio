import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

   
const words = [
    {
      text: "INTJ",
      value: 15
    }, {
      text: "Blockchain",
      value: 14
    }, {
      text: "Music Production",
      value: 13
    }, {
      text: "Finance",
      value: 12
    }, {
        text: "Meditation",
        value: 11
    }, {
      text: "Economics",
      value: 10
    }, {
      text: "DeFi",
      value: 9
    }, {
      text: "Flash Loans",
      value: 8
    },
]
  
  
const options = {
    colors: ["b3f0ff", "#00caff", "#3296df", "#9fdcff", "#1ad1ff", "#66e0ff"],
    enableTooltip: false,
    deterministic: true,
    fontFamily: "helvetica",
    fontSizes: [15, 70],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1500
    };



function WordCloud() {
    return (
         <ReactWordcloud options={options} words={words} />
    );
}





export default WordCloud;

