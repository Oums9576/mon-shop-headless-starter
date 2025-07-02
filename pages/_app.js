// pages/_app.js
import { CartProvider } from "../lib/cart-context";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}


