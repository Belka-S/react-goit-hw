import PropTypes from 'prop-types';
import { OptWrap } from './Options.styled';

export const Options = ({ options, onLeaveFeedback }) => (
  <OptWrap>
    {Object.keys(options).map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </OptWrap>
);

Options.propTepes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
