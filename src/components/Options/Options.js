import PropTypes from 'prop-types';
import { OptWrap } from './Options.styled';

export const Options = ({ options, onLeaveFeedback }) => (
  <OptWrap>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </OptWrap>
);

Options.propTepes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
