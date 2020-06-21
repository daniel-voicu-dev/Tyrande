import "./app.sass"

import "./components/styleguide/index"

document.querySelectorAll(".ui-nav a").forEach(el=>el.addEventListener("click", e=>{
  e.preventDefault();
  document.getElementById(e.currentTarget.getAttribute("href")).scrollIntoView({behavior: "smooth"});
}));