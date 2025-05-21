document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close-button");

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });


  setTimeout(openModal, 10000);
  function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      openModal();
      window.removeEventListener('scroll', handleScroll);
    }
  }
  window.addEventListener('scroll', handleScroll);
});
document.addEventListener("DOMContentLoaded", function () {
  // --- СЛАЙДЕР ---
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  let index = 0;
  let sliderInterval;

  const hideSlide = () => {
    slides.forEach(slide => {
      slide.style.opacity = 0;
      slide.classList.remove('active_slide');
    });
  };

  const showSlide = (i = 0) => {
    slides[i].style.opacity = 1;
    slides[i].classList.add('active_slide');
  };

  hideSlide();
  showSlide(index);
  const autoSlider = () => {
    sliderInterval = setInterval(() => {
      index = (index + 1) % slides.length;
      hideSlide();
      showSlide(index);
    }, 3000);
  };

  autoSlider();
  next.onclick = () => {
    clearInterval(sliderInterval);
    index = (index + 1) % slides.length;
    hideSlide();
    showSlide(index);
    autoSlider();
  };

  prev.onclick = () => {
    clearInterval(sliderInterval);
    index = (index - 1 + slides.length) % slides.length;
    hideSlide();
    showSlide(index);
    autoSlider();
  };

  // --- МОДАЛЬНОЕ ОКНО ---
  const modal = document.getElementById("modal");
  const closeBtn = modal.querySelector(".close-button");
  let modalShownByScroll = false;

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  setTimeout(openModal, 10000);

  function handleScroll() {
    if (!modalShownByScroll && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      openModal();
      modalShownByScroll = true;
      window.removeEventListener('scroll', handleScroll);
    }
  }

  window.addEventListener('scroll', handleScroll);
});
