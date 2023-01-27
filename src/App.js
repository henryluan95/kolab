import "./Styles/_reset.scss";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./Assets/images/logo.svg";
import IconTwitter from "./Assets/images/icon-twitter.svg";
import IconYoutube from "./Assets/images/icon-youtube.svg";
import IconLaptop from "./Assets/images/icon-laptop.svg";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/521XGxNfNxxgmLAH/scene.splinecode"
        />
        <Content>
          <Menu>
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Download</a>
            </li>
            <li>
              <a href="/">App</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <button>Get Started</button>
            </li>
          </Menu>
          <h1>Collaborate with people</h1>
          <p>
            Bring your team together and build your community by using our
            cross-platform app that lets you collaborate via chat, voice and by
            sharing and storing unlimited media files. A world of topics is
            waiting for you. Join the private beta.
          </p>
          <button>
            <img src={IconLaptop} alt="lap top icon" /> Download for Mac
          </button>
        </Content>
        <Social>
          <div></div>
          <img src={IconTwitter} alt="Twitter" />
          <img src={IconYoutube} alt="Youtube" />
        </Social>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Spline Sans";
  color: white;
  position: relative;
  font-size: 1rem;
  height: 100vh;
  overflow: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: -5rem;
    right: -5rem;

    @media (max-width: 1280px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }

    @media (max-width: 375px) {
      transform: scale(0.1) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  z-index: -1;

  h1 {
    font-family: "Spline Sans Mono";
    font-weight: bold;
    font-size: 4.375rem;
    margin: 0;
    max-width: 31.25rem;
    pointer-events: none;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 23.75rem;
    pointer-events: none;
  }

  h1,
  p,
  button {
    margin: 0 1.875rem 0 6.25rem;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    font-size: 1rem;
    padding: 0.75rem 1.875rem;
    border-radius: 0.875rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 17.5rem;
    backdrop-filter: blur(1.25rem);
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.875rem;
  align-items: center;
  margin: 0 1.87rem 0 6.25rem;
  padding: 0;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 0.5rem 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 0.875rem;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 9.375rem;
  left: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  align-items: center;

  div {
    width: 1px;
    height: 60vh;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
