const Section = () => `
<div class="ui-colors ui-component">
  <h2 class="ui-lead py-2 h2 border-bottom border-2">Section</h2>
  <div class="list">      
    <div class="item">
      <h3 class="ui-heading h4 my-2">Section Implementation</h3>    
      <div class="p-2 border my-2">
        <p class="color-muted">Select option: <strong class="color-dark">container</strong>/<strong class="color-dark">container--wide</strong></p> 
        <p class="mb-0">Check the <a href="/section.html" class="text-uppercase weight-superbold">demo</a> for full implementation</p>
      </div> 

      <div class="my-2 p-2 ui-block-code overflow-x-auto flex-wrap">
        <pre>
        <<code></code>div class="section__container container">
          <<code></code>div class="section__content">
            Container Content
          <<code></code>/div>
        <<code></code>/div></pre>
        <pre>
        <<code></code>div class="section__container container--wide">
          <<code></code>div class="section__content">
            Full Width Content
          <<code></code>/div>
        <<code></code>/div></pre>
      </div>
      <div class="w-100 bg-muted py-2 px-5 mb-2">
        <div class="p-5 bg-neutral flex-wrap justify-content-center">Container Content</div>
      </div>
      <div class="w-100 bg-muted py-2">
        <div class="p-5 bg-neutral flex-wrap justify-content-center">Full Width Content</div>
      </div>
      
    </div>  
  </div>      
</div>

`

export default Section