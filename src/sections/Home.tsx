import React from 'react';
import HomeStyles from './styles/HomeStyles';
import HeaderImage from '../assets/headerImage.svg';
import HeaderDotGroupOne from '../assets/headerDotGroupOne.svg';
import HeaderDotGroupTwo from '../assets/headerDotGroupTwo.svg';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <HomeStyles>
      <img src={HeaderDotGroupOne} className="homeDotGroupOne" />
      <img src={HeaderDotGroupTwo} className="homeDotGroupTwo" />
      <section className="homeText">
        <div>
          <h1 className="homeHeaderOne">
            <span className="blueText">Transform</span> Your Body
          </h1>
          <h1 className="homeHeaderTwo">
            Transform <span className="blueText">Your Life</span>
          </h1>
        </div>
        <p className="homeDescription">
          Empowering you to achieve your fitness goals, one step at a time. Join
          our community and transform your body, mind, and life with
          personalized workouts, expert guidance, and unwavering support
        </p>
        <Button>Get Started</Button>
        <div className="homeLinks"></div>
      </section>
      <section className="homeImage">
        <img src={HeaderImage} />
      </section>
    </HomeStyles>
  );
};

export default Home;
