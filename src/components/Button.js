import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, click }) => {
    return (
        <button onClick={click} className="btn" style={{ backgroundColor: color }}>
            {text}
        </button>
    );
};

// Defaul props
Button.defaultProps = {
    color: '#000',
};

// Props type control
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    click: PropTypes.func,
};

export default Button;
