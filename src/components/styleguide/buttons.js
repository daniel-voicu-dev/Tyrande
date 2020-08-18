const buttons =["brand", "accent", "buy", "dark", "muted", "neutral","neutral-light","light"];
const lightThemedButtons = ["neutral", "neutral-light","light"];
const themedButtons = [
  {"label":"Default Buttons", "value": buttons},
  // {"label":"Light Buttons", "value" : lightThemedButtons}
];
const themedButtonsWithIcons = [
  {"label":"Buttons With Icons", "value": buttons},
  // {"label":"Light Buttons With Icons", "value" : lightThemedButtons}
]
const themedButtonsOnlyIcons = [
  {"label":"Icon Buttons with Background/Border", "value": buttons},
  // {"label":"Light Buttons With Icons", "value" : lightThemedButtons}
]
const themedButtonsOnlyIconsColor = [
  {"label":"Icons Only Buttons", "value": buttons},
  // {"label":"Light Buttons With Icons", "value" : lightThemedButtons}
]
const ButtonsTheme = () => {
  return `
    <div class="ui-buttons ui-component">
      <h2 class="ui-lead py-2 h2 border-bottom border-2">Buttons</h2>
      <div class="list grid-md-2 gap-3">   
      ${themedButtons.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading h4 my-2">${label}</h3>` : ``} 
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <div class="my-2 p-2 ui-block-code"><pre><<code></code>button type="button" class="btn-fill--${value[0]}">Fill Button<<code></code>/button></pre><pre><<code></code>button type="button" class="btn-border--${value[0]}">Border Button<<code></code>/button></pre></div>
        <button class="btn-fill--${value[0]}" data-role="theme-button" data-list="${value.join(",")}">Fill Button</button>
        <button class="btn-border--${value[0]}" data-role="theme-button" data-list="${value.join(",")}">Border Button</button>
        </div>
        `
      }).join("")}   
      ${themedButtonsWithIcons.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading h4 my-2">${label}</h3>` : ``} 
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <div class="my-2 p-2 ui-block-code"><pre><<code></code>button class="btn-fill--${value[0]}" icon-position="right"><<code></code>span>Fill Button with Icon<<code></code>/span><<code></code>span class="icon"><<code></code>icon><<code></code>/icon><<code></code>/span><<code></code>/button></pre><pre><<code></code>button class="btn-border--${value[0]}" icon-position="left"><<code></code>span>Border Button with Icon<<code></code>/span><<code></code>span class="icon"><<code></code>icon><<code></code>/icon><<code></code>/span><<code></code>/button></pre></div>
        <button class="btn-fill--${value[0]}" icon-position="right" data-role="theme-button" data-list="${value.join(",")}"><span>Fill Button with Icon</span><span class="icon"><ion-icon name="cloud"></ion-icon></span></button>
        <button class="btn-border--${value[0]}" icon-position="left" data-role="theme-button" data-list="${value.join(",")}"><span>Border Button with Icon</span><span class="icon"><ion-icon name="cloud"></ion-icon></span></button>
        </div>
        `
      }).join("")}   
      ${themedButtonsOnlyIcons.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading h4 my-2">${label}</h3>` : ``} \
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <button class="btn-fill--${value[0]} btn-icon" data-role="theme-button" data-list="${value.join(",")}"><ion-icon name="cloud"></ion-icon></button>
        <button class="btn-border--${value[0]} btn-icon" data-role="theme-button" data-list="${value.join(",")}"><ion-icon name="cloud"></ion-icon></button>
        </div>
        `
      }).join("")}   

      ${themedButtonsOnlyIconsColor.filter(o=>o.value.length !== 0).map(({label, value})=>{
        return `<div class="item">
        ${label !== "" ? `<h3 class="ui-heading h4 my-2">${label}</h3>` : ``} 
        <p class="color-muted">Variations: | ${value.map(v=>{return v.charAt(0).toUpperCase() + v.slice(1)}).join(", ")}</p>
        <button class="btn-icon--${value[0]} btn-icon" data-role="theme-button" data-list="${value.join(",")}"><ion-icon name="cloud"></ion-icon></button>
        </div>
        `
      }).join("")}   



      </div>      
    </div>
    
  `


}

export default ButtonsTheme