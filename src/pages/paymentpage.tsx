import React from 'react';
import axios from 'axios'; // ⬅️ Required to call your backend server

// --- SECURE PAYMENT LOGIC ---

const initiateRazorpayPayment = async (amountInRupees: number, prefillData?: any) => {
  try {
    // 1. Call the secure backend API to create the Order ID
    const orderResponse = await axios.post('http://127.0.0.1:8080/api/create-order', {
      amount: amountInRupees,
      currency: 'INR'
    });

    const { order_id, key_id, amount } = orderResponse.data;

    // 2. Define the Razorpay Checkout options
    const options = {
      key: key_id, // Public Key from your server
      amount: amount, // Amount is in Paise, locked by the server
      order_id: order_id, // Secure order ID
      currency: 'INR',
      name: "Alive Music Academy",
      description: "Enrollment Fee",
      
      handler: function (response: any) {
        // 3. This executes upon successful payment
        alert(`Payment Successful! TXN ID: ${response.razorpay_payment_id}. Verification pending.`);
        
        // NOTE: In a production system, the response would be sent to a /verify-payment endpoint on your backend.
      },
      prefill: {
        // Prefill user details if available (optional)
        name: prefillData?.fullName || "Student", 
        email: prefillData?.email || "student@example.com",
        contact: prefillData?.phone || "9999999999",
      },
      theme: { color: "#FF4500" } 
    };

    // 4. Open the payment pop-up
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
    return true;

  } catch (error) {
    console.error('Payment Initiation Failed:', error);
    alert('Payment system error. Please ensure the backend server is running and try again.');
    return false;
  }
};

// --- COMPONENT DEFINITION ---

const PaymentPage = () => {
  // Define the fixed amount for the button (in Rupees)
  const AMOUNT_TO_CHARGE = ''; 
  
  // NOTE: In a real scenario, you'd pass dynamic user data here.
  const dummyUserData = {
      fullName: "Abraham Student", 
      email: "test@alivemusic.com", 
      phone: "919444821399"
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20 flex justify-center">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-xl shadow-2xl p-10 border border-gray-200 text-center">
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Options
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Please click "Pay Now" to open the secure **Razorpay** gateway.
          </p>

          <div className="border-t pt-6 mt-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Enrollment Fee Payment
            </h2>
            
            {/* 4. CONNECT THE BUTTON TO THE BACKEND */}
            <button 
              onClick={() => initiateRazorpayPayment(AMOUNT_TO_CHARGE, dummyUserData)}
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-xl hover:bg-red-700 transition transform hover:scale-105"
            >
              Pay {AMOUNT_TO_CHARGE} Now
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
                Powered by Razorpay Secure Checkout
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentPage;