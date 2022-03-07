import React from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

import suspect from "../../../data/suspect.json";

const Suspects = () => {
  const history = useHistory();
  return (
    <Entry>
      <h2>범인 검거 페이지</h2>
      <ul>
        {suspect.suspect.map((person, index) => {
          return (
            <li
              className="suspect"
              key={index}
              onClick={() => {
                history.push({
                  pathname: person.success,
                  state: { info: [null, person.result] },
                });
              }}
            >
              <span>{person.no}</span>
              <div className="img-box">
                <img src={person.img} alt="용의자 1" />
              </div>
              <div className="text-box">
                <h3>{person.name}</h3>
                <ul>
                  {person.infos.map((info, ind) => {
                    return <li key={ind}>{info}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Entry>
  );
};

const Entry = styled.section`
  width: 80%;
  height: 60%;
  text-align: center;

  h2 {
    padding-bottom: 50px;
    font-size: 35px;
  }

  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .suspect {
    width: 20%;
    margin: 0 3px;
    padding: 10px 0;
    background-color: var(--white-color);
    box-sizing: border-box;

    h3 {
      padding: 10px 0;
      background-color: var(--yellow-color);
    }

    p {
      padding: 10px 0;
      background-color: var(--white-color);
    }

    &:hover {
      border: 3px solid var(--yellow-color);
    }
  }

  .text-box ul {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .text-box ul li {
    text-align: left;
  }
`;

export default Suspects;
