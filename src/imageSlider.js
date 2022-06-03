const imageSlider = (() => {
  let imageSliderDOM;
  const setImageSliderDOM = (elemID) => {
    imageSliderDOM = document.getElementById(`${elemID}`);
    imageSliderDOM.style.boxSizing = "border-box";
    imageSliderDOM.style.position = "relative";
  };

  const setImages = (...args) => {
    args.forEach((arg) => {
      const mySlide = document.createElement("div");
      mySlide.style.display = "none";

      const numberText = document.createElement("div");
      const indexNumber = args.indexOf(arg) + 1;
      const totalNumber = args.length;
      numberText.innerText = `${indexNumber}` + " / " + `${totalNumber}`;

      const slideImg = document.createElement("img");
      console.log(arg[0]);
      slideImg.src = arg[0];

      mySlide.appendChild(numberText);
      imageSliderDOM.appendChild(mySlide);
    });
  };

  return {
    setImageSliderDOM,
    setImages,
  };
})();

export default imageSlider;
