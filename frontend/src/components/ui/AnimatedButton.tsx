import styled from "styled-components";

interface AnimatedButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const AnimatedButton = ({ text = "Click", onClick, type = "button" }: AnimatedButtonProps) => {
  return (
    <Wrapper>
      <button className="animated-button" onClick={onClick} type={type}>
        <svg viewBox="0 0 24 24" className="arr-2">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>

        <span className="text">{text}</span>
        <span className="circle" />

        <svg viewBox="0 0 24 24" className="arr-1">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 24px;
    border: 4px solid transparent;
    font-size: 16px;
    background: transparent;
    border-radius: 100px;
    font-weight: 600;
    color: black;
    box-shadow: 0 0 0 2px black;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  svg {
    position: absolute;
    width: 24px;
    fill: black;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .arr-1 { right: 16px; }
  .arr-2 { left: -25%; }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: white;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 { right: -25%; }
  .animated-button:hover .arr-2 { left: 16px; }
  .animated-button:hover .text { transform: translateX(12px); }
  .animated-button:hover svg { fill: white; }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px #155dfc;
  }
`;

export default AnimatedButton;
