import React from "react";
import '../components/SideBar';
import './Challenges.css';
import br_googl from '../images/challenge6_image1.png';
import us_yandex from '../images/challenge6_image2.png';
import mx_googl from '../images/challenge6_image3.png';
import de_googl from '../images/challenge6_image4.png';
import us_googl from '../images/challenge6_image5.png';
import jp_googl from '../images/challenge6_image6.png';
import jp_googl2 from '../images/challenge6_image7.png';
import de_googl2 from '../images/challenge6_image8.png';
import br_ddgo from '../images/challenge6_image9.png';
import br_googl2 from '../images/challenge6_image10.png';
import us_ch_googl from '../images/challenge6_image11.png';
import us_ddgo from '../images/challenge6_image12.png';
import ch_google from '../images/challenge6_image13.png';
import gdrp from '../images/challenge6_image14.png';

class CodedBias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  revealImage() {
    this.state.show = !this.state.show;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="challenge-page">
        <h1>Challenge 6: Coded Bias</h1>
        <button className="reveal-button" onClick={this.revealImage.bind(this)}>Click to Reveal Images</button>
        {this.state.show ?
          <div>
            <span class="image-title">United States Google:</span>
            <img className="challenge-image horizontal" src={us_googl} />
            <span class="image-title">United States DuckDuckGo:</span>
            <img className="challenge-image horizontal" src={us_ddgo} />
            <span class="image-title">United States Yandex:</span>
            <img className="challenge-image horizontal" src={us_yandex} />
            <span class="image-title">Germany Google:</span>
            <img className="challenge-image horizontal" src={de_googl} />
            <img className="challenge-image horizontal" src={de_googl2} />
            <span class="image-title">Japan Google:</span>
            <img className="challenge-image horizontal" src={jp_googl} />
            <img className="challenge-image horizontal" src={jp_googl2} />
            <span class="image-title">Mexico Google:</span>
            <img className="challenge-image horizontal" src={mx_googl} />
            <span class="image-title">Brazil Google:</span>
            <img className="challenge-image horizontal" src={br_googl} />
            <img className="challenge-image horizontal" src={br_googl2} />
            <span class="image-title">Brazil DuckDuckGo:</span>
            <img className="challenge-image horizontal" src={br_ddgo} />
            <span class="image-title">China Google:</span>
            <img className="challenge-image horizontal" src={ch_google} />
            <span class="image-title">China from US Google:</span>
            <img className="challenge-image horizontal" src={us_ch_googl} />
            <span class="image-title">GDRP notice in EU countries</span>
            <img className="challenge-image horizontal" src={gdrp} />
          </div> : null
        }
        <p>
          <strong>Brief Introduction:</strong>
        </p>
        <p>
          For this challenge, I took the directions and decided to go a bit more in-depth. What I did was log in to one of my VPN accounts and set my location to each of the countries listed above. Additionally, I also opened a new incognito window for each country, that way no cookies affect the results. So, what you see above is what you would see if you were to go to google and search “covid vaccine” for the first time. I only ran the search query through different search engines for the United States, Brazil, and Germany.
        </p>

        <h2>Challenge Option 1:</h2>
        <p>
          One thing to note is that every country gave information about the vaccine according to my alleged location. The resulting headlines for each country were all in their native languages and all related to their respective authorities. At this point, we should ask ourselves “are the results being affected by someone, such as local governments?” According to Cathy O’Neily, it matters who is in charge of the algorithms. They affect the end results that we see. So, who is in charge? In this instance, might not apply to other queries, I think the object in charge is some of the developers of the Google search algorithm.
        </p>
        <p>
          The Google search engine is the most popular search engine. We have to note that it is an algorithm created and maintained by humans. According to O’Neil and Benjamin, algorithms have opinions embedded in them. We can see that with the results above. Some of the developers likely thought to themselves that people would like to see information based on their geographical location. For this reason, I assume that the results displayed in each country are determined by geographical location. The developers likely conducted studies to determine these decisions. However, at the end of the day, it was an opinion based on statistics. Almost everything we do in life is an opinion. This paper is based on my research which I have embedded my opinions into.
        </p>
        <p>
          Is this separation of data a bad thing? What if somebody wants to see information about other countries? Would the data then be displayed in a way that portrays the country in a specific way? Well, I kind of tried it out with China and the results were a bit different. Searching “covid vaccine china” from the US displayed different results from searching “covid vaccine” within China. The United States version showed news headlines and vaccine data at the top, whereas China displayed links related to COVID-19 prior to displaying its data. So, I can’t conclude anything from this, but it is an interesting topic to look at.
        </p>
        <p>
          Finally, DuckDuckGo, which likes to advertise itself as “truly private,” kind of addresses the separation of data issue. However, I think in a bad way. When I search “covid vaccine” from United States, Brazil, and Germany, I get the same results. Again, O’Neil and Benjamin claim that algorithms “have opinions embedded in them.” And we can see that here. The opinions of the DuckDuckGo developers varied drastically from the Google search engine developers. Looking at my limited testing, DuckDuckGo failed to consider geographical differences. Is this stereotyping/discriminating? Did they not consider having users outside English-speaking countries? According to Benjamin datasets stereotype and that might be the case with DuckDuckGo. They did not collect a dataset large enough, or even consider the possibility of having users outside of English-speaking countries. By choosing to not have a large dataset, they neglected over half of the world. So, I agree with O’Neil and Benjamin in that algorithms have opinions embedded in them. Sometimes they are good, and sometimes the developers fail to consider some populations in their research.
        </p>
      </div>
    );
  }
}

export default CodedBias;
