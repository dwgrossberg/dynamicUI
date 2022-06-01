const mobileMenu = (() => {
  let mobileMenuDOM;
  const setMobileMenuDOM = (elemID) => {
    mobileMenuDOM = document.getElementById(`${elemID}`);
  };

  const menuUL = document.createElement("ul");
  menuUL.style.display = "flex";
  menuUL.style.justifyContent = "space-around";
  menuUL.style.listStyle = "none";
  menuUL.style.padding = "0";
  menuUL.style.margin = "0";
  menuUL.style.boxSizing = "border-box";

  const setColumns = (...args) => {
    args.forEach((arg) => {
      const argLI = document.createElement("li");
      argLI.classList.add("mobile-nav");
      argLI.style.display = "flex";
      argLI.style.justifyContent = "center";
      argLI.style.width = "100%";
      const menuHeight = window.getComputedStyle(mobileMenuDOM).height;
      argLI.style.height = menuHeight;
      argLI.style.cursor = "pointer";
      const argA = document.createElement("a");
      argA.setAttribute("id", `mobile-nav-link-${arg[0]}`);
      argA.innerText = arg[0];
      argA.href = arg[1];
      argA.style.display = "flex";
      argA.style.alignItems = "center";
      argA.style.justifyContent = "center";
      argA.style.textDecoration = "none";
      argA.style.height = menuHeight;
      argA.style.width = "100%";
      argLI.appendChild(argA);
      menuUL.appendChild(argLI);
    });
    mobileMenuDOM.appendChild(menuUL);
  };

  const addMore = () => {
    const moreDiv = document.createElement("div");
    moreDiv.classList.add("mobile-menu-more");
    moreDiv.style.display = "flex";
    moreDiv.style.justifyContent = "center";
    moreDiv.style.alignItems = "center";
    moreDiv.style.padding = "10px 20px";
    moreDiv.style.cursor = "pointer";
    moreDiv.innerText = "More";
    const arrowDiv = document.createElement("div");
    arrowDiv.innerText = `>`;
    arrowDiv.style.fontWeight = "700";
    arrowDiv.style.transform = "rotate(90deg)";
    arrowDiv.style.marginLeft = "10px";
    arrowDiv.style.height = "8px";
    arrowDiv.style.width = "8px";
    moreDiv.appendChild(arrowDiv);
    menuUL.appendChild(moreDiv);
  };

  // progressively collapsing menu
  // number of tabs determined by screen size
  // excess tabs grouped under 'more' section

  return {
    setMobileMenuDOM,
    setColumns,
    addMore,
  };
})();

export default mobileMenu;
