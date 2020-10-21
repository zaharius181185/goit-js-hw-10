const images = document.querySelectorAll('.js-menu img');

const options = {
  rootMargin: '100px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.lazy;
      observer.unobserve(image);
    }
  });
};

const io = new IntersectionObserver(onEntry, options);

images.forEach(image => io.observe(image));
