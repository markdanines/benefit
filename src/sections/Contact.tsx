import ContactStyles from './styles/ContactStyles';
import LocationIcon from '../assets/locationIcon.svg';
import EmailIcon from '../assets/emailIcon.svg';
import PhoneIcon from '../assets/phoneIcon.svg';
import ContactComputer from '../assets/contactComputer.svg';

const Contact: React.FC = () => (
  <ContactStyles>
    <div className="contactMain">
      <div className="contactHeaderContainer">
        <hr className="contactTopLine" />
        <h1 className="contactHeader">Contact Us</h1>
        <hr className="contactBottomLine" />
      </div>
      <div className="contactInformationGroup">
        <div className="locationContainer container">
          <img src={LocationIcon} />
          <div className="locationText text">
            <h4 className="locationHeader">Location</h4>
            <p className="locationContent">22206, Arlington VA</p>
          </div>
        </div>
        <div className="emailContainer container">
          <img src={EmailIcon} />
          <div className="locationText text">
            <h4 className="locationHeader">Email</h4>
            <p className="locationContent">Getfit@benefit.com</p>
          </div>
        </div>
        <div className="phoneContainer container">
          <img src={LocationIcon} />
          <div className="locationText text">
            <h4 className="locationHeader">Phone</h4>
            <p className="locationContent">555-555-5555</p>
          </div>
        </div>
      </div>
      <div className="contactImage">
        <img src={ContactComputer} />
      </div>
      <div className="contactForm">
        <div className="contactFormName">
          <input
            type="text"
            className="contactFormNameInput"
            placeholder="Name"
          />
        </div>
        <div className="contactFormEmail">
          <input
            type="text"
            className="contactFormEmailInput"
            placeholder="Email"
          />
        </div>
        <div className="contactFormPhone">
          <input
            type="text"
            className="contactFormPhoneInput"
            placeholder="Phone"
          />
        </div>
        <div className="contactFormSubject">
          <input
            type="text"
            className="contactFormSubjectInput"
            placeholder="Subject"
          />
        </div>
        <div className="contactFormMessage">
          <textarea
            className="contactFormMessageTextArea"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="submitBtnContainer">
          <button className="submitBtn">Submit</button>
        </div>
      </div>
    </div>
  </ContactStyles>
);

export default Contact;
