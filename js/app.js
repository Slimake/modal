(function() {
    let cartInfo = document.querySelector(".cart-info");
    let cart = document.querySelector(".cart");
    
    cartInfo.addEventListener("click", () => {
        cart.classList.toggle("show-cart");
    });
})();


(function() {
    const buttons = document.querySelectorAll(".filter-btn");
    const storeItems = document.querySelectorAll(".store-item")

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

            // prevent link from going to top of the page after click
            e.preventDefault();
            const buttonFilter = e.target.textContent.toLowerCase().trim();

            // button filter
            storeItems.forEach((item) => {
                if (buttonFilter === "all") {
                    item.style.display = "block";
                } else {
                    if ( item.classList.contains(buttonFilter) ) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
})();

(function() {
    const search = document.querySelector("#search-item");
    const storeItems = document.querySelectorAll(".store-item");

    search.addEventListener("input", (e) => {
        const searchFilter = e.target.value.toLowerCase().trim();
        
        // search field filter
        storeItems.forEach((item) => {
            if ( item.textContent.includes(searchFilter) ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
})();

(function() {
    const storeImages = document.querySelectorAll(".store-img");
    const overlay = document.querySelector(".overlay")
    const hideOverlay = document.querySelector(".hide-overlay");
    const overlayImage = document.querySelector(".overlay-img")
    const body = document.querySelector("body");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const imageArr = [];
    let count;
    
    storeImages.forEach((image, index) => {
        imageArr.push(image.src);
        
        image.addEventListener("click", (e) => {
            count = index;
            overlay.classList.add("show-overlay");
            overlayImage.src = e.target.src;
            body.style.overflowY = "hidden";
        });
    });

    hideOverlay.addEventListener("click", () => {
        overlay.classList.remove("show-overlay");
        body.style.overflowY = "visible";
    });
    
    prevBtn.addEventListener("click", () => {
        count--;
        if (count < 0) {
            count = imageArr.length - 1;
        }
        overlayImage.src = imageArr[count];
    });
    
    nextBtn.addEventListener("click", () => {
        count++;
        if (count >= imageArr.length) {
            count = 0;
        }
        overlayImage.src = imageArr[count];
    });
})();