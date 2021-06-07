import React from "react";
import '../components/SideBar';
import './Challenges.css';

class FinalReflection extends React.Component {
  render() {
    return (
      <div className="challenge-page">
        <h1>Final Challenge: Reflection</h1>
        <p>
          As a computer science major and active web developer, I am reasonably familiar with how the internet works. I’ve taken courses on networking, algorithms, hardware, and game development. So, I think I know a lot about the workings of the internet and how the internet works programmatically. However, I had never had the opportunity to use my knowledge outside of software engineering. This class allowed me to apply my knowledge in a different way that I was not used to.
        </p>
        <p>
          You can find an example of me using my CS knowledge in the “Coded Bias” challenge. I thought of ways to make the results more believable by using VPNs to make the internet believe I am in a different country. The “Coded Bias” was also the challenge that challenged my thinking the most. I remember that week we studied how algorithms can discriminate against people due to not enough large datasets and opinions being embedded in them. I was confused for a bit because when I think of algorithms, I think of mathematical solutions that have been proven to work. There are proofs on why quick sorting averages an n log n time complexity and more proofs on why Dijkstra’s algorithm can f
          ind the shortest path between locations. This is what the CS classes at UWB taught me.
        </p>
        <p>
          However, I started to think a bit more and started figuring out that the algorithms we were discussing weren’t the mathematical formulas; instead, we focused on machine learning. When I made that distinction, the “Coded Bias” challenge and the corresponding modules made sense. Machine learning is a shady area in terms of trying to get everything right. No matter how large your dataset is, there will always be an edge case somewhere else. It’s challenging to make machine learning algorithms work for everybody, and it is probably impossible, I think.
        </p>
        <p>
          Before this class, I was aware that machine learning is heavily reliant on the size of the dataset. We see companies like Google trying to improve their camera software to better adapt to people of color, and that is great. I think trying to be inclusive is something that every software engineer needs to consider, and the “Coded Bias” modules served as a reminder of that to me. As a software engineer, I want to help people. It is something that I enjoy, and if I want to help people, I have to consider who my audience is. I can’t assume everybody is from the United States, which is what this class taught me - to consider the dataset.
        </p>
        <p>
          I don’t work with machine learning, but in web development, many considerations need to happen. Many older folks still use internet explorer 9, and as web developers, we have to adapt to that. We also have to incorporate accessibility in our web pages, that the website can be easily navigated, that it can be accessed on mobile devices, and that the website doesn’t break on slow internet connections like 2G, yes some people still use 2G. Making a website is a lot more complicated than it seems, and I plan to take the content from the Coded Bias modules and try to use them to try and be more inclusive.
        </p>
        <p>
          I talked a lot about the Coded Bias modules. It was fun, but my favorite module week was the “Media Literacy” modules. I live in a rural town, and digital media illiteracy is big here. When I graduated, my high school did not offer computer science courses. There was only one class that was one semester-long that revolved around learning digital tools. However, that class heavily focused on teaching how to use a keyboard and how to use Microsoft Word. I guess the school just assumed that the younger generations were able to grow up with the internet and learned through trial-and-error. That’s great, but there is so much more than could have taught.
        </p>
        <p>
          Around here, I see a lot of older folks that still use flip phones. A lot of people don’t know how to use the internet properly. There is not a push to try and teach people how to navigate the internet and how to spot fake news. So, when I did the “Viral Possibilities” challenge, I was excited. I finally had a chance to sit down and explain how to use the internet in terms that many people would understand. Like I mentioned earlier, I want to help people. This challenge refreshed the issue of media illiteracy that the town I live in faces and gave me even more motivation to try and come up with a good explanation. I might be biased here, but I think my explanation was excellent.
        </p>
        <p>
          Finally, I would like to close off this reflection by saying that this generation and future generations will heavily rely on the internet for a very long time. Maybe the internet might be replaced someday, but we’ll depend on whatever it evolves into. Either way, we will likely have to face the issue of fake news for the rest of our lives, and we have to take some time to educate ourselves on how to spot fake news.  We have to learn the difference between misinformation and disinformation. We have to take a look at who we are getting our information from. Is it some Twitter account that was made two days ago, or is it a neutral news outlet with a good reputation? I want people to consider these things the next time they begin reading a news article because fake news can hurt people. With the rise of deep fakes, being able to spot fake news, photos, or videos will be a lot harder, and we should start training now.
        </p>
      </div>
    );
  }
}

export default FinalReflection;
