import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Hamburger from 'hamburger-react';
import CustomizedAppBar from './styles/NavStyle';
import { Sections } from '../App';

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

interface NavProps {
  setCurrentSection: (section: Sections) => void;
  homeRef?: React.MutableRefObject<any>;
  aboutRef: React.MutableRefObject<any>;
  servicesRef: React.MutableRefObject<any>;
  pricingRef: React.MutableRefObject<any>;
  testimonialsRef: React.MutableRefObject<any>;
  contactRef: React.MutableRefObject<any>;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Nav: React.FC<NavProps> = ({
  setCurrentSection,
  aboutRef,
  servicesRef,
  pricingRef,
  testimonialsRef,
  contactRef,
}: NavProps) => {
  const [isOpen, setOpen] = React.useState(false);

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
    <ElevationScroll>
      <CustomizedAppBar>
        <nav className="standardScreen">
          <h1 className="navTitle">BeneFIT</h1>
          <ul className="navLinks">
            <li onClick={() => navClickHandler(Sections.HOME)}>Home</li>
            <li onClick={() => navClickHandler(Sections.ABOUT)}>About</li>
            <li onClick={() => navClickHandler(Sections.SERVICES)}>Services</li>
            <li onClick={() => navClickHandler(Sections.PRICING)}>Price</li>
            <li onClick={() => navClickHandler(Sections.TESTIMONIALS)}>
              Testimonials
            </li>
            <li onClick={() => navClickHandler(Sections.CONTACT)}>Contact</li>
          </ul>
        </nav>
        <nav className="mobileScreen">
          <h1 className="navTitle">BeneFIT</h1>
          <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
        </nav>
        {isOpen && (
          <ul className="mobileMenu">
            <li onClick={() => navClickHandler(Sections.HOME)}>Home</li>
            <li onClick={() => navClickHandler(Sections.ABOUT)}>About</li>
            <li onClick={() => navClickHandler(Sections.SERVICES)}>Services</li>
            <li onClick={() => navClickHandler(Sections.PRICING)}>Price</li>
            <li onClick={() => navClickHandler(Sections.TESTIMONIALS)}>
              Testimonials
            </li>
            <li onClick={() => navClickHandler(Sections.CONTACT)}>Contact</li>
          </ul>
        )}
      </CustomizedAppBar>
    </ElevationScroll>
  );
};

export default Nav;
