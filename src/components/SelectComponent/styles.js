import styled from "styled-components";

export const Container = styled.div`
  .custom-select {
    padding: 5px;
    border-radius: 2px;
    border: none;
    background-color: ${({ theme }) => theme.grayThree};
    margin-top: 5px;
    display: block;
  }
`;
