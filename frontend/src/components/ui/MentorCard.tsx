import styled from "styled-components";
import type { ReactNode } from "react";

interface MentorCardProps {
  children: ReactNode;
}

const MentorCard = ({ children }: MentorCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

  /* Top-right accent */
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: 35%;
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    border-radius: 0 20px 0 100%;
    opacity: 0.9;
  }

  /* Bottom-left accent */
  .card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35%;
    height: 35%;
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    border-radius: 0 100% 0 20px;
    opacity: 0.9;
  }

  /* Content above accents */
  .card > * {
    position: relative;
    z-index: 1;
  }
`;

export default MentorCard;
