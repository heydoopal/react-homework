import CartModal from './components/cart-modal/CartModal';

const product = {
  productName: '[풀무원] 탱탱쫄면 (4개입)',
  price: 4980,
};

const App = () => {
  return (
    <>
      <CartModal product={product} />
    </>
  );
};

export default App;
