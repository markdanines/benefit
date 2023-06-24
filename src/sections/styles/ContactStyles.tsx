import styled from 'styled-components';

const ContactStyles = styled.div`
  padding: 80px 0;

  .contactMain {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-row-gap: 50px;
    grid-column-gap: 40px;
    margin: auto;

    .contactHeaderContainer {
      .contactHeader {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #0d1031;
      }

      .contactTopLine {
        border: 1px solid #0650e0;
        width: 120px;
        margin: 0;
      }

      .contactBottomLine {
        border: 1px solid #0650e0;
        width: 45px;
        margin: 0;
      }
    }

    .contactInformationGroup {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .locationContainer,
      .emailContainer,
      .phoneContainer {
        display: flex;
        height: fit-content;
        align-items: center;

        img {
          height: 50px;
          width: 50px;
        }

        .locationText {
          margin-left: 15px;

          .locationHeader {
            margin: 0;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 23.1534px;
            line-height: 35px;
            color: #0d1031;
          }

          .locationContent {
            margin: 0;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #474749;
          }
        }
      }
    }

    .contactForm {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: min-content min-content min-content;
      grid-column-gap: 10px;
      grid-row-gap: 25px;

      input {
        width: 100%;
        height: 54px;
        background: #f2f2f2;
        border-radius: 80px;
        border: none;
        padding: 10px 15px;
        box-sizing: border-box;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
      }

      .contactFormMessage {
        .contactFormMessageTextArea {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: #f2f2f2;
          border: none;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          padding: 10px 15px;
          box-sizing: border-box;
        }
      }

      .contactFormPhone,
      .contactFormSubject,
      .contactFormMessage {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .submitBtnContainer {
        grid-column-start: 1;
        grid-column-end: 3;
        justify-self: center;
        align-self: center;

        .submitBtn {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 22.2856px;
          line-height: 33px;
          color: #ffffff;
          background: #0650e0;
          border-radius: 36.735px;
          border: none;
          padding: 20px 50px;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .contactMain {
      .contactInformationGroup {
        grid-column-start: 1;
        grid-column-end: 3;
        justify-content: start;

        .container {
          margin-right: 30px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .contactMain {
      grid-template-columns: 1fr;
    }

    .contactImage {
      display: none;
    }

    .contactForm {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }

  @media (max-width: 768px) {
    .contactMain {
      grid-column-gap: 0;

      .contactInformationGroup {
        display: flex;
        justify-content: space-evenly;

        .container {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin-right: 0;

          .text {
            margin-left: 0;
            margin-top: 15px;
          }
        }
      }
    }

    .contactHeaderContainer {
      margin: auto;
    }
  }

  @media (max-width: 480px) {
    .contactMain {
      grid-column-gap: 0;

      .contactInformationGroup {
        display: flex;
        flex-direction: column;

        .container {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin-bottom: 20px;

          .text {
            margin-left: 0;
            margin-top: 5px;
          }
        }
      }
    }

    .contactHeaderContainer {
      margin: auto;
    }
  }
`;

export default ContactStyles;
