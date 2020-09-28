import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../../styles/styles.css';

const Header = ({ df, gf, n, rsf, total, v, ve}) => (
    <div 
        className="headerWrapper"
        data-test="header"
    >
        <div data-test="total">
            {`Total: ${total}`}
        </div>
        <div data-test="dietaries">
            {`df: ${df} gf: ${gf} n!: ${n} rsf: ${rsf} v: ${v} ve: ${ve}`}
        </div>
    </div>
);

Header.propTypes = {
	df: PropTypes.number.isRequired,
	gf: PropTypes.number.isRequired,
	n: PropTypes.number.isRequired,
	rsf: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	v: PropTypes.number.isRequired,
	ve: PropTypes.number.isRequired,
};

export default Header;