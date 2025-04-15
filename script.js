const nav = document.querySelector('.nav');
const searchBar = document.querySelector('.search-bar');
nav.style.transition = 'transform 0.9s ease';

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    nav.style.transform = 'translateY(-100%)';

    searchBar.style.position = 'fixed';
    
    searchBar.style.top = '0';
    searchBar.style.left = '0';
    searchBar.style.width = '100%';
    searchBar.style.zIndex = '999';
  } else {
    nav.style.transform = 'translateY(0)';
    searchBar.style.position = 'static';
  }

  lastScrollY = currentScrollY;
});


// dark mode
function toggleDarkMode() {
   
    document.body.classList.toggle('dark-mode');
  }
  
  // event listner for dark
  const darkModeButton = document.querySelector('.dark');
  if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
  }
  const trailersSection = document.querySelector('.Trailers');
  const trailerImages = document.querySelectorAll('.Trailers-container img');
   trailersSection.style.backgroundColor = '#0d1822'

  trailerImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      const imgSrc = img.getAttribute('src');
      trailersSection.style.backgroundImage = `url(${imgSrc})`;
      trailersSection.style.backgroundSize = 'cover';
      trailersSection.style.backgroundPosition = 'center';
      trailersSection.style.transition = 'background-image 0.4s ease-in-out';
    });

    img.addEventListener('mouseleave', () => {
      trailersSection.style.backgroundImage = ''; 
    });
  });