// Get modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.getElementById("close");

// Get all gallery images
const galleryItems = document.querySelectorAll(".gallery-item");

// Add click event to each image
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";            // Show the modal
        modalImage.src = item.src;                // Set the source of the modal image
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
    modal.style.display = "none";                // Hide the modal
});

// Close the modal when clicking outside the modal image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";            // Hide the modal
    }
});