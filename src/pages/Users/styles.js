import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .content {
    width: 180vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.whiteTwo};
    border: 1px solid ${({ theme }) => theme.brownOne};
    border-radius: 5px;
  }

  h1 {
    margin: 10px 0;
  }
`;
