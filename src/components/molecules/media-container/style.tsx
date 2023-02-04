import styled from "styled-components";

export const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2 20%;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Icon = styled.a`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
  }
`;
