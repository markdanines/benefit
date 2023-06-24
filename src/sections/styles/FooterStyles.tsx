import styled from 'styled-components';

const FooterStyles = styled.div`
  background: rgba(6, 80, 224, 0.1);

  .footerTop {
    height: 331px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;

    .footerTopContentContainer {
      max-width: 1400px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* width: 80%; */

      .description {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 29.3819px;
        line-height: 41px;
        letter-spacing: 0.172835px;
        text-transform: capitalize;
        color: #0650e0;
        max-width: 725px;
      }

      .joinBtn {
        background: #0650e0;
        border-radius: 54.5684px;
        height: 100px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.202105px;
        color: #ffffff;
        border: none;
        padding: 20px 50px;
      }
    }
  }

  .footerBottom {
    background: #0650e0;
    padding: 100px 0;

    .footerBottomContentContainer {
      width: 90%;
      display: grid;
      grid-template-columns: 4fr 3fr 3fr 3fr;
      grid-column-gap: 30px;
      box-sizing: border-box;
      max-width: 1400px;
      margin: auto;

      h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 19.2px;
        line-height: 28px;
        letter-spacing: 0.202105px;
        color: #ffffff;
        margin-top: 0;
      }

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16.1684px;
        line-height: 29px;
        color: #ffffff;
      }

      .sectionOne {
        .header {
          margin: 0;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 900;
          font-size: 33.9442px;
          line-height: 41px;
          letter-spacing: 0.03em;
          color: #ffffff;
        }

        .description {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 29px;
          color: #ffffff;
          max-width: 300px;
        }
      }

      .sectionTwo {
        .contactInfo {
          display: flex;
          flex-direction: column;
        }
      }

      .sectionThree {
        p {
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .footerTop {
      height: 331px;
      background: rgba(6, 80, 224, 0.1);
      width: 100%;
      display: flex;
      align-items: center;

      .footerTopContentContainer {
        max-width: 1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;

        .description {
          font-size: 24px;
          line-height: 36px;
          max-width: 600px;
        }

        .joinBtn {
          height: auto;
          padding: 20px 50px;
          min-width: 175px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .footerTop {
      height: 331px;
      background: rgba(6, 80, 224, 0.1);
      width: 100%;
      display: flex;
      align-items: center;

      .footerTopContentContainer {
        max-width: 1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: auto;

        .description {
          font-size: 18px;
          line-height: 36px;
          max-width: 450px;
        }

        .joinBtn {
          height: auto;
          padding: 20px 50px;
          min-width: 175px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .footerTop {
      height: 331px;
      background: rgba(6, 80, 224, 0.1);
      width: 100%;
      display: flex;
      align-items: center;

      .footerTopContentContainer {
        flex-direction: column;
        text-align: center;

        .description {
          font-size: 18px;
          line-height: 36px;
          max-width: 450px;
        }

        .joinBtn {
          height: auto;
          padding: 20px 50px;
          min-width: 175px;
        }
      }
    }

    .footerBottom {
      text-align: center;

      .footerBottomContentContainer {
        grid-template-columns: 1fr;
        grid-row-gap: 30px;

        h4 {
        }

        p {
        }

        .sectionOne {
          .header {
            margin-bottom: 20px;
          }

          .description {
            margin: auto;
          }
        }
      }
    }
  }
`;

export default FooterStyles;
