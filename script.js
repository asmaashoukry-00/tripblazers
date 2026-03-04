document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const body = document.body;
    const links = document.querySelectorAll('.mobile-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileOverlay.classList.toggle('open');
        
        if (mobileOverlay.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileOverlay.classList.remove('open');
            body.style.overflow = 'auto';
        });
    });
});
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
        nav.style.padding = "12px 40px";
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
// -------
// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Why Jordan Section Animations
gsap.from("#why-jordan h2", {
    scrollTrigger: {
        trigger: "#why-jordan",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from("#main-jordan-img", {
    scrollTrigger: {
        trigger: "#why-jordan",
        start: "top 70%",
    },
    scale: 1.1,
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from("#secondary-jordan-img", {
    scrollTrigger: {
        trigger: "#why-jordan",
        start: "top 60%",
    },
    x: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out"
});
// -------
let currentTesti = 1;
const totalTestis = 2; // غيري الرقم حسب عدد الآراء عندك

function showTestimonial(n) {
    // إخفاء الكل
    document.querySelectorAll('.testimonial-content').forEach(el => {
        el.style.opacity = '0';
        setTimeout(() => el.classList.add('hidden'), 400);
    });
    
    // إظهار المطلوب
    setTimeout(() => {
        const active = document.getElementById(`testi-${n}`);
        active.classList.remove('hidden');
        setTimeout(() => active.style.opacity = '1', 50);
    }, 450);
}

function nextTestimonial() {
    currentTesti = currentTesti >= totalTestis ? 1 : currentTesti + 1;
    showTestimonial(currentTesti);
}

function prevTestimonial() {
    currentTesti = currentTesti <= 1 ? totalTestis : currentTesti - 1;
    showTestimonial(currentTesti);
}
// journeys
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.journey-page');
    const pageNums = document.querySelectorAll('.pagination-num');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentPage = 1;

    function updatePagination(targetPage) {
        currentPage = parseInt(targetPage);

        // 1. تبديل ظهور الصفحات
        pages.forEach(page => {
            if (page.dataset.page == currentPage) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });

        // 2. تحديث شكل الأرقام (Active State)
        pageNums.forEach(num => {
            if (num.dataset.target == currentPage) {
                num.classList.add('active', 'text-[#d4a373]', 'border-b', 'border-[#d4a373]');
                num.classList.remove('text-[#43342d]/40');
            } else {
                num.classList.remove('active', 'text-[#d4a373]', 'border-b', 'border-[#d4a373]');
                num.classList.add('text-[#43342d]/40');
            }
        });

        // 3. تحديث حالة الأسهم (Disable/Enable)
        if (currentPage === 1) {
            prevBtn.classList.add('opacity-30', 'cursor-not-allowed');
            nextBtn.classList.remove('opacity-30', 'cursor-not-allowed');
        } else {
            prevBtn.classList.remove('opacity-30', 'cursor-not-allowed');
            nextBtn.classList.add('opacity-30', 'cursor-not-allowed');
        }
        
        // Scroll بسيط للأعلى عشان المستخدم يشوف بداية الكروت الجديدة
        document.querySelector('.journeys-section').scrollIntoView({ behavior: 'smooth' });
    }

    // إضافة Event Listeners للأرقام
    pageNums.forEach(num => {
        num.addEventListener('click', () => updatePagination(num.dataset.target));
    });

    // السهم التالي
    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length) updatePagination(currentPage + 1);
    });

    // السهم السابق
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) updatePagination(currentPage - 1);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. منع المتصفح من محاولة استعادة السكرول تلقائياً عشان ميحصلش "تخريف"
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    const pages = document.querySelectorAll('.journey-page');
    const pageNums = document.querySelectorAll('.pagination-num');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // دالة التحديث الأساسية
    function updateUI(activePage) {
        const pageNum = parseInt(activePage) || 1;
        pages.forEach(p => p.classList.toggle('hidden', p.dataset.page != pageNum));
        
        pageNums.forEach(btn => {
            const isActive = btn.dataset.target == pageNum;
            btn.classList.toggle('active', isActive);
            btn.classList.toggle('text-[#d4a373]', isActive);
            btn.classList.toggle('border-b', isActive);
            btn.classList.toggle('border-[#d4a373]', isActive);
            btn.classList.toggle('text-[#43342d]/40', !isActive);
        });

        localStorage.setItem('lastJourneyPage', pageNum);
    }

    // --- الجزء السحري لحل مشكلة الـ Back ---
    
    // عند الضغط على أي لينك رحلة، بنسجل السكرول فوراً
    document.addEventListener('click', (e) => {
        const cardLink = e.target.closest('.journey-portfolio-card a');
        if (cardLink) {
            localStorage.setItem('scrollPos', window.scrollY);
        }
    });

    // استعادة الصفحة والسكرول عند التحميل
    const savedPage = localStorage.getItem('lastJourneyPage') || 1;
    updateUI(savedPage);

    const savedScroll = localStorage.getItem('scrollPos');
    if (savedScroll) {
        // بنستخدم window.onload عشان نضمن إن كل الصور والسكاشن (الهيرو وغيره) خدت مساحتها الحقيقية
        window.addEventListener('load', () => {
            setTimeout(() => {
                window.scrollTo({
                    top: parseInt(savedScroll),
                    behavior: 'instant' // 'instant' أحسن هنا عشان ميحصلش Jump قدام عين اليوزر
                });
                localStorage.removeItem('scrollPos');
            }, 50); 
        });
    }

    // --- التحكم في الـ Pagination ---
    function goToPage(num) {
        updateUI(num);
        document.querySelector('.journeys-section').scrollIntoView({ behavior: 'smooth' });
    }

    pageNums.forEach(btn => {
        btn.addEventListener('click', () => goToPage(btn.dataset.target));
    });

    // إضافة منطق الأسهم (Next/Prev)
    nextBtn.addEventListener('click', () => {
        const current = parseInt(localStorage.getItem('lastJourneyPage') || 1);
        if (current < pages.length) goToPage(current + 1);
    });

    prevBtn.addEventListener('click', () => {
        const current = parseInt(localStorage.getItem('lastJourneyPage') || 1);
        if (current > 1) goToPage(current - 1);
    });
});
