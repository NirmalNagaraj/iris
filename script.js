
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