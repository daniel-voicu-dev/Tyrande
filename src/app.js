import "./app.sass"

import "./components/styleguide/index"
import "./components/solution/index"

document.querySelectorAll(".ui-nav a, a[data-anchor]").forEach(el=>el.addEventListener("click", e=>{
  e.preventDefault();
  document.getElementById(e.currentTarget.getAttribute("href")).scrollIntoView({behavior: "smooth"});
}));