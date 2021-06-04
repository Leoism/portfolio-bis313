import React from "react";
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  responsiveNavBar() {
    const currState = this.state.active;
    this.setState({ active: !currState });
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className={this.state.active ? 'topnav responsive' : 'topnav'} id="nav-bar">
          <a href="#home" className="active">Home</a>
          <a href="#news">Portfolio</a>
          <a href="#reflection">Reflection</a>
          <a href="#" className="icon" onClick={this.responsiveNavBar.bind(this)}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div >
    );
  }
}

export default NavBar;
