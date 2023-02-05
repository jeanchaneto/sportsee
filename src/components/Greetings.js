import PropTypes from 'prop-types';
import './Greetings.css';

/**
 * Create greeting component
 * @param {userName} string
 * @returns display greeting component
 */
const Greetings = ({ userName }) => {

    return (
        <div className="greetings">
            <h1>Bonjour
                <span className="first-name"> {userName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

Greetings.propTypes = {
    userName: PropTypes.string
}

export default Greetings