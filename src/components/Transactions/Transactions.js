import { Component } from 'react';

import PropTypes from 'prop-types';
import { Table, TableRow } from './Transactions.styled';

export class Transactions extends Component {
  state = { id: null };

  onSelect = transactionId => this.setState({ id: transactionId });

  render = () => {
    const { items, onDelete } = this.props;

    return (
      <Table>
        <thead>
          <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Actions</th>
          </TableRow>
        </thead>

        <tbody items={items} onSelect={this.selectTransaction}>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount.toFixed(2)}</td>
              <td>{currency}</td>
              <td>
                {this.state.id === id ? (
                  <span>id: {this.state.id}</span>
                ) : (
                  <button onClick={() => this.onSelect(id)}>Detail</button>
                )}
                <button onClick={() => onDelete(id)}>Delete</button>
              </td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    );
  };
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
