import React, { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import Nav from './components/Nav';
import AppStyle from './styles/AppStyles';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FadeIn from 'react-fade-in';
import LayoutWrapper from './components/LayoutWrapper';

export enum Sections {
  HOME = 'Home',
  ABOUT = 'About',
  SERVICES = 'Services',
  PRICING = 'Pricing',
  TESTIMONIALS = 'Testimonials',
  CONTACT = 'Contact',
}

const App: React.FC = () => {
  const [, setCurrentSection] = useState<Sections>(Sections.HOME);

  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const pricing = useRef(null);
  const testimonials = useRef(null);
  const contact = useRef(null);

  const sectionScrollHandler = (section: Sections) => {
    setCurrentSection(section);
  };

  return (
    <AppStyle>
      <Nav
        setCurrentSection={setCurrentSection}
        aboutRef={about}
        servicesRef={services}
        pricingRef={pricing}
        testimonialsRef={testimonials}
        contactRef={contact}
      />
      <LayoutWrapper>
        <Waypoint
          onEnter={() => sectionScrollHandler(Sections.HOME)}
          topOffset={'500px'}
          bottomOffset={'500px'}
        >
          <div ref={home}>
            <FadeIn transitionDuration={3000} delay={500}>
              <Home />
            </FadeIn>
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => sectionScrollHandler(Sections.ABOUT)}
          topOffset={'500px'}
          bottomOffset={'500px'}
        >
          <div ref={about}>
            <About />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => sectionScrollHandler(Sections.SERVICES)}
          topOffset={'500px'}
          bottomOffset={'500px'}
        >
          <div ref={services}>
            <Services />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => sectionScrollHandler(Sections.PRICING)}
          topOffset={'500px'}
          bottomOffset={'500px'}
        >
          <div ref={pricing}>
            <Pricing />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => sectionScrollHandler(Sections.TESTIMONIALS)}
          topOffset={'500px'}
          bottomOffset={'500px'}
        >
          <div ref={testimonials}>
            <Testimonials />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => sectionScrollHandler(Sections.CONTACT)}
          topOffset={'500px'}
          bottomOffset={'500px'}
        >
          <div ref={contact}>
            <Contact />
          </div>
        </Waypoint>
      </LayoutWrapper>
      <Footer
        setCurrentSection={setCurrentSection}
        aboutRef={about}
        servicesRef={services}
        pricingRef={pricing}
        testimonialsRef={testimonials}
        contactRef={contact}
      />
    </AppStyle>
  );
};

export default App;
