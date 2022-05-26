import dropdownMenu from "./dropdownMenu.js";
import "./style.css";
import favicon from "./assets/favicon.ico";

const faviconDOM = document.querySelector('link[rel~="icon"]');
faviconDOM.href = favicon;

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
  ["subLink-1", "input href..."],
  ["subLink-2", "input href..."],
  ["subLink-3 is supppper long", "input href..."],
  ["subLink-4", "input href..."],
  ["subLink-5", "input href..."]
);

dropdownMenu.setDropdown(
  "Services",
  ["subLink-1", "input href..."],
  ["subLink-2", "input href..."],
  ["subLink-3", "input href..."]
);
