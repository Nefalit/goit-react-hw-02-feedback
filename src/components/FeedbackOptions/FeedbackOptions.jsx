import PropTypes from 'prop-types';
import s from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveVoice }) => {
  return (
    <div className={s.wrapper}>
      {options.map(key => (
        <button
          key={key}
          className={s.btn}
          type="button"
          onClick={() => onLeaveVoice(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveVoice: PropTypes.func.isRequired,
};
