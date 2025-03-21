import { createPopover } from "./createpopover.js";

export function addPopover() {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    const popover = document.querySelector(".error");
    if (!popover) {
      createPopover();
    } else {
      popover.remove();
    }
  });
}
