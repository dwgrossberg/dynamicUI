# dynamicUI

Dynamic UIs built with JavaScript and CSS

`npm install @dwgrossberg/dynamicui`

Generate dynamic user menus with simple function calls take the time-consuming work out of designing interactive navigation UIs.

Visit https://dwgrossberg.github.io/dynamicUI/ to see a working example

Visit the [source files](https://github.com/dwgrossberg/dynamicUI/tree/main/src) to view each module in detail, as well as the baseline style.css file

---

## dropdownMenu.js

`import dropdownMenu from "node_modules/@dwgrossberg/dynamicui/src/dropdownMenu.js"`

The `dropdownMenu` module allows users to easily generate dropdown website menus, with several customizable features:

- `setDropdownDOM` method: takes a string as an argument and attaches the dropdown menu to a DOM container that has a matching id.

  - For example: `dropdownMenu.setDropdownDOM("dropdown-menu")` will search the document for a `div` tag that contains a matching `[id="dropdown-menu"]` attribute and place the dropdown menu within that container.

- `setColumns` method: takes a group of arrays as an argument and returns an evenly spaced navigation menu, which can then be easily placed anywhere on the page and sized to fit any space.

  - For example: `dropdownMenu.setColumns(["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a menu three (or more) columns wide, with each tab displaying the specified "text" and linking to the "href".
  - Nav tabs can be targeted through CSS via `[class="dropdown-nav"]`

- `setDropdown` method: takes a string and a group of arrays as an argument and returns a dropdown menu on the matching menu nav tab.

  - For example: `dropdownMenu.setDropdown("About", ["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a dropdown menu on the navigation tab "About" that will be three (or more) rows long.
  - Dropdown nav tabs can be targeted through CSS via `[class^="dropdown-menu"]`

- `setSubDropdown` method: takes two strings and a group of arrays as an argument and returns a sub-dropdown menu on the matching menu nav tab and dropdown nav tab.
  - For example: `dropdownMenu.setSubDropdown("About", "History", ["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a sub-dropdown menu on the dropdown nav tab "History" that falls within the menu nav tab "About".
  - Sub-dropdown nav tabs can be targeted through CSS via `[class="dropdown-sub-item"]`

---

## mobileMenu.js

`import mobileMenu from "node_modules/@dwgrossberg/dynamicui/src/mobileMenu.js"`

The `mobileMenu` module allows users to create a mobile-friendly horizontal navigation bar, which expands and contracts in response to the screen width. Excess tabs that do not fit within the nav bar can be viewed by pressing the "More" button.

- `setMobileMenuDom` method: takes a string as an argument and attaches the mobile menu to a DOM container that has a matching id.

  - For example: `mobileMenu.setMobileMenuDom("mobile-menu")` will search the document for a `div` tag that contains a matching `[id="mobile-menu"]` attribute and place the mobile menu within that container.

- `setColumns` method: takes a group of arrays as an argument and returns an evenly spaced mobile menu, with the number of navigation tabs equal to the number of arguments (arrays) passed.

  - For example: `mobile.setColumns(["text", "href"], ["text", "href"], ["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a menu five (or more) columns wide, with each tab displaying the specified "text" and linking to the "href".
  - Nav tabs can be targeted through CSS via `[class="mobile-nav"]`

---

## imageSlider.js

`import mobileMenu from "node_modules/@dwgrossberg/dynamicui/src/imageSlider.js"`

The `imageSlider` module allows users to generate a simple image slider DOM element, which can be easily placed to fit any space on the page.

- `setImageSliderDOM` method: takes a string as an argument and attaches the image slider element to a DOM container that has a matching id.

- `setImages` method: takes a group of arrays as an argument and returns an image slider element, where the first argument of each array is the image path and the second argument of each array is the image caption.

  - For example: `imageSlider.setImages([img, "caption"], [img, "caption"], [img, "caption"] ...)` will return an image slider element with three (or more) images, each with a corresponding caption.
