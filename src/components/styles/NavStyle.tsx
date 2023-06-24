import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

const CustomizedAppBar = styled(AppBar)`
  &.MuiPaper-elevation4 {
    nav.standardScreen {
      @keyframes navBackground {
        0% {
          background-color: #d8e2ff;
        }
        100% {
          background-color: #0650e0;
        }
      }

      background-color: #0650e0;
      animation-name: navBackground;
      animation-duration: 0.75s;

      .navTitle {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 33.9442px;
        line-height: 41px;
        letter-spacing: 0.03em;
        color: white;
      }

      .navLinks {
        list-style-type: none;
        display: flex;

        li {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: white;
          margin: 0 20px;
          border-bottom: 2px solid transparent;
        }

        li:hover {
          cursor: pointer;
          max-height: 54px;
          border-bottom: 2px solid white;
          color: white;
        }
      }
    }
  }

  nav.standardScreen {
    @keyframes navBackgroundToWhite {
      0% {
        background-color: #0650e0;
      }
      100% {
        background-color: white;
      }
    }

    animation-name: navBackgroundToWhite;
    animation-duration: 0.75s;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 100px;
    box-sizing: border-box;
    background-color: white;

    .navTitle {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-size: 33.9442px;
      line-height: 41px;
      letter-spacing: 0.03em;
      color: #0650e0;
    }

    .navLinks {
      list-style-type: none;
      display: flex;

      li {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #304d76;
        margin: 0 20px;
        border-bottom: 2px solid transparent;
      }

      li: hover {
        cursor: pointer;
        max-height: 54px;
        border-bottom: 2px solid #0650e0;
        color: #0650e0;
      }
    }
  }

  nav.mobileScreen,
  .mobileMenu {
    display: none;
  }

  @media (max-width: 1200px) {
    nav.standardScreen {
      padding: 20px 80px;
    }
  }

  @media (max-width: 1024px) {
    nav.standardScreen {
      display: none;
    }

    nav.mobileScreen {
      @keyframes navBackground {
        0% {
          background-color: #d8e2ff;
        }
        100% {
          background-color: #0650e0;
        }
      }

      display: flex;
      height: 100px;
      background-color: #0650e0;
      padding: 0 40px;
      align-items: center;
      justify-content: space-between;
      animation-name: navBackground;
      animation-duration: 0.5s;

      .navTitle {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 33.9442px;
        line-height: 41px;
        letter-spacing: 0.03em;
        color: white;
      }
    }

    .mobileMenu {
      @keyframes navBackground {
        0% {
          background-color: #d8e2ff;
        }
        100% {
          background-color: #0650e0;
        }
      }

      display: flex;
      flex-direction: column;
      padding: 50px;
      height: calc(100vh - 100px);
      background-color: #0650e0;
      margin: 0;
      animation-name: navBackground;
      animation-duration: 0.5s;

      li {
        list-style: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 27px;
        color: white;
        margin: 30px 20px;
        border-bottom: 2px solid transparent;
        padding-bottom: 10px;
        width: fit-content;
      }

      li:hover {
        cursor: pointer;
        max-height: 54px;
        border-bottom: 2px solid white;
        color: white;
      }
    }
  }
`;

export default CustomizedAppBar;
