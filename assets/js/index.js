document.querySelectorAll(".sliderImage").forEach(slider => {
    const imageContainerEl = slider.querySelector(".carouselImage");
    const imgsEl = slider.querySelectorAll("img");
    const nextEl = slider.querySelector(".next");
    const prevEl = slider.querySelector(".prev");
    const dots = slider.querySelectorAll(".fa-circle");

    let currentImg = 1;
    let timeOut;

    nextEl.addEventListener("click", () => {
        currentImg++;
        clearTimeout(timeOut);
        updateImg();
    });

    prevEl.addEventListener("click", () => {
        currentImg--;
        clearTimeout(timeOut);
        updateImg();
    });

    function updateImg() {
        if (currentImg > imgsEl.length) {
            currentImg = 1;
        } else if (currentImg < 1) {
            currentImg = imgsEl.length;
        }
          // permet de recuperer la largeur du container pour le responsive
          const containerWidth = imageContainerEl.offsetWidth/3;

          imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * containerWidth}px)`;

        // Permet de changer la couleur du point pour la navigation et voir où on se trouve sur le carousel
        dots.forEach((dot, i) => {
            if (i === currentImg - 1) {
                dot.style.color = "#a8dadc";
                // Permet de résoudre problème d'alignement de points quand actif
                dot.style.top = "-2.55rem";
            } else {
                dot.style.color = "#264653";
                // Permet de résoudre problème d'alignement de points quand actif
                dot.style.top = "-2.5rem";
            }
        });
        clearTimeout(timeOut); 
        timeOut = setTimeout(() => {
            currentImg++;
            updateImg();
        }, 4000);
    }

    updateImg();
});

