document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded and ready");
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector(button.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
