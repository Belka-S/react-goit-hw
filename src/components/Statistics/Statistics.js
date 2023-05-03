import PropTypes from 'prop-types';
import { StatWrap } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePstg }) => (
  <StatWrap>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {(positivePstg * 100).toFixed(0)}%</span>
  </StatWrap>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePstg: PropTypes.number.isRequired,
};
