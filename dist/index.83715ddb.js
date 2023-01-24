var navButton=document.querySelectorAll(".navigation__list-link"),checkbox=document.querySelector(".navigation__checkbox");navButton.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.getAttribute("href");!e.startsWith("#")||e.length<=1||(checkbox.checked=!1)}))}));
//# sourceMappingURL=index.83715ddb.js.map
