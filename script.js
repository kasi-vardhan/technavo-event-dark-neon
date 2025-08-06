document.addEventListener("DOMContentLoaded", function () {
    // Countdown
    const countdownEl = document.getElementById("countdown");
    const eventDate = new Date("Dec 15, 2025 09:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        if (distance > 0) {
            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((distance % (1000*60)) / 1000);
            countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownEl.textContent = "Event Started!";
        }
    }, 1000);

    // Form
    const form = document.getElementById("eventForm");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modalMessage");
    const closeModal = document.getElementById("closeModal");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const event = document.getElementById("event").value;
        if (name && email && event) {
            modalMessage.textContent = `Thank you ${name}! You are registered for ${event}.`;
            modal.style.display = "flex";
            form.reset();
        }
    });

    closeModal.addEventListener("click", () => modal.style.display = "none");

    // Particles
    particlesJS.load('particles-js', 'particles.json');
});
