import styled from 'styled-components';

const PricingStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0px;

  .blueText {
    color: #0650e0;
  }

  .pricingHeader {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 45.2903px;
    line-height: 77px;
    letter-spacing: -0.01em;
    color: black;
  }

  .pricingDescription {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #637381;
    margin: 0 0 50px 0;
  }

  .pricingPackages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
    width: 100%;

    .pricingPackageCard {
      justify-self: center;
      width: 100%;
      max-width: 400px;
      height: 670.38px;
      background: #ffffff;
      box-shadow: 0px 4.21622px 55.4957px rgba(0, 0, 0, 0.05);
      border-radius: 20.129px;
      padding: 40px 25px;
      box-sizing: border-box;

      .pricingPackageCardHeader {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 23.1892px;
        line-height: 35px;
        color: #191d23;
        margin: 0;
      }

      .pricingPackageCardDescription {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16.8649px;
        line-height: 25px;
        color: #64748b;
      }

      .pricingPackageCardPriceGroup {
        display: flex;
        align-items: center;

        .pricingPackageCardPriceGroupNumber {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 59.027px;
          line-height: 89px;
          color: #191d23;
          margin: 0;
        }

        .pricingPackageCardPriceGroupSuffix {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 16.8649px;
          line-height: 25px;
          color: #4b5768;
          margin: 0;
        }
      }

      .pricingPackageCardBtn {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 20.129px;
        line-height: 30px;
        text-align: center;
        color: #0650e0;
        width: 90%;
        height: 56.44px;
        border: 1.58108px solid #0650e0;
        border-radius: 46.3784px;
        background-color: white;
      }

      .pricingPackageCardFeatures {
        padding: 0;
        list-style-type: none;

        .pricingPackageCardFeature {
          display: flex;

          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16.8649px;
            line-height: 25px;
            color: #191d23;
            margin-left: 15px;
          }

          .greyedOut {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16.8649px;
            line-height: 25px;
            color: #a0abbb;
          }
        }
      }
    }

    .pricingPackageCard.centreCard {
      background: #0650e0;
      box-shadow: 0px 10.5405px 26.3514px #b6cfff;

      .pricingPackageCardHeader,
      .pricingPackageCardDescription,
      .pricingPackageCardPriceGroupNumber,
      .pricingPackageCardPriceGroupSuffix,
      .pricingPackageCardFeature {
        color: white;
      }
    }
  }

  @media (max-width: 1200px) {
    .pricingHeader {
      font-size: 40px;
    }

    .pricingDescription {
      font-size: 18px;
    }

    .pricingPackages {
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
    }
  }

  @media (max-width: 1024px) {
    .pricingHeader {
      font-size: 30px;
    }

    .pricingDescription {
      font-size: 14px;
    }

    .pricingPackages {
      .pricingPackageCard {
        width: 100%;
        max-width: 400px;
        height: 670.38px;
        background: #ffffff;
        box-shadow: 0px 4.21622px 55.4957px rgba(0, 0, 0, 0.05);
        border-radius: 20.129px;
        padding: 40px 25px;
        box-sizing: border-box;

        .pricingPackageCardHeader {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 23.1892px;
          line-height: 35px;
          color: #191d23;
          margin: 0;
        }

        .pricingPackageCardDescription {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16.8649px;
          line-height: 25px;
          color: #64748b;
        }

        .pricingPackageCardPriceGroup {
          display: flex;
          align-items: center;

          .pricingPackageCardPriceGroupNumber {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 59.027px;
            line-height: 89px;
            color: #191d23;
            margin: 0;
          }

          .pricingPackageCardPriceGroupSuffix {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 16.8649px;
            line-height: 25px;
            color: #4b5768;
            margin: 0;
          }
        }

        .pricingPackageCardBtn {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 800;
          font-size: 20.129px;
          line-height: 30px;
          text-align: center;
          color: #0650e0;
          width: 100%;
          max-width: 348.54px;
          height: 56.44px;
          border: 1.58108px solid #0650e0;
          border-radius: 46.3784px;
          background-color: white;
        }

        .pricingPackageCardFeatures {
          padding: 0;
          list-style-type: none;

          .pricingPackageCardFeature {
            display: flex;

            p {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              font-size: 16.8649px;
              line-height: 25px;
              color: #191d23;
              margin-left: 15px;
            }

            .greyedOut {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              font-size: 16.8649px;
              line-height: 25px;
              color: #a0abbb;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .pricingHeader {
      font-size: 40px;
      text-align: center;
    }
  }
`;

export default PricingStyles;
