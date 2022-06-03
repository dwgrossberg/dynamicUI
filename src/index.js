import dropdownMenu from "./dropdownMenu.js";
import mobileMenu from "./mobileMenu.js";
import imageSlider from "./imageSlider.js";
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
  ["Sports", "#"],
  ["Travel", "#"],
  ["News", "#"],
  ["History", "#"],
  ["Blogs", "#"],
  ["Social", "#"],
  ["Services", "#"],
  ["Contact", "#"]
);

// imageSlider example

imageSlider.setImageSliderDOM("image-slider");

import image1 from "./assets/pexels-pixabay-2166.jpg";

imageSlider.setImages(
  [image1, "altText"],
  ["./assets/pexels-miriam-espacio-10322285.jpg", "altText"],
  ["./assets/pexels-pixabay-2156.jpg", "altText"],
  ["./assets/pexels-pixabay-33688.jpg", "altText"],
  ["./assets/pexels-ian-beckley-2440079.jpg", "altText"],
  ["./assets/pexels-pixabay-256379.jpg", "altText"]
);
