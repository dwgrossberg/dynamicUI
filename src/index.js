import dropdownMenu from "./dropdownMenu.js";
import mobileMenu from "./mobileMenu.js";
import "./style.css";

// dropdownMenu example

dropdownMenu.setDropdownDOM("dropdown-menu");

dropdownMenu.setColumns(
  ["Home", "#"],
  ["About", "#"],
  ["Products", "#"],
  ["History", "#"],
  ["Services", "#"],
  ["Contact", "#"]
);

dropdownMenu.setDropdown(
  "Products",
  ["Link-1", "#"],
  ["Link-2", "#"],
  ["Link-3 is supppper long", "#"],
  ["Link-4", "#"],
  ["Link-5", "#"]
);

dropdownMenu.setDropdown(
  "Services",
  ["Link-1", "#"],
  ["Link-2", "#"],
  ["Link-3", "#"],
  ["Link-4", "#"],
  ["Link-5", "#"],
  ["Link-6", "#"],
  ["Link-7", "#"]
);

dropdownMenu.setSubDropdown(
  "Products",
  "Link-2",
  ["subLink-1", "#"],
  ["subLink-2", "#"],
  ["subLink-3", "#"]
);

// mobileMenu example

mobileMenu.setMobileMenuDOM("mobile-menu");

mobileMenu.setColumns(
  ["Home", "#"],
  ["About", "#"],
  ["Products", "#"],
  ["History", "#"],
  ["Services", "#"],
  ["Contact", "#"]
);
