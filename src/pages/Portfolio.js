import React from "react";
import '../components/SideBar';
import SideBar from "../components/SideBar";
import './Challenges.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <div className="challenge-page">
        <h1>Welcome</h1>
        <p>
          To view the challenges I chose for this portfolio, click on the options
          on the left navigation bar. Each button is named after the title of the
          challenge. If you were looking for the Final Challenge, it can be found
          on the top navigation bar labeled "Reflection."
        </p>
        <p>
          Enjoy!
        </p>
      </div>,
    };
  }

  render() {
    return (
      <div className="content-container">
        <SideBar main-content={this}></SideBar>
        <div>
          {this.state.page}
        </div>
      </div>
    );
  }
}

export default Portfolio;
