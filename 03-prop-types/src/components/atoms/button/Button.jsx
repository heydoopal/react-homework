import PropTypes from 'prop-types';

function Button({ style, size, text }) {
  const styleClass =
    style === 'filled'
      ? 'bg-primary text-white'
      : 'bg-transparent text-primary';

  const sizeClass = 
    size === 'large' 
      ? 'h-14' 
      : 'h-11';

      
      return (
        <button 
          type="button" 
          className={`rounded border border-primary text-base font-sans font-semibold cursor-pointer ${sizeClass} ${styleClass}`}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['large', 'small']),
  text: PropTypes.string.isRequired,
};
export default Button;
