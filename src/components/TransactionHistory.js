import React from "react";
import PropTypes from "prop-types";


const TransactionHistory = ({ items }) => (
  <div  className="container">
    <table className="">
      <thead className="">
        <tr>
          <th className="">Type</th>
          <th className="">Amount</th>
          <th className="">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;