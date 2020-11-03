import './App.css';
import 'tachyons';
import Tilt from 'react-tilt';
import 'bootstrap';
import {ThemeProvider, Button} from '@material-ui/core';
import theme from './theme'
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

    <ThemeProvider theme={theme}>
    <div className="App">
      
      <nav class="navbar navbar-dark my-nav" >
        
      </nav>
      
      <section id="about">
        <div>
          <center>
            <img  style={{width: 300, height: 300, borderRadius: 300}} src="/images/IMG_5767.jpg" class="mw-50 dude" alt="headshot"/>
            <div>
              <h1 class="greeting">Hi, I'm Adam</h1>
            </div>
            <Button variant="contained" color="primary" className="getInTouch">
              GET IN TOUCH
            </Button>
          </center>
        </div>

      
        {/* <div class="container">
          <div class="row">
            
            
          </div>
        </div> */}
      </section>

      <section id="experience">
        <h2>blah blah blah</h2>
      </section>

      

      {/* <div class="col-sm-4 offset-md-4 my-col">
            
              row 1 col 1
      </div> */}
        
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img style={{paddingTop: '5px'}} src="/images/Screen Shot 2020-10-31 at 2.33.55 PM.png" alt=""/> </div>
      </Tilt>

      <script></script>
      
      <ReactWordcloud options={options} words={words} />

      <h2>lets be internet BFFs (have icons with links below)</h2>

    </div>

  </ThemeProvider>
    
    
  );
}





export default App;
