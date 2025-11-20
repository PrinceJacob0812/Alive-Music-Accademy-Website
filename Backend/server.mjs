
// backend/server.mjs

// 1. Import necessary utilities
import dotenv from 'dotenv';
import path from 'path'; // Utility for handling file paths
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Load environment variables EXPLICITLY from the project root
dotenv.config({
    // Tell dotenv to look one directory level up for the .env file
    path: path.resolve(__dirname, '..', '.env') 
});

// 3. Import Express, Razorpay, and other libraries
import express from 'express';
import Razorpay from 'razorpay';
import cors from 'cors';

// backend/server.mjs

// ... (Lines 1-24: Imports and Path Resolution) ...

// --- MIDDLEWARE SETUP ---
// 1. INITIALIZE APP (This must come BEFORE any app.use or app.post)
const app = express(); 

// 2. CONFIGURE CORS
app.use(cors({
    origin: ['http://localhost:5177', 'http://127.0.0.1:5177'],
    methods: 'GET,POST',
}));
// 3. USE JSON PARSER
app.use(express.json()); // Allows Express to read JSON data


// 2. Initialize Razorpay Client Instance (Uses SECRET Key)
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, 
  key_secret: process.env.RAZORPAY_SECRET,
});


// 3. SECURE API ROUTE: /create-order
app.post('/api/create-order', async (req, res) => {
  try {
    // Expect the amount (in Rupees) from the React frontend
    const { amount, currency = "INR" } = req.body; 
    
    if (!amount || amount <= 0) {
      return res.status(400).send("Invalid amount provided.");
    }

    // Define Order Options: Amount is converted to Paise
    const options = {
      amount: amount * 100, // Convert Rupees to Paise (e.g., 500 -> 50000)
      currency: currency,
      receipt: `receipt_student_${Date.now()}`, 
      payment_capture: 1 // Auto-capture payment after authorization
    };
    
    // Create the Order via Razorpay SDK
    const order = await instance.orders.create(options);
    
    // Send SECURE data back to the frontend
    res.status(200).json({
      order_id: order.id,
      key_id: process.env.RAZORPAY_KEY_ID, // Public key for the pop-up
      amount: order.amount,
      currency: order.currency,
    });
    
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    res.status(500).send("Failed to process order creation.");
  }
});


// 4. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server listening securely on port ${PORT}`);
    console.log(`Key Status: ${process.env.RAZORPAY_KEY_ID ? 'Keys Loaded ✅' : 'Keys Missing ❌'}`);
});