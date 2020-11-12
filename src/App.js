import './App.css';
import 'tachyons';
// import Tilt from 'react-tilt';
import {ThemeProvider, Button, Grid, Typography} from '@material-ui/core';
import theme from './theme'
// import Card from './Card'
import PortfolioCard from './PortfolioCard'
import WordCloud from './wordcloud.jsx';




function App() {
  return (

    <ThemeProvider theme={theme}>
    <div className="App">
      
      <nav class="navbar navbar-dark my-nav" >
        
      </nav>
      
      <section id="intro">
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
        
      
       
        
        <Grid container direction ="row" justify="center" alignItems="center" spacing={1}  >
          <Grid item xs={12} sm={10} md={6}>
            <PortfolioCard 
            avatarSrc={"/favicon.ico"}
            title={"Depth Token Exchange"}
            subtitle={""}
            description={"A decentralized crypto currency exchange for ERC-20 tokens like depth tokens."}
            imgSrc={"/images/Screen Shot 2020-09-21 at 7.26.33 AM.png"}
            />
          </Grid> 
          <Grid item xs={12} sm={10} md={6}>
            <PortfolioCard
            avatarSrc={"/favicon.ico"}
            title={"Brains Face"}
            subtitle={""}
            description={"Take prictures from the internet and it will recognize faces."}
            imgSrc={"/images/Screen Shot 2020-09-21 at 7.07.52 AM.png"}
            />
          </Grid> 
        </Grid>

      </section>

      <section className="about">
        <h1>About me</h1>
        <p>say more about me here</p>

      </section>
      
        
      {/* <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img style={{paddingTop: '5px'}} src="/images/Screen Shot 2020-10-31 at 2.33.55 PM.png" alt=""/> </div>
      </Tilt> */}

      <Grid container direction ="row" justify="center" alignItems="center"  >
        <Grid item xs={12} sm={11} md={6}>
          <WordCloud/>
        </Grid>      
      </Grid> 

      <section className="footer">
        
        <h1>Want to work with me?</h1>
        <p>I am currently available for work</p>
        
      </section>

      <section className="links">
        
        <h2>lets be internet BFFs (have icons with links below)</h2>
        

      </section>

      <section className="copyRight">

      </section>


    </div>

  </ThemeProvider>
    
    
  );
}





export default App;
