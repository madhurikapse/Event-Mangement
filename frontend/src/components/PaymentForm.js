import React, { useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import "./PaymentForm.css"
import Api from '../axiosconfig';
import { loadStripe } from '@stripe/stripe-js';
const PaymentForm = () => {
    
  const stripePromise = loadStripe('pk_test_51Pqvc2Ag4hqJmskOwA2qvmViAhhJUCmdQTPSBoWJBZADRRoEDiEKEsJbSCFuvj1zp89GgXxAYxkGmm1sZK6vFTGc00Es8RGKPe'); 
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(1000)
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);

        try {
            const { data: { clientSecret } } = await Api.post('http://localhost:4000/create-payment-intent', { amount });

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (error) {
                setError(error.message);
            } else if (paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        } catch (error) {
            setError('Payment failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Payment</h1>
            <CardElement />
            <button type="submit" disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
            {error && <div className="error">{error}</div>}
            <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
        </form>
        
    );
};

export default PaymentForm;
