import React from "react";
import '../components/SideBar';
import SideBar from "../components/SideBar";
import MediaDeprivation from './MediaDeprivation';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <MediaDeprivation />,
    };
  }

  render() {
    return (
      <div className="content-container">
        <SideBar main-content={this}></SideBar>
        <div>
          {this.state.page}
        </div>
      </div >
    );
  }
}

export default Portfolio;
