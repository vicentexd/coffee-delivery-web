import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/useCart";
import { Router } from "./Router";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
