import ColorTheme from "./colors.js"
import ButtonsTheme from "./buttons.js"
import TypographyTheme from "./typography.js"
import LayoutTheme from "./layout.js"
import UtilitiesTheme from "./utilities.js"

document.getElementById("ui-colors").innerHTML = ColorTheme();
document.getElementById("ui-buttons").innerHTML = ButtonsTheme();
document.getElementById("ui-typography").innerHTML = TypographyTheme();
document.getElementById("ui-layout").innerHTML = LayoutTheme();
document.getElementById("ui-utilities").innerHTML = UtilitiesTheme();
document.querySelectorAll('[data-role="theme-button"]').forEach(el => el.addEventListener("click", e=>{
  e.preventDefault();
  let list = e.currentTarget.getAttribute("data-list").split(","); 
 
  
  if(e.currentTarget.classList.contains("btn-icon")) {
    e.currentTarget.classList.remove("btn-icon");   
    let currentTheme = e.currentTarget.classList.value.split("--")[1];  
    let nextTheme = list.findIndex((element) => element === currentTheme) + 1 > list.length - 1  ? list[0] : list[list.findIndex((element) => element === currentTheme) + 1];
    e.currentTarget.classList.value = e.currentTarget.classList.value.split("--")[0] + "--" + nextTheme;
    e.currentTarget.classList.add("btn-icon");
  } else {
    let currentTheme = e.currentTarget.classList.value.split("--")[1];  
    let nextTheme = list.findIndex((element) => element === currentTheme) + 1 > list.length - 1  ? list[0] : list[list.findIndex((element) => element === currentTheme) + 1];
    e.currentTarget.classList.value = e.currentTarget.classList.value.split("--")[0] + "--" + nextTheme;
  }
  

}));