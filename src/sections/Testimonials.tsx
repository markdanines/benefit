import React from 'react';
import TestimonialStyles from './styles/TestimonialStyles';
import TestimonialMain from '../assets/testimonialMain.svg';
import TestimonialCardDesignOne from '../assets/testimonialCardDesignOne.svg';
import ClientOne from '../assets/clientOne.svg';
import Star from '../assets/star.svg';

const Testimonials: React.FC = () => (
  <TestimonialStyles>
    <section className="testimonialTop">
      <section className="topLeft">
        <img src={TestimonialMain} />
      </section>
      <section className="topRight">
        <h1 className="testimonialHeader">
          What our <span className="blueText">clients</span> are saying
        </h1>
        <p className="testimonialReview">
          "I stumbled upon this fitness website a few months ago, and I can't
          believe the progress I've made since then. The personalized workout
          plans and nutrition advice are top-notch, and the community support is
          amazing."{' '}
        </p>
        <p className="testimonialName">Delila Rayam</p>
      </section>
    </section>
    <section className="testimonialBottom">
      <h1 className="testimonialRecentHeader">
        Recent <span className="blueText">Clients</span>
      </h1>
      <div className="testimonialsGroup">
        <div className="testimonialCard">
          <div className="stars">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <div className="clientInfo">
            <img src={ClientOne} />
            <div className="clientInfoText">
              <p className="clientName">Andre Morgan</p>
              <p className="clientPosition">Banker</p>
            </div>
          </div>
          <div className="clientReview">
            My personal trainer not only helps me stay accountable and
            motivated, but also provides valuable nutrition advice. I've never
            felt better both physically and mentally. Thanks Trainex.
          </div>
        </div>
        <div className="testimonialCard">
          <div className="stars">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <div className="clientInfo">
            <img src={ClientOne} />
            <div className="clientInfoText">
              <p className="clientName">Andre Morgan</p>
              <p className="clientPosition">Banker</p>
            </div>
          </div>
          <div className="clientReview">
            My personal trainer not only helps me stay accountable and
            motivated, but also provides valuable nutrition advice. I've never
            felt better both physically and mentally. Thanks Trainex.
          </div>
        </div>
        <div className="testimonialCard">
          <div className="stars">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <div className="clientInfo">
            <img src={ClientOne} />
            <div className="clientInfoText">
              <p className="clientName">Andre Morgan</p>
              <p className="clientPosition">Banker</p>
            </div>
          </div>
          <div className="clientReview">
            My personal trainer not only helps me stay accountable and
            motivated, but also provides valuable nutrition advice. I've never
            felt better both physically and mentally. Thanks Trainex.
          </div>
        </div>
        {/* <div className="testimonialCard">
          <div className="stars">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <div className="clientInfo">
            <img src={ClientOne} />
            <div className="clientInfoText">
              <p className="clientName">Andre Morgan</p>
              <p className="clientPosition">Banker</p>
            </div>
          </div>
          <div className="clientReview">
            My personal trainer not only helps me stay accountable and
            motivated, but also provides valuable nutrition advice. I've never
            felt better both physically and mentally. Thanks Trainex.
          </div>
        </div> */}
      </div>
    </section>
  </TestimonialStyles>
);

export default Testimonials;
