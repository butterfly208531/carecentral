import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Watches every element carrying a reveal class (.reveal, .reveal-left,
 * .reveal-right, .reveal-zoom, .reveal-stagger) and adds `.in-view` when it
 * scrolls into the viewport. Re-scans on route change and whenever new nodes
 * are added to the DOM (e.g. "Show More" feature grids).
 */
export default function RevealOnScroll() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!("IntersectionObserver" in window)) {
            // Very old browser: just show everything.
            document
                .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger")
                .forEach((el) => el.classList.add("in-view"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        const SELECTOR =
            ".reveal:not(.in-view), .reveal-left:not(.in-view), .reveal-right:not(.in-view), .reveal-zoom:not(.in-view), .reveal-stagger:not(.in-view)";

        let frame = null;
        const scan = () => {
            document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));
        };
        const scheduledScan = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = null;
                scan();
            });
        };

        scan();

        const mutation = new MutationObserver(scheduledScan);
        mutation.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutation.disconnect();
            if (frame) cancelAnimationFrame(frame);
        };
    }, [pathname]);

    return null;
}
