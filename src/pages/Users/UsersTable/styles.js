import styled from "styled-components";
import { GoX, GoPencil } from "react-icons/go";
import ReactPaginate from "react-paginate";

export const Container = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }

  width: 90%;
  margin-top: 20px;

  .btn-filter {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }

  table {
    border: 1px solid ${({ theme }) => theme.blackOne};
    th {
      background-color: ${({ theme }) => theme.brownFour};
      color: ${({ theme }) => theme.whiteTwo};
    }
    td {
      text-align: center;
      color: ${({ theme }) => theme.blackOne};
      div {
        display: flex;
        justify-content: space-evenly;
      }

      select {
        border: none;
        background-color: transparent;
      }
    }
  }

  .pagination-container {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const IconX = styled(GoX)`
  background-color: ${({ theme }) => theme.brownTwo};
  padding: 5px;
  border-radius: 999px;
  color: ${({ theme }) => theme.whiteOne};
  &:hover {
    cursor: pointer;
  }
`;

export const IconPencil = styled(GoPencil)`
  background-color: ${({ theme }) => theme.brownTwo};
  padding: 5px;
  border-radius: 999px;
  color: ${({ theme }) => theme.whiteOne};
  &:hover {
    cursor: pointer;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizeSmall}px;

  .previus {
    &:hover {
      cursor: pointer;
    }
  }
  .next {
    &:hover {
      cursor: pointer;
    }
  }
  .page {
    background-color: ${({ theme }) => theme.grayThree};
    padding: 2px;
    border: 1px solid ${({ theme }) => theme.brownOne};
    border-radius: 3px;
    text-align: center;
  }

  .teste {
    &:hover {
      cursor: pointer;
    }
  }
`;
