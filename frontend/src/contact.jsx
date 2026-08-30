import { useState } from "react";
import './home.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-card-wrap">
                <div className="contact-info-card reveal reveal-left">
                    <h2>Contact Us</h2>
                    <div className="contact-info-row">
                        <span className="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </span>
                        <span>Addis Ababa,<br />Ethiopia</span>
                    </div>
                    <div className="contact-info-row">
                        <span className="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-10 6L2 7" />
                            </svg>
                        </span>
                        <span>carecentralsupport@gmail.com</span>
                    </div>
                    <div className="contact-info-row">
                        <span className="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </span>
                        <span>+251 955935455</span>
                    </div>
                    <div className="contact-info-row">
                        <span className="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </span>
                        <span>@belTechSolns</span>
                    </div>
                </div>

                <form className="contact-form-card reveal reveal-right" onSubmit={handleSubmit}>
                    <h2>Get in Touch</h2>
                    <p className="contact-form-sub">Feel free to drop us a line below!</p>

                    <input
                        className="contact-field"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="contact-field"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="contact-field"
                        name="message"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {submitted && (
                        <p className="contact-success">Thank you! Your message has been received.</p>
                    )}

                    <button type="submit" className="contact-send-btn">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;