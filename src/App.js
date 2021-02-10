import React from 'react';
import './App.css';
import Utama from './Components/utama';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Beranda from "./Components/beranda";
import TentangSaya from './Components/tentangsaya';
import Karya from './Components/karya';
import Kontak from './Components/kontak';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <p><Utama /></p>
        </div>
        <div>
        <Switch>
        <Link to="/">|Beranda </Link>
        <Link to="/tentangsaya">|Tentang Saya </Link>
        <Link to="/karya">|Karya </Link>
        <Link to="/kontak">|Kontak</Link>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
