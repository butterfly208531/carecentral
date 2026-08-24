import { useState } from "react";
function Question(){
    const [openQuestion, setOpenQuestion] = useState(null);
    const faqs = [
    {
        question: "What is CareCentral?",
        answer: "CareCentral is a comprehensive hospital management system designed to streamline healthcare operations. It helps hospitals, clinics, and medical centers manage patient records, appointments, billing, pharmacy, laboratory services, staff, inventory, and reporting from a single, centralized platform. By reducing paperwork and automating daily tasks, CareCentral improves efficiency, accuracy, and the overall patient experience."
    },
    {
        question: "Can it work for multiple branches?",
        answer: "Yes. CareCentral is designed to support healthcare organizations with multiple hospitals, clinics, or branches. Each location can manage its own patients, staff, appointments, and daily operations while sharing a centralized database. Administrators can monitor activities, generate reports, and manage all branches from a single dashboard, making it ideal for expanding healthcare networks."
    },
    {
        question: "Can we add modules later?",
        answer: "Yes. CareCentral is built with a flexible modular architecture, allowing you to start with only the features your organization currently needs. As your hospital or clinic grows, you can easily add modules such as Pharmacy, Laboratory, Radiology, Inventory, Human Resources, Accounting, or Patient Portal without disrupting your existing workflow or data."
    },
    {
        question: "Is cloud deployment available?",
        answer: "Yes. CareCentral supports both cloud-based and on-premise deployment options. Cloud deployment provides secure remote access, automatic backups, and easier maintenance, while on-premise deployment gives organizations full control over their infrastructure and data. We can help you choose the option that best fits your requirements."
    },
    {
        question: "Can it integrate with existing systems?",
        answer: "Yes. CareCentral is designed to integrate with existing healthcare software through secure APIs. It can exchange data with electronic medical record (EMR) systems, laboratory equipment, payment gateways, insurance providers, and other third-party applications, reducing duplicate data entry and ensuring smooth information flow."
    },
    {
        question: "Do you provide training?",
        answer: "Absolutely. We offer comprehensive onboarding and training for doctors, nurses, administrators, receptionists, and other healthcare staff. Training sessions can be conducted remotely or on-site and include user guides, documentation, and hands-on demonstrations to ensure your team can confidently use every module of the system."
    },
    {
        question: "Do you provide support?",
        answer: "Yes. We provide dedicated technical support to ensure your organization gets the most out of CareCentral. Our team is available to assist with system setup, troubleshooting, software updates, and any technical issues you may encounter. We are committed to delivering timely assistance to keep your healthcare operations running smoothly."
    }
];
    return(
        <>
            <div className='ques'>
                <hr />
                <h3 style={{color: "#1a3d5c"}}>FAQ</h3>
                <div className='title'><h1>Frequently Asked <span style={{color: "#3898D0"}}> Questions</span></h1></div>
                <h3 style={{color: "rgb(35, 35, 35)"}}>Everything you need to know about CareCentral.</h3>
                <div className="ques-grid">
                    {faqs.map((faq, index) => (
                        <div className="ques-grid-card" key={index}>
                            <div
                                className="question"
                                onClick={() =>
                                    setOpenQuestion(openQuestion === index ? null : index)
                                }
                            >
                                <span style={{color: "gray", fontSize: "15px", fontWeight: "470"}}>{faq.question}</span>
                                <span>{openQuestion === index ? "-" : "+"}</span>
                            </div>

                            {openQuestion === index && (
                                <div className="answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </div>
        </>
    )
}

export default Question;