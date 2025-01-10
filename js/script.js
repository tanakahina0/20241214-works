document.addEventListener('DOMContentLoaded',function(){
  const slides = document.querySelectorAll('.hero-slider .hero-image');
  let currentSlide = 0;
  
  // toggle classの有無を切り替える(.activeを付けたり外したり)
  function showSlide(index){
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  // 次のスライドに進んだらcurrentSlideが1進んで、いまのスライドがいくつか数える
  // % 余りを出す
  function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // 初期表示
  showSlide(currentSlide);
  // 5秒毎にスライドを切り替える
  setInterval(nextSlide, 5000);
});