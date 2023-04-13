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
    width: 350px;
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

    &:not(:first-of-type) {
      border-left: 1px solid lightgrey;
    }
  }
`;
