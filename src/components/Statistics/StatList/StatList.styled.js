import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 110px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ id }) => {
    switch (id) {
      case 'id-1':
        return 'blue';
      case 'id-2':
        return 'purple';
      case 'id-3':
        return 'red';
      case 'id-4':
        return 'gray';
      case 'id-5':
        return 'teal';
      default:
        return 'black';
    }
  }};

  /* background-color: ${props =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`}; */
`;
