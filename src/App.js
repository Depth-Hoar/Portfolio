import './App.css';
import 'tachyons';
import Tilt from 'react-tilt';
import 'bootstrap';
import {ThemeProvider, Button} from '@material-ui/core';
import theme from './theme'

// import {Container} from 'react-bootstrap';



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

      <div class="row column">
				<div class="small-12">
					<h2 class="text-center">My Experience</h2>
					<p class="text-center tag-line">Specialist in need. Generalist at heart.</p>
				</div>
			</div>
			<div class="list-container">
				<div class="box-1">
					<i class="fi-laptop"></i>
					<h3>Front-end</h3>
					<ul>
						<li>html(5)</li>
						<li>css(3)</li>
						<li>Javascript</li>
						<li>React</li>
						<li>Bootstrap</li>
						<li>material-UI</li>
					</ul>
				</div>
				<div class="small-12 medium-4 columns text-center experience-topics">
					<i class="fi-database"></i>
					<h3>Back-end</h3>
					<ul>
						<li>NodeJS</li>
						<li>NPM</li>
						<li>Solidity</li>
						<li>web3.js</li>
						<li>SQL</li>
					</ul>
				</div>
				<div class="small-12 medium-4 columns text-center experience-topics">
					<i class="fi-pencil"></i>
					<h3>Tools</h3>
					<ul>
						<li>Truffle Framework</li>
						<li>Blockchain</li>
						<li>Ganache</li>
						<li>Github</li>
						<li>Redux</li>
					</ul>
				</div>
			</div>
      

      </section>

      
        
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
