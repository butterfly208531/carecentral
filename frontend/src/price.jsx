import './home.css';
function Price(){
        const scrollToDemo = () => {
        const section = document.getElementById("demos");
        section.scrollIntoView({ behavior: "smooth" });
        };
    return (<>
    <div className='fifth-white'>
                    <hr />
                    <h3 style={{color: "#1a3d5c"}}>PRICING</h3>
                    <div className='title'><h1>Simple, Transparent <span style={{color: "#3898D0"}}> Pricing</span></h1></div>
                    <h3>Choose the plan that fits your facility. No hidden fees, no surprises.</h3>

                    <div className = "prices">
                        <div className = "price-white">
                            <h4 >Monthly Subscription</h4>
                            <h2 style = {{fontWeight: "bold", fontSize: "24"}}>SaaS Plan</h2>
                            <span style =  {{fontWeight: "bold", fontSize: "30px", color: "black"}}>Custom</span> <span style =  {{color: "gray"}}>ETB/month</span>
                            <h3>ideal for clinics and growing facilities</h3>
                            <h2>✓ Patient Management</h2>
                            <h2>✓ Appointment Scheduling</h2>
                            <h2>✓ OPD Consultations</h2>
                            <h2>✓ Laboratory Module</h2>
                            <h2>✓ ICU Module</h2>
                            <h2>✓ Cloud Hosting Included</h2>
                            <h2>✓ 5 Months Free Support</h2>
                            <h2>✓ Email & Telegram Support</h2>
                            <h2>✓ Regular Updates</h2>

                            <button onClick={scrollToDemo}>Request Demo</button>
                        </div>
                        <div className = "price-blue">                            <h4 style={{paddingLeft:"8px"}}>One-Time Implementation</h4>
                            <span style = {{fontWeight: "bold", fontSize: "15px", fontColor: "white"}}>One-time plan</span><br/>
                            <span style =  {{fontWeight: "bold", fontSize: "30px", color: "white"}}>Custom</span> <span>ETB</span>
                            <h3>Full implementation for hospitals and networks.</h3>
                            <h5>✓ Full Installation & Configuration</h5>
                            <h5>✓ Staff Training & Go-Live Support</h5>
                            <h5>✓ All Core Modules</h5>
                            <h5>✓ On-Premise or Cloud Setup</h5>
                            <h5>✓ Custom Configuration</h5>
                            <h5>✓ 5 Months Free Support</h5>
                            <h5>✓ Data Migration Assistance</h5>
                            <h5>✓ Dedicated Implementation Team</h5>

                            <button>Contact Sales</button>

                        </div>
                    </div>
                </div>
           </>)   
}
export default Price;