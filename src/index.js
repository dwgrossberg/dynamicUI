import dropdownMenu from "./dropdownMenu.js";
import "./style.css";
import favicon from "./assets/favicon.ico";

const faviconDOM = document.querySelector('link[rel~="icon"]');
faviconDOM.href = favicon;

dropdownMenu.setDropdownDOM("dropdown-menu");

dropdownMenu.setColumns(
  ["Home", "input href..."],
  ["About", "input href..."],
  ["Products", "input href..."],
  ["History", "input href..."],
  ["Services", "input href..."],
  ["Contact", "input href..."]
);

dropdownMenu.setDropdown(
  "Products",
  ["Link-1", "input href..."],
  ["Link-2", "input href..."],
  ["Link-3 is supppper long", "input href..."],
  ["Link-4", "input href..."],
  ["Link-5", "input href..."]
);

dropdownMenu.setDropdown(
  "Services",
  ["Link-1", "input href..."],
  ["Link-2", "input href..."],
  ["Link-3", "input href..."],
  ["Link-4", "input href..."],
  ["Link-5", "input href..."],
  ["Link-6", "input href..."],
  ["Link-7", "input href..."]
);

dropdownMenu.setSubDropdown(
  "Products",
  "Link-2",
  ["subLink-1", "input href..."],
  ["subLink-2", "input href..."],
  ["subLink-3", "input href..."]
);
