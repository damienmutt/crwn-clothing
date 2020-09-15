import React from 'react'
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; // Stripe price format is in cents.
    const publishableKey = "pk_test_51HRg8iJEuo9UchgBSSQzuW9Q6KK80W5gGcgrA6GhGtgv98OFoaD1CIJaX26XoppKtnUykty3N6Gi08J6aXvTLngi00OM1gmQVv";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton