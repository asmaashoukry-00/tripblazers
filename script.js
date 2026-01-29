/**
 * TripBlazers Luxury Reveal - Integrated Manifesto
 */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. PHILOSOPHY SECTION (Revised Order)
    // We added the manifesto card (.lg\:col-span-4) into the sequence
    const philosophyElements = [
        "#philosophy span",              // "The Art of Leading"
        "#philosophy h2",                // Main Title
        "#philosophy .w-32",             // Gold Divider
        "#philosophy p.text-gray-600",   // Main Paragraph
        "#philosophy .lg\\:col-span-4"   // THE MANIFESTO CARD (Your Quote)
    ];

    gsap.fromTo(philosophyElements, 
        { 
            opacity: 0, 
            y: 60 
        },
        { 
            scrollTrigger: {
                trigger: "#philosophy",
                start: "top 75%",
                toggleActions: "restart none none none", // Repeats on scroll up/down
            },
            opacity: 1, 
            y: 0, 
            duration: 2.2, 
            stagger: 0.35, // Balanced gap for a smooth flow
            ease: "expo.out"
        }
    );

    // 2. EXPERIENCES SECTION (Remains repeatable)
    gsap.fromTo("#experiences h2, #experiences span, #experiences .max-w-sm, #experiences .grid > div", 
        { opacity: 0, y: 80 },
        { 
            scrollTrigger: {
                trigger: "#experiences",
                start: "top 75%",
                toggleActions: "restart none none none",
            },
            opacity: 1, 
            y: 0, 
            duration: 2.2, 
            stagger: 0.4, 
            ease: "expo.out"
        }
    );

    // 3. PILLARS SECTION (Remains repeatable)
    gsap.fromTo("#philosophy-pillars h2, #philosophy-pillars .w-32, #philosophy-pillars .group", 
        { opacity: 0, y: 80 },
        { 
            scrollTrigger: {
                trigger: "#philosophy-pillars",
                start: "top 75%",
                toggleActions: "restart none none none",
            },
            opacity: 1, 
            y: 0, 
            duration: 2.2, 
            stagger: 0.3, 
            ease: "expo.out"
        }
    );

    // 4. HERO SECTION (Entrance)
    gsap.fromTo(".h-screen h1, .h-screen p, .h-screen button", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 2, stagger: 0.3, ease: "power3.out" }
    );
});

// NAVBAR ENGINE (Same as before - Smooth & Sticky)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    const logo = document.getElementById('nav-logo');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "rgba(26, 26, 26, 0.9)";
        nav.style.backdropFilter = "blur(12px)";
        nav.style.padding = "12px 40px";
        logo.style.width = "75px";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.padding = "24px 40px";
        logo.style.width = "96px";
    }
});
// loading
 window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // 1. ظهور الهالة واللوجو معاً بتأثير ناعم
    tl.to(".background-glow", {
        opacity: 1,
        scale: 1.2,
        duration: 2,
        ease: "power2.out"
    });

    tl.to(".luxury-logo img", {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "expo.out"
    }, "-=1.5");

    // 2. أنيميشن "التنفس" المستمر للهالة واللوجو (لووب)
    gsap.to(".background-glow", {
        scale: 1.4,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".luxury-logo img", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // 3. الخروج الفخم (إزاحة الستارة بعد وقت قصير)
    // يمكنك تعديل الـ delay حسب رغبتك
    tl.to("#preloader", {
        yPercent: -100,
        duration: 1.5,
        delay: 1, // مدة بقاء اللوجو قبل الدخول للموقع
        ease: "expo.inOut",
        onComplete: () => {
            document.getElementById('preloader').style.display = 'none';
        }
    });

    // 4. ظهور محتوى الهيرو (الناف بار والهيدنج)
    tl.fromTo("#main-nav, .h-screen h1, .h-screen p, .h-screen button", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out" },
        "-=0.8"
    );
});