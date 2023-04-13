import styled from 'styled-components';

export const StatSection = styled.section`
  margin-bottom: 20px;
  display: inline-block;
  /* background-color: #ffffff; */
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Title = styled.h2`
  padding: 40px 100px;
  text-transform: uppercase;
  text-align: center;
`;
