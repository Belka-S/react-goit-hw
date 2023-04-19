import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
