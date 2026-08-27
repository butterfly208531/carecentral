import './home.css';

const CheckIcon = () => (
    <span className="price-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    </span>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="12" x2="20" y2="12" />
        <polyline points="13 5 20 12 13 19" />
    </svg>
);

function Price(){
        const scrollToDemo = () => {
        const section = document.getElementById("demos");
        section.scrollIntoView({ behavior: "smooth" });
        };

    const goToDemo = () => {
        window.location.href = "/demo";
    };

    const saasFeatures = [
        "Patient Management",
        "Appointment Scheduling",
        "OPD Consultations",
        "Laboratory Module",
        "ICU Module",
        "Cloud Hosting Included",
        "5 Months Free Support",
        "Email & Telegram Support",
        "Regular Updates",
    ];

    const implementationFeatures = [
        "Full Installation & Configuration",
        "Staff Training & Go-Live Support",
        "All Core Modules",
        "On-Premise or Cloud Setup",
        "Custom Configuration",
        "5 Months Free Support",
        "Data Migration Assistance",
        "Dedicated Implementation Team",
    ];

    return (<>
    <div className='fifth-white'>
                    <hr />
                    <h3 className="reveal" style={{color: "#5580F4"}}>PRICING</h3>
                    <div className='title reveal reveal-delay-1'><h1>Simple, Transparent <span style={{color: "#5580F4"}}> Pricing</span></h1></div>
                    <h3 className="reveal reveal-delay-2">Choose the plan that fits your facility. No hidden fees, no surprises.</h3>

                    <div className = "prices reveal reveal-stagger">
                        <div className = "price-card">
                            <div className="price-card-top">
                                <span className="price-card-label">SaaS Plan</span>
                            </div>
                            <div className="price-card-pricing">
                                <span className="price-card-amount">Custom</span>
                                <span className="price-card-period">ETB/month</span>
                            </div>
                            <div className="price-card-divider"></div>
                            <p className="price-card-desc">Ideal for clinics and growing facilities.</p>
                            <ul className="price-card-features">
                                {saasFeatures.map((feature) => (
                                    <li key={feature}>
                                        <CheckIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="price-card-btn" onClick={scrollToDemo}>
                                Get started
                                <ArrowIcon />
                            </button>
                        </div>

                        <div className = "price-card price-card-blue">
                            <div className="price-card-top">
                                <span className="price-card-label">One-Time Implementation</span>
                            </div>
                            <div className="price-card-pricing">
                                <span className="price-card-amount">Custom</span>
                                <span className="price-card-period">ETB one-time</span>
                            </div>
                            <div className="price-card-divider"></div>
                            <p className="price-card-desc">Full implementation for hospitals and networks.</p>
                            <ul className="price-card-features">
                                {implementationFeatures.map((feature) => (
                                    <li key={feature}>
                                        <CheckIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="price-card-btn" onClick={goToDemo}>
                                Contact sales
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
           </>)   
}
export default Price;