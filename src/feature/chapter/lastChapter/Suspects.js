import React from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

import suspect from "../../../data/suspect.json";

const Suspects = () => {
  const history = useHistory();
  return (
    <Entry>
      <TextBox>
        <h2>범인 검거</h2>
        <p>지금까지 얻은 내용을 토대로 범인을 검거 해주세요.</p>
      </TextBox>
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
                  {person.infos.map((info, index) => {
                    return <li key={index}>{info}</li>;
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

const TextBox = styled.div`
  padding: 40px 0;
`;

const Entry = styled.section`
  width: 85%;
  height: 60%;
  text-align: center;

  h2 {
    font-size: 35px;
    padding-bottom: 10px;
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
