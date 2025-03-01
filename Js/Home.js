let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // إخفاء جميع الشرائح
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // إظهار الشريحة الحالية
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// بدء التقليب التلقائي بعد تحميل الصفحة
window.addEventListener('load', () => {
    setInterval(nextSlide, 7000); // تقليب كل 5 ثوانٍ
});

// زر التمرير لأسفل
document.querySelector('.scroll-down-btn').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});