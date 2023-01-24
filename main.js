const navButton = document.querySelectorAll(".navigation__list-link");
const checkbox = document.querySelector(".navigation__checkbox");

navButton.forEach((button) => {
  button.addEventListener("click", function (event) {
    const whatButton = event.target;
    let href = whatButton.getAttribute("href");
    if (!href.startsWith("#") || href.length <= 1) return;
    checkbox.checked = false;
  });
});
