import arrow from "./assets/arrow-white.png";

const dropdownMenu = (() => {
  const dropdownMenuDOM = document.getElementById("dropdown-menu");
  let counter = 1;

  const menuUL = document.createElement("ul");
  menuUL.style.display = "flex";
  menuUL.style.justifyContent = "space-around";
  menuUL.style.listStyle = "none";

  // setColumns creates the main menu display
  const setColumns = (...args) => {
    args.forEach((arg) => {
      const argLI = document.createElement("li");
      argLI.classList.add("dropdown-nav");
      argLI.style.display = "flex";
      argLI.style.justifyContent = "center";
      argLI.style.width = "100%";
      const menuHeight = window.getComputedStyle(dropdownMenuDOM).height;
      argLI.style.height = menuHeight;
      argLI.style.cursor = "pointer";
      const argA = document.createElement("a");
      argA.setAttribute("id", `menu-nav-link-${arg[0]}`);
      argA.innerText = arg[0];
      argA.href = arg[1];
      argA.style.display = "flex";
      argA.style.alignItems = "center";
      argA.style.textDecoration = "none";
      argA.style.height = menuHeight;
      argLI.appendChild(argA);
      menuUL.appendChild(argLI);
    });
    dropdownMenuDOM.appendChild(menuUL);
  };

  // setDropdown adds a drowndown feature to a specified dropdown menu item
  const setDropdown = (name, ...args) => {
    const menuNavItems = Array.from(
      document.getElementsByClassName("dropdown-nav")
    );

    const dropdownUL = document.createElement("ul");
    dropdownUL.classList.add("dropdown-box");
    dropdownUL.setAttribute("id", `dropdown-box-${name}`);
    const dropdown = (item) => {
      dropdownUL.style.display = "none";
      dropdownUL.style.flexDirection = "column";
      dropdownUL.style.alignItems = "center";
      dropdownUL.style.listStyle = "none";
      dropdownUL.style.textDecoration = "none";
      dropdownUL.style.height = "fit-content";
      dropdownUL.style.width = "100%";
      dropdownUL.style.zIndex = "10";
      dropdownUL.style.position = "relative";

      args.forEach((arg) => {
        const argLI = document.createElement("li");
        argLI.classList.add(`dropdown-menu-${counter}`);
        argLI.style.padding = "15px 35px";
        argLI.style.display = "flex";
        argLI.style.alignItems = "center";
        argLI.style.justifyContent = "space-between";

        const argA = document.createElement("a");
        argA.setAttribute("id", `dropdown-nav-link-${arg[0]}`);
        argA.innerText = arg[0];
        argA.href = arg[1];
        argA.style.textDecoration = "none";
        argLI.appendChild(argA);
        dropdownUL.appendChild(argLI);
      });
      counter++;
      item.appendChild(dropdownUL);
    };

    menuNavItems.forEach((item) => {
      if (item.innerText === name) {
        const arrowDiv = document.createElement("div");
        arrowDiv.style.backgroundImage = `url(${arrow})`;
        arrowDiv.style.backgroundSize = "100%";
        arrowDiv.style.transform = "rotate(90deg)";
        arrowDiv.style.marginLeft = "15px";
        arrowDiv.style.height = "10px";
        arrowDiv.style.width = "10px";
        const navLink = document.getElementById(`menu-nav-link-${name}`);
        navLink.appendChild(arrowDiv);

        dropdown(item);

        item.addEventListener("mouseenter", () => {
          item.style.flexDirection = "column";
          item.style.alignItems = "center";
          item.style.height = "100%";

          dropdownUL.style.display = "block";
          arrowDiv.style.transform = "rotate(-90deg)";
        });

        item.addEventListener("mouseleave", () => {
          item.style.flexDirection = "row";

          dropdownUL.style.display = "none";
          arrowDiv.style.transform = "rotate(90deg)";
        });
      }
    });
  };

  // setSubDropdown sets a sub dropdown menu on a dropdown item
  const setSubDropdown = (name, subLink, ...args) => {
    const subDropdownUL = document.createElement("ul");
    subDropdownUL.classList.add("dropdown-sub-box");
    subDropdownUL.style.display = "none";
    subDropdownUL.style.position = "absolute";
    subDropdownUL.style.width = "fit-content";
    subDropdownUL.style.left = window.getComputedStyle(
      document.getElementById(`dropdown-box-${name}`)
    ).width;
    subDropdownUL.style.top = window.getComputedStyle(
      document.getElementById(`dropdown-box-${name}`)
    ).height;

    const subDropdown = (item) => {
      args.forEach((arg) => {
        const argLI = document.createElement("li");
        argLI.classList.add("dropdown-sub-item");
        argLI.style.padding = "10px 25px";
        argLI.style.display = "flex";
        argLI.style.alignItems = "center";
        argLI.style.justifyContent = "space-between";
        const argA = document.createElement("a");
        argA.setAttribute("id", `dropdown-nav-link-${arg[0]}`);

        argA.innerText = arg[0];
        argA.href = arg[1];
        argA.style.textDecoration = "none";
        argLI.appendChild(argA);
        subDropdownUL.appendChild(argLI);
      });
      item.appendChild(subDropdownUL);
    };

    const menuNavItems = Array.from(
      document.getElementsByClassName("dropdown-nav")
    );

    menuNavItems.forEach((nav) => {
      if (nav.innerText === name) {
        const menuDropdownItems = Array.from(
          document.getElementById(`dropdown-box-${name}`).childNodes
        );

        menuDropdownItems.forEach((item) => {
          if (item.innerText === subLink) {
            const dropdownItems = Array.from(item.childNodes);
            dropdownItems.forEach((item) => {
              const arrowDivSub = document.createElement("div");
              arrowDivSub.style.backgroundImage = `url(${arrow})`;
              arrowDivSub.style.backgroundSize = "100%";
              arrowDivSub.style.transform = "";
              arrowDivSub.style.height = "8px";
              arrowDivSub.style.width = "8px";
              arrowDivSub.style.marginLeft = "auto";
              const dropdownItem = document.getElementById(
                `dropdown-nav-link-${subLink}`
              );
              dropdownItem.style.display = "flex";
              dropdownItem.style.alignItems = "center";
              item.parentNode.appendChild(arrowDivSub);
              subDropdown(item);

              item.parentElement.addEventListener("mouseenter", () => {
                item.style.flexDirection = "row";
                item.style.alignItems = "center";
                item.style.height = "100%";
                subDropdownUL.style.display = "block";
                arrowDivSub.style.transform = "rotate(90deg)";
              });

              item.parentElement.addEventListener("mouseleave", () => {
                item.style.flexDirection = "row";
                subDropdownUL.style.display = "none";
                arrowDivSub.style.transform = "none";
              });
            });
          }
        });
      }
    });
  };

  return {
    setColumns,
    setDropdown,
    setSubDropdown,
  };
})();

export default dropdownMenu;
