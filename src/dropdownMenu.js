const dropdownMenu = (() => {
  const dropdownMenuDOM = document.getElementById("dropdown-menu");
  const ulDOM = document.createElement("ul");

  const setColumns = (...args) => {
    // const menuDiv = document.createElement("div");
    args.forEach((arg) => {
      console.log(arg);
      const argLink = document.createElement("li");
      argLink.classList.add("nav");
      argLink.innerText = arg;
      ulDOM.appendChild(argLink);
    });
    dropdownMenuDOM.appendChild(ulDOM);
  };

  setColumns();

  const setDropdown = (index, ...args) => {};

  return {
    setColumns,
    setDropdown,
  };
})();

export default dropdownMenu;
