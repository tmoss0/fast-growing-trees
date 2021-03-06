const scrollToTopButton = document.getElementById("scroll-to-top");
document.addEventListener("scroll", scrollHandler);

const sizeSelection = document.getElementsByClassName("size-selection");
const detailBullet = document.getElementById("detail-1");
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

// Set price based on size button clicked
for(let i in sizeSelection) {
    sizeSelection[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        if(current[0].classList.contains("small")) {
            productPrice.innerHTML = "$69.95";
            detailBullet.innerHTML = "Get fruit in 1-2 years"
        }
        else if(current[0].classList.contains("medium")) {
            detailBullet.innerHTML = "Fruits in first couple of seasons!"
            productPrice.innerHTML = "$89.95";
        }
        else if(current[0].classList.contains("large")) {
            detailBullet.innerHTML = "Products fruit first year!"
            productPrice.innerHTML = "$109.95";
        }
    });
}

