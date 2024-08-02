import PropTypes from 'prop-types';
import '../../App.css';
import './Button.css';

function Button({ style, size, text }) {
  const buttonStyle = {
    height: size === 'large' ? '3.375rem' : '2.75rem',
    borderRadius: '0.25rem',
    border: `1px solid var(--primary)`,
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: 'inherit',
    cursor: 'pointer',
    backgroundColor: style === 'filled' ? 'var(--primary)' : 'transparent',
    color: style === 'filled' ? 'var(--white)' : 'var(--primary)',
  };

  Button.propTypes = {
    style: PropTypes.oneOf(['filled', 'outlined']),
    size: PropTypes.oneOf(['large', 'small']),
    text: PropTypes.string.isRequired,
  };

  return (
    <button type="button" style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
