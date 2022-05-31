# dynamicUI

Dynamic UIs built with JavaScript and CSS

`npm install @dwgrossberg/dynamicui`

Visit [https://dwgrossberg.github.io/displayui/] to see a working example

---

## dropdownMenu.js

`import dropdownMenu from "./src/dropdownMenu.js`

The `dropdownMenu` module allows users to easily generate dropdown website menus, with several customizable features:

- `setDropdownDOM` method: takes a string as an argument and returns a DOM container for the dropdown menu

  - For example: `dropdownMenu.setDropdownDOM("dropdown-menu")` will search the document for a `div` tag that contains a matching `[id="dropdown-menu"]` attribute and place the dropdown menu within that container.

- `setColumns` method: takes a group of arrays as an argument and returns an evenly spaced navigation menu, whiich can then be eaily placed anyhwere on the page and sized to fit any space.

  - For example: `dropdownMenu.setColumns(["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a menu three (or more) columns wide, with each tab displaying the specified "text" and linking to the "href".
  - Nav tabs can be targeted through CSS via `[class="dropdown-nav"]`

- `setDropdown` method: takes a string and a group of arrays as an argument and returns a dropdown menu on the matching menu nav tab.

  - For example: `dropdownMenu.setDropdown("About", ["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a dropdown menu on the navigation tab "About" that will be three (or more) rows long.
  - Dropdown nav tabs can be targeted through CSS via `[class^="dropdown-menu"]`

- `setSubDropdown` method: takes two strings and a group of arrays as an argument and returns a sub-dropdown menu on the matching menu nav tab and dropdown nav tab.
  - For example: `dropdownMenu.setSubDropdown("About", "History", ["text", "href"], ["text", "href"], ["text", "href"], ...)` will return a sub-dropdown menu on the dropdown nav tab "History" that falls within the menu nav tab "About".
  - Sub-dropdown nav tabs can be targeted through CSS via `[class="dropdown-sub-item"]`
