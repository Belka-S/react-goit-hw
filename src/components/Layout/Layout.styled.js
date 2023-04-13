import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  color: #000000;
  background-color: #cfdae5;

  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    // max-width: 700px;
    padding: 15px 34px;
  }

  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding: 30px 65px;
  }
`;
