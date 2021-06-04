import './styles/common.css';
import './Home.css'
import NavBar from './components/NavBar';
import Portfolio from './pages/Portfolio';
import Intro from './pages/Intro'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Home() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Home;
