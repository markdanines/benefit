import styled from 'styled-components';

const HomeStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px 0 80px 0;
  width: 100%;
  margin: auto;
  position: relative;
  height: calc(100vh - 140px);
  max-height: 700px;

  .homeDotGroupOne {
    position: absolute;
    top: 30;
    right: 0;
    z-index: 0;
  }
  .homeDotGroupTwo {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  .blueText {
    color: #0650e0;
  }

  .homeText {
    margin-right: 50px;
    font-family: 'Poppins';
    font-style: normal;
    color: black;
    min-width: 540px;

    .homeHeaderOne,
    .homeHeaderTwo {
      font-weight: 700;
      font-size: 50px;
      line-height: 86px;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      margin: 0;
    }

    .homeDescription {
      font-weight: 400;
      font-size: 20px;
      line-height: 36px;
      letter-spacing: 0.03em;
      opacity: 0.7;
      max-width: 540px;
    }
  }

  .homeImage {
    width: 50%;
    margin-left: 50px;
    min-width: 350px;
    max-width: 500px;

    img {
      width: 100%;
      z-index: 100;
      position: relative;
    }
  }

  @media (max-width: 1200px) {
    max-height: 500px;

    .homeText {
      min-width: 540px;
      margin-right: 0;

      .homeHeaderOne,
      .homeHeaderTwo {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
      }

      .homeDescription {
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        letter-spacing: 0.03em;
        opacity: 0.7;
        max-width: 450px;
      }
    }

    .homeImage {
      width: 50%;
      margin-left: 0px;
      min-width: 260px;
      max-width: 350px;

      img {
        width: 100%;
        z-index: 100;
        position: relative;
      }
    }
  }

  @media (max-width: 1024px) {
    .homeText {
      min-width: 300px;
      margin-right: 20px;

      .homeHeaderOne,
      .homeHeaderTwo {
        font-weight: 700;
        font-size: 30px;
        line-height: 50px;
      }

      .homeDescription {
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: 0.03em;
        opacity: 0.7;
        max-width: 400px;
      }

      .homeGetStartedBtn {
        font-weight: 600;
        font-size: 20px;
        line-height: 38px;
        color: #ffffff;
        background: #0650e0;
        border-radius: 36.735px;
        border: none;
        padding: 5px 20px;
        margin-top: 10px;
        min-width: 300px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 150px 0 80px 0;

    .homeDotGroupOne {
      display: none;
    }
    .homeDotGroupTwo {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
    }

    .homeText {
      text-align: center;
      margin-right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .homeHeaderOne,
      .homeHeaderTwo {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
      }

      .homeDescription {
        font-weight: 400;
        font-size: 16px;
        line-height: 40px;
        letter-spacing: 0.03em;
        opacity: 0.7;
        max-width: 450px;
        width: 80%;
        margin: 16px auto 16px auto;
      }
    }

    .homeImage {
      display: none;
    }
  }

  @media (max-width: 480px) {
    max-height: 500px;

    .homeText {
      text-align: center;

      .homeHeaderOne,
      .homeHeaderTwo {
        font-weight: 700;
        font-size: 36px;
        line-height: 60px;
      }

      .homeDescription {
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.03em;
        opacity: 0.7;
        max-width: 540px;
        width: 80%;
        margin: 24px auto 24px auto;
      }
    }
  }
`;

export default HomeStyles;
