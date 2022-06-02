const mobileMenu = (() => {
  let mobileMenuDOM;
  let menuHeight;
  const setMobileMenuDOM = (elemID) => {
    mobileMenuDOM = document.getElementById(`${elemID}`);
    mobileMenuDOM.style.overflow = "hidden";
    menuHeight = window.getComputedStyle(mobileMenuDOM).height;
  };

  const menuUL = document.createElement("ul");
  menuUL.style.minWidth = "fit-content";
  menuUL.style.listStyle = "none";
  menuUL.style.boxSizing = "border-box";
  menuUL.style.position = "relative";

  const setColumns = (...args) => {
    //  Add Close and More to the args list
    [].push.call(args, [`Close &#215`, "#"]);
    [].push.call(args, [`More &#9776`, "#"]);
    args.forEach((arg) => {
      const argLI = document.createElement("li");
      argLI.classList.add("mobile-nav");
      menuUL.style.maxHeight = menuHeight * (args.length - 2);
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

    dropdown(menuUL);
  };

  const dropdown = (menu) => {
    const more = document.getElementById("mobile-nav-link-More &#9776");
    more.addEventListener("mousedown", () => {
      menu.childNodes.forEach((node) => {
        node.style.display = "block";
        node.childNodes[0].style.display = "block";
        console.log(node.childNodes);
      });

      menu.childNodes[menu.childNodes.length - 2].style.zIndex = "2";
      mobileMenuDOM.style.height = `${
        menuHeight.substring(0, menuHeight.length - 2) *
        (menu.childNodes.length - 2)
      }px`;
      console.log(menu.childNodes[menu.childNodes.length - 2]);
    });
  };

  return {
    setMobileMenuDOM,
    setColumns,
  };
})();

export default mobileMenu;
