const scrollToTopButton = document.getElementById("scroll-to-top");
document.addEventListener("scroll", scrollHandler);

const selectedSize = document.querySelectorAll("size-selection");
selectedSize.addEventListener("click", sizeSelectionHandler);

const productPrice = document.getElementById("product-price");

// Determine distance scrolled from top of window. Hides button until user scrolls down
function scrollHandler() {
    let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollDistance = 0.1;
    
    if((document.documentElement.scrollTop / scrollableHeight) > scrollDistance) {
        scrollToTopButton.style.display = "block";
    }
    else {
        scrollToTopButton.style.display = "none";
    }
}

scrollToTopButton.addEventListener("click", scrollToTop);

// Function to scroll to top of window
function scrollToTop() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    });
}

const sizeSelectionHandler = () => {
     
}