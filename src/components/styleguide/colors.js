const primaryColors = [
  {"label":"Brand", "value": [{"color": "brand","text": "light"}, {"color": "brand-darker","text": "light"}, {"color": "brand-lighter","text": "dark"}]},
  {"label": "Accent", "value": [{"color": "accent","text": "light"}, {"color": "accent-darker","text": "light"}, {"color": "accent-lighter","text": "dark"}]},
  {"label": "Buy", "value": [{"color": "buy","text": "light"}, {"color": "buy-darker","text": "light"}, {"color": "buy-lighter","text": "dark"}]},  
  {"label": "Alert/Notification", "value":[{"color": "alert","text": "light"},{"color": "information","text": "light"}, {"color": "error","text": "light"},{"color": "warning","text": "light"},{"color": "success","text": "light"}]},
  {"label": "Availability", "value": [{"color": "stock-ok","text": "light"}, {"color": "stock-limited","text": "light"}, {"color": "stock-none","text": "light"}]},
  {"label": "Basic", "value": [{"color": "dark","text": "light"}, {"color": "light","text": "dark"}]},  
  {"label": "Gray Tones", "value": [{"color": "gray-one","text": "dark"}, {"color": "gray-two","text": "dark"}, {"color": "gray-three","text": "dark"}, {"color": "gray-four","text": "dark"}, {"color": "gray-five","text": "light"}, {"color": "gray-six","text": "light"}, {"color": "gray-seven","text": "light"}, {"color": "gray-eight","text": "light"}, {"color": "gray-nine","text": "light"}, {"color": "gray-ten","text": "light"}]},
  {"label":"Inherited Colors", "value": [{"color": "content","text": "light"},{"color": "link","text": "light"},{"color": "muted","text": "dark"},{"color": "border","text": "dark"},{"color": "neutral","text": "dark"}
  ]}
];


const ColorTheme = () => {
  return `
    <div class="ui-colors ui-component">
      <h2 class="ui-lead py-2">Theme Colors</h2>
      <div class="list grid-md-3">      
        ${primaryColors.map(({label,value})=> {
          return `<div class="item">
          ${label !== "" ? `<h3 class="ui-heading">${label}</h3>` : ``}          
            ${value.map(({color, text}) => {return `<div class="ui-color" style="--color: var(--color-${color}); --text: var(--color-${text})"><span>${color.charAt(0).toUpperCase() + color.slice(1)}</span><small>--color-${color}</small></div>`}).join("")}
            </div>`
        }).join("")}
      </div>      
    </div>
  `
}

export default ColorTheme;