import React, { useState } from 'react';
import RevealOnScroll from '../RevealOnScroll';
import Toast from '../Toast';
import emailjs from 'emailjs-com';

const Contact = () => {
    const defaultFormData = {
        name: '',
        email: '',
        message: '',
        honeypot: ''
    };

    const [formData, setFormData] = useState(defaultFormData);
    const [loading, setLoading] = useState(false); // State to track loading
    const [toast, setToast] = useState({ visible: false, message: '', type: '' }); // Toast state

    const showToast = (message, type) => {
        setToast({ visible: true, message, type });
        setTimeout(() => setToast({ visible: false, message: '', type: '' }), 3000); // Auto-hide after 3 seconds
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // EmailJS configuration
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const apiKey = import.meta.env.VITE_EMAILJS_API_KEY;

        if (formData.honeypot) {
            // If honeypot field is filled, pretend success
            showToast('Thanks for your submission!', 'success');
            setFormData(defaultFormData);
            return;
        }

        setLoading(true); // Start loading
        try {
            await emailjs.sendForm(serviceId, templateId, e.target, apiKey);
            showToast('Message sent successfully', 'success');
            setFormData(defaultFormData);
        } catch (error) {
            showToast('An error occurred, Please try again', 'error');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Honeypot field */}
                        <div className="hidden">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                tabIndex="-1"
                                autoComplete="off"
                                value={formData.honeypot || ''}
                                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name..."
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Your message..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading} // Disable button when loading
                            className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] 
                                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 text-white mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>

            {/* Toast Component */}
            {toast.visible && <Toast message={toast.message} type={toast.type} />}
        </section>
    );
};

export default Contact;