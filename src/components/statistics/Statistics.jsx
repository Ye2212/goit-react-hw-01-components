import PropTypes from "prop-types";

export default function Statistics ( {title, stats} ) {
    return (
        <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map((stat) => {
      return (
      <li>
          key={stat.id}
        <span>{stat.label}</span>
        <span>{stat.percentage}</span>
      </li>
    );
    })}
    
  </ul>
</section>
    );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired,
};