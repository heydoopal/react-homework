interface StepperProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const Stepper = ({ quantity, onQuantityChange }: StepperProps) => {
  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="stepper-button">
      <button
        className="stepper-button-minus"
        type="button"
        aria-label="수량 내리기"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      ></button>
      <span>{quantity}</span>
      <button
        className="stepper-button-plus"
        type="button"
        aria-label="수량 올리기"
        onClick={handleIncrease}
      ></button>
    </div>
  );
};

export default Stepper;
