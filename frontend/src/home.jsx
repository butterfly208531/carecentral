import { useEffect, useRef, useState } from 'react';
import Price from "./price.jsx";
import Question from "./question.jsx";
import Contact from "./contact.jsx";
import Demo from "./demo.jsx";
//import MoreModules from "./more-modules.jsx";
import './home.css';
import logo from './assets/logo.png';
import logoOnly from './assets/logo-only.png';
import patientImage from './assets/patient.jpg';
import appointmentImage from './assets/appointment.jpg';
import opdImage from './assets/opd.jpg';
import laboratoryImage from './assets/laboratory.jpg';
import icuImage from './assets/icu.jpg';
import integrationImage from './assets/integration.jpg';
import { Link } from "react-router-dom";

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

const specialtyModules = [
    { label: "Radiology", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2"/></svg>) },
    { label: "Ophthalmology", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>) },
    { label: "Physiotherapy", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
    { label: "Gynecology", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>) },
    { label: "Emergency", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/></svg>) },
    { label: "Inventory", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>) },
    { label: "Finance", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>) },
    { label: "HR & Payroll", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>) },
    { label: "Dental", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c-2 3-2 4-4 4a3 3 0 0 0-3 3c0 5 3 9 5 11 1-2 1-3 2-3s1 1 2 3c2-2 5-6 5-11a3 3 0 0 0-3-3c-2 0-2-1-4-4z"/></svg>) },
    { label: "Pharmacy", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="8" rx="4"/><line x1="12" y1="8" x2="12" y2="16"/></svg>) },
    { label: "ENT", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 4-3 5-3 9a3 3 0 0 1-6 0"/></svg>) },
    { label: "IPD", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>) },
    { label: "Surgery", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 4L4 20M9 4l11 11"/></svg>) },
    { label: "Attendance", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>) },
    { label: "More...", icon: null },
];

const integrationNodes = [
    { label: "Accounting", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>) },
    { label: "Inventory", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>) },
    { label: "Purchase", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7l8.7 5 8.7-5"/><line x1="12" y1="22" x2="12" y2="12"/></svg>) },
    { label: "HR & Payroll", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>) },
    { label: "Attendance", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>) },
    { label: "CRM", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3"/><path d="M2 20a7 7 0 0 1 14 0"/><circle cx="18" cy="9" r="2.5"/><path d="M16 20a6 6 0 0 1 7-5.9"/></svg>) },
    { label: "Dashboard & Reporting", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg>) },
    { label: "Medical Devices", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>) },
    { label: "Laboratory Machines", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg>) },
    { label: "Radiology Equipment", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>) },
    { label: "Sales", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>) },
    { label: "Speciality Modules", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="10" y2="9"/><line x1="14" y1="15" x2="20" y2="15"/><circle cx="12" cy="9" r="2"/><circle cx="12" cy="15" r="2"/></svg>) },
];

const advantageItems = [
    { title: "Built on Odoo", text: "Enterprise-grade foundation trusted by thousands globally.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>) },
    { title: "Affordable", text: "Transparent pricing with no hidden fees.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 2 1.3 1.6 3 1.8 3 .8 3 2-1.3 2-3 2-3-.8-3-1.8"/></svg>) },
    { title: "Easy to Expand", text: "Add modules anytime without migration headaches.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>) },
    { title: "Local Implementation", text: "On-site or remote setup across Ethiopia.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7"/><line x1="21" y1="21" x2="15" y2="15"/></svg>) },
    { title: "Modular Design", text: "Start small, expand as your facility grows.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
    { title: "Healthcare Focused", text: "Built specifically for the African healthcare context.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>) },
    { title: "Dedicated Support", text: "Local implementation and training by expert team.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>) },
    { title: "Secure & Reliable", text: "Your patient data protected at every layer.", color: "#5580F4", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="8 12 11 15 16 9"/></svg>) },
];

const hexFeatures = [
    { num: "01", title: "Healthcare ERP", text: "Complete Platform", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>) },
    { num: "02", title: "Modular", text: "Architecture", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
    { num: "03", title: "Multi-Branch", text: "Ready", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg>) },
    { num: "04", title: "Cloud & On-Premise", text: "Deployment", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10a5 5 0 0 0-9.6-1.8A4 4 0 0 0 6 16h12a4 4 0 0 0 0-8z"/></svg>) },
    { num: "05", title: "Built on Odoo", text: "Enterprise Grade", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg>) },
    { num: "06", title: "Machine Integration", text: "Ready", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>) },
];

const badgeCards = [
    { title: "Modern EMR", text: "Electronic Medical Records designed for clinical efficiency and accuracy.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v3H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V2z"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>) },
    { title: "Cloud Ready", text: "Accessible anywhere with secure cloud infrastructure.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10a5 5 0 0 0-9.6-1.8A4 4 0 0 0 6 16h12a4 4 0 0 0 0-8z"/></svg>) },
    { title: "Scalable", text: "Grows with your facility from single clinic to hospital network.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
    { title: "Easy to Use", text: "Intuitive UI designed for clinical staff, not just IT teams.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>) },
    { title: "Hospital ERP", text: "Full enterprise resource planning tailored for healthcare operations.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg>) },
    { title: "On-Premise Ready", text: "Deploy within your own infrastructure for full data control.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>) },
    { title: "Secure", text: "Role-based access, audit logs, and enterprise-grade security.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>) },
    { title: "Highly Customizable", text: "Adapt modules and workflows to your facility's unique needs.", color: "#5580F4",
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 11 14 9 22 21 10 13 10 13 2"/></svg>) },
];

/* Speeds are in degrees per second */
const SPIN_BASE_SPEED = 9;   /* gentle idle spin of the wheel */
const SPIN_MAX_SPEED = 720;  /* clamp for flick inertia */

function SpecialtyWheel({ items }) {
    const rootRef = useRef(null);
    const rotationRef = useRef(0);
    const velocityRef = useRef(SPIN_BASE_SPEED);
    const draggingRef = useRef(false);
    const hoveringRef = useRef(false);
    const samplesRef = useRef([]);
    const tweenRef = useRef(null);
    const reducedMotionRef = useRef(false);
    const [dragging, setDragging] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const step = 360 / items.length;
    const baseSpeed = () => (reducedMotionRef.current ? 0 : SPIN_BASE_SPEED);

    useEffect(() => {
        reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        velocityRef.current = baseSpeed();
    }, []);

    useEffect(() => {
        let raf;
        let last = performance.now();

        const tick = (now) => {
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;

            const tween = tweenRef.current;
            if (tween) {
                /* arrow-button spin: eased one-step rotation */
                const progress = Math.min((now - tween.start) / tween.duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                rotationRef.current = tween.from + (tween.to - tween.from) * eased;
                if (progress >= 1) {
                    rotationRef.current = tween.to;
                    tweenRef.current = null;
                    velocityRef.current = baseSpeed();
                }
            } else if (!draggingRef.current && !hoveringRef.current) {
                /* flick inertia easing back down to the idle spin baseline */
                const base = baseSpeed();
                const v = velocityRef.current;
                if (Math.abs(v) > Math.abs(base)) {
                    const decayed = v * Math.pow(0.08, dt);
                    velocityRef.current = Math.abs(decayed) > Math.abs(base) ? decayed : base;
                } else {
                    velocityRef.current = base;
                }
                rotationRef.current += velocityRef.current * dt;
            }

            /* single DOM write per frame — every slot follows via inherited --spin var */
            const rot = ((rotationRef.current % 360) + 360) % 360;
            if (rootRef.current) rootRef.current.style.setProperty("--spin", `${rot}deg`);

            /* highlight whichever module currently sits at the top of the wheel */
            let best = 0;
            let bestDist = Infinity;
            items.forEach((_, i) => {
                const a = (((i * step + rot) % 360) + 360) % 360;
                const d = Math.min(a, 360 - a);
                if (d < bestDist) { bestDist = d; best = i; }
            });
            setActiveIndex((prev) => (prev === best ? prev : best));

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    const pointerAngle = (e) => {
        const rect = rootRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.bottom; /* wheel centre = bottom middle of the visible half circle */
        const deg = (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI + 90;
        return ((deg % 360) + 360) % 360;
    };

    const onPointerDown = (e) => {
        draggingRef.current = true;
        setDragging(true);
        tweenRef.current = null;
        samplesRef.current = [{ t: performance.now(), a: pointerAngle(e) }];
        e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (!draggingRef.current) return;
        const a = pointerAngle(e);
        const samples = samplesRef.current;
        const prev = samples[samples.length - 1];
        if (prev) {
            let d = a - prev.a;
            d = ((d + 540) % 360) - 180; /* shortest wrap-around delta */
            rotationRef.current += d;
        }
        samples.push({ t: performance.now(), a });
        while (samples.length > 2 && performance.now() - samples[0].t > 120) samples.shift();
    };

    const endDrag = () => {
        if (!draggingRef.current) return;
        draggingRef.current = false;
        setDragging(false);
        const samples = samplesRef.current;
        const first = samples[0];
        const lastSample = samples[samples.length - 1];
        let v = baseSpeed();
        if (first && lastSample && lastSample.t > first.t) {
            let d = lastSample.a - first.a;
            d = ((d + 540) % 360) - 180;
            const measured = (d / (lastSample.t - first.t)) * 1000;
            if (Math.abs(measured) > 40) {
                v = Math.max(-SPIN_MAX_SPEED, Math.min(SPIN_MAX_SPEED, measured));
            }
        }
        velocityRef.current = v;
    };

    const spinBy = (direction) => {
        tweenRef.current = {
            from: rotationRef.current,
            to: rotationRef.current + direction * step,
            start: performance.now(),
            duration: reducedMotionRef.current ? 1 : 450,
        };
    };

    return (
        <>
            <div
                className={`specialty-wheel${dragging ? " dragging" : ""}`}
                ref={rootRef}
                role="region"
                aria-label="Specialty modules spinning wheel"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onMouseEnter={() => { hoveringRef.current = true; }}
                onMouseLeave={() => { hoveringRef.current = false; }}
            >
                <div className="wheel-ring" aria-hidden="true"></div>

                <div className="wheel-items">
                    {items.map((item, i) => (
                        <div
                            key={item.label}
                            className="wheel-slot"
                            style={{ "--a": `${i * step}deg` }}
                        >
                            <div className={`glass wheel-pill${i === activeIndex ? " active" : ""}`}>
                                <h3>{item.icon}{item.label}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="wheel-arrow left"
                    aria-label="Spin the wheel backward"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => spinBy(-1)}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button
                    type="button"
                    className="wheel-arrow right"
                    aria-label="Spin the wheel forward"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => spinBy(1)}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>

                <div className="wheel-hub" aria-hidden="true">
                    <span className="wheel-hub-text">SPECIALITY<br />MODULES</span>
                </div>
            </div>
            <p className="wheel-hint">Add specialty modules as your facility's clinical scope grows.</p>
        </>
    );
}

function FeatureCard({ feature }) {
    return (
        <div className='third-white-cards'>
            <div className='card-image-wrap'>
                <img className='card-image' src={feature.image} alt={feature.title} loading="lazy" />
                <div className='icon-square'>{feature.icon}</div>
            </div>
            <h3>{feature.title}</h3>
        </div>
    );
}

const featureCards = [
        {
            title: "Electronic Medical Records",
            image: UNSPLASH("photo-1454165804606-c3d57bc86b40"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v3H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V2z"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>)
        },
        {
            title: "Patient Timeline",
            image: UNSPLASH("photo-1519494026892-80bbd2d6fd0d"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>)
        },
        {
            title: "Appointment Scheduling",
            image: UNSPLASH("photo-1506784983877-45594efa4cbe"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>)
        },
        {
            title: "Queue Management",
            image: UNSPLASH("photo-1522071820081-009f0129c71c"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
        },
        {
            title: "Clinical Documentation",
            image: UNSPLASH("photo-1434030216411-0b793f4b4173"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-8 4 16 2-8h8"/></svg>)
        },
        {
            title: "Laboratory Workflow",
            image: UNSPLASH("photo-1532187863486-abf9dbad1b69"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg>)
        },
        {
            title: "ICU Management",
            image: UNSPLASH("photo-1516574187841-cb9cc2ca948b"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>)
        },
        {
            title: "Role-Based Access",
            image: UNSPLASH("photo-1563013544-824ae1b704d3"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>)
        },
        {
            title: "Audit Logs",
            image: UNSPLASH("photo-1614064641938-3bbee52942c7"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a5 5 0 0 1 5 5c0 3-1 5-1 8a4 4 0 0 1-8 0c0-3-1-5-1-8a5 5 0 0 1 5-5z"/><line x1="9" y1="10" x2="15" y2="10"/></svg>)
        },
        {
            title: "Multi-Branch Support",
            image: UNSPLASH("photo-1451187580459-43490279c0fa"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="16" y2="13"/></svg>)
        },
        {
            title: "Reporting & Analytics",
            image: UNSPLASH("photo-1551288049-bebda4e38f71"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg>)
        },
        {
            title: "Responsive Design",
            image: UNSPLASH("photo-1461749280684-dccba630e2f6"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>)
        },
        {
            title: "Cloud Deployment",
            image: UNSPLASH("photo-1558494949-ef010cbdcc31"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>)
        },
        {
            title: "On Premise Deployment",
            image: UNSPLASH("photo-1544197150-b99a580bb7a8"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>)
        },
        {
            title: "Machine Integration Ready",
            image: UNSPLASH("photo-1485827404703-89b55fcc595e"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M8 12l3 3 6-6"/></svg>)
        },
        {
            title: "Barcode Support",
            image: UNSPLASH("photo-1636622433525-127afdf3662d"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>)
        },
        {
            title: "Future AI Ready",
            image: UNSPLASH("photo-1677442136019-21780ecad995"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 1 10 10c0 5-3 9-7 9l-3-6-3 6c-4 0-7-4-7-9A10 10 0 0 1 12 2z"/><path d="M9 12l2 2 4-4"/></svg>)
        },
        {
            title: "Data Encryption",
            image: UNSPLASH("photo-1550751827-4bd374c3f58b"),
            icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>)
        }
];

function Home(){
        const facilityCards = [
            {
                image: patientImage,
                title: 'Patient Management',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
                list: ['Patient Registration', 'Electronic Medical Records', 'Medical History', 'Patient Timeline', 'Documents', 'Insurance']
            },
            {
                image: appointmentImage,
                title: 'Appointment Scheduling',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                ),
                list: ['Doctor Calendar', 'Queue Management', 'Walk-ins', 'Reminders', 'Reception Dashboard']
            },
            {
                image: opdImage,
                title: 'OPD Consultations',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-8 4 16 2-8h8"/></svg>
                ),
                list: ['SOAP Notes', 'Vitals', 'Diagnoses', 'Procedures', 'Follow-ups', 'Referrals']
            },
            {
                image: laboratoryImage,
                title: 'Laboratory',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2"/><line x1="9" y1="2" x2="15" y2="2"/></svg>
                ),
                list: ['Lab Requests', 'Test Catalog', 'Sample Tracking', 'Result Management', 'Reports', 'Machine Integration']
            },
            {
                image: icuImage,
                title: 'ICU',
                icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="8" rx="1"/><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>
                ),
                list: ['Admissions', 'Bed Management', 'Continuous Monitoring', 'Ventilator Management', 'Nursing Notes', 'Critical Care Dashboard']
            },
            {
                image: integrationImage,
                title: 'Machine Integration',
                icon: (
                    <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>
                ),
                list: ['Lab analyzers', 'Medical devices', 'Result capture automation', 'Real-time data sync', 'Operational visibility']
            }
        ];
        const [activeFacility, setActiveFacility] = useState(0);
        const facilityCardRefs = useRef([]);
        const facilityTrackRef = useRef(null);

        const scrollToFacilityCard = (index) => {
            setActiveFacility(index);
            if (window.innerWidth <= 900) {
                facilityCardRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            }
        };

        useEffect(() => {
            const track = facilityTrackRef.current;
            if (!track) return;

            const handleScroll = () => {
                if (window.innerWidth > 900) return;

                const slides = facilityCardRefs.current.filter(Boolean);
                const trackRect = track.getBoundingClientRect();
                const center = trackRect.left + trackRect.width / 2;

                let closest = 0;
                let minDist = Infinity;
                slides.forEach((slide, i) => {
                    const rect = slide.getBoundingClientRect();
                    const slideCenter = rect.left + rect.width / 2;
                    const dist = Math.abs(center - slideCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = i;
                    }
                });
                setActiveFacility(closest);
            };

            track.addEventListener('scroll', handleScroll, { passive: true });
            return () => track.removeEventListener('scroll', handleScroll);
        }, []);
        const scrollToFeatures = () => {
        const section = document.getElementById("features");
        section.scrollIntoView({ behavior: "smooth" });
};
        const scrollToDemo = () => {
        const section = document.getElementById("demos");
        section.scrollIntoView({ behavior: "smooth" });
        };
        const [menuOpen, setMenuOpen] = useState(false);

        const spiderRef = useRef(null);
        const [spiderInView, setSpiderInView] = useState(false);

        useEffect(() => {
            const el = spiderRef.current;
            if (!el) return;
            const reveal = () => setSpiderInView(true);
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting){
                        reveal();
                        observer.disconnect();
                        clearTimeout(timer);
                    }
                },
                { threshold: 0.25 }
            );
            observer.observe(el);
            const timer = setTimeout(reveal, 2500); /* fallback: never leave pills hidden */
            return () => { observer.disconnect(); clearTimeout(timer); };
        }, []);
        const [activeTab, setActiveTab] = useState("Overview");
        const [showAllFeatures, setShowAllFeatures] = useState(false);
        const tabs = [
            {label:"Overview", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>},
            {label:"Laboratory", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v7.2L4.7 18c-.8 1.4.2 3 1.8 3h11c1.6 0 2.6-1.6 1.8-3L15 10.2V3"/><line x1="9" y1="3" x2="15" y2="3"/><line x1="7.5" y1="14" x2="16.5" y2="14"/></svg>},
            {label:"Pharmacy", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="4"/><line x1="12" y1="8" x2="12" y2="16"/></svg>},
            {label:"Radiology", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/></svg>},
            {label:"Physiotherapy", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>},
            {label:"Gynecology", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><line x1="12" y1="13" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/></svg>},
            {label:"ENT", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><line x1="12.5" y1="18.5" x2="13" y2="22"/></svg>},
            {label:"Dental", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 5 5 5 9c0 2.5.5 4 1.5 6.5S8 20 9 22c.5-2 1.5-3 3-3s2.5 1 3 3c1-2 1.5-4.5 2.5-6.5S19 11.5 19 9c0-4-3-7-7-7z"/></svg>},
            {label:"Ophthalmology", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>},
            {label:"Fleet", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="15" height="10" rx="2"/><path d="M16 10h4l3 3v3h-7V10z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>},
            {label:"Fees", icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
        ];
    return (
        <>
            <div className = "Navigation-bar">
                <div className = "left-nav">
                    <div className = "navLogo"><img src={logoOnly} alt="Logo Only" /></div>
                    <span style={{color:"#5580F4", marginBottom: "9%"}}>CareCentral</span>
                </div>
                <div className = "mid-nav">
                    <a href="#features">Features</a>
                    <Link to="/more-modules">Modules</Link>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About</a>
                    <a href="#questions">FAQ</a>
                </div>
                <div className = "right-nav">
                    <button onClick={scrollToDemo}>Contact Us →</button>
                </div>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{backgroundColor:"white"}}>
                    {menuOpen ? (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    ) : (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                    )}
                </button>

                {menuOpen && (
                    <div className="mobile-menu">
                        <a href = "#features" onClick={() => setMenuOpen(false)}>Features</a>
                        <Link to="/more-modules">Modules</Link>
                        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                        <a href="#about">About</a>
                        <a href="#questions" onClick={() => setMenuOpen(false)}>FAQ</a>
                        <a href="demo">Contact Sales</a>
                        <button onClick={() => { setMenuOpen(false); scrollToDemo(); }}>Request Demo →</button>
                    </div>
                )}
            </div>

            <div className = "hero">
                <div className = "made-for-eth reveal reveal-zoom"><span>Enterprise EMR + ERP. Made for Ethiopia</span></div>
                <a className="reveal" style={{fontSize: "60px", fontWeight: "bold"}}>Healthcare </a> <a className="reveal" style={{fontSize: "60px", fontWeight: "bold", color: "#ffffff"}}>Management Made</a><h1 className="reveal" style={{fontSize: "60px", fontWeight: "bold", color: "white", marginBottom: "60px"}}>Simple.</h1>
                <h3 className="reveal">CareCentral is a modern Healthcare ERP built on Odoo that
                    <br/>helps clinics and hospitals streamline patient care,
                    <br/>operations, finance, and administration from one centralized 
                    <br/>platform.</h3>
                
                <div className = "two-buttons reveal">
                <button className = "request-button" onClick={scrollToDemo}> Request a Demo → </button>
                <button className="explore-button" onClick={scrollToFeatures}>
                    ▶ Explore Features
                </button>                </div>

                <div className='the-3 reveal'> 
                    <span>✓ Modularized</span>
                    <span>✓ Multi-Branch</span>
                    <span>✓ Cloud & On-Premise</span>
                </div>

                <div className="box">
                <div className="dashboard reveal reveal-zoom reveal-delay-4">
                    <div className="dashboard-header">
                        <div className="win-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="dashboard-title-bar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5580F4" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                            <span>Health Management Dashboard</span>
                        </div>
                        <div className="dashboard-period">
                            <span className="live-dot"></span>
                            <span className="period-label">All Time</span>
                        </div>
                    </div>

                    <div className="dashboard-body">
                        <div className="dashboard-sidebar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.label}
                                    className={`side-nav ${activeTab === tab.label ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab.label)}
                                >
                                    <span className="side-nav-icon">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="dashboard-main">
                        <div className="stat-cards">
                            <div className="stat-card blue-edge">
                                <div className="stat-card-info">
                                    <h4>TOTAL PATIENTS</h4>
                                    <h1>247</h1>
                                    <span className="trend trend-up">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 10V2M2 5l4-3 4 3"/></svg>
                                        12%
                                    </span>
                                </div>
                                <div className="stat-icon blue">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                </div>
                            </div>
                            <div className="stat-card yellow-edge">
                                <div className="stat-card-info">
                                    <h4>ADMITTED TODAY</h4>
                                    <h1>18</h1>
                                    <span className="trend trend-neutral">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 6h8"/></svg>
                                        0%
                                    </span>
                                </div>
                                <div className="stat-icon yellow">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20v-7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7"/><path d="M2 13V7a2 2 0 0 1 2-2h6v8"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
                                </div>
                            </div>
                            <div className="stat-card red-edge">
                                <div className="stat-card-info">
                                    <h4>APPOINTMENTS TODAY</h4>
                                    <h1>42</h1>
                                    <span className="trend trend-up">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 10V2M2 5l4-3 4 3"/></svg>
                                        8%
                                    </span>
                                </div>
                                <div className="stat-icon red">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                </div>
                            </div>
                            <div className="stat-card green-edge">
                                <div className="stat-card-info">
                                    <h4>TOTAL EARNINGS</h4>
                                    <h1>Birr 12,450</h1>
                                    <span className="trend trend-up">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 10V2M2 5l4-3 4 3"/></svg>
                                        23%
                                    </span>
                                </div>
                                <div className="stat-icon green">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 2 1.3 1.6 3 1.8 3 .8 3 2-1.3 2-3 2-3-.8-3-1.8"/></svg>
                                </div>
                            </div>
                        </div>

                        <div className="chart-row">
                            <div className="chart-box">
                                <div className="chart-header">
                                    <h3>Patient Gender Distribution</h3>
                                </div>
                                <div className="donut-wrapper">
                                    <svg viewBox="0 0 100 100" className="donut-svg">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="14"/>
                                        <path d="M 50 10 A 40 40 0 1 1 15.4 70" fill="none" stroke="#5580F4" strokeWidth="14" strokeLinecap="round"/>
                                        <path d="M 15.4 70 A 40 40 0 0 1 50 10" fill="none" stroke="#5580F4" strokeWidth="14" strokeLinecap="round"/>
                                    </svg>
                                    <div className="donut-center">
                                        <strong>247</strong>
                                        <span>Total</span>
                                    </div>
                                </div>
                                <div className="legend-row">
                                    <div className="legend-item"><span className="legend-dot brand"></span>Male 62%</div>
                                    <div className="legend-item"><span className="legend-dot light"></span>Female 38%</div>
                                </div>
                            </div>

                            <div className="chart-box">
                                <div className="chart-header">
                                    <h3>Admissions by Department</h3>
                                </div>
                                <div className="bar-chart-v2">
                                    <div className="bar-grid">
                                        <div className="bar-grid-line"></div>
                                        <div className="bar-grid-line"></div>
                                        <div className="bar-grid-line"></div>
                                        <div className="bar-grid-line"></div>
                                    </div>
                                    <div className="bars-container">
                                        <div className="bar-col"><div className="bar-v" style={{height: '75%'}}></div><span>OPD</span></div>
                                        <div className="bar-col"><div className="bar-v accent" style={{height: '55%'}}></div><span>ICU</span></div>
                                        <div className="bar-col"><div className="bar-v" style={{height: '85%'}}></div><span>Lab</span></div>
                                        <div className="bar-col"><div className="bar-v accent" style={{height: '40%'}}></div><span>ER</span></div>
                                        <div className="bar-col"><div className="bar-v" style={{height: '65%'}}></div><span>Pharm</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="chart-box">
                                <div className="chart-header">
                                    <h3>Appointments (Last 6 Months)</h3>
                                    <span className="chart-badge">+18%</span>
                                </div>
                                <div className="line-chart-v2">
                                    <svg viewBox="0 0 300 100" className="line-svg" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#5580F4" stopOpacity="0.25"/>
                                                <stop offset="100%" stopColor="#5580F4" stopOpacity="0"/>
                                            </linearGradient>
                                        </defs>
                                        <line x1="0" y1="25" x2="300" y2="25" stroke="#f0f0f0" strokeWidth="0.5"/>
                                        <line x1="0" y1="50" x2="300" y2="50" stroke="#f0f0f0" strokeWidth="0.5"/>
                                        <line x1="0" y1="75" x2="300" y2="75" stroke="#f0f0f0" strokeWidth="0.5"/>
                                        <path d="M 0 65 L 60 45 L 120 55 L 180 28 L 240 38 L 300 18 L 300 100 L 0 100 Z" fill="url(#areaGrad)"/>
                                        <path d="M 0 65 L 60 45 L 120 55 L 180 28 L 240 38 L 300 18" fill="none" stroke="#5580F4" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
                                        <circle cx="0" cy="65" r="4" fill="#5580F4"/><circle cx="60" cy="45" r="4" fill="#5580F4"/>
                                        <circle cx="120" cy="55" r="4" fill="#5580F4"/><circle cx="180" cy="28" r="4" fill="#5580F4"/>
                                        <circle cx="240" cy="38" r="4" fill="#5580F4"/><circle cx="300" cy="18" r="4" fill="#5580F4"/>
                                        <circle cx="180" cy="28" r="6" fill="white" stroke="#5580F4" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="x-axis-months">
                                    <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='white'>
            <div className="hex-wrap">
                <div className='hex-scene reveal reveal-stagger'>
                    <div className="hex-center-slot">
                        <div className="hex-center">
                            <div className="hex-center-face">
                                <span>Healthcare <b>ERP</b></span>
                            </div>
                        </div>
                    </div>
                    {hexFeatures.map((f, i) => (
                        <div className={`hex-tile hex-pos-${i + 1}`} key={f.num} style={{ '--hex-accent': f.color }}>
                            <div className="hex-under"></div>
                            <div className="hex-face">
                                <h2>{f.title}</h2>
                                <p>{f.text}</p>
                                <div className="hex-icon">{f.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            </div>

            <div className = "gray" id="about">
                <hr/>
                <h3 className="reveal" style={{color: "#5580F4"}}>Why CareCentral</h3>
                <div className="title reveal reveal-delay-1"><h1>Built for Modern<span style={{color: "#5580F4"}}> Healthcare</span></h1></div>
                <h3 className="reveal reveal-delay-2">A platform designed from the ground up for clinics, hospitals, and multi-branch <br/> healthcare networks in Ethiopia.</h3>

                <div className='badge-grid reveal reveal-stagger'>
                    {badgeCards.map((c) => (
                        <div className="badge-cell" key={c.title}>
                            <div className="badge-card" style={{ '--badge-accent': c.color }}>
                                <div className="badge-ribbon">{c.icon}</div>
                                <span className="badge-arrow" aria-hidden="true"></span>
                                <h2>{c.title}</h2>
                                <p>{c.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='fourth'>
                <hr/>
                <h3 className="reveal" style = {{color: "#5580F4"}}>Core Modules</h3>
                <div className='title reveal reveal-delay-1'><h1 >Everything Your <span style={{color: "#5580F4"}}>Facility Needs</span></h1></div>
                <h3 className="reveal reveal-delay-2" style = {{color: "gray"}}>Integrated clinical workflows that cover every touchpoint — from the front desk to the <br/>ICU.</h3>

                <div className="facility-carousel reveal" role="region" aria-label="Everything your facility needs modules">
                    <div className="facility-carousel-track" ref={facilityTrackRef}>
                        {facilityCards.map((facility, index) => (
                            <div
                                key={facility.title}
                                className={`facility-slide ${activeFacility === index ? 'active' : ''}`}
                                ref={(element) => (facilityCardRefs.current[index] = element)}
                            >
                                <div className="facility-visual">
                                    <img src={facility.image} alt={facility.title} />
                                    <div className="facility-visual-overlay">
                                        <div className="facility-visual-header">
                                            <div className="facility-icon-box">{facility.icon}</div>
                                            <h2>{facility.title}</h2>
                                        </div>
                                        <div className="facility-list">
                                            {facility.list.map((item) => (
                                                <h3 key={item}><span className="facility-check">✓</span> {item}</h3>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="facility-carousel-sidebar" aria-label="Module navigation">
                        {facilityCards.map((facility, index) => (
                            index !== activeFacility ? (
                                <button
                                    key={facility.title}
                                    type="button"
                                    className="facility-thumbnail"
                                    onClick={() => scrollToFacilityCard(index)}
                                    aria-label={`Go to ${facility.title}`}
                                >
                                    <div className="facility-thumbnail-image-container">
                                        <img src={facility.image} alt="" />
                                        <div className="facility-thumbnail-icon">{facility.icon}</div>
                                    </div>
                                    <div className="facility-thumbnail-info">
                                        <span className="facility-thumbnail-title">{facility.title}</span>
                                    </div>
                                </button>
                            ) : null
                        ))}
                    </div>
                </div>

                <div className="facility-progress-dots" aria-label="Carousel navigation dots">
                    {facilityCards.map((facility, index) => (
                        <button
                            key={facility.title}
                            className={`progress-dot ${activeFacility === index ? 'active' : ''}`}
                            type="button"
                            onClick={() => scrollToFacilityCard(index)}
                            aria-label={`Go to ${facility.title}`}
                        />
                    ))}
                </div>

                <Link className = "more-modules" to="/more-modules"> See More Modules →</Link>
            </div>

            <div className = "second-blue">
                <hr />
                <div className='title reveal'><h1>Expand to Any <span style={{color: "#5580F4"}}></span>Specialty</h1></div>

                <SpecialtyWheel items={specialtyModules} />
            </div>

           <div className="third-white" id="features">
  <hr />
  <h3 className="reveal" style={{ color: "#5580F4" }}>Platform Features</h3>
  <div className='title reveal reveal-delay-1'>
    <h1>Engineered for Healthcare <span style={{ color: "#5580F4" }}>Excellence</span></h1>
  </div>
  <h3 className="reveal reveal-delay-2">Every feature built with clinical workflow, compliance, and usability in mind.</h3>

  <div className="third-grids">
    <div className='third-white-grid reveal reveal-stagger'>
      {featureCards.slice(0, 3).map((f) => (
        <FeatureCard key={f.title} feature={f} />
      ))}
    </div>
    {showAllFeatures && [3, 6, 9, 12, 15].map((start) => (
      <div className='third-white-grid reveal reveal-stagger' key={start}>
        {featureCards.slice(start, start + 3).map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    ))}






  </div>

  <div className="features-toggle-wrap">
    <button className="features-toggle-btn" onClick={() => setShowAllFeatures(!showAllFeatures)}>
      {showAllFeatures ? "Show Less ▲" : "Show More Features ▼"}
    </button>
    {!showAllFeatures && <span className="features-toggle-hint">+15 more features</span>}
  </div>
</div>

            <div className="second-gray">
                 <hr />
                <h3 className="reveal" style={{color: "#5580F4"}}>Integrations</h3>
                <div className='title reveal reveal-delay-1'><h1>Connected to Everything<span style={{color: "#5580F4"}}> You Need</span> </h1></div>
                <h3 className="reveal reveal-delay-2">Seamlessly integrated with business operations, medical devices, and future health standards.</h3>

            <div
                className={`spider-map${spiderInView ? " in-view" : ""}`}
                ref={spiderRef}
                role="list"
                aria-label="CareCentral integrations"
            >
                <div className="spider-center">
                    <img src={logoOnly} alt="" />
                    <span>CareCentral</span>
                </div>
                {integrationNodes.map((node, i) => (
                    <div
                        key={node.label}
                        className="spider-node"
                        style={{ "--a": `${i * 30 - 90}deg`, "--d": `${i * 70}ms` }}
                        role="listitem"
                    >
                        <span className="spider-line" aria-hidden="true"></span>
                        <div className="spider-pill">{node.icon}<h3>{node.label}</h3></div>
                    </div>
                ))}
            </div>

                </div>

                                <div className='advantages'>
                <hr />
                <div className='title reveal'><h1>The CareCentral<span style={{color: "#5580F4"}}> Advantage</span></h1></div>
                <h3 className="reveal" style={{color: "gray"}}>We are not just software — we are your long-term healthcare technology partner.</h3>


            <div className="adv-spine">
                <div className="adv-col left reveal reveal-stagger">
                    {advantageItems.slice(0, 4).map((item) => (
                        <div className="adv-block" key={item.title} style={{ "--c": item.color }}>
                            <div className="adv-icon">{item.icon}</div>
                            <div className="adv-body">
                                <h2>{item.title}</h2>
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="adv-hub">
                    <span className="adv-hub-title">Why<br />Choose<br />Us?</span>
                </div>

                <div className="adv-col right reveal reveal-stagger">
                    {advantageItems.slice(4).map((item) => (
                        <div className="adv-block" key={item.title} style={{ "--c": item.color }}>
                            <div className="adv-icon">{item.icon}</div>
                            <div className="adv-body">
                                <h2>{item.title}</h2>
                                <h3>{item.text}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                </div>

                <div id="pricing">
                    <Price />
                </div>
            



                <div id= "questions"><Question/></div>
                <div id= "demos"><Demo /></div>
                        <div id="contactUs"><Contact /></div>    


    <div className="footer">

    <div className="footer-grid reveal reveal-stagger">
        <div className="footer-brand">
            <div className="footer-brand-head">
                <div className="footer-logo"><img src={logo} alt="CareCentral logo" /></div>
                <span className="footer-brand-name">CareCentral</span>
            </div>
            <h3>A modern Healthcare EMR+ ERP by Beltech Solutions empowering Ethiopia's clinics and hospitals with enterprise-grade technology.</h3>
            <div className="footer-socials">
                <a
                    href="https://www.linkedin.com/company/carecentral"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    in
                    </a>

                    <a
                    href="https://t.me/belTechSolns"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    ➤
                    </a>

                    <a href="mailto:carecentralsupport@gmail.com">
                        
                    ✉
                    </a>
            </div>
        </div>

        <div className="footer-links">
            <h4>COMPANY</h4>
                <a href="#features">Features</a>
                <Link to="/more-modules">Modules</Link>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
                <a href="#questions">FAQ</a>
        </div>

        <div className="footer-links">
            <h4>RESOURCES</h4>
            <Link to="/more-modules">Documentation</Link>
            <a href="mailto:carecentralsupport@gmail.com?subject=Privacy%20Policy%20Request">Privacy Policy</a>
            <a href="mailto:carecentralsupport@gmail.com?subject=Terms%20of%20Service%20Request">Terms of Service</a>
        </div>
        <div className="footer-contact">
            <h4>CONTACT</h4>
            <a href="mailto:carecentralsupport@gmail.com">✉ carecentralsupport@gmail.com</a>
            <a href="tel:+251955935455">📞 +251 95 593 5455</a>
        </div>
    </div>

    <hr/>
    <h3 className="copyright">© 2026 Beltech Solutions. All rights reserved. CareCentral is a trademark of Beltech Solutions.</h3>
</div>
            
        </>
    )
}

export default Home;
