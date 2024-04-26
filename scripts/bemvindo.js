document.addEventListener('DOMContentLoaded', function() {
    const welcomeTitle = document.getElementById('welcomeTitle');
    const welcomeContainer = document.getElementById('welcomeContainer');

    const observerOptions = {
        root: null,  // Observa a interseção com o viewport
        threshold: 0.4,  // A animação ocorrerá quando 50% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            } else {
                entry.target.classList.remove('slide-in');
            }
        });
    }, observerOptions);

    // Observar o título e o container
    observer.observe(welcomeContainer);
});