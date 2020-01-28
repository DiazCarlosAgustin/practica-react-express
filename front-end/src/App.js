import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'
// components
import index from './componentes/index'
import fotos from './componentes/fotos'

function App() {
  return (
    <div className="App">
     <Router>
      <Route path="/" exact component={index} />
      <Route path="/fotos" exact component={fotos} />
     </Router>

    </div>
  );
}

export default App;
