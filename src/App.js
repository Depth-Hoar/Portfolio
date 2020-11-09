import './App.css';
import 'tachyons';
import Tilt from 'react-tilt';

import {ThemeProvider, Button, Grid} from '@material-ui/core';
import theme from './theme'
// import Card from './Card'
import PortfolioCard from './PortfolioCard'

// import {Container} from 'react-bootstrap';



// import {words, options} from './wordcloud.js';
// import {WordCloud} from './wordcloud.js';

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
					<h2 class="text-center">My Experience</h2>
					<p class="text-center tag-line">Specialist in need. Generalist at heart.</p>
				</div>
			<div class="list-container">
				<div className="box-1">
					<i class="fi-laptop"></i>
					<h3>Front-end</h3>
					<ul>
						<li>html(5)</li>
						<li>css(3)</li>
						<li>Javascript</li>
						<li>React | Redux</li>
						<li>material-UI</li>
					</ul>
				</div>
				<div className="box-2">
					<i class="fi-database"></i>
					<h3>Back-end</h3>
					<ul>
						<li>NodeJS</li>
						<li>NPM</li>
						<li>Solidity</li>
						<li>web3.js</li>
						<li>PostgreSQL</li>
					</ul>
				</div>
				<div className="box-3">
					<i class="fi-pencil"></i>
					<h3>Tools</h3>
					<ul>
						<li>Truffle Framework</li>
						<li>Blockchain</li>
						<li>Ganache</li>
						<li>OpenZeppelin</li>
						<li>Github</li>
					</ul>
				</div>
			</div>
      </section>

      <section className="portfolio">
        
      
       
        
        <Grid container direction ="row" justify="center" alignItems="center"  >
          <Grid item xs={12} sm={9} md={5}>
            <PortfolioCard 
            avatarSrc={"dude"}
            title={"Depth Token Exchange"}
            subtitle={"what"}
            description={"A decentralized crypto currency exchange for ERC-20 tokens like depth tokens."}
            imgSrc={"/images/Screen Shot 2020-09-21 at 7.26.33 AM.png"}
            />
          </Grid> 
          <Grid item xs={12} sm={9} md={5}>
            <PortfolioCard
            avatarSrc={"dude"}
            title={"Brains Face"}
            subtitle={"what"}
            description={"Take prictures from the internet and it will recognize faces."}
            imgSrc={"/images/Screen Shot 2020-09-21 at 7.07.52 AM.png"}
            />
          </Grid> 
        </Grid>

        
      </section>

      
        
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img style={{paddingTop: '5px'}} src="/images/Screen Shot 2020-10-31 at 2.33.55 PM.png" alt=""/> </div>
      </Tilt>

      
      <ReactWordcloud options={options} words={words} />

      <h2>lets be internet BFFs (have icons with links below)</h2>

    </div>

  </ThemeProvider>
    
    
  );
}





export default App;
