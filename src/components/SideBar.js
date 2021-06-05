import React from "react";

import CodedBias from '../pages/CodedBias';
import FakingIt from "../pages/FakingIt";
import MakeSomeMemes from "../pages/MakeSomeMemes";
import MediaDeprivation from "../pages/MediaDeprivation";
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
    switch (page) {
      case 'media':
        this.state.portfolio.setState({ page: <MediaDeprivation /> })
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
        <button onClick={this.renderPage.bind(this, 'media')}>Media Deprivation</button>
        <button onClick={this.renderPage.bind(this, 'memes')}>Make Some Memes</button>
        <button onClick={this.renderPage.bind(this, 'faking')}>Faking It</button>
        <button onClick={this.renderPage.bind(this, 'bias')}>Coded Bias</button>
        <button onClick={this.renderPage.bind(this, 'viral')}>Viral Possibilities</button>
        <button onClick={this.renderPage.bind(this, 'stan')}>What Do You STAN For?</button>
      </div>
    );
  }
}

export default SideBar;
