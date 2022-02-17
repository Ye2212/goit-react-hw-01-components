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
            {transactions.map(({ id, type, amount, currency }) => {
                return (
                <tbody key={id}>
                    <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                </tbody>
                    )
                }) }
        </table>
)}

TransactionHistory.prototype = {
    transactions: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.number
    }).isRequired,
}