import arrow from "./assets/arrow-white.png";

const dropdownMenu = (() => {
  const dropdownMenuDOM = document.getElementById("dropdown-menu");

  const menuUL = document.createElement("ul");
  menuUL.style.display = "flex";
  menuUL.style.justifyContent = "space-around";
  menuUL.style.listStyle = "none";
  menuUL.style.height = "100%";

  const setColumns = (...args) => {
    args.forEach((arg) => {
      const argLI = document.createElement("li");
      argLI.classList.add("dropdown-nav");
      argLI.style.display = "flex";
      argLI.style.alignSelf = "center";
      argLI.style.justifyContent = "center";
      argLI.style.alignItems = "center";
      argLI.style.width = "100%";
      argLI.style.height = "100%";
      argLI.style.cursor = "pointer";

      const argA = document.createElement("a");
      argA.setAttribute("id", `dropdown-nav-link-${arg[0]}`);
      argA.innerText = arg[0];
      argA.href = arg[1];
      argA.style.display = "flex";
      argA.style.alignItems = "center";
      argA.style.textDecoration = "none";
      argA.style.height = "15px";
      argLI.appendChild(argA);
      menuUL.appendChild(argLI);
    });

    dropdownMenuDOM.appendChild(menuUL);
  };

  const setDropdown = (name, ...args) => {
    const menuItems = Array.from(
      document.getElementsByClassName("dropdown-nav")
    );

    const dropdownUL = document.createElement("ul");
    dropdownUL.classList.add("dropdown-box");
    const dropdown = (item) => {
      dropdownUL.style.display = "none";
      dropdownUL.style.flexDirection = "column";
      dropdownUL.style.listStyle = "none";
      dropdownUL.style.textDecoration = "none";
      dropdownUL.style.height = "fit-content";
      dropdownUL.style.width = "fit-content";
      dropdownUL.style.zIndex = "10";

      args.forEach((arg) => {
        console.log(arg);
        const argLI = document.createElement("li");
        argLI.classList.add("dropdown-item");
        argLI.style.padding = "15px 35px";

        const argA = document.createElement("a");
        argA.innerText = arg[0];
        argA.href = arg[1];
        argA.style.textDecoration = "none";
        argLI.appendChild(argA);
        dropdownUL.appendChild(argLI);
      });
      item.appendChild(dropdownUL);
    };

    menuItems.forEach((item) => {
      if (item.innerText === name) {
        const arrowDiv = document.createElement("div");
        arrowDiv.style.backgroundImage = `url(${arrow})`;
        arrowDiv.style.backgroundSize = "100%";
        arrowDiv.style.transform = "rotate(90deg)";
        arrowDiv.style.marginLeft = "15px";
        arrowDiv.style.height = "10px";
        arrowDiv.style.width = "10px";

        const navLink = document.getElementById(`dropdown-nav-link-${name}`);
        navLink.appendChild(arrowDiv);
        dropdown(item);

        item.addEventListener("mouseenter", () => {
          item.style.flexDirection = "column";
          item.style.justifyContent = "flex-start";
          item.style.paddingTop = "30px";

          dropdownUL.style.display = "flex";
          arrowDiv.style.transform = "rotate(-90deg)";
        });
        item.addEventListener("mouseleave", () => {
          item.style.display = "flex";
          item.style.flexDirection = "row";
          item.style.justifyContent = "center";
          item.style.paddingTop = "0";

          dropdownUL.style.display = "none";
          arrowDiv.style.transform = "rotate(90deg)";
        });

        console.log(args);
      }
    });
  };

  return {
    setColumns,
    setDropdown,
  };
})();

export default dropdownMenu;
