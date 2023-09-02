import React from "react";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className="whyCompanyContainer" id="why-company">
      <h2 className="whyContainerH2">What I love about Milk Moovement</h2>
      <p>Here are some fact that I really like about the Company:</p>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          1. Milk Moovement helps farmers, transporters, and the whole dairy
          supply chain innovate and thrive
        </h4>
        <p>
          Milk Moovement aim&apos;s to help businesses streamline their
          operations, improve productivity, and enhance relationships with
          customers and employees through data and solutions.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          2. User experience is very important to Milk Moovement
        </h4>
        <p>
          Milk Moovement&apos;s products are designed with a user-centered
          approach and strive to provide an intuitive experience to help improve
          operations. I LOVE that Milk Moovement is very results-orientated and
          works closely with their customers to help figure out how they can
          best serve them.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          3. Great and supportive team environment
        </h4>
        <p>
          Respect, trust, and being compassionate are all values that are
          important to me in a work environment. I always am striving to leave a
          place better than I found it, while on a walk or at work! While
          researching Milk Moovement, I was pleased to discover that it has a strong team of people who are
          compassionate and supportive (and fun!) which makes it a special place
          to work. I would be proud to join your team!
        </p>
      </div>
    </div>
  );
};
