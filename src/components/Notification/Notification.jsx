import PropTypes from 'prop-types';
import s from './notification.module.css'

const Notification = ({ message }) => {
    return (
        <h2 className={s.title}>{message}</h2>
    );
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired
};