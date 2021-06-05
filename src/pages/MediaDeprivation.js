import React from "react";
import '../components/SideBar';
import './Challenges.css';
import introPicture from '../images/challenge1_image3.png';
import dashboardList from '../images/challenge1_image2.png';
import recapDay2 from '../images/challenge1_image5.png';
import recapDay3 from '../images/challenge1_image1.png';
import recapDay4 from '../images/challenge1_image6.png';
import recapDay5 from '../images/challenge1_image4.png';

class MediaDeprivation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day0: false,
      day1: false,
      day2: false,
      day3: false,
      day4: false,
      day5: false,
    }
  }

  revealImage(day) {
    this.state[day] = !this.state[day];
    this.setState(this.state);
  }

  render() {
    return (
      <div class="challenge-page">
        <h1>Challenge 1: Media Deprivation</h1>

        <h2>Introduction [3/31 11pm]</h2>
        Before I start this challenge, I think it is important to define some rules and terms. For this challenge, I am going to see how long I can go without online media. Since some of my classes require that I use online media, I have to define that term. To me, online media means any form of entertainment that is received from the internet. I am not saying that my classes are boring, but yea… Forms of online media include streaming services such as Netflix, YouTube, etc; social media platforms such as Twitter, instant messenger apps, Instagram, etc; any form of communication between two people using the internet; any form of entertainment from the internet. Now that I have defined online media, I am going to set some rules for myself. The first rule is that if I do end up using a form of online media, I will have to write 5 sentences on why I did it and the challenge ends. Since I am a computer science major, I have challenging classes that would be difficult to complete without the internet. For this reason, I am adding an exception to my rule and definition. I am allowed to use online media for educational purposes only. For example, my class professors like to communicate via Discord to the class. Because they use Discord, it is important that I also use it to keep up to date with the class. I cannot use this app for any other reason. The second exception is YouTube and other similar platforms. When I first started this major and up until this last quarter, I have relied heavily on YouTube videos for my learning. I believe that a lot of educational content creators have a goal of getting the viewer to come back to them; so, their explanations are some of the best I have found. For this reason, I am allowed to look up videos regarding my class assignments. I cannot use these platforms for any other reason. I also have to define what online media does not include. Online media does not include offline video games such as Pokemon, tabletop, local co-op games. Since these do not rely on the internet, I think it is perfectly valid to use these forms of media. Streaming music is iffy for me. I think I will not include it, but we’ll see how it goes. With these exceptions set, I am still going to note when I do use a platform for educational purposes. I think I have set all my exceptions to prevent me from failing any of my other classes; so, I will start the challenge now.
        <h2>Day 0 [3/31 11pm]</h2>
        I started off the challenge by submitting my introduction to the class and by tweeting that I have to do a homework assignment. The day is almost over and I started like minutes ago; so, there is not much to write about today. I’ll probably go play Pokemon now. I don’t know what I’ll do when I wake up tomorrow. Most likely, I am going to do homework for my database and network classes.
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'day0')}>Click to Reveal Image</button>
        {this.state.day0 ? <img class="challenge-image" src={introPicture} /> : null}

        <h2>Day 0 [11:35pm]</h2>
        It hasn’t been long and I almost failed already. I grabbed my phone and muscle memory opened up Twitter. As soon as I saw the blue bird, I immediately closed it. So, I am deeming this as not a loss. I remain in the challenge still.

        <h2>Day 1 [4/01 10:30pm]</h2>
        I lied. I didn’t do my homework today. Instead, I started and finished Bowsers Fury on the Switch. I will probably do my homework tomorrow because it is due on Saturday. Overall, I had a few times when I unconsciously opened up Reddit, Youtube, and Twitter. Immediately, I remembered that I was doing the challenge and closed them out right away. It has been a struggle and I felt bored most of the day. Below you can see that the apps I mentioned were opened but closed right away. I did have to use the internet to search up some stuff regarding vaccination, and my tax documents. I think for the first day, it went okay. I am not sure what I will do tomorrow because I am running out of things to do. I did try to find a book online. I spent quite a while trying to find it. It was not available as an ebook on Amazon, or any other site, which disappointed me. I probably won’t find it; so, I don’t know what I’ll do tomorrow. We’ll see.
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'day1')}>Click to Reveal Image</button>
        {this.state.day1 ? <img class="challenge-image" src={dashboardList} /> : null}

        <h2>Day 2 [4/02 10:30pm]</h2>
        I went through another day and this time I did do my homework. The professor even called out my submission (anonymously) to the entire class because I followed directions literally. The instructions said I want this output below and I did exactly what it said even the “Your own instruction here” part. The call-out part was that you should not literally output “Your own instruction here” instead actually write an instruction. After finishing my homework, I played through the post-game of Pokemon Sword and finished it. Then I watched my sister play Animal Crossing. I didn’t really use my phone today except to play some games while I was bored. I’ll put a picture below. I didn’t find out about the person that attacked the policemen at the Capitol until 6:00 pm when the news on the TV aired. If I had been online, I would have found out way earlier. I didn’t feel as painful as yesterday; so, that’s an improvement. Also, I did not open YouTube nor Twitter subconsciously. However, I did open up Reddit but immediately closed it as I saw the loading circle. I haven’t been on social media for two days now and I don’t know how to feel yet. Anyway, I am not sure what I will do tomorrow.
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'day2')}>Click to Reveal Image</button>
        {this.state.day2 ? <img class="challenge-image" src={recapDay2} /> : null}

        <h2>Day 3 [4/03 10:00pm]</h2>
        It was an interesting day with mixed feelings but currently, I am happy. My phone screen time is probably close to the lowest ever. I think my lowest was around 30 minutes back in 2019 when I did a challenge similar to this one, except it was for fun and not homework lol. I spent most of my day playing with my brother and sister. It was a good time. I don’t know where shopping apps fall into this challenge. But, I have been looking for some things. I have a GameBoy Advance SP and have been looking for a shell to customize it. I also spent the day playing through the battle tower in Pokemon Platinum. My win streak ended when I got hit with two crits in a row. That was painful lol. Also, my best friend messaged me today through regular SMS. We used to talk through messenger but I deleted the app and told them to message me instead and they did. So, I am happy haha. I do get tempted to check Twitter, Reddit, and Youtube but today I didn’t even use my phone enough to subconsciously open them. I didn’t watch the news so I don’t know if anything happened. All I know is that on April 9th I will end this challenge even if I am still going strong because I need to listen to Fearless (Taylor’s Version).
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'day3')}>Click to Reveal Image</button>
        {this.state.day3 ? <img class="challenge-image" src={recapDay3} /> : null}

        <h2>Day 4 [4/04 10:30pm]</h2>
        Today was another day in this thingy. Today, I am not sure how I felt. My sister wanted to egg hunt so we did that. I didn’t watch the news so I have no idea if anything happened. Emotionally, I am conflicted. I feel feelings unrelated to this challenge but this challenge does make me feel less connected to the world. I don’t know what the content creators I watch are making. Maybe they have a merch drop and I missed it. If that happened, I don’t know what I would do. It’s too late to drop the class without paying a fee and I wouldn’t be able to sign up for another class. So, let’s hope that doesn’t happen. I’m going to take a moment to reflect on this challenge. It has made me feel a bit anxious, I guess. But, I normally feel anxious and stressed; so, it could be unrelated. I definitely feel like I am living in the 90s and I can’t get the news without reading a newspaper or watching TV. Not using online media, to me, usually means that I have time to fill. I could have filled those times with doing homework but I didn’t. I don’t like it and I’d rather go outside, get a log, put wet paint on it, and watch it dry. I’ll do my homework, eventually, but I don’t know when. Socially, the people I normally talk to; I haven’t talked to because sometimes people only have access to social media; so, rip. Tomorrow’s a new day.
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'day4')}>Click to Reveal Image</button>
        {this.state.day4 ? <img class="challenge-image" src={recapDay4} /> : null}

        <h2>Day 5 [4/05 10:30pm]</h2>
        I haven’t looked at Reddit, Youtube, nor Twitter in 5 days now. Today I had classes; so, it was easier to stay off social media. I did though have to look up a lot of things for class. We’re learning about Network protocols, and I have a quiz on Wednesday. When I have a quiz\exam, I usually tweet that I am going to fail because then I don’t fail; so, I don’t wanna ruin my streak here and on Wednesday @ 1:00 pm I will end this challenge. Also, I need to watch YouTube. I miss rewatching Jaiden Animations videos. I also miss watching MandJTV, Valkyrae, nuzlockes, and other random videos. However, not seeing what’s trending on Twitter has actually made me a bit happier. I don’t have to deal with seeing the same 3 people trending every day. I played Pokemon Sword and caught a cool-looking pokemon.
        <button class="reveal-button" onClick={this.revealImage.bind(this, 'day5')}>Click to Reveal Image</button>
        {this.state.day5 ? <img class="challenge-image horizontal" src={recapDay5} /> : null}
        <h2>Day 6 [4/06 10:30pm]</h2>
        Well, the streak ended about 2 hours ago. What drove me to use the media were my feelings. I had nothing to do; so, I decided to check social media. I really wanted to see what the content creators I watch had done. I found out that one of them streamed with Jimmy Fallon from the Tonight Show. That made me feel proud for them. That was probably the most uplifting news. I checked YouTube and saw that other content creators I watch had uploaded videos. That made me even more excited. Checking social media made me feel better in a way. I have videos to watch now and am seeing content creators I’ve followed for years be awesome. So, I’m glad I chose today because I ended up feeling better.

        <h2>Summary/Reflection</h2>
        I started this challenge on Thursday, April 1. On the first day, I noticed a huge lack of communication between the world and me. I was no longer up to date on what was happening in the world. The first day was the toughest as I wasn’t sure to handle this challenge. Instead of resorting to online media, I spent my time playing video games. Throughout this entire challenge, that is where most of my time went into. I could have been doing productive things like homework, but I chose not to do that. I noticed that muscle memory kicked in a lot during this challenge. I would open my phone and my hand would just try to open some social media app. The world was now 100m². I didn’t know/care what was happening somewhere else. Emotionally, I felt the same as I always do for the most part. Sometimes, I would get more anxious or stressed than usual but it could have also been due to other triggers and not this challenge. When I finally ended the challenge on Tuesday April 6, I did it because I need a distraction. I checked on some of my favorite content creators, and seeing that they had new content out, I felt uplifted and better. Media deprivation showed how easily you can stop knowing what’s happening in the world. I was limited to very little area for me to participate in. I only talked with family and some of my friends. I no longer had the ability to write something and then have random people online see it. Was this challenge eye opening to me? Yes, in some ways it was. I did a similar thing some years back. However, at the time there was not a pandemic and I was actually able to see people in-person. This time, I could not see other people, or go out to places as easily as I could back then. This challenge showed me how easy it is to isolate yourself.

      </div >
    );
  }
}

export default MediaDeprivation;
