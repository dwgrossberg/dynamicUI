const mobileMenu = (() => {
  let mobileMenuDOM;
  const setMobileMenuDOM = (elemID) => {
    mobileMenuDOM = document.getElementById(`${elemID}`);
  };

  const setColumns = (...args) => {
    const menuNav = document.createElement("nav");
    menuNav.setAttribute("id", "menu");
    const menuUL = document.createElement("ul");
    menuUL.setAttribute("id", "menu-closed");
    menuUL.style.boxSizing = "border-box";
    menuUL.style.position = "relative";
    //  Add Close and More to the args list
    [].push.call(args, [`&#215 Close`, "#menu-closed"]);
    [].push.call(args, [`&#9776 More`, "#menu"]);
    const menuHeight = window.getComputedStyle(mobileMenuDOM).height;
    menuNav.style.height = menuHeight;
    menuNav.style.overflow = "hidden";
    args.forEach((arg) => {
      const argLI = document.createElement("li");
      argLI.classList.add("mobile-nav");
      //   menuUL.style.maxHeight = menuHeight * 2;
      argLI.style.cursor = "pointer";
      //   argLI.style.display = "inline-block";
      const argA = document.createElement("a");
      argA.setAttribute("id", `mobile-nav-link-${arg[0]}`);
      argA.innerHTML = arg[0];
      argA.href = arg[1];
      //   argA.style.display = "inline-block";
      //   argA.style.textDecoration = "none";
      //   argA.style.textTransform = "uppercase";
      //   argA.style.padding = "0 1em";
      //   argA.style.letterSpacing = "0.1em";
      //   argA.style.whiteSpace = "nowrap";
      //   argA.style.lineHeight = menuHeight;
      //   argA.style.height = menuHeight;
      argLI.appendChild(argA);
      menuUL.appendChild(argLI);
      menuNav.appendChild(menuUL);
    });
    menuUL.childNodes[menuUL.childNodes.length - 2].style.display = "none";

    mobileMenuDOM.appendChild(menuNav);
  };

  return {
    setMobileMenuDOM,
    setColumns,
  };
})();

export default mobileMenu;
