// Get modal element and modal image
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

// Get all thumbnails
const items = document.querySelectorAll(".class-item");

// Loop through thumbnails and add click event
items.forEach(item => {
    item.addEventListener("click", function() {
        modalImg.src = this.getAttribute("data-full");
        modal.classList.add("show"); // Add show class to trigger animation
    });
});

// Close the modal when clicking outside of the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("show"); // Remove show class to trigger exit animation
        // Optionally, you can also reset the image source here if needed
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after the animation
        }, 500); // Match with the CSS transition duration
    }
});