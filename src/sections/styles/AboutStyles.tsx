import styled from 'styled-components';

const AboutStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0px;
  width: 100%;
  margin: auto;

  .blueText {
    color: #0650e0;
  }

  .aboutImage {
    width: 40%;

    img {
      width: 100%;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }

  .aboutText {
    width: 50%;

    .aboutHeader {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 45.2903px;
      line-height: 72px;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      color: #000000;
      margin: 0;
    }

    .aboutDescription {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 36px;
      color: #000000;
      opacity: 0.7;
    }

    .aboutList {
      padding: 0;
      list-style-type: none;
      display: grid;
      grid-template-columns: 1fr 1fr;

      li {
        display: flex;
        align-items: center;
      }

      li .aboutListText {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 47px;
        color: #000000;
        opacity: 0.7;
        margin-left: 15px;
      }
    }

    .aboutBtnContainer {
      margin-top: 40px;

      .aboutBtn {
        background: #0650e0;
        border-radius: 36.735px;
        border: none;
        padding: 10px 50px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25.6562px;
        line-height: 38px;
        color: #ffffff;
      }
    }
  }

  @media (max-width: 1200px) {
    .aboutText {
      .aboutHeader {
        font-size: 40px;
        line-height: 60px;
      }

      .aboutDescription {
        font-size: 18px;
        margin: 16px 0 16px 0;
        line-height: 36px;
      }

      .aboutList {
        li {
        }

        li .aboutListText {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
        }
      }

      .aboutBtnContainer {
        margin-top: 40px;

        .aboutBtn {
          background: #0650e0;
          border-radius: 36.735px;
          border: none;
          padding: 10px 50px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 25.6562px;
          line-height: 38px;
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .aboutText {
      margin-left: 20px;

      .aboutHeader {
        font-size: 30px;
        line-height: 50px;
      }

      .aboutDescription {
        font-size: 14px;
        margin: 16px 0 16px 0;
        line-height: 30px;
      }

      .aboutList {
        /* display: flex; */
        /* flex-direction: column; */

        li .aboutListText {
          font-size: 14px;
          line-height: 34px;
        }
      }

      .aboutBtnContainer {
        margin-top: 20px;
        .aboutBtn {
          padding: 5px 20px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 38px;
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    .aboutImage {
      display: none;
    }

    .aboutText {
      margin-left: 0;
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .aboutHeader {
        font-size: 40px;
        line-height: 60px;
      }

      .aboutDescription {
        max-width: 400px;
        font-size: 16px;
        margin: 16px auto 16px auto;
        line-height: 40px;
      }

      .aboutList {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px auto 20px auto;

        li .aboutListText {
          font-size: 16px;
          line-height: 40px;
        }
      }

      .aboutBtnContainer {
        margin-top: 20px;
        .aboutBtn {
          padding: 5px 20px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 38px;
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 420px) {
    .aboutImage {
    }

    .aboutText {
      .aboutHeader {
      }

      .aboutDescription {
      }

      .aboutList {
        li .aboutListText {
        }
      }

      .aboutBtnContainer {
        .aboutBtn {
          margin-top: 10px;
        }
      }
    }
  }
`;

export default AboutStyles;
