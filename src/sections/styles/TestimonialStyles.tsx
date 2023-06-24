import styled from 'styled-components';

const TestimonialStyles = styled.div`
  padding: 80px 0;

  .blueText {
    color: #0650e0;
  }

  .testimonialTop {
    display: flex;
    width: 100%;
    margin: auto;

    .topLeft {
      display: flex;
      align-items: center;
      width: 50%;

      img {
        width: 90%;
      }
    }

    .topRight {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .testimonialHeader {
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

      .testimonialReview {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 22.3263px;
        line-height: 47px;
        color: #000000;
        opacity: 0.7;
      }

      .testimonialName {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 19.4141px;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #0650e0;
      }
    }
  }

  .testimonialBottom {
    .testimonialRecentHeader {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 72px;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      color: #000000;
      text-align: center;
      margin-top: 100px;
      margin-bottom: 50px;
    }

    .testimonialsGroup {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 40px;
      width: 100%;
      margin: auto;

      .testimonialCard {
        width: 100%;
        min-height: 433px;
        background: #ffffff;
        box-shadow: 0px 12px 40px rgba(32, 98, 240, 0.13);
        border-radius: 10px;
        padding: 40px;
        box-sizing: border-box;

        .stars {
          img {
            margin: 0 2px;
          }
        }

        .clientInfo {
          display: flex;
          margin-top: 20px;

          .clientInfoText {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 20px;

            p {
              margin: 0;
            }

            .clientName {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 26px;
              color: #09245d;
            }

            .clientPosition {
              font-family: 'Public Sans';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: rgba(9, 36, 93, 0.7);
            }
          }
        }

        .clientReview {
          margin-top: 40px;
          font-family: 'Public Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: #09245d;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .testimonialTop {
      .topRight {
        .testimonialHeader {
          font-weight: 700;
          font-size: 40px;
          line-height: 60px;
        }

        .testimonialReview {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
        }

        .testimonialName {
        }
      }
    }

    .testimonialBottom {
      .testimonialRecentHeader {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
      }

      .testimonialsGroup {
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
        justify-items: center;

        .testimonialCard {
          min-width: 358px;
          max-width: none;
          min-height: auto;
          width: 100%;

          .stars {
            img {
            }
          }

          .clientInfo {
            .clientInfoText {
              p {
              }

              .clientName {
              }

              .clientPosition {
              }
            }
          }

          .clientReview {
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .testimonialTop {
      .topRight {
        .testimonialHeader {
          font-weight: 700;
          font-size: 30px;
          line-height: 50px;
        }

        .testimonialReview {
        }

        .testimonialName {
        }
      }
    }

    .testimonialBottom {
      .testimonialRecentHeader {
        font-weight: 700;
        font-size: 30px;
        line-height: 50px;
      }

      .testimonialsGroup {
        .testimonialCard {
          .stars {
            img {
            }
          }

          .clientInfo {
            .clientInfoText {
              p {
              }

              .clientName {
              }

              .clientPosition {
              }
            }
          }

          .clientReview {
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .testimonialTop {
      .topLeft {
        display: none;
      }

      .topRight {
        width: 100%;
        .testimonialHeader {
          text-align: center;
          font-weight: 700;
          font-size: 40px;
          line-height: 60px;
        }

        .testimonialReview {
          text-align: center;
        }

        .testimonialName {
          text-align: center;
        }
      }
    }

    .testimonialBottom {
      .testimonialRecentHeader {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
      }

      .testimonialsGroup {
        .testimonialCard {
          .stars {
            img {
            }
          }

          .clientInfo {
            .clientInfoText {
              p {
              }

              .clientName {
              }

              .clientPosition {
              }
            }
          }

          .clientReview {
          }
        }
      }
    }
  }
`;

export default TestimonialStyles;
