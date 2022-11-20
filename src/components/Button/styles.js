import styled from "styled-components";

export const Container = styled.div`
  .btn {
    background-color: ${({ theme }) => theme.brownTwo};
    width: 25vh;
    border: none;
    border-radius: 2px;
    padding: 10px;
    color: ${({ theme }) => theme.whiteOne};
    font-size: ${({ theme }) => theme.fonts.sizeSmall}px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.brownThree};
    }
  }
`;
