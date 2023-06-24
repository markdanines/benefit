import React from 'react';
import FooterStyles from './styles/FooterStyles';
import { Sections } from '../App';

interface FooterProps {
  setCurrentSection: (section: Sections) => void;
  homeRef?: React.MutableRefObject<any>;
  aboutRef: React.MutableRefObject<any>;
  servicesRef: React.MutableRefObject<any>;
  pricingRef: React.MutableRefObject<any>;
  testimonialsRef: React.MutableRefObject<any>;
  contactRef: React.MutableRefObject<any>;
}

const Footer: React.FC<FooterProps> = ({
  setCurrentSection,
  aboutRef,
  servicesRef,
  pricingRef,
  testimonialsRef,
  contactRef,
}: FooterProps) => {
  const navClickHandler = (section: Sections) => {
    switch (section) {
      case Sections.HOME:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentSection(Sections.HOME);
        break;
      case Sections.ABOUT:
        window.scrollTo({
          top: aboutRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
        setCurrentSection(Sections.ABOUT);
        break;
      case Sections.SERVICES:
        window.scrollTo({
          top: servicesRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
        setCurrentSection(Sections.SERVICES);
        break;
      case Sections.PRICING:
        window.scrollTo({
          top: pricingRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
        setCurrentSection(Sections.PRICING);
        break;
      case Sections.TESTIMONIALS:
        window.scrollTo({
          top: testimonialsRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
        setCurrentSection(Sections.TESTIMONIALS);
        break;
      case Sections.CONTACT:
        window.scrollTo({
          top: contactRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
        setCurrentSection(Sections.CONTACT);
        break;
      default:
        break;
    }
  };

  return (
    <FooterStyles>
      <section className="footerTop">
        <div className="footerTopContentContainer">
          <h1 className="description">
            Join our community and transform your body, mind, and life with
            personalized workouts, expert guidance, and unwavering support
          </h1>
          <button className="joinBtn">Join Us</button>
        </div>
      </section>
      <section className="footerBottom">
        <div className="footerBottomContentContainer">
          <div className="sectionOne">
            <h1 className="header">BeneFIT</h1>
            <p className="description">
              Transform your body, transform your life - one workout at a time
            </p>
          </div>
          <div className="sectionTwo">
            <h4 className="contactHeader">Contact</h4>
            <p className="contactInfoEmail">Getfit@benefit.com</p>
            <p className="contactInfoPhone">555-555-5555</p>
          </div>
          <div className="sectionThree">
            <h4 className="linksHeader">Useful Links</h4>
            <p onClick={() => navClickHandler(Sections.HOME)}>Home</p>
            <p onClick={() => navClickHandler(Sections.ABOUT)}>About</p>
            <p onClick={() => navClickHandler(Sections.SERVICES)}>Services</p>
            <p onClick={() => navClickHandler(Sections.PRICING)}>Pricing</p>
            <p onClick={() => navClickHandler(Sections.TESTIMONIALS)}>
              Testimonials
            </p>
            <p onClick={() => navClickHandler(Sections.CONTACT)}>Contact</p>
          </div>
          <div className="sectionFour">
            <h4>Help</h4>
            <p>Frequently Asked Questions</p>
            <p>Youtube</p>
          </div>
        </div>
      </section>
    </FooterStyles>
  );
};

export default Footer;
