import './App.css';
import 'tachyons';
// import Tilt from 'react-tilt';
import {ThemeProvider, Button, Grid} from '@material-ui/core';
import theme from './theme'
// import Card from './Card'
import PortfolioCard from './PortfolioCard'
import WordCloud from './wordcloud.jsx';
import ComputerIcon from '@material-ui/icons/Computer';
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloudIcon from '@material-ui/icons/Cloud';
import Typical from 'react-typical';




function App() {
  return (

    <ThemeProvider theme={theme}>
    <div className="App">
      
      <nav class="navbar navbar-dark my-nav" >
        
      </nav>
      
      <section id="intro">
        <div>
          <center>
            <img  style={{width: 250, height: 250, borderRadius: 250}} src="/images/IMG_5767.jpg" class="mw-50 dude" alt="headshot"/>
            <div class="greeting">
              <h1 >Hi, I'm Adam</h1>
              <p  >
              
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "I'm a Blockchain Developer",
                    1000,
                    "I'm a Web Developer",
                    1000,
                    "I'm a Musician",
                    1000,
                    "I'm a Youtuber",
                    1000,
                    "I solve problems",
                    1000,
                  ]}

                />
              </p>
            </div>
            <Button href="mailto:abretzer@gmail.com" variant="contained" color="primary" className="getInTouch">
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
					{/* <p class="text-center tag-line">Specialist in need. Generalist at heart.</p> */}
				</div>
			<div class="list-container">
      <Grid container direction="row" justify="center" alignContent="center" alignItems="center" spacing={1}>
      <Grid item xs={12} sm={11} md={3}>
      
				<div className="box-1">
          <ComputerIcon color="primary" style={{ fontSize: 100 }} className="icon"/>
					
					<ul>
					<h2>Front-end</h2>
						<li>html(5)</li>
						<li>css(3)</li>
						<li>Javascript</li>
						<li>React | Redux</li>
						<li>material-UI</li>
					</ul>
				</div>
        
        </Grid>
        <Grid item xs={12} sm={11} md={3}>
				<div className="box-2">
          <StorageIcon color="primary" style={{ fontSize: 100 }} className="icon"/>
					
					<ul>
					<h2>Back-end</h2>
						<li>NodeJS</li>
						<li>NPM</li>
						<li>Solidity</li>
						<li>web3.js</li>
						<li>PostgreSQL</li>
					</ul>
				</div>
        </Grid>
        <Grid item xs={12} sm={11} md={3}>
				<div className="box-3">
          <BuildIcon color="primary" style={{ fontSize: 100 }} className="icon"/>
					
					<ul>
					<h2>Tools</h2>
						<li>Truffle Framework</li>
						<li>Blockchain</li>
						<li>Ganache</li>
						<li>OpenZeppelin</li>
						<li>Github</li>
					</ul>
				</div>
        </Grid>
      </Grid>
			</div>
      </section>

      <section className="portfolio">
        
        <h1>Projects</h1>
       
        
        <Grid container direction ="row" justify="center" alignItems="center" spacing={1}  >
          <Grid item xs={12} sm={11} md={5}>
            <PortfolioCard 
            avatarSrc={"/favicon.ico"}
            title={"Depth Token Exchange"}
            subtitle={""}
            description={"A decentralized crypto currency exchange for ERC-20 tokens like depth tokens. Must use Kovan test net with meta mask"}
            imgSrc={"/images/Screen Shot 2020-09-21 at 7.26.33 AM.png"}
            href={"https://depth-token-exchange.herokuapp.com"}
            />
          </Grid> 
          <Grid item xs={12} sm={11} md={5}>
            <PortfolioCard
            avatarSrc={"/favicon.ico"}
            title={"Brains Face"}
            subtitle={""}
            description={"Take prictures from the internet and it will recognize faces."}
            imgSrc={"/images/Screen Shot 2020-09-21 at 7.07.52 AM.png"}
            href={"https://brains-face.herokuapp.com"}
            />
          </Grid> 
        </Grid>

      </section>

      <section className="about">
          <h1>About me</h1>
          <Grid container direction="row" justify="center" alignItems="center" spacing={1}  >
          <Grid item xs={12} sm={11} md={7}>
            <p>My name is Adam. I am a self-taught Blockchain Developer based in Alberta Canada. My mane focus has mostly been Etherum smart contracts for DeFi.</p>
            {/* key words to use
            Blockchain
            DeFi
            Dapp
            desentralized applications
            Flashloan
            Ethereum
            NFT 
            Web Development 
            Altcoin
            Bitcoin
            Distributed Ledger
            Exchange
            ICO
            Wallet address
            sats*/}

          </Grid>
        </Grid>
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
        <Button href="mailto:abretzer@gmail.com" variant="contained" color="primary" >START NOW</Button>
        
        
      </section>

      <section className="links">
        
        <h2>lets be internet BFFs</h2>
        
        <div className="socialIcons">
          <a href="https://github.com/Depth-Hoar"><GitHubIcon color="primary" style={{ fontSize: 50 }}/></a>
          <a href="https://www.linkedin.com/in/adam-bretzer-64244180/"><LinkedInIcon color="primary" style={{ fontSize: 50 }}/></a>
          <a href="https://twitter.com/AdamBretzer"><TwitterIcon color="primary" style={{ fontSize: 50 }}/></a>
          <a href="https://soundcloud.com/depthhoar"><CloudIcon color="primary" style={{ fontSize: 50 }}/></a>
          <a href="https://twitter.com/AdamBretzer"><YouTubeIcon color="primary" style={{ fontSize: 50 }}/></a>
        </div>
        

      </section>

      <section id="footer">

        <p id="logo">AB</p>
        <p>Copyright &copy; 2020 | Adam Bretzer</p>

      </section>


    </div>

  </ThemeProvider>
    
    
  );
}





export default App;
