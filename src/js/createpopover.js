export function createPopover(element) {
  const container = document.getElementById("container");
  let error = document.createElement("div");
  error.className = "error";
  container.appendChild(error);
  container.before(error);
  //
  let title = document.createElement("h4");
  title.textContent = "Popover title";
  error.appendChild(title);
  //
  let content = document.createElement("p");
  content.className = "content";
  content.textContent =
    "And here`s some amazing content. It`s very engaging. Right?";
  error.appendChild(content);
  //
  let icon = new Image(20, 20);
  icon.src = "arrow.svg";
  icon.className = "img";
  document.querySelector(".error").appendChild(icon);
}
