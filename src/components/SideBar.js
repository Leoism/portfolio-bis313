import React from "react";
import MakeSomeMemes from "../pages/MakeSomeMemes";
import MediaDeprivation from "../pages/MediaDeprivation";
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
    }
  }

  render() {
    return (
      <div className="sidenav">
        <button onClick={this.renderPage.bind(this, 'media')}>Media Deprivation</button>
        <button onClick={this.renderPage.bind(this, 'memes')}>Make Some Memes</button>
        <button>Faking It</button>
        <button>Coded Bias</button>
        <button>Viral Possibilities</button>
        <button>What do you STAN for?</button>
      </div>
    );
  }
}

export default SideBar;
