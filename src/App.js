import './App.css';
import 'tachyons';
import Tilt from 'react-tilt';
import 'bootstrap';




function App() {
  return (
    <div className="App">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img style={{paddingTop: '5px'}} src="/images/Screen Shot 2020-10-31 at 2.33.55 PM.png" alt=""/> </div>
      </Tilt>
      
      <div>
        <center>
          <img  style={{width: 400, height: 400, borderRadius: 400}} src="/images/IMG_5767.jpg" class="mw-50" alt="headshot"/>
         
        </center>
      </div>

        <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-4 my-col">
                row 1 col 1
              </div>
            </div>
          </div>
        </section>


    </div>
    
    
  );
}

export default App;
