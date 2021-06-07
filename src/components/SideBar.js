import React from "react";

import CodedBias from '../pages/CodedBias';
import FakingIt from "../pages/FakingIt";
import MakeSomeMemes from "../pages/MakeSomeMemes";
import MeetMeat from "../pages/MeetMeat";
import ViralPossibilities from '../pages/ViralPossibilities';
import WhatDoYouStan from '../pages/WhatYouStan';

import './SideBar.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: props['main-content'],
    };
  }

  renderPage(page) {
    window.scrollTo(0, 0);
    switch (page) {
      case 'meat':
        this.state.portfolio.setState({ page: <MeetMeat /> })
        break;
      case 'memes':
        this.state.portfolio.setState({ page: <MakeSomeMemes /> })
        break;
      case 'faking':
        this.state.portfolio.setState({ page: <FakingIt /> });
        break;
      case 'bias':
        this.state.portfolio.setState({ page: <CodedBias /> });
        break;
      case 'viral':
        this.state.portfolio.setState({ page: <ViralPossibilities /> });
        break;
      case 'stan':
        this.state.portfolio.setState({ page: <WhatDoYouStan /> });
    }
  }

  render() {
    return (
      <div className="sidenav">
        <button onClick={this.renderPage.bind(this, 'meat')}>Meet/Meat</button>
        <button onClick={this.renderPage.bind(this, 'memes')}>Make Some Memes</button>
        <button onClick={this.renderPage.bind(this, 'faking')}>Faking It</button>
        <button onClick={this.renderPage.bind(this, 'bias')}>Coded Bias</button>
        <button onClick={this.renderPage.bind(this, 'stan')}>What Do You STAN For?</button>
        <button onClick={this.renderPage.bind(this, 'viral')}>Viral Possibilities</button>
      </div>
    );
  }
}

export default SideBar;
