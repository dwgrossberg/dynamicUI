const imageSlider = (() => {
  let imageSliderDOM;
  const setImageSliderDOM = (elemID) => {
    imageSliderDOM = document.getElementById(`${elemID}`);
    imageSliderDOM.style.overflow = "hidden";
    imageSliderDOM.style.display = "flex";
    // imageSliderDOM.style.alignItems = "flex-end";
  };

  const sliderContainer = document.createElement("div");
  sliderContainer.style.boxSizing = "border-box";
  sliderContainer.style.position = "relative";
  sliderContainer.style.width = "1000px";

  const setImages = (...args) => {
    args.forEach((arg) => {
      const mySlide = document.createElement("div");
      mySlide.classList.add("image-slide");
      mySlide.style.display = "none";
      mySlide.style.animationName = "fade";
      mySlide.style.animationDuration = "1.5s";

      const numberText = document.createElement("div");
      numberText.classList.add("image-number");
      const indexNumber = args.indexOf(arg) + 1;
      const totalNumber = args.length;
      numberText.innerText = `${indexNumber}` + " / " + `${totalNumber}`;
      numberText.style.fontSize = "12px";
      numberText.style.color = "#f2f2f2";
      numberText.style.padding = "8px 12px";
      numberText.style.position = "absolute";
      numberText.style.top = "0";
      mySlide.appendChild(numberText);

      const slideImg = document.createElement("img");
      slideImg.src = arg[0];
      slideImg.style.width = "100%";
      slideImg.style.placeSelf = "center";
      mySlide.appendChild(slideImg);

      const textDiv = document.createElement("div");
      textDiv.innerText = arg[1];
      textDiv.classList.add("image-caption");
      textDiv.style.fontSize = "15px";
      textDiv.style.color = "#f2f2f2";
      textDiv.style.textAlign = "center";
      textDiv.style.padding = "8px 12px";
      textDiv.style.position = "absolute";
      textDiv.style.bottom = "25px";
      textDiv.style.width = "100%";
      mySlide.appendChild(textDiv);

      sliderContainer.appendChild(mySlide);
    });

    const prev = document.createElement("a");
    prev.classList.add("image-prev");
    prev.innerHTML = `&#10094;`;

    const next = document.createElement("a");
    next.classList.add("image-next");
    next.innerHTML = `&#10095;`;
    next.style.right = "0";
    next.style.borderRadius = "3px 0 0 3px";

    for (const item of [prev, next]) {
      item.style.cursor = "pointer";
      item.style.position = "absolute";
      item.style.top = "50%";
      item.style.width = "auto";
      item.style.marginTop = "-22px";
      item.style.padding = "16px";
      item.style.color = "white";
      item.style.fontWeight = "bold";
      item.style.fontSize = "18px";
      item.style.transition = "0.6s ease";
      item.style.borderRadius = "0 3px 3px 0";
      item.style.userSelect = "none";
    }

    sliderContainer.appendChild(prev);
    sliderContainer.appendChild(next);

    const dotDiv = document.createElement("div");
    dotDiv.style.textAlign = "center";
    for (let i = 0; i < args.length; i++) {
      const dotSpan = document.createElement("span");
      dotSpan.classList.add("image-dot");
      dotSpan.style.cursor = "pointer";
      dotSpan.style.height = "11px";
      dotSpan.style.width = "11px";
      dotSpan.style.margin = "5px 5px";
      dotSpan.style.borderRadius = "50%";
      dotSpan.style.display = "inline-block";
      dotSpan.style.transition = "background-color 0.6s ease";
      dotDiv.appendChild(dotSpan);
    }
    sliderContainer.appendChild(dotDiv);

    imageSliderDOM.appendChild(sliderContainer);

    slideImages();
  };

  const slideImages = () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlide(n) {
      showSlides((slideIndex += n));
    }

    const prevs = Array.from(document.getElementsByClassName("image-prev"));
    prevs.forEach((prev) => {
      prev.addEventListener("mousedown", () => {
        plusSlide(-1);
      });
    });

    const nexts = Array.from(document.getElementsByClassName("image-next"));
    nexts.forEach((next) => {
      next.addEventListener("mousedown", () => {
        plusSlide(1);
      });
    });

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    const dots = Array.from(document.getElementsByClassName("image-dot"));
    dots.forEach((dot) => {
      dot.addEventListener("mousedown", () => {
        currentSlide(dots.indexOf(dot) + 1);
      });
    });

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("image-slide");
      let dots = document.getElementsByClassName("image-dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }
  };

  return {
    setImageSliderDOM,
    setImages,
  };
})();

export default imageSlider;
