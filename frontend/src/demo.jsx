import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://derash-carecenteral.onrender.com";

function Demo(){
    const [formData, setFormData] = useState({
        hospitalName: "",
        contactPerson: "",
        email: "",
        phone: "",
        facilityType: "",
        branches: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.hospitalName || !formData.contactPerson || !formData.email || !formData.phone) {
            setStatus("error");
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch(`${API_URL}/api/demo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            let data = null;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                try {
                    data = await response.json();
                } catch {
                    data = null;
                }
            }

            if (!response.ok) {
                const message = (data && data.message) || `Request failed (${response.status} ${response.statusText || "Error"})`;
                throw new Error(message);
            }

            if (data && !data.success) {
                throw new Error(data.message || "Something went wrong. Please try again.");
            }

            setStatus("success");
            setFormData({
                hospitalName: "",
                contactPerson: "",
                email: "",
                phone: "",
                facilityType: "",
                branches: "",
                message: "",
            });
        } catch (error) {
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    };

    return(
        <div className="final">
            <div className="demo-card">

                {/* Left panel: headline + contacts + stats */}
                <div className="demo-card-info reveal reveal-left">
                    <hr />
                    <h3 className="demo-card-tag">GET STARTED TODAY</h3>
                    <h1 className="demo-card-title">
                        Ready to Modernize Your Healthcare Facility?
                    </h1>
                    <h3 className="demo-card-sub">
                        Schedule a personalized demo and see how CareCentral can transform patient care, streamline operations, and bring your facility into the digital era.
                    </h3>
                    <div className="contact-line">
                        <span>📞 +251 955935455</span>
                        <span>✉ beltechsolns@gmail.com</span>
                        <span>➤ @belTechSolns</span>
                    </div>

                    <div className="demo-card-stats">
                        <div className="stat-box">
                            <h1>48h</h1>
                            <h3>Average setup time</h3>
                        </div>
                        <div className="stat-box">
                            <h1>100%</h1>
                            <h3>Local support team</h3>
                        </div>
                        <div className="stat-box">
                            <h1>5 months</h1>
                            <h3>Free post-launch support</h3>
                        </div>
                    </div>
                </div>

                {/* Right panel: demo request form */}
                <div className="demo-card-form-panel reveal reveal-right">
                <form className="demo-form" onSubmit={handleSubmit}>
            <h2>Request a Demo</h2>
            <h3>Fill in the form and our team will reach out within 24 hours.</h3>

            <div className="form-row">
                <div className="form-group">
                    <h4>Hospital / Clinic Name *</h4>
                    <input
                        type="text"
                        name="hospitalName"
                        placeholder="Addis Healthcare Center"
                        value={formData.hospitalName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <h4>Contact Person *</h4>
                    <input
                        type="text"
                        name="contactPerson"
                        placeholder="Dr. Sara Haile"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <h4>Email Address *</h4>
                    <input
                        type="email"
                        name="email"
                        placeholder="contact@clinic.et"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <h4>Phone Number *</h4>
                    <input
                        type="text"
                        name="phone"
                        placeholder="+251 91 234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <h4>Facility Type</h4>
                    <input
                        type="text"
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <h4>Number of Branches</h4>
                    <input
                        type="text"
                        name="branches"
                        placeholder="e.g. 1, 3, 10+"
                        value={formData.branches}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group-full">
                <h4>Message</h4>
                <textarea
                    name="message"
                    placeholder="Tell us about your facility and what you need..."
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            {status === "error" && (
                <h3 style={{ color: "rgb(255, 95, 86)", marginBottom: "15px" }}>{errorMessage}</h3>
            )}

            {status === "success" && (
                <h3 style={{ color: "rgb(39, 201, 63)", marginBottom: "15px" }}>
                    Thank you! Your demo request has been submitted we'll be in touch soon.
                </h3>
            )}

            <button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting..." : "Submit Demo Request → "}
            </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Demo;
