import React from "react";
import FakingIt from "../pages/FakingIt";
import MakeSomeMemes from "../pages/MakeSomeMemes";
import MediaDeprivation from "../pages/MediaDeprivation";
import CodedBias from '../pages/CodedBias';
import ViralPossibilities from '../pages/ViralPossibilities';
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
        <button>What do you STAN for?</button>
      </div>
    );
  }
}

export default SideBar;
