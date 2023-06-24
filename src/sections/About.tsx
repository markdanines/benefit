import React from 'react';
import AboutStyles from './styles/AboutStyles';
import AboutImage from '../assets/aboutImage.svg';
import Check from '../assets/check.svg';
import Button from '../components/Button';

const About: React.FC = () => (
  <AboutStyles>
    <section className="aboutImage">
      <img src={AboutImage} alt="" />
    </section>
    <section className="aboutText">
      <h1 className="aboutHeader">
        Stay Fit and Healthy <br />
        With <span className="blueText">BeneFIT</span>
      </h1>
      <p className="aboutDescription">
        Elevate your weightlifting game with our advanced techniques and
        personalized training
      </p>
      <ul className="aboutList">
        <li>
          <img src={Check} alt="Check" />
          <span className="aboutListText">Affordable Price</span>
        </li>
        <li>
          <img src={Check} alt="Check" />
          <span className="aboutListText">Flexible Time</span>
        </li>
        <li>
          <img src={Check} alt="Check" />
          <span className="aboutListText">Professional Team</span>
        </li>
        <li>
          <img src={Check} alt="Check" />
          <span className="aboutListText">Online Option</span>
        </li>
      </ul>
      <div className="aboutBtnContainer">
        <Button>Learn More</Button>
      </div>
    </section>
  </AboutStyles>
);

export default About;
