import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    background-color: ${({ theme }) => theme.whiteTwo};
    border: 1px solid ${({ theme }) => theme.brownOne};
    min-height: ${(props) => (props.size === "high" ? 80 : 40)}vh;
    min-width: ${(props) => (props.size === "high" ? 40 : 60)}vh;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
