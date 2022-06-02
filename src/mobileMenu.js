const mobileMenu = (() => {
  let mobileMenuDOM;
  const setMobileMenuDOM = (elemID) => {
    mobileMenuDOM = document.getElementById(`${elemID}`);
    mobileMenuDOM.style.overflow = "hidden";
  };

  const menuUL = document.createElement("ul");
  menuUL.style.minWidth = "fit-content";
  menuUL.style.listStyle = "none";
  menuUL.style.boxSizing = "border-box";
  menuUL.style.position = "relative";

  const setColumns = (...args) => {
    //  Add Close and More to the args list
    [].push.call(args, [`Close &#215`, "#close-more"]);
    [].push.call(args, [`More &#9776`, "#more"]);
    const menuHeight = window.getComputedStyle(mobileMenuDOM).height;
    args.forEach((arg) => {
      const argLI = document.createElement("li");
      argLI.classList.add("mobile-nav");
      menuUL.style.maxHeight = menuHeight * 2;
      argLI.style.cursor = "pointer";
      argLI.style.display = "inline-block";
      const argA = document.createElement("a");
      argA.setAttribute("id", `mobile-nav-link-${arg[0]}`);
      argA.innerHTML = arg[0];
      argA.href = arg[1];
      argA.style.display = "inline-block";
      argA.style.textDecoration = "none";
      argA.style.textTransform = "uppercase";
      argA.style.padding = "0 1em";
      argA.style.letterSpacing = "0.1em";
      argA.style.whiteSpace = "nowrap";
      argA.style.lineHeight = menuHeight;
      argA.style.height = menuHeight;
      argLI.appendChild(argA);
      menuUL.appendChild(argLI);
    });

    mobileMenuDOM.appendChild(menuUL);

    // Style the More and Close tabs
    menuUL.childNodes[menuUL.childNodes.length - 2].style.display = "none";
  };

  return {
    setMobileMenuDOM,
    setColumns,
  };
})();

export default mobileMenu;
