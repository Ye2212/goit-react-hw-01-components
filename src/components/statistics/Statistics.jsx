import PropTypes from "prop-types";
import s from './Statistics.module.css';
import getRandomHexColor from "js/getRandomHexColor";

export default function Statistics ( {title, stats} ) {
    return (
        <div className={s.statistics}>
          {title && <h2 className={s.title}>{title}</h2>}

          <ul className={s.list}>
            {stats.map(({id, label,percentage}) => {
              return (
              <li className={s.item}
              key={id}
              style = {{ backgroundColor: getRandomHexColor() }}
              >
          
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
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