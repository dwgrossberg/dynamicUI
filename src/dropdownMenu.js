import arrow from "./assets/arrow-white.png";

const dropdownMenu = (() => {
  const dropdownMenuDOM = document.getElementById("dropdown-menu");

  const ulDOM = document.createElement("ul");
  ulDOM.style.display = "flex";
  ulDOM.style.justifyContent = "space-around";
  ulDOM.style.listStyle = "none";
  ulDOM.style.height = "100%";

  const setColumns = (...args) => {
    args.forEach((arg) => {
      console.log(arg);
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
      argA.style.textDecoration = "none";
      argA.innerText = arg[0];
      argA.href = arg[1];
      argLI.appendChild(argA);
      ulDOM.appendChild(argLI);
    });

    dropdownMenuDOM.appendChild(ulDOM);
  };

  const setDropdown = (name, ...args) => {
    const menuItems = Array.from(
      document.getElementsByClassName("dropdown-nav")
    );
    const dropdown = () => {
      args.forEach((arg) => {});
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
        item.appendChild(arrowDiv);

        item.addEventListener("mouseenter", dropdown);

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
