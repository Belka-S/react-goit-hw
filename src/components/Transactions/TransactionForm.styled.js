import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from 'formik';

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

export const Field = styled(FormikField)`
  padding: 5px;
  margin-left: 15px;
  margin-right: 45px;
  width: 100px;
  text-transform: capitalize;
`;

export const Form = styled(FormikForm)`
  margin: 15px 0;
  display: flex;

  button {
    padding: 0 50px;
    background-color: steelblue;
    border: none;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
