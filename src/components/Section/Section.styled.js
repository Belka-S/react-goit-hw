import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  color: #000000;
  background-color: #cfdae5;

  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    // max-width: 700px;

    padding-left: 15px;
    padding-right: 34px;
    padding-top: 34px;
  }

  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 30px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;
