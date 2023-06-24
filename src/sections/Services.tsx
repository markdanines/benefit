import React from 'react';
import ServicesStyles from './styles/ServicesStyles';
import SkipRope from '../assets/skipRope.svg';
import Arm from '../assets/arm.svg';
import Cardio from '../assets/cardio.svg';
import Weight from '../assets/weight.svg';
import Diet from '../assets/diet.svg';
import Yoga from '../assets/yoga.svg';

const Services: React.FC = () => (
  <ServicesStyles>
    <h1 className="servicesHeader">
      Our <span className="blueText">Services</span>
    </h1>
    <p className="servicesDescription">
      Empowering you to achieve your fitness goals, one step at a time. Join our
      community and transform your body, mind, and life with personalized
      workouts, expert guidance, and unwavering support
    </p>
    <div className="servicesCardsContainer">
      <div className="serviceCardContainer">
        <img src={SkipRope} className="logo" />
        <div className="serviceCardTextContainer">
          <h4 className="serviceCardHeader">Skipping Rope</h4>
          <p className="serviceCardDescription">
            Unlock your strength potential with our expert weightlifting
            coaching.
          </p>
        </div>
      </div>
      <div className="serviceCardContainer">
        <img src={Arm} className="logo" />
        <div className="serviceCardTextContainer">
          <h4 className="serviceCardHeader">Arm Exercise</h4>
          <p className="serviceCardDescription">
            Get stronger, leaner, and more confident with our personalized
            weightlifting programs.
          </p>
        </div>
      </div>
      <div className="serviceCardContainer">
        <img src={Cardio} className="logo" />
        <div className="serviceCardTextContainer">
          <h4 className="serviceCardHeader">Cardio</h4>
          <p className="serviceCardDescription">
            From increased muscle mass to improved bone density - with our
            expert guidance
          </p>
        </div>
      </div>
      <div className="serviceCardContainer">
        <img src={Weight} className="logo" />
        <div className="serviceCardTextContainer">
          <h4 className="serviceCardHeader">Weight Lifting</h4>
          <p className="serviceCardDescription">
            Unlock your strength potential with our expert weightlifting
            coaching.
          </p>
        </div>
      </div>
      <div className="serviceCardContainer">
        <img src={Diet} className="logo" />
        <div className="serviceCardTextContainer">
          <h4 className="serviceCardHeader">Diet Program</h4>
          <p className="serviceCardDescription">
            Elevate your weightlifting game with our advanced techniques and
            personalized training
          </p>
        </div>
      </div>
      <div className="serviceCardContainer">
        <img src={Yoga} className="logo" />
        <div className="serviceCardTextContainer">
          <h4 className="serviceCardHeader">Yoga</h4>
          <p className="serviceCardDescription">
            Revolutionize your fitness journey with our customized weightlifting
            programs
          </p>
        </div>
      </div>
    </div>
  </ServicesStyles>
);

export default Services;
