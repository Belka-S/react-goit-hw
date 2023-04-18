import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 2px 2px 2px 2px ${({ theme }) => theme.colors.gray};
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  background-color: white;
  text-align: center;
  font-size: 18px;

  &:nth-child(2n) {
    background-color: #efeeee;
  }

  th {
    min-width: 210px;
    &:last-of-type {
      width: 100%;
    }
    padding: 10px;
    color: white;
    background-color: steelblue;
    text-transform: uppercase;

    &:not(:first-of-type) {
      border-left: 1px solid white;
    }
  }

  td {
    padding: 15px;
    color: gray;
    text-transform: capitalize;

    &:nth-of-type(3) {
      text-transform: uppercase;
    }

    &:last-of-type {
      display: flex;
      justify-content: space-between;
    }

    &:not(:first-of-type) {
      border-left: 1px solid lightgrey;
    }

    button {
      padding: 1px 20px;
      background-color: steelblue;
      border: none;
      border-radius: 5px;
      color: white;
      text-transform: uppercase;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
