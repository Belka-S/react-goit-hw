import PropTypes from 'prop-types';

import { StatCard } from 'components/Statistics/StatCard/StatCard';
import { List, Item } from './StatList.styled';

export const StatList = ({ items }) => (
  <List>
    {items.map(item => (
      <Item id={item.id} key={item.id}>
        <StatCard item={item} />
      </Item>
    ))}
  </List>
);

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
