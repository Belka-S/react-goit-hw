import styled from 'styled-components';

export const Friend = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  padding: 5px 20px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.colors.gray};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 22px;
`;
