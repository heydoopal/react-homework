import Button from '../button/Button';
import './CartModal.css'; // 스타일 시트를 임포트합니다.

const CartModal = () => {
  return (
    <div className="cart-modal is-visible">
      <div className="cart-modal__content">
        <div className="cart-modal__title">장바구니</div>
        <div className="cart-modal__details">
          <span className="cart-modal__product-price">₩100,000</span>
          <span className="cart-modal__product-og-price">₩120,000</span>
        </div>
        <div className="cart-modal__summary">
          <span>합계</span>
          <span className="cart-modal__total-price">₩100,000</span>
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
