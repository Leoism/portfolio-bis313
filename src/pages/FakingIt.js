import React from "react";
import '../components/SideBar';
import './Challenges.css';

class FakingIt extends React.Component {
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
        <h1>Challenge 5: Faking It</h1>
        <strong>Claim:</strong> <em>Two-year-old died from Pfizers COVID-19 Vaccine.</em><br />
        <strong>Source:</strong> <a href="https://archive.is/97SFH">https://archive.is/97SFH</a><br />
        <strong>Verdict:</strong> Fake News! <br />
        <hr />
        <p>
          This claim has been proven false. At the time the post was uploaded, the only support for the claim was a report found on the Vaccine Adverse Events Reporting System. This website collects voluntary data where anyone can submit a report without any evidence; however, doing so is a crime. After the CDC investigated the report, they found no autopsy or medical records to support the report that was filed.
        </p>
        <p>
          This leads to the question of why did somebody falsify a report? Was it to spread disinformation or was it misinformation? Let’s look at the context of the claim. The account, now suspended, is dedicated to spreading information on victims of the COVID-19 vaccine. Do we know any of their standards… kind of? They claim to be a “mamma” and refer to the Pfizer vaccine as a “covid jab.” In my opinion, these are not the types of words someone would use in a professional setting.
        </p>
        <p>
          The report was likely disinformation, meaning it was purposely meant to be inaccurate. At the time that the report was uploaded to VAERS, March 5, 2021, there were no clinical trials for 2-year-olds. It wasn’t until mid-March that Moderna and Pfizer announced clinical trials for younger people; however, still not two-year-olds. It is difficult to say that this was not disinformation. Ethically, when you upload a report on VAERS, you do it to report symptoms you or your children have had. For this to be misinformation, a parent would have had to mistaken their child to be dead, which is very difficult to do. Caroline Jack briefly touched on this issue. It is difficult to claim that something is disinformation because the original author can simply deny it by saying they were not aware of the inaccuracies in their claim. However, to mistake a two-year-old child as dead is something that is very difficult to do.
        </p>
        <p>
          Another note to make is that this claim was originally presented by a Twitter account. Was this account a part of an information operation? Meaning, was this account a puppet account trying to influence public opinion? Let’s take a look. The Covid Vaccine Victims account was created sometime in April 2021. The two-year-old victim death claim was uploaded on April 16, 2021. The account was suspended sometime on or before May 12, 2021. All posts uploaded by the account were of alleged victims of the COVID-19 vaccines suffering severe symptoms. The report that the account upload lacked some information. All reports uploaded to VAERS have an ID. When the account uploaded the report, they intentionally hid the ID from the public. This was likely an attempt to prevent others from easily finding the report. It is likely that this account was created solely to spread fear among the public. With the account uploading anything they could find, including false reports, it was enough to spread fear and to give those who do not support the vaccines even more reasons not to support it. At the end of the day, a lot of the claims made by the account had logical flaws and the report was fake. No child died from the Pfizer vaccine.
        </p>
      </div>
    );
  }
}

export default FakingIt;
