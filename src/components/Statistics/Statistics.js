import PropTypes from 'prop-types';

import { StatSection, Title } from './Statistics.styled';
import { StatList } from 'components/Statistics/StatList/StatList';

export const Statistics = ({ title, stats }) => (
  <StatSection>
    {title && <Title>{title}</Title>}
    <StatList items={stats} />
  </StatSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
