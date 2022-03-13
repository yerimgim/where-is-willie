import styled from "styled-components";

export const File = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Cover = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  border-radius: 2px 20px 20px 2px;
  background: url("assets/left-folder.png") no-repeat center;
  background-size: contain;
  transform: rotateX(10deg);
  transform-origin: center left;
  transition: all 2s ease-in-out;
  z-index: 1;

  div {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    color: var(--black-color);

    h3 {
      margin: 10px 0;
      font-size: 2.5rem;
    }
  }

  filter: drop-shadow(1px 1px 3px var(--black-color));

  ${File}:hover & {
    transform: rotateX(10deg) rotateY(-180deg);
  }
`;

export const Page = styled.div`
  position: absolute;
  width: 35%;
  height: 75%;
  border-radius: 2px 10px 10px 2px;
  background-color: var(--white-color);
  transform: rotateX(10deg);
  transform-origin: center left;
  z-index: 0;

  ${File}:hover & {
    transform: rotateX(10deg) rotateY(-180deg);
    z-index: 2;
  }

  &:nth-child(2) {
    transition-duration: 2.3s;
  }

  ${File}:hover &:nth-child(2) {
    transition-duration: 6s;
  }

  &:nth-child(3) {
    transition-duration: 3s;
  }

  ${File}:hover &:nth-child(3) {
    transition-duration: 5.6s;
  }
`;

export const LastPage = styled.div`
  position: absolute;
  width: 35%;
  height: 75%;
  border-radius: 2px 10px 10px 2px;
  background-color: var(--white-color);
  transform: rotateX(10deg);
  transform-origin: center left;
  z-index: -1;
  font-size: 1.66rem;
  line-height: 1.5;

  h4 {
    margin: 5px 25px;
  }

  .content {
    margin: 20px;
  }

  .notification {
    display: flex;
    align-items: center;
    width: calc(100% - 80px);
    margin: 0 auto;
    padding: 0 5px;
    background-color: var(--light-grey-color);
    font-size: 1rem;
    font-family: var(--noto-sans-kr-font);
  }
`;

export const BackCover = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  border-radius: 2px 20px 20px 2px;
  background: url("assets/right-folder.png") no-repeat center;
  background-size: contain;
  transform: rotateX(10deg);
  transform-origin: center left;
  z-index: -2;
`;
