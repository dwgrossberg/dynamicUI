import dropdownMenu from "./dropdownMenu.js";
import "./style.css";
import favicon from "./assets/favicon.ico";

const faviconDOM = document.querySelector('link[rel~="icon"]');
faviconDOM.href = favicon;

dropdownMenu.setColumns(
  ["Home", "input href..."],
  ["About", "input href..."],
  ["Products", "input href..."],
  ["Services", "input href..."],
  ["History", "input href..."],
  ["Contact", "input href..."]
);

dropdownMenu.setDropdown(
  "Products",
  "subLink-1",
  "subLink-2",
  "subLink-3",
  "subLink-4",
  "subLink-5"
);
