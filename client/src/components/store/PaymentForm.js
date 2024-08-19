import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [tshirtQuantity, setTshirtQuantity] = useState(0);
  const [hoodieQuantity, setHoodieQuantity] = useState(0);

  // Prices in cents
  const tshirtPrice = 10;  // $0.10 USD
  const hoodiePrice = 5;   // $0.05 USD

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    // Calculate total amount
    const totalAmount = (tshirtQuantity * tshirtPrice) + (hoodieQuantity * hoodiePrice);

    // Ensure the total amount meets the minimum required by Stripe
    if (totalAmount < 50) {
      setError('The total amount must be at least $0.50 USD');
      setProcessing(false);
      return;
    }

    try {
      // Create PaymentIntent on the server
      const { data: { clientSecret } } = await axios.post('/create-payment-intent', {
        amount: totalAmount, // Amount in cents
      });

      // Confirm the payment with the client secret
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        setError(error.message);
      } else {
        // Payment successful
        alert('Payment successful!');
      }
    } catch (error) {
      setError('Payment failed. Please try again.');
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>T-shirts:</label>
        <input
          type="number"
          min="0"
          value={tshirtQuantity}
          onChange={(e) => setTshirtQuantity(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label>Hoodies:</label>
        <input
          type="number"
          min="0"
          value={hoodieQuantity}
          onChange={(e) => setHoodieQuantity(parseInt(e.target.value, 10))}
        />
      </div>
      <CardElement />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing...' : 'Pay'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PaymentForm;
