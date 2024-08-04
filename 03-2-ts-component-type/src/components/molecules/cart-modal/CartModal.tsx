import { useState } from 'react';
import { Button, Stepper } from '../../index';
import '../../../styles/tailwind.css';

interface ProductProps {
  productName: string;
  price: number;
}

interface CartModalProps {
  product: ProductProps;
}

const CartModal = ({ product }: CartModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    setTotalPrice(product.price * newQuantity);
  };

  return (
    <div className="cart-modal is-visible">
      <div className="cart-modal__content">
        <div className="cart-modal__title">{product.productName}</div>
        <div className="cart-modal__details">
          <span className="cart-modal__product-price">
            {product.price.toLocaleString()}원
          </span>
          <Stepper
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <div className="cart-modal__summary">
          <span>합계</span>
          <span className="cart-modal__total-price">
            {totalPrice.toLocaleString()}원
          </span>
        </div>
        <div className="cart-modal__buttons">
          <Button style="outlined" size="large" text="취소" />
          <Button style="filled" size="large" text="장바구니에 담기" />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
