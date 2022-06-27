import PropTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentOfGood }) => {
  return (
    <ul className={s.list}>
      <li className={s.items}>
        <p>
          Good : <span>{good}</span>{' '}
        </p>
      </li>
      <li className={s.items}>
        <p>
          Neutral : <span>{neutral}</span>
        </p>
      </li>
      <li className={s.items}>
        <p>
          Bad : <span>{bad}</span>
        </p>
      </li>
      <li className={s.items}>
        <p>
          Total : <span>{total}</span>
        </p>
      </li>
      <li className={s.items}>
        <p>
          Positive feedback : <span>{percentOfGood}%</span>
        </p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentOfGood: PropTypes.number.isRequired,
};
