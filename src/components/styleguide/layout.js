const LayoutTheme = () => `
  <div class="ui-colors ui-component">
    <h2 class="ui-lead py-2 h2 border-bottom border-2">Layout</h2>
    <div class="list">      
      <div class="item">
        <h3 class="ui-heading h4 my-2">Grid</h3>
        <p class="color-muted">Variations: 1-12 <strong>ex: .grid-5/.col-5</strong> <span class="color-dark">|</span> Breakpoints: xs, sm, md, lg, xl, xxl</p>        
        <p>Usage: .grid-{breakpoint}-{variantion}/.col-{breakpoint}-{variantion} <strong>ex: .grid-md-5/.col-md-5</strong> </p>
        <div class="grid-1 grid-xs-2 grid-lg-3 grid-xxl-4 p-2 bg-muted">
          <div class="col-xs-2 col-lg-3 col-xxl-4"><span class="pb-2">class="<strong>grid-xs-2 grid-lg-3 grid-xxl-4</strong>"</span></div>
          <div class="col-xs-1 col-lg-1 col-xxl-3 bg-neutral pt-2 pb-5"><span class="p-2">class="<strong>col-xs-1 col-lg-1 col-xxl-3</strong>"</span></div>
          <div class="col-xs-1 col-lg-2 col-xxl-1 bg-neutral pt-2 pb-5"><span class="p-2">class="<strong>col-xs-1 col-lg-2 col-xxl-1</strong>"</span></div>
        </div>
      </div>
    </div>      
  </div>
`

export default LayoutTheme