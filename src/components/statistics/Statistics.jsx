import PropTypes from "prop-types";

export default function Statistics ({stats}) {
    return (

  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => {
      return (
      <li
      key={id}
      >
        <span>{label}</span>
        <span>{percentage}</span>
      </li>
    );
    })}   
  </ul>
    );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired,
};