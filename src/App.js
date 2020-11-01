import './App.css';
import 'tachyons';
import Tilt from 'react-tilt';
import 'bootstrap';
// import {words, options} from './wordcloud.js';
// import {Portfolio} from './wordcloud.js';

import ReactWordcloud from 'react-wordcloud';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
]
// function SimpleWordcloud() {
//   return <ReactWordcloud options={options} words={words} />
// }

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [50, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 0,
  rotations: 0,
  rotationAngles: [0, 0],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function App() {
  return (
    <div className="App">
      
      <nav class="navbar navbar-dark my-nav" >
        <a class="navbar-brand" href="#"></a>
      </nav>
      
      <section id="about">
        <div>
          <center>
            <img  style={{width: 400, height: 400, borderRadius: 400}} src="/images/IMG_5767.jpg" class="mw-50 dude" alt="headshot"/>
          </center>
        </div>

      
        <div class="container">
          <div class="row">
            <div class="col-sm-4 offset-md-4 my-col">
            
              row 1 col 1
            </div>
            <div class="col-sm-4 offset-md-4 my-col">

            </div>
          </div>
        </div>
      </section>
        
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img style={{paddingTop: '5px'}} src="/images/Screen Shot 2020-10-31 at 2.33.55 PM.png" alt=""/> </div>
      </Tilt>

      <script></script>
      
      <ReactWordcloud options={options} words={words} />

    </div>
    
    
  );
}





export default App;
