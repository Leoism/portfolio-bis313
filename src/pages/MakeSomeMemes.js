import React from "react";
import '../components/SideBar';
import panikMeme from '../images/challenge4_image3.jpg';
import graveMeme from '../images/challenge4_image1.jpg';
import boyfriendMeme from '../images/challenge4_image2.jpg';
import './Challenges.css';

class MakeSomeMemes extends React.Component {
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
        <h1>Challenge 4: Make Some Memes</h1>
        <h2>Panik Meme</h2>
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'panik')}>Click to Reveal Image</button>
        {this.state.panik ? <img class="challenge-image" src={panikMeme} /> : null}
        I chose this image because I believe the hypersignification of this image is strongly similar to the Photo Fads concept. The repetition that occurs here is going from being calm to panicking. This is shown by the hands that appear on the head of the character. Although the photo fads concept has subjects repeating a pose in different scenarios, the pose is an integral part of the meme. Without the pose in this image, the image would not convey the same effect. Memes that use this template usually have the subject panic, then find a resolution, but that resolution also has a problem. In my meme, I decided to capture mother’s day. With mother’s day nearing, people begin to look for gifts. I realized that I do not have a gift for mother’s day, but there’s still a week left! Oh wait, there’s only one week left! The events of this story repeat the same pattern as other memes using the template. The meme captures the forgetful child that forgets about mothers day. So, I think the meme has a potential impact on other children that have also forgotten that Mother’s day is this Sunday, in the US only.

        <h2>Grant Gustin Over Grave Meme</h2>
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'grave')}>Click to Reveal Image</button>
        {this.state.grave ? <img class="challenge-image" src={graveMeme} /> : null}
        I chose this image because I believe it conveys some of the concepts of the Photo Fads concept that Shifman talks about, as well as some of the concepts of reaction photoshops. This image strongly focuses on the pose that the man makes. In photo fads, the pose is an integral part of the image. In this image, the pose made implies disrespect to the buried person. Additionally, this image conveys a memetic effect similar to that of ‘Disaster Girl.’ The image gives off the effect that it is photoshopped due to common traditions. It is normally not appropriate to go up to a grave and make a peace sign while smiling. My meme portrays common characteristics that other memes with this template share. The man tends to represent a subject that ‘one-ups’ the grave subject. My meme does just that. Covid-19 ‘one-uped’ my social life because it went down to the grave, literally. The image could potentially have some type of historical impact. It captures a moment in which most of the world is experiencing the effects of a pandemic, isolation. There are studies that show that anxiety among people has increased over the past year, and I think this image does a good job of capturing that.

        <h2>Distracted Boyfriend Meme</h2>
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'boyfriend')}>Click to Reveal Image</button>
        {this.state.boyfriend ? <img class="challenge-image horizontal" src={boyfriendMeme} /> : null}
        I chose this image because I felt it related to what Shifman called reaction photoshop and stock character macros. Although this is clearly not photoshopped, I think the hypersignification that takes place is similar. This image highlights what is likely a constructed nature, similar to the ‘Situation Room’ meme that Shifman talks about. Without knowing the background of this image, the line between truth and fiction is blurred. This image also conveys the concepts that Shifman talked about in stock character macros. It constructs the stereotype that the boyfriend is always looking for the next girl. The portrayal of the image takes it to an extreme with the man looking at another woman without thinking about his current girlfriend. I chose the text because it is something that relates to me and I feel that there could potentially be others that also share the same feelings as me. Memes that use this template usually revolve around one thing being better than another. My meme partakes in this repetition and implies that doing nothing is better than doing homework. The impact of this meme is minimal. It does not capture a historical moment like the ‘Situation Room’ nor capture any contemporary symbolism. This image simply conveys the feelings of some guy in college.

      </div >
    );
  }
}

export default MakeSomeMemes;
