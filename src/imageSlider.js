const imageSlider = (() => {
  let imageSliderDOM;
  const setImageSliderDOM = (elemID) => {
    imageSliderDOM = document.getElementById(`${elemID}`);
    imageSliderDOM.style.boxSizing = "border-box";
    imageSliderDOM.style.position = "relative";
    imageSliderDOM.style.width = "1000px";
  };

  const setImages = (...args) => {
    args.forEach((arg) => {
      const mySlide = document.createElement("div");
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
      mySlide.appendChild(slideImg);

      const textDiv = document.createElement("div");
      textDiv.innerText = arg[1];
      textDiv.classList.add("image-caption");
      textDiv.style.fontSize = "15px";
      textDiv.style.color = "#f2f2f2";
      textDiv.style.textAlign = "center";
      textDiv.style.padding = "8px 12px";
      textDiv.style.position = "absolute";
      textDiv.style.top = "0";
      mySlide.appendChild(textDiv);

      imageSliderDOM.appendChild(mySlide);
    });

    const prev = document.createElement("a");
    prev.classList.add("image-prev");
    // prev.onclick(plusSlides(-1));
    prev.innerHTML = `&#10094;`;

    const next = document.createElement("a");
    next.classList.add("image-next");
    // next.onclick(plusSlides(1));
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

    imageSliderDOM.appendChild(prev);
    imageSliderDOM.appendChild(next);

    const dotDiv = document.createElement("div");
    dotDiv.style.textAlign = "center";
    for (let i = 0; i < args.length; i++) {
      const dotSpan = document.createElement("span");
      //   dotSpan.onclick(currentSlide(`${i + 1}`));
      dotSpan.classList.add("image-dot");
      dotSpan.style.cursor = "pointer";
      dotSpan.style.height = "15px";
      dotSpan.style.width = "15px";
      dotSpan.style.margin = "0 2px";
      dotSpan.style.backgroundColor = "bbb";
      dotSpan.style.borderRadius = "50%";
      dotSpan.style.display = "inline-block";
      dotSpan.style.transition = "background-color 0.6s ease";
    }
  };

  return {
    setImageSliderDOM,
    setImages,
  };
})();

export default imageSlider;
