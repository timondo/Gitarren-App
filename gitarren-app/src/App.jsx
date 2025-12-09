import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/view';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css';         // Core CSS
import 'primeicons/primeicons.css';                       // Icons



class App extends Component {
  state = {  } 
  render() { 
    return (
      <Router>
        <div className='routes'>
          <Routes>
            <Route path='/' element={<View />} />

          </Routes>
        </div>
      </Router>
    );
  }
}
 
export default App;