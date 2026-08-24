import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
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
            setFormData({ name: "", email: "", subject: "", message: "" });
        }
    };

    return (
        <div className="final">
            <div>
                <hr style={{ color: "#7ec8ed" }} />
                <h3 style={{ color: "#7ec8ed" }}>GET IN TOUCH</h3>
                <div className="title">
                    <h1
                        className="text"
                        style={{ color: "rgb(224, 240, 255)", textAlign: "left", marginLeft: "40px" }}
                    >
                        Contact CareCentral
                    </h1>
                </div>
                <h3 className="text" style={{ color: "rgb(224, 240, 255)" }}>
                    Have questions about our healthcare platform or need dedicated support? Reach out to our team anytime.
                </h3>
                <div className="text">
                    <span>📞 +251 955935455</span>
                    <span>✉ beltechsolns@gmail.com</span>
                    <span>➤ @belTechSolns</span>
                </div>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <h3>We typically respond within 24 business hours.</h3>

                <div className="form-row">
                    <div className="form-group">
                        <h4>Your Name *</h4>
                        <input
                            type="text"
                            name="name"
                            placeholder="Abebe Kebede"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <h4>Email Address *</h4>
                        <input
                            type="email"
                            name="email"
                            placeholder="abebe@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group-full">
                    <h4>Subject</h4>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Inquiry about clinic deployment"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group-full">
                    <h4>Message *</h4>
                    <textarea
                        name="message"
                        placeholder="How can we assist you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {submitted && (
                    <h3 style={{ color: "rgb(39, 201, 63)", marginBottom: "15px" }}>
                        Thank you! Your message has been received.
                    </h3>
                )}

                <button type="submit">
                    Send Message →
                </button>
            </form>
        </div>
    );
}

export default Contact;