import React from 'react';
import PricingStyles from './styles/PricingStyles';
import BlueCheck from '../assets/blueCheck.svg';
import GreyX from '../assets/greyX.svg';
import Button, { ButtonVariant } from '../components/Button';

const Pricing: React.FC = () => (
  <PricingStyles>
    <h1 className="pricingHeader">
      <span className="blueText">Best</span> Fitness Packages
    </h1>
    <p className="pricingDescription">
      Select the plan according to which meet your requirements in order to Get
      fit and face challenges in your life
    </p>
    <div className="pricingPackages">
      <div className="pricingPackageCard">
        <h4 className="pricingPackageCardHeader">Beginner</h4>
        <p className="pricingPackageCardDescription">Suitable for Beginners</p>
        <div className="pricingPackageCardPriceGroup">
          <h4 className="pricingPackageCardPriceGroupNumber">$299</h4>
          <p className="pricingPackageCardPriceGroupSuffix">/ Month</p>
        </div>
        <Button variant={ButtonVariant.OUTLINED}>Buy Now</Button>
        <ul className="pricingPackageCardFeatures">
          <li className="pricingPackageCardFeature">
            <img src={BlueCheck} />
            <p>Gym Guide</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={BlueCheck} />
            <p>Diet Plan</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Competition Research</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Diet Plan</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Gym Guide</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Diet Plan</p>
          </li>
        </ul>
      </div>
      <div className="pricingPackageCard centreCard">
        <h4 className="pricingPackageCardHeader">Beginner</h4>
        <p className="pricingPackageCardDescription">Suitable for Beginners</p>
        <div className="pricingPackageCardPriceGroup">
          <h4 className="pricingPackageCardPriceGroupNumber">$299</h4>
          <p className="pricingPackageCardPriceGroupSuffix">/ Month</p>
        </div>
        <button className="pricingPackageCardBtn">Buy Now</button>
        <ul className="pricingPackageCardFeatures">
          <li className="pricingPackageCardFeature">
            <img src={BlueCheck} />
            <p>Gym Guide</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={BlueCheck} />
            <p>Diet Plan</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Competition Research</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Diet Plan</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Gym Guide</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Diet Plan</p>
          </li>
        </ul>
      </div>
      <div className="pricingPackageCard">
        <h4 className="pricingPackageCardHeader">Beginner</h4>
        <p className="pricingPackageCardDescription">Suitable for Beginners</p>
        <div className="pricingPackageCardPriceGroup">
          <h4 className="pricingPackageCardPriceGroupNumber">$299</h4>
          <p className="pricingPackageCardPriceGroupSuffix">/ Month</p>
        </div>
        <button className="pricingPackageCardBtn">Buy Now</button>
        <ul className="pricingPackageCardFeatures">
          <li className="pricingPackageCardFeature">
            <img src={BlueCheck} />
            <p>Gym Guide</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={BlueCheck} />
            <p>Diet Plan</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Competition Research</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Diet Plan</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Gym Guide</p>
          </li>
          <li className="pricingPackageCardFeature">
            <img src={GreyX} />
            <p className="greyedOut">Diet Plan</p>
          </li>
        </ul>
      </div>
    </div>
  </PricingStyles>
);

export default Pricing;
