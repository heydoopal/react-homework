interface ButtonProps {
  style: 'filled' | 'outlined';
  size: 'large' | 'small';
  text: String;
}

function Button({ style, size, text }: ButtonProps) {
  const styleClass =
    style === 'filled'
      ? 'bg-primary text-white'
      : 'bg-transparent text-primary';

  const sizeClass = size === 'large' ? 'h-14' : 'h-11';

  return (
    <button
      type="button"
      className={`rounded border border-primary text-base font-sans font-semibold cursor-pointer ${sizeClass} ${styleClass}`}
    >
      {text}
    </button>
  );
}

export default Button;
