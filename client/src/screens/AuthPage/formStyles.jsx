import styled from "styled-components";
import React from "react";

export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: black;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 98vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 78vh;
  }
`;

export const WelcomeText = styled.h2`
  padding: 4rem;
  background-color: transparent;
  margin: 0 0 4rem 0;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: black;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 18%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 6rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  margin-bottom: 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: normal;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to right, #1f7477 0%, #239599 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

const Msg = styled.div`
  color: #b22222;
  padding: 1rem;
  background-color: transparent;
`;
export function ErrorMsg(props) {
  const { msg } = props;
  return <Msg>{msg}</Msg>;
}
