document.getElementById('startButton').addEventListener('click', function() {
  window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
  });
});
// //////////////////////////////////////////////////////////////////////////
//Sing_In
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // تحقق بسيط من اسم المستخدم وكلمة المرور
  if (username === "user" && password === "password") {
      errorMessage.style.display = 'none';
      alert('تم تسجيل الدخول بنجاح!');
      // يمكنك توجيه المستخدم إلى صفحة أخرى هنا
  } else {
      errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
      errorMessage.style.display = 'block';
  }
});
//////////////////////////////////////////////////////////////////////////////////////////
// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = 'translateX(${-slideWidth * index}px)';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Scroll down button functionality
document.querySelector('.scroll-down-btn').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

