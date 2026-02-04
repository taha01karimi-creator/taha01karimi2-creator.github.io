document.addEventListener("DOMContentLoaded", () => {
    // --- ۱. مدیریت اسکرول نوار ناوبری (شفافیت هدر هنگام اسکرول) ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 20, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(17, 17, 30, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- ۲. انیمیشن ورود کارت‌های ویژگی (Scroll Reveal) ---
    // این بخش باعث می‌شود وقتی کاربر اسکرول می‌کند، کارت‌ها یکی‌یکی ظاهر شوند
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // اضافه کردن کمی تاخیر برای هر کارت (حالت پله‌ای)
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        // تنظیم حالت اولیه قبل از انیمیشن
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        observer.observe(card);
    });

    // --- ۳. افکت پارالاکس ملایم برای نور پس‌زمینه (Hero Glow) ---
    const glow = document.querySelector('.hero-glow');
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 20;
        const moveY = (e.clientY - window.innerHeight / 2) / 20;
        if (glow) {
            glow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        }
    });
});
