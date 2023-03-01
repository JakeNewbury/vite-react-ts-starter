import { css, keyframes } from "@emotion/react";

import emotionLogo from "./assets/emotion.png";
import eslintLogo from "./assets/eslint.svg";
import prettierLogo from "./assets/prettier.png";
import reactLogo from "./assets/react.svg";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  return (
    <div>
      <h1>Vite & React Starter</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} css={logoStyle} className="vite" alt="Vite" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} css={logoStyle} className="react" alt="React" />
        </a>
      </div>
      <h2>Other Tools</h2>
      <div css={otherTools}>
        <div>
          <h3>Typescript</h3>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img
              src={typescriptLogo}
              css={smallLogoStyle}
              className="typescript"
              alt="Typescript"
            />
          </a>
        </div>
        <div>
          <h3>ESLint</h3>
          <a href="https://eslint.org/" target="_blank" rel="noreferrer">
            <img src={eslintLogo} css={smallLogoStyle} className="eslint" alt="ESLint" />
          </a>
        </div>
        <div>
          <h3>Prettier</h3>
          <a href="https://prettier.io/" target="_blank" rel="noreferrer">
            <img src={prettierLogo} css={smallLogoStyle} className="prettier" alt="Prettier" />
          </a>
        </div>
        <div>
          <h3>Emotion</h3>
          <a href="https://emotion.sh/" target="_blank" rel="noreferrer">
            <img src={emotionLogo} css={smallLogoStyle} className="emotion" alt="Emotion" />
          </a>
        </div>
      </div>
      <p>Click on the logos to learn more</p>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;

const pulse = keyframes({
  "0%": {
    transform: "scale(0.9)",
  },
  "50%": {
    transform: "scale(1.1)",
  },
  "100%": {
    transform: "scale(0.9)",
  },
});

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const logoStyle = css({
  height: "4.5em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  "&.vite": {
    animation: `${pulse} infinite 2s ease-in-out`,
    "&:hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },
  "&.react": {
    animation: `${spin} infinite 20s linear`,
    "&:hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  },
});

const smallLogoStyle = css([logoStyle], {
  height: "3em",
  "&:hover": {
    filter: "drop-shadow(0 0 1em #959595aa)",
  },
});

const otherTools = css({
  display: "flex",
  justifyContent: "center",
  "& > *": {
    width: 120,
  },
});
