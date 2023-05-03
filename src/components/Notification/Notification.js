import PropTypes from 'prop-types';
import { Span } from './Notification.styled';

export const Notification = ({ message }) => <Span>{message}</Span>;

Notification.propType = { message: PropTypes.string.isRequired };
