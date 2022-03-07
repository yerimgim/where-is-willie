import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Ticket = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="ticket-container">
        <div className="ticket" onClick={onClick}></div>
      </div>
    </Entry>
  );
};

const Entry = styled.div`
  * {
    width: 50%;
    height: 50%;
  }

  position: absolute;
  left: 20%;
  bottom: 0%;
  transform: translate(-20%, 20%);

  .ticket-container {
    width: 40rem;
    height: 40rem;
    background: none;
    perspective: 300rem;
  }

  .ticket {
    transform: translateY(300%);
    background: url("/assets/ticket.png") no-repeat center center;
    background-size: contain;
    animation: deal 3s cubic-bezier(0.1, 0.5, 0.3, 1.5) forwards;
    animation-delay: 1s;
    filter: drop-shadow(0rem 0.3rem 3rem var(--yellow-color));
  }

  @keyframes deal {
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
  }
`;

Ticket.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Ticket;
