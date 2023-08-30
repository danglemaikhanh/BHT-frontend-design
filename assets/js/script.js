(function init() {
  "use strict";
  /*==== Toggle Nav Menu ====*/
  const toggleButton = document.getElementsByClassName('nav__toggle')[0];
  const navLinks = document.getElementsByClassName('nav__links')[0];
  const toggleBars = document.querySelectorAll('.toggle__bar');
  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    navLinks.classList.toggle('show');
    toggleBars.forEach(bar => {
      bar.classList.toggle('rotate');
    });
  })

  /*==== Active and remove Link ====*/
  const navLink = document.querySelectorAll('.nav__link');
  function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));

  /*==== Slider ==== */
  const images = document.querySelectorAll(".slider__image img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.dataset.active = true;
        dots[i].classList.add("actived");
      } else {
        delete image.dataset.active;
        dots[i].classList.remove("actived");
      }
    });
  }
  function handlePrevClick() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  function handleNextClick() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  prevButton.addEventListener("click", handlePrevClick);
  nextButton.addEventListener("click", handleNextClick);
  showImage(currentIndex);
  function autoSlide() {
    handleNextClick();
    setTimeout(autoSlide, 5000);
  }
  setTimeout(autoSlide, 5000);
  /*==== Scroll Animation ==== */
  const elementsToAnimate = document.querySelectorAll(".animated");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("go");
        observer.unobserve(entry.target);
      }
    });
  }
  const observer = new IntersectionObserver(handleIntersection, options);
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
  /*==== Submit Button ==== */
  const form = document.getElementById('form');
  const submitMessage = document.getElementById('submitMessage');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    submitMessage.style.display = 'block';
  });
})();
