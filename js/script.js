document.addEventListener("DOMContentLoaded", function() {
    // Apply the fade-in effect after the page has loaded
    document.body.style.opacity = "1";

    // Add event listeners for the fade-out effect when navigating away
    document.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            const href = link.getAttribute("href");
            if (!href.startsWith("#")) {
                event.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(function() {
                    window.location.href = href;
                }, 1000); // Match the transition duration
            }
        });
    });
});
