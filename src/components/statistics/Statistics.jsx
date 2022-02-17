import PropTypes from "prop-types";
import getRandomHexColor from "js/getRandomHexColor";

export default function Statistics ( {title, stats} ) {
    return (
        <div className="statistics">
          {title && <h2 className="title">{title}</h2>}

          <ul className="stat-list">
            {stats.map(({id, label,percentage}) => {
              return (
              <li
              key={id}
              style = {{ backgroundColor: getRandomHexColor() }}
              >
          
                <span>{label}</span>
                <span>{percentage}%</span>
              </li>
            );
            })}
            
          </ul>
        </div>
    );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired,
};