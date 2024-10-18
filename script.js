
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.grow-on-scroll');
        const windowHeight = window.innerHeight;

        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const elementVisible = 150; // Adjust this value to change when the animation triggers

            if (rect.top <= windowHeight - elementVisible) {
                el.classList.add('is-visible');
            } else {
                el.classList.remove('is-visible');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    // Trigger once on load to check for elements already in view
    handleScrollAnimation();
// Parallax effect on scroll


window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;  // Maximum scrollable height
    const scrollFraction = scrolled / maxScroll;  // Fraction of page scrolled
    
    // Select all the background elements
    const backgroundElements = document.querySelectorAll('.bgprop');
  
    backgroundElements.forEach((element, index) => {
      const speed = index * 0.3 + 1;  // Adjust speed based on index
  
      // Translate the element smoothly within bounds
      const translateX = Math.max(Math.min(scrollFraction * window.innerWidth * speed, window.innerWidth / 2), -window.innerWidth / 2);
      
      // Apply transformation
      element.style.transform = `translateX(${translateX}px)`;
    });
  });
  function toggleMenu() {
    document.querySelector('.navbar-right').classList.toggle('active');
}

function toggleDropdown(dropdown) {
    if (window.innerWidth <= 768) {
        dropdown.classList.toggle('active');
    }
}  
  
  