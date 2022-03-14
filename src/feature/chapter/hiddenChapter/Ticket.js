import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { deal } from "../../../styles/keyframes/keyframes";

const Ticket = ({ setIsOpen, isOpen, style, quiz }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="ticket-container">
        <div className="ticket" onClick={onClick}>
          <ul>
            {quiz.ticket.map((quiz, index) => {
              return (
                <li style={style} key={index}>
                  {quiz}
                </li>
              );
            })}
          </ul>
        </div>
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
  transform: translate(-20%, 0%);

  ul {
    position: relative;
    top: 52%;
    right: 33px;
    height: 12%;
    transform: translate(-33%, -52%);
    transform: rotate(-5deg) scaleX(-1);
  }

  li {
    position: absolute;
    width: 70%;
    margin: 3px 0;
    border-bottom: 0.5px solid #3c1208;
    color: #2e0a03;
    font-size: 0.8rem;
    font-family: var(--lora-font);
    letter-spacing: -0.8px;
    opacity: 0.7;
    transform: rotate(-2deg);
  }

  .ticket-container {
    width: 50rem;
    height: 50rem;
  }

  .ticket {
    background: url("/assets/ticket.png") no-repeat center center;
    background-size: contain;
    animation: ${deal} 3s cubic-bezier(0.1, 0.5, 0.3, 1.5) forwards;
    animation-delay: 1s;
    filter: drop-shadow(0rem 0.3rem 3rem var(--yellow-color));
    transform: translateY(200%);
  }
`;

Ticket.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  style: PropTypes.object,
  quiz: PropTypes.object.isRequired,
};

export default Ticket;
