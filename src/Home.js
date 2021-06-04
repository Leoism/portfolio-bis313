import logo from './logo.svg';
import './styles/common.css';
import './Home.css'
import NavBar from './components/NavBar';

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <h2 className="container">Welcome to Leonardo's Portfolio</h2>
      <img className="images" src="https://www.freepik.com/blog/app/uploads/2016/04/CABECERA-PEQUE-01.jpg" />
      <div className="container">
        Welcome to my portfolio for the BIS 313 Course.<br />
        To view all the challenges that I completed throughout out this course,
        click on the Portfolio tab on the top of this website. <br />
        To view the final reflection/challenge, click on the Reflection tab on
        the top of this website.
      </div>
    </div>
  );
}

export default Home;
