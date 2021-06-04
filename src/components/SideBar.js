import React from "react";
import MediaDeprivation from "../pages/MediaDeprivation";
import './SideBar.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: props['main-content'],
    };
  }

  renderPage() {
    this.state.portfolio.setState({ page: <MediaDeprivation /> })
  }

  render() {
    return (
      <div className="sidenav">
        <button onClick={this.renderPage.bind(this)}>Media Deprivation</button>
        <button>Make Some Memes</button>
        <button>Faking It</button>
        <button>Coded Bias</button>
        <button>Viral Possibilities</button>
        <button>What do you STAN for?</button>
      </div>
    );
  }
}

export default SideBar;
