// components/CartButton.js
import { useCart } from "../lib/cart-context";

export default function CartButton() {
  const { cartItems, total } = useCart();

  return (
    <button style={{ padding: 10, fontSize: 16 }}>
      🛒 {cartItems.length} articles – {total.toFixed(2)} €
    </button>
  );
}

