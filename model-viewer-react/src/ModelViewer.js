import React from 'react';
// import {Button, ButtonGroup} from 'react-bootstrap';
// import {Container, Row, Col} from 'react-bootstrap';
import './ModelViewer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@google/model-viewer';
import model_glb from "./assets/Astronaut.glb";
import model_usdz from "./assets/Astronaut.usdz";

function App() {
  return (
    <div className="main">   
        <model-viewer 
                      style={{ width: '100%', height: '750px'}}
                      src={model_glb} 
                      ar
                      autoplay 
                      camera-controls 
                      alt="A 3D model of an astronaut" 
                      background-color="#222" 
                      ios-src={model_usdz}
                      magic-leap 
                      unstable-webxr>
        </model-viewer>          
    </div>
  );
}

export default App;
