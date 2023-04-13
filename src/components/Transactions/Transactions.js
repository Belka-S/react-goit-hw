import PropTypes from 'prop-types';
import { Table, TableRow } from './Transactions.styled';

export const Transactions = ({ items }) => (
  <Table>
    <thead>
      <TableRow>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </TableRow>
    </thead>

    <tbody items={items}>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

Transactions.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired
).isRequired;
