import React, { useState } from "react";
import { useLocation } from "react-router-dom";

interface FormData {
    name: string;
    email: string;
    aadhaar: string;
}

const RentFormPage: React.FC = () => {
    const location = useLocation();
    const selectedItem = location.state?.item; // passed from RentalServices

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        aadhaar: "",
    });

    const [showPayment, setShowPayment] = useState(false);

    const handleProceed = () => {
        if (!/^\d{12}$/.test(formData.aadhaar)) {
            alert("Please enter a valid 12-digit Aadhaar number");
            return;
        }
        setShowPayment(true);
    };

    if (!selectedItem) {
        return <p className="p-6 text-red-600">No item selected!</p>;
    }

    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
                Rent {selectedItem.name}
            </h2>

            {/* Step 1: Form */}
            {!showPayment && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleProceed();
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-slate-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-700 mb-1">Aadhaar Number</label>
                        <input
                            type="text"
                            value={formData.aadhaar}
                            onChange={(e) =>
                                setFormData({ ...formData, aadhaar: e.target.value })
                            }
                            required
                            maxLength={12}
                            pattern="\d{12}"
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                            Enter your 12-digit Aadhaar number
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                    >
                        Proceed to Payment
                    </button>
                </form>
            )}

            {/* Step 2: Payment Methods */}
            {showPayment && (
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-slate-800">
                        Choose Payment Method
                    </h3>
                    <div className="space-y-4">
                        <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Pay with UPI
                        </button>
                        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Pay with Card
                        </button>
                        <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                            Pay with Netbanking
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RentFormPage;
