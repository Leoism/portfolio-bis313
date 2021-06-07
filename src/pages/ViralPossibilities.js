import React from "react";
import '../components/SideBar';
import './Challenges.css';

class ViralPossibilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panik: false,
      grave: false,
      boyfriend: false,
    }
  }

  revealImage(meme) {
    this.state[meme] = !this.state[meme];
    this.setState(this.state);
  }

  render() {
    return (
      <div className="challenge-page">
        <h1>Challenge 9: Viral Possibilities</h1>
        <figure>
          <img className="challenge-image horizontal"
            alt="Image of a time machine"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/traveling-through-the-door-of-the-future-with-the-royalty-free-image-1612975514.?resize=980:*" />
          <figcaption>Sourced from: <a href="https://www.popularmechanics.com/science/a35470439/is-china-building-a-time-machine/">Popular Mechanics</a></figcaption>
        </figure>
        <p>
          <strong>Person:</strong> <em>Somebody living in the very early 1920s or whenever the assembly line was invented to make affordable cars.</em>
        </p>
        <p>
          Times change and technologies advance so quickly that it can be hard to keep up. You might be aware that during your time there was a surge in automobiles and lightbulbs. Those technologies can be difficult to get accustomed to if you have no experience with them. This same concept applies to what I am going to explain to you - the internet.
        </p>
        <p>
          You can think of the internet as a bunch of automobiles going from one place to another. What does an automobile do? It takes a person from one location to another. The internet is basically like that. You request some information and a very tiny car drives at the speed of light to the place with that information and then drives back really fast to deliver you the information. This may be shocking, but it has helped billions of people grow their knowledge.
        </p>
        <p>
          Currently, there is a pandemic going on revolving around SARS-Cov2, or the COVID-19 virus. It is kind of like the H1N1 flu of 1918. At the time, there were no vaccines available, which help in protecting you from these viruses. Today, we have vaccines available that drastically reduce the chances of you getting sick from the virus and I am going to teach you how to use the internet to get an appointment.
        </p>
        <p>
          If you recall, earlier I stated that the internet is like tiny cars getting information for you. Before you can do that, you have to choose a car. One of the most popular “cars” is Google. Google is a search engine, which is going to act as a car for us. Once we are “on the Google,” we are going to request information for “vaccines near me.” In a matter of milliseconds, the Google car is going to search every place it knows for the best information to give you. These places could be clinics, governments, news outlets, etc. Once the Google car returns, it is going to show us a lot of information and we have to parse that information.
        </p>
        <p>
          Parsing the information is a bit challenging. When the Google car returns, you can think of it returning with multiple boxes that each have a label to describe them. These boxes are called search results and we have to determine which box is the best box. Normally, what I do is look at the first box, or search results, since those are usually the best match. If that search result was not what I wanted, I do a quick look through the other search results and pick whichever one seems to contain what I want. In this case, the first search result was what we needed.
        </p>
        <p>
          Finally, all you have to do is, again, parse through the information. The vaccination site normally asks for your name, birth date, and other identifiable information. Do not worry, the website has security protocols in place to protect your information, hopefully. Once you’ve entered all your information you are all set to go to your appointment. And remember, if you ever need to find other information, hop “on the Google” and ride away.
        </p>
      </div>
    );
  }
}

export default ViralPossibilities;
