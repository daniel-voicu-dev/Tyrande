const darkThemedButtons =["brand", "accent", "buy", "dark", "muted"];
const lightThemedButtons = [];
const themedButtons = [
  {"label":"Dark Buttons", "value": darkThemedButtons},
  {"label":"Light Buttons", "value" : lightThemedButtons}
];
const themedButtonsWithIcons = [
  {"label":"Dark Buttons With Icons", "value": darkThemedButtons},
  {"label":"Light Buttons With Icons", "value" : lightThemedButtons}
]
const themedButtonsOnlyIcons = [
  {"label":"Dark Buttons With Icons", "value": darkThemedButtons},
  {"label":"Light Buttons With Icons", "value" : lightThemedButtons}
]
const themedButtonsOnlyIconsColor = [
  {"label":"Icons", "value": darkThemedButtons},
  // {"label":"Light Buttons With Icons", "value" : lightThemedButtons}
]
const ButtonsTheme = () => {
  return `
    <div class="ui-buttons ui-component">
      <h2 class="ui-lead py-2">Buttons</h2>
      <div class="list grid-md-3">   
      ${themedButtons.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading">${label}</h3>` : ``} 
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <button class="btn-fill--${value[0]}" data-role="theme-button" data-list="${value.join(",")}">Fill Button</button>
        <button class="btn-border--${value[0]}" data-role="theme-button" data-list="${value.join(",")}">Border Button</button>
        </div>
        `
      })}   
      ${themedButtonsWithIcons.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading">${label}</h3>` : ``} 
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <button class="btn-fill--${value[0]}" icon-position="right" data-role="theme-button" data-list="${value.join(",")}"><span>Fill Button with Icon</span><span class="icon"><ion-icon name="cloud"></ion-icon></span></button>
        <button class="btn-border--${value[0]}" icon-position="left" data-role="theme-button" data-list="${value.join(",")}"><span>Border Button with Icon</span><span class="icon"><ion-icon name="cloud"></ion-icon></span></button>
        </div>
        `
      })}   
      ${themedButtonsOnlyIcons.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading">${label}</h3>` : ``} \
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <button class="btn-fill--${value[0]} btn-icon" data-role="theme-button" data-list="${value.join(",")}"><ion-icon name="cloud"></ion-icon></button>
        <button class="btn-border--${value[0]} btn-icon" data-role="theme-button" data-list="${value.join(",")}"><ion-icon name="cloud"></ion-icon></button>
        </div>
        `
      })}   

      ${themedButtonsOnlyIconsColor.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading">${label}</h3>` : ``} 
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <button class="btn-icon--${value[0]} btn-icon" data-role="theme-button" data-list="${value.join(",")}"><ion-icon name="cloud"></ion-icon></button>
        </div>
        `
      })}   

      
        
      
      </div>      
    </div>
  `
}

export default ButtonsTheme