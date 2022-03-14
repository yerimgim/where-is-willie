import { keyframes } from "styled-components";

export const blink = keyframes`
  from {
    color: var(--yellow-color);
    opacity: 1;
  } to {
    opacity: 0.3;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export const deal = keyframes`
  0% {
    transform: scale(1.3) rotateY(12deg) translateY(100%) rotate(40deg)
      scaleX(0.5) scaleY(0.55);
  }
  40% {
    transform: rotateY(-15deg) rotateY(3deg) rotate(-20deg) translateY(0%)
      scale(0.8);
  }
  100% {
    transform: rotateY(180deg) rotate(-2deg) translateY(40%);
  }
`;

export const shake = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
  }
  10% {
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(4deg);
  }
  80% {
    transform: rotate(-2deg);
  }
  90% {
    transform: rotate(2deg);
  }
`;
