import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;

  .content {
    width: 180vh;
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
