import styled from 'styled-components';
import ServicesCardBackground from '../../assets/servicesCardBackground.svg';

const ServicesStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  width: 100%;
  margin: auto;
  box-sizing: border-box;

  .blueText {
    color: #0650e0;
  }

  .servicesHeader {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 72px;
    margin: 0 0 20px 0;
  }

  .servicesDescription {
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
    max-width: 1000px;
  }

  .servicesCardsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    margin-top: 50px;

    .serviceCardContainer {
      height: 100%;
      width: 100%;
      max-width: 430px;
      min-width: 280px;
      border-radius: 20px;
      background: url(${ServicesCardBackground});
      background-size: cover;
      background-repeat: no-repeat;

      .serviceCardTextContainer {
        padding: 0 30px 20px 30px;

        .serviceCardHeader {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 27.2397px;
          line-height: 33px;
          color: #ffffff;
          margin-top: 0;
          margin-bottom: 10px;
        }

        .serviceCardDescription {
          font-family: 'Public Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 16.5384px;
          line-height: 23px;
          color: #ffffff;
        }
      }

      .logo {
        height: 190px;
      }
    }
  }

  @media (max-width: 1200px) {
    .servicesHeader {
      font-size: 40px;
    }

    .servicesDescription {
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    .servicesHeader {
      font-size: 30px;
    }

    .servicesDescription {
      font-size: 14px;
      margin-top: 0;
      line-height: 30px;
    }

    .servicesCardsContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .servicesHeader {
      font-size: 40px;
    }

    .servicesDescription {
      max-width: 450px;
    }

    .servicesCardsContainer {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default ServicesStyles;
