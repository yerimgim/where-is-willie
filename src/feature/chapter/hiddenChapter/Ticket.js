import React from "react";

import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Ticket = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="ticket-container">
        <div className="ticket" onClick={onClick}>
          <ul>
            <li>name: jack</li>
            <li>seat: 3b</li>
          </ul>
        </div>
      </div>
    </Entry>
  );
};

const deal = keyframes`
  0% {
    transform: scale(1.3) rotateY(12deg) translateY(100%) rotate(40deg)
      scaleX(0.5) scaleY(0.55);
  }
  40% {
    transform: rotateY(-15deg) rotateY(3deg) rotate(-20deg) translateY(-10%)
      scale(0.8);
  }
  100% {
    transform: rotateY(180deg) rotate(-2deg);
  }
`;

const Entry = styled.div`
  * {
    width: 50%;
    height: 50%;
  }

  position: absolute;
  left: 20%;
  bottom: 0%;
  transform: translate(-20%, 0%);

  li {
    position: absolute;
    top: 50%;
    right: 30%;
    transform: rotate(-2deg);
  }

  .ticket-container {
    width: 40rem;
    height: 40rem;
    background: none;
  }

  .ticket {
    transform: translateY(200%);
    background: url("/assets/ticket.png") no-repeat center center;
    background-size: contain;
    animation: ${deal} 3s cubic-bezier(0.1, 0.5, 0.3, 1.5) forwards;
    animation-delay: 1s;
    filter: drop-shadow(0rem 0.3rem 3rem var(--yellow-color));
  }
`;

Ticket.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Ticket;
