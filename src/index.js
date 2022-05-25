import dropdownMenu from "./dropdownMenu.js";
import "./style.css";
import favicon from "./assets/favicon.ico";

const faviconDOM = document.querySelector('link[rel~="icon"]');
faviconDOM.href = favicon;

dropdownMenu.setColumns(
  "aaaaaaaaa",
  "bbbbbbbbb",
  "ccccccccc",
  "ddddddddd",
  "eeeeeeeeee",
  "ffffffffff"
);
