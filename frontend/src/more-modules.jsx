import { useState } from "react";
import "./more-module.css";
import { HashLink } from "react-router-hash-link";

// ---------------------------------------------------------------------------
// MODULE DATA — add/edit a module by adding/editing an object here.
// category must be one of: "clinical" | "speciality" | "administrative"
// ---------------------------------------------------------------------------
const modules = [
  // ---------------- CLINICAL ----------------
  {
    id: "patient-management",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "Patient Management",
   icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    includes: [
      ["Patient Registration", "Medical History", "Document Management"],
      ["Electronic Medical Records", "Patient Timeline", "Insurance Management"],
    ],
  },
  {
    id: "appointment-scheduling",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "Appointment Scheduling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    includes: [
      ["Doctor Calendar", "Walk-in Support", "Reception Dashboard"],
      ["Queue Management", "Automated Reminders", "Multi-Doctor View"],
    ],
  },
  {
    id: "opd-consultations",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "OPD Consultations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="6" r="2" />
        <path d="M6 3v6a5 5 0 0 0 10 0V3" />
        <path d="M11 14v2a5 5 0 0 0 10 0" />
      </svg>
    ),
    includes: [
      ["SOAP Notes", "Diagnosis Coding", "Follow-up Scheduling"],
      ["Vitals Recording", "Procedure Tracking", "Referral Management"],
    ],
  },
  {
    id: "laboratory",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "Laboratory",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2" />
        <line x1="9" y1="2" x2="15" y2="2" />
      </svg>
    ),
    includes: [
      ["Lab Request Management", "Sample Tracking", "Automated Reports"],
      ["Test Catalog", "Result Management", "Machine Integration"],
    ],
  },
  {
    id: "icu-management",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "ICU Management",
   icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="8" rx="1" />
        <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    includes: [
      ["Admissions Management", "Continuous Monitoring", "Nursing Notes"],
      ["Bed Management", "Ventilator Management", "Critical Care Dashboard"],
    ],
  },
  {
    id: "ipd",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "IPD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h4l2-8 4 16 2-8h8" />
      </svg>
    ),
    includes: [
      ["Admission Management", "Daily Rounds Notes", "Discharge Summary"],
      ["Ward Assignment", "Medication Orders", "Billing Integration"],
    ],
  },
  {
    id: "infection-control",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "Infection Control",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    includes: [
      ["Outbreak Tracking", "Isolation Management", "Surveillance Reports"],
      ["PPE Inventory", "Contact Tracing", "Compliance Audits"],
    ],
  },
  {
    id: "telemedicine",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "Telemedicine",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    includes: [
      ["Video Consultations", "E-Prescriptions", "Remote Monitoring"],
      ["Appointment Booking", "Patient Portal", "Consultation History"],
    ],
  },
  {
    id: "admission",
    category: "clinical",
    categoryLabel: "CLINICAL",
    title: "Admission",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" />
        <rect x="5" y="4" width="14" height="18" rx="2" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
    includes: [
      ["Bed Allocation", "Admission Forms", "Deposit Management"],
      ["Ward Transfer", "Insurance Verification", "Discharge Planning"],
    ],
  },

  // ---------------- SPECIALITY ----------------
  {
    id: "dental",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Dental",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    includes: [
      ["Tooth Charting", "Dental Imaging", "Patient Records"],
      ["Treatment Planning", "Appointment Scheduling", "Billing"],
    ],
  },
  {
    id: "radiology",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Radiology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    includes: [
      ["Radiology Requests", "PACS Integration Ready", "Image Viewing"],
      ["Result Management", "Report Generation", "Billing"],
    ],
  },
  {
    id: "pharmacy",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Pharmacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </svg>
    ),
    includes: [
      ["Prescription Dispensing", "Drug Interaction Alerts", "Supplier Management"],
      ["Drug Inventory", "Expiry Tracking", "Billing"],
    ],
  },
  {
    id: "ophthalmology",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Ophthalmology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    includes: [
      ["Visual Acuity", "Surgical Planning", "Patient Timeline"],
      ["Refraction Records", "IOL Calculation", "Billing"],
    ],
  },
  {
    id: "gynecology",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Gynecology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    includes: [
      ["Antenatal Care", "Growth Charts", "Risk Assessment"],
      ["Delivery Records", "Consultation Notes", "Billing"],
    ],
  },
  {
    id: "ent",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "ENT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9.5" />
      </svg>
    ),
    includes: [
      ["Audiogram Recording", "Procedure Tracking", "Referrals"],
      ["Endoscopy Notes", "Patient Records", "Billing"],
    ],
  },
  {
    id: "emergency",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Emergency",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    includes: [
      ["Triage Scoring", "Resuscitation Notes", "Handover Notes"],
      ["Rapid Intake", "Bed Status Board", "Billing"],
    ],
  },
  {
    id: "surgery",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Surgery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    includes: [
      ["Pre-op Assessment", "Anaesthesia Notes", "Post-op Care"],
      ["OT Scheduling", "Surgical Checklists", "Billing"],
    ],
  },
  {
    id: "blood-bank",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Blood Bank",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
      </svg>
    ),
    includes: [
      ["Donor Management", "Blood Typing", "Inventory Tracking"],
      ["Cross-matching", "Expiry Alerts", "Transfusion Records"],
    ],
  },
  {
    id: "vaccination",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Vaccination",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21l6-6" />
        <path d="M9 15l6-6 3 3-6 6z" />
        <path d="M14 4l3 3" />
        <path d="M17 1l3 3" />
      </svg>
    ),
    includes: [
      ["Immunization Schedule", "Vaccine Inventory", "Dose Tracking"],
      ["Reminder Alerts", "Certificate Generation", "Adverse Event Reporting"],
    ],
  },
  {
    id: "dialysis",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Dialysis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20" />
        <path d="M4 12h16" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    includes: [
      ["Session Scheduling", "Machine Allocation", "Fluid Balance Tracking"],
      ["Patient Vitals", "Treatment History", "Billing Integration"],
    ],
  },
  {
    id: "oncology",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Oncology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2c-2 4-2 6 0 8s2 4 0 8" />
        <circle cx="12" cy="2" r="1" />
      </svg>
    ),
    includes: [
      ["Chemotherapy Planning", "Radiation Scheduling", "Tumor Staging"],
      ["Treatment Protocols", "Follow-up Tracking", "Palliative Care Notes"],
    ],
  },
  {
    id: "pediatrics",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Pediatrics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
        <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      </svg>
    ),
    includes: [
      ["Growth Charts", "Immunization Tracking", "Developmental Milestones"],
      ["Well-baby Visits", "Parent Portal", "Pediatric Dosing"],
    ],
  },
  {
    id: "cardiology",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Cardiology",
   icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        <polyline points="7 12 10 12 11 9 13 15 14 12 17 12" />
      </svg>
    ),
    includes: [
      ["ECG Management", "Cath Lab Scheduling", "Cardiac Risk Scoring"],
      ["Echo Reports", "Device Tracking", "Follow-up Scheduling"],
    ],
  },
  {
    id: "dermatology",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Dermatology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    includes: [
      ["Skin Condition Imaging", "Biopsy Tracking", "Treatment Plans"],
      ["Procedure Scheduling", "Patient Photos", "Follow-up Reminders"],
    ],
  },
  {
    id: "physiotherapy",
    category: "speciality",
    categoryLabel: "Specialty",
    title: "Physiotherapy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="4" r="2" />
        <path d="M12 6v6l-4 4" />
        <path d="M12 12l4 4" />
        <path d="M8 10l-4 2" />
        <path d="M16 10l4 2" />
      </svg>
    ),
    includes: [
      ["Session Scheduling", "Exercise Plans", "Progress Tracking"],
      ["Assessment Notes", "Equipment Booking", "Billing Integration"],
    ],
  },

  // ---------------- ADMINISTRATIVE ----------------
  {
    id: "inventory",
    category: "administrative",
    categoryLabel: "Administrative",
    title: "Inventory",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="13" x2="16" y2="13" />
      </svg>
    ),
    includes: [
      ["Stock Management", "Supplier Management", "Internal Transfers"],
      ["Reorder Alerts", "Expiry Tracking", "Reports"],
    ],
  },
  {
    id: "finance-billing",
    category: "administrative",
    categoryLabel: "Administrative",
    title: "Finance & Billing",
   icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="8" y1="18" x2="10" y2="18" />
        <line x1="14" y1="10" x2="16" y2="10" />
        <line x1="14" y1="14" x2="16" y2="14" />
        <line x1="14" y1="18" x2="16" y2="18" />
      </svg>
    ),
    includes: [
      ["Patient Billing", "Payment Receipts", "Tax Compliance"],
      ["Insurance Claims", "Financial Reports", "Odoo Accounting"],
    ],
  },
  {
    id: "hr-payroll",
    category: "administrative",
    categoryLabel: "Administrative",
    title: "HR & Payroll",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    includes: [
      ["Employee Onboarding", "Leave Management", "Payslips"],
      ["Contract Management", "Payroll Processing", "Performance Reviews"],
    ],
  },
  {
    id: "attendance",
    category: "administrative",
    categoryLabel: "Administrative",
    title: "Attendance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
    includes: [
      ["Biometric Integration", "Shift Management", "Leave Integration"],
      ["Manual Attendance", "Overtime Calculation", "Reports"],
    ],
  },
  {
    id: "mortuary",
    category: "administrative",
    categoryLabel: "Administrative",
    title: "Mortuary",
   icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="4" y1="12" x2="20" y2="12" />
      </svg>
    ),
    includes: [
      ["Body Registration", "Storage Management", "Release Documentation"],
      ["Cold Storage Tracking", "Post-mortem Records", "Family Notifications"],
    ],
  },
  {
    id: "insurance",
    category: "administrative",
    categoryLabel: "Administrative",
    title: "Insurance",
   icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      </svg>
    ),
    includes: [
      ["Policy Verification", "Claims Processing", "Pre-authorization"],
      ["Coverage Tracking", "TPA Integration", "Settlement Reports"],
    ],
  },
];

function MoreModules() {
  const [filter, setFilter] = useState("all");

  const filteredModules =
    filter === "all" ? modules : modules.filter((m) => m.category === filter);

  return (
    <div className="more-modules-page">
      <div className="module-nav">
        <HashLink to="/" className="back-home">
          ← Back to Home
        </HashLink>
        <HashLink smooth to="/#demos" className="back-home">
          Contact Sales
        </HashLink>
      </div>
      <div className="module-hero">
        <hr />
        <h3 className="reveal" style={{ color: "white" }}>ALL MODULES</h3>
        <h1 className="reveal reveal-delay-1">Every Modle. One Platform.</h1>
        <h2 className="reveal reveal-delay-2">
          CareCentral is fully modular start with what you need and expand at
          your own pace. All modules share the same patient database,
          eliminating duplicate data entry.
        </h2>
        <div className="num reveal reveal-stagger reveal-delay-3">
          <div>
            <h1>{modules.length}+</h1>
            <h3>Modules Available</h3>
          </div>
          <div>
            <h1>100%</h1>
            <h3>Modular Architecture</h3>
          </div>
        </div>
      </div>

      <div className="buttons reveal reveal-stagger">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "clinical" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("clinical")}
        >
          Clinical
        </button>
        <button
          className={filter === "speciality" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("speciality")}
        >
          Speciality
        </button>
        <button
          className={
            filter === "administrative" ? "filter-btn active" : "filter-btn"
          }
          onClick={() => setFilter("administrative")}
        >
          Administrative
        </button>
      </div>

      <div className="module-grid reveal reveal-stagger" id="my-cards">
        {filteredModules.map((module) => (
          <div className="module-cards" key={module.id}>
            <div className="icons">
              <div className="available">
              </div>
            </div>
            
            <div className="icon-title">
            <span className="icon">{module.icon}</span>
            <h4 className="module-title">{module.title}</h4>
          </div>
            <h3 style={{ color: "rgb(100, 101, 105)" }}>{module.description}</h3>
            <h5 style={{ color: "gray", marginTop: "30px", marginBottom: "3px" }}>
              INCLUDES
            </h5>
            <div className="text-grids">
              <div>
                {module.includes[0].map((item) => (
                  <h2 key={item}>✓ {item}</h2>
                ))}
              </div>
              <div>
                {module.includes[1].map((item) => (
                  <h2 key={item}>✓ {item}</h2>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom">
        <h1 className="reveal" style={{ color: "white" }}>Ready to Get Started?</h1>
        <h2 className="reveal reveal-delay-1">
          Talk to our team to find the right module mix for your facility.          facility.
        </h2>

        <div className="bottom-buttons reveal reveal-stagger reveal-delay-2">
          <HashLink to="/" className="button1">
            ← Back to Home
          </HashLink>
          <HashLink
            to="/#demos"
            className="button2"
            style={{ color: "#5580F4", fontWeight: "500" }}
          >
            Contact Sales →
          </HashLink>
        </div>
      </div>

      <div className="bottom-nav">
        <span>© 2024 Beltech Solutions · CareCentral Healthcare ERP</span>
      </div>
    </div>
  );
}

export default MoreModules;
