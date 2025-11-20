import React, { useState } from 'react';
import axios from 'axios'; // ⬅️ 1. ADD AXIOS IMPORT
import { Mail, Phone, MapPin, Clock, Calendar, Star, Send, Video, User, Music, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        
        // Course Information
        courseType: '',
        instrument: '',
        experienceLevel: 'Beginner',
        preferredMode: 'Online',
        preferredTime: '',
        
        // Additional Information
        musicalBackground: '',
        goals: '',
        hearAboutUs: '',
        additionalNotes: '',
        
        // Emergency Contact (for minors)
        parentName: '',
        parentPhone: '',
        parentEmail: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    // Fixed type definition for submitStatus
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // --- 2. SECURE PAYMENT HANDLER FUNCTION ---
    const initiateRazorpayPayment = async (data: typeof formData) => {
        // ⬅️ Define the amount to be charged in RUPEES.
        const AMOUNT_TO_CHARGE = ''; 

        try {
            // A. Call the secure backend API to create the Order ID
            const orderResponse = await axios.post('http://localhost:5000/api/create-order', {
                amount: AMOUNT_TO_CHARGE, 
                currency: 'INR'
            });
            
            const { order_id, key_id, amount } = orderResponse.data;

            // B. Define the Razorpay Checkout options
            const options = {
                key: key_id, 
                amount: amount, 
                order_id: order_id, // The SECURE ID from the backend
                currency: 'INR',
                name: "Alive Music Academy",
                description: "Course Registration Fee: ₹" + (amount / 100),
                
                handler: function (response: any) {
                    // This executes on successful payment
                    alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
                    // ⚠️ FUTURE STEP: Send the response to your backend's /verify-payment endpoint for final verification.
                },
                prefill: {
                    name: data.fullName,
                    email: data.email,
                    contact: data.phone
                },
                theme: { color: "#FF4500" } 
            };
            
            // C. Open the payment pop-up
            const rzp1 = new (window as any).Razorpay(options);
            rzp1.open();
            return true; // Indicate initiation success

        } catch (error) {
            console.error('Payment Initiation Failed:', error);
            // Throw a specific error to be caught by handleSubmit
            throw new Error('Payment system could not start. Please ensure the backend server is running.');
        }
    };
    // ------------------------------------------

    // --- 3. UPDATED SUBMIT HANDLER ---
    // Make this function async again to wait for the payment initiation
    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // ⬅️ Replaced WhatsApp link logic with secure payment initiation
            await initiateRazorpayPayment(formData); 
            
            // NOTE: The 'success' status here confirms the payment pop-up *opened*,
            // not that the payment was completed. Final verification happens in the handler.
            setSubmitStatus('success');
            
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    fullName: '', email: '', phone: '', age: '', gender: '', courseType: '', instrument: '',
                    experienceLevel: 'Beginner', preferredMode: 'Online', preferredTime: '',
                    musicalBackground: '', goals: '', hearAboutUs: '', additionalNotes: '', parentName: '',
                    parentPhone: '', parentEmail: ''
                });
                setSubmitStatus(null);
            }, 3000);

        } catch (error) {
            // ERROR LOGIC
            console.error('Submission error:', error);
            setSubmitStatus('error');
            
            // Show error for 5 seconds then hide
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            // FINAL CLEANUP
            setIsSubmitting(false);
        }
    };
    // -----------------------------------

    const courseOptions = [
        'Carnatic Music (Vocals)',
        'Devotional & Gospel Music',
        'Western & Indian Vocal Music',
        'Veena (Classical Instrumental)',
        'Violin (Classical Music)',
        'Keyboard, Casio & Gospel Piano',
        'Guitar Training',
        'Harmonium Classes',
        'Advanced English Language'
    ];

    const timeSlots = [
        'Saturday Morning (9:00 AM - 12:00 PM)',
        'Saturday Afternoon (2:00 PM - 5:00 PM)',
        'Saturday Evening (5:00 PM - 8:00 PM)',
        'Sunday Morning (9:00 AM - 12:00 PM)',
        'Sunday Afternoon (2:00 PM - 5:00 PM)',
        'Sunday Evening (5:00 PM - 8:00 PM)',
        'Weekday Online (Flexible)',
        'Other (Please specify in notes)'
    ];

    if (submitStatus === 'success') {
        return (
            <div className="bg-gradient-to-b from-green-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-100">
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 mb-8">
                            <CheckCircle size={40} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Thank you for your interest in Alive Music Academy! A secure payment window has opened. Please complete your payment to finalize enrollment.
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h3>
                            <div className="space-y-2 text-gray-600">
                                
                                <p>✓ **IMPORTANT: Complete the payment in the new window.**</p>
                                <p>✓ Your registration details are secured.</p>
                                <p>✓ Abraham Sir will contact you within 24 hours.</p>
                                <p>✓ We'll schedule your free consultation and trial class.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSubmitStatus(null)}
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Register Another Student
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            {/* Header */}
            <section className="bg-gradient-to-r from-orange-900 via-red-900 to-purple-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-200 text-sm font-medium mb-6 border border-orange-400/30">
                        <Star className="h-4 w-4 mr-2" />
                        Register & Contact Us
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Start Your <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">Musical Journey</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-orange-100">
                        Register for classes or get in touch with us. We're here to guide your musical journey at Alive Music Academy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Registration Form - Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
                                    <h2 className="text-3xl font-bold mb-2 flex items-center">
                                        <Music className="h-8 w-8 mr-3" />
                                        Student Registration
                                    </h2>
                                    <p className="text-orange-100">Complete this form and Abraham Sir will personally guide you toward the perfect course.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                                    {/* Personal Information */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                            <User className="h-6 w-6 text-orange-600 mr-3" />
                                            Personal Information
                                        </h4>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="+91-98765-43210"
                                                />
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                                                <input
                                                    type="number"
                                                    id="age"
                                                    name="age"
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                    required
                                                    min="5"
                                                    max="80"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="Enter age"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Course Information */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                            <Music className="h-6 w-6 text-orange-600 mr-3" />
                                            Course Information
                                        </h4>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-2">Course Type *</label>
                                                <select
                                                    id="courseType"
                                                    name="courseType"
                                                    value={formData.courseType}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                >
                                                    <option value="">Select a course</option>
                                                    {courseOptions.map((course) => (
                                                        <option key={course} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                                                <select
                                                    id="experienceLevel"
                                                    name="experienceLevel"
                                                    value={formData.experienceLevel}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                >
                                                    <option value="Beginner">Beginner (No prior experience)</option>
                                                    <option value="Intermediate">Intermediate (Some experience)</option>
                                                    <option value="Advanced">Advanced (Significant experience)</option>
                                                </select>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="preferredMode" className="block text-sm font-medium text-gray-700 mb-2">Preferred Class Mode *</label>
                                                <select
                                                    id="preferredMode"
                                                    name="preferredMode"
                                                    value={formData.preferredMode}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                >
                                                    <option value="Online">Online Classes (Zoom/Google Meet)</option>
                                                    <option value="Offline">Offline Classes (Tiruvallur Center)</option>
                                                    <option value="Both">Both Online & Offline</option>
                                                </select>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                                                <select
                                                    id="preferredTime"
                                                    name="preferredTime"
                                                    value={formData.preferredTime}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                >
                                                    <option value="">Select preferred time</option>
                                                    {timeSlots.map((slot) => (
                                                        <option key={slot} value={slot}>{slot}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                            <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                                            Additional Information
                                        </h4>
                                        
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="musicalBackground" className="block text-sm font-medium text-gray-700 mb-2">Musical Background</label>
                                                <textarea
                                                    id="musicalBackground"
                                                    name="musicalBackground"
                                                    rows={3}
                                                    value={formData.musicalBackground}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="Tell us about any previous musical training or experience..."
                                                ></textarea>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">Musical Goals</label>
                                                <textarea
                                                    id="goals"
                                                    name="goals"
                                                    rows={3}
                                                    value={formData.goals}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="What do you hope to achieve through music lessons?"
                                                ></textarea>
                                            </div>
                                            
                                            <div>
                                                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                                                <textarea
                                                    id="additionalNotes"
                                                    name="additionalNotes"
                                                    rows={3}
                                                    value={formData.additionalNotes}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                    placeholder="Any specific questions or requirements?"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Parent/Guardian Information (for minors) */}
                                    {parseInt(formData.age) < 18 && formData.age && (
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                                <User className="h-6 w-6 text-orange-600 mr-3" />
                                                Parent/Guardian Information
                                                <span className="text-sm text-gray-500 ml-2">(Required for students under 18)</span>
                                            </h4>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name *</label>
                                                    <input
                                                        type="text"
                                                        id="parentName"
                                                        name="parentName"
                                                        value={formData.parentName}
                                                        onChange={handleChange}
                                                        required={parseInt(formData.age) < 18}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                        placeholder="Parent/Guardian full name"
                                                    />
                                                </div>
                                                
                                                <div>
                                                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Phone *</label>
                                                    <input
                                                        type="tel"
                                                        id="parentPhone"
                                                        name="parentPhone"
                                                        value={formData.parentPhone}
                                                        onChange={handleChange}
                                                        required={parseInt(formData.age) < 18}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                                        placeholder="+91-98765-43210"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="pt-6 border-t border-gray-200">
                                        {submitStatus === 'error' && (
                                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                                                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                                                <div>
                                                    <p className="text-red-700 font-medium">Registration Failed</p>
                                                    <p className="text-red-600 text-sm">There was an error sending your registration. Please try again or contact us directly at +91-98765-43210.</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center ${
                                                isSubmitting
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                    Submitting Registration...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5 mr-2" />
                                                    Submit Registration
                                                </>
                                            )}
                                        </button>
                                        
                                        <p className="text-center text-sm text-gray-500 mt-4">
                                            By submitting this form, your details will be sent to Abraham Sir at alive Music Accademy's Whatsapp Page and you agree to be contacted regarding your musical education.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        {/* Contact Information - Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Contact Details */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Phone className="h-6 w-6 text-orange-600 mr-3" />
                                    Contact Information
                                </h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start group">
                                        <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 group-hover:scale-110 transition-transform">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900">Phone</h4>
                                            <a href="tel:+91-9444821399" className="text-orange-600 hover:text-orange-700 font-medium">
                                                +91-94448-21399
                                            </a>
                                            <p className="text-gray-500 text-sm">Available for inquiries</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start group">
                                        <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-600 group-hover:scale-110 transition-transform">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900">Email</h4>
                                            <a href="mailto:aliveabraham@gmail.com" className="text-purple-600 hover:text-purple-700 font-medium">
                                                aliveabraham@gmail.com
                                            </a>
                                            <p className="text-gray-500 text-sm">Quick response guaranteed</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start group">
                                        <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900">Address</h4>
                                            <p className="text-gray-600">
                                                Alive Music Academy<br />
                                                Near Kakkallur Vegetable Market<br />
                                                Behind Government School<br />
                                                Kakkalur, Tiruvallur
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start group">
                                        <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-600 group-hover:scale-110 transition-transform">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900">Class Timings</h4>
                                            <p className="text-gray-600">
                                                <strong>Offline Classes:</strong><br />
                                                Saturday & Sunday<br />
                                                After 2:00 PM
                                            </p>
                                            <p className="text-gray-500 text-sm mt-2">Online classes: Flexible timings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Free Consultation CTA */}
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                                <h4 className="text-2xl font-bold mb-4 flex items-center">
                                    <Calendar className="h-6 w-6 mr-3" />
                                    Free Consultation
                                </h4>
                                <p className="text-orange-100 mb-6 leading-relaxed">
                                    Ready to begin? Abraham Sir will guide you toward the perfect course. 
                                    Experience personalized attention and discover your musical potential.
                                </p>
                                <div className="flex items-start mb-4">
                                    <div className="h-5 w-5 text-yellow-300 mr-2 mt-1">🎬</div>
                                    <div>
                                        <p className="text-orange-100 mb-2">Watch our YouTube channel for tutorials:</p>
                                        <a 
                                            href="https://www.youtube.com/@ALIVEMUSICACADEMY" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-yellow-300 hover:text-yellow-200 font-medium underline"
                                        >
                                            @ALIVEMUSICACADEMY
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6">
                                    <Video className="h-5 w-5 text-yellow-300 mr-2 mt-1" />
                                    <p className="text-orange-100">Available for online classes and home tutor services</p>
                                </div>
                                <a 
                                    href="tel:+91-9444821399"
                                    className="block w-full px-6 py-3 bg-white text-orange-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                                >
                                    Call Now for Free Consultation
                                </a>
                            </div>

                            {/* Quick Info */}
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center text-gray-700">
                                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                                        <span>15+ years of teaching excellence</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                                        <span>Abraham Sir's 8+ years Veena expertise</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                                        <span>60-100 students trained annually</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                                        <span>Flexible online & offline classes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gradient-to-b from-white to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about our music classes and enrollment process.
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I get started with lessons?</h3>
                                <p className="text-gray-600">Fill out the registration form and we'll schedule a free consultation with Abraham Sir. We'll discuss your goals and find the perfect course for you.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">What are the class timings?</h3>
                                <p className="text-gray-600">Offline classes are available on Saturday & Sunday after 2:00 PM at our Tiruvallur center. Online classes offer flexible timings to suit your schedule.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide instruments?</h3>
                                <p className="text-gray-600">Yes, we have instruments available for use during offline lessons. Abraham Sir also provides guidance on purchasing or renting instruments for home practice.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes Abraham Sir's teaching special?</h3>
                                <p className="text-gray-600">With 8+ years of Veena expertise and traditional guru-shishya approach, Abraham Sir offers personalized attention with patience and passion that makes learning both enjoyable and effective.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;