import './TransactionHistory.css';
import PropTypes from "prop-types";

export default function TransactionHistory ({transactions}) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                return (

                    <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                    )
                }) }
            </tbody>
        </table>
)}

TransactionHistory.prototype = {
    transactions: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.number
    }).isRequired,
}