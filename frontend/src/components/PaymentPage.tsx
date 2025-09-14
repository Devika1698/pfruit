import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage: React.FC = () => {
    const location = useLocation();
    const { item, formData } = location.state || {};

    if (!item || !formData) {
        return <p className="p-6 text-red-600">No booking information found!</p>;
    }

    const handlePayment = () => {
        console.log("Processing payment for:", item, formData);

        // TODO: Integrate Razorpay / Stripe etc.
        alert(`Payment started for ${item.name} (${item.price})`);
    };

    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Payment</h2>

            <div className="mb-6 p-4 border rounded-lg bg-slate-50">
                <p>
                    <strong>Item:</strong> {item.name}
                </p>
                <p>
                    <strong>Price:</strong> {item.price}
                </p>
                <p>
                    <strong>Name:</strong> {formData.name}
                </p>
                <p>
                    <strong>Email:</strong> {formData.email}
                </p>
                <p>
                    <strong>Aadhaar:</strong> {formData.aadhaar}
                </p>
            </div>

            <button
                onClick={handlePayment}
                className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Pay Now
            </button>
        </div>
    );
};

export default PaymentPage;
