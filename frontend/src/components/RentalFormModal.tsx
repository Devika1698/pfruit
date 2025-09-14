import React from "react";

interface FormData {
    name: string;
    email: string;
    aadhaar: string;
}

interface RentFormModalProps {
    showForm: boolean;
    selectedItem: { name: string; price: string } | null;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    handleProceedToPayment: () => void;
}

const RentFormModal: React.FC<RentFormModalProps> = ({
    showForm,
    selectedItem,
    formData,
    setFormData,
    setShowForm,
    handleProceedToPayment,
}) => {
    if (!showForm) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">
                    Rent {selectedItem?.name}
                </h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleProceedToPayment();
                    }}
                    className="space-y-4"
                >
                    {/* Full Name */}
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

                    {/* Email */}
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

                    {/* Aadhaar */}
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

                    {/* Actions */}
                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="flex-1 py-2 px-4 border rounded-lg hover:bg-slate-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RentFormModal;
