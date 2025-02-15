document.addEventListener("DOMContentLoaded", function () {
    // Inicializar o form de contato
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Obrigado pelo contato! Nossa equipe irá responder o mais breve possível.");
            contactForm.reset();
            $('#contactModal').modal('hide');
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // AOS.js (Animações ao rolar)
    AOS.init({
        duration: 1000,
        offset: 200,
        delay: 100,
        once: true
    });

    // Carrossel de depoimentos
    $('#carouselExample').carousel({
        interval: 5000
    });
});
