import styled from "styled-components";
import { GoSearch } from "react-icons/go";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  div {
    margin: 5px;
  }
`;

export const IconSearch = styled(GoSearch)`
  background-color: ${({ theme }) => theme.brownTwo};
  padding: 8px;
  border-radius: 999px;
  color: ${({ theme }) => theme.whiteOne};
  &:hover {
    cursor: pointer;
  }
`;
