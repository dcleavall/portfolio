import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css';
import App from './App';
import CartProvider from './components/store/CartContext';

// Lazy-load the Stripe Elements wrapper
const StripeWrapper = lazy(() => import('./StripeWrapper'));

const stripePromise = loadStripe('pk_live_51PoexQ00NGtbi6SbzD4GbZAtWOLlMWrQdmPbcJ5dXHNnFDoFHqCEhPKbi4JcxyiuhEtd6CMyIp5xMXzlwNM6UxXG00KEIBOu7n'); // Use your Stripe public key

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        {/* Wrap Stripe Elements in Suspense */}
        <Suspense fallback={<div>Loading Stripe...</div>}>
          <Elements stripe={stripePromise}>
            <StripeWrapper>
              <App />
            </StripeWrapper>
          </Elements>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
