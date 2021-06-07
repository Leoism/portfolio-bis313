import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Intro from './pages/Intro'
import FinalReflection from './pages/FinalReflection';
import NavBar from './components/NavBar';
import Portfolio from './pages/Portfolio';

import './styles/common.css';
import './Home.css'

function Home() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/reflection' component={FinalReflection} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Home;
