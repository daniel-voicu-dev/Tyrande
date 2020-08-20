const UtilitiesTheme = () => `
  <div class="ui-colors ui-component">
    <h2 class="ui-lead py-2 h2 border-bottom border-2">Utility Classes</h2>
    <div class="list">  
      <div class="item">
        <h3 class="ui-heading h4 my-2">Box Model Utilities - Width/Height/Padding/Border/Margin</h3>
        <div class="p-2 border my-2">
          <p class="small"><span class="color-accent">{breakpoint}</span> is optional <strong>ex:  .w-100/.w-<span class="color-accent">xs-</span>100</strong></p>
          <p><strong>w-</strong><span class="color-accent">{breakpoint}-</span>[100/auto/unset]</p> 
          <p><strong>h-</strong><span class="color-accent">{breakpoint}-</span>[100/auto/unset]</p> 
          <p><strong>[mb/mt/ml/mr/mx/my/pb/pt/pl/pr/px/py]-</strong><span class="color-accent">{breakpoint}-</span>[0/1/2/3/4/5]</p> 
          <p><strong>child-[mb/mt/ml/mr/pb/pt/pl/pr]-</strong><span class="color-accent">{breakpoint}-</span>[0/1/2/3/4/5]</p> 
          <p>[ml/mr/mx]<strong>-auto</strong></p> 
          <p><strong>border, border-</strong>0, <strong>border-</strong>[top/right/bottom/left], <strong>border-</strong>[top/right/bottom/left]<strong>-0</strong>, <strong>border-</strong>[pill/circle], <strong>border-</strong>[1/2/3/4/5]</p>           
        </div>
        <div class="bg-muted flex-wrap">
          <div class="ui-box bg-neutral flex-wrap justify-content-center align-items-center ml-2 my-2 px-2"><span>Content</span></div>
          <div class="ui-box bg-neutral-light flex-wrap justify-content-center align-items-center ml-2 ml-xl-5 my-2 px-2 pl-xl-5"><span>Content</span></div>
          <div class="bg-neutral p-3 m-2 px-2 w-xl-100 flex-wrap child-mb-2 child-mb-sm-0 child-mr-sm-3 child-mr-xl-5">
            <div class="ui-box bg-neutral-light flex-wrap justify-content-center align-items-center border border-muted"><span>Content</span></div>
            <div class="ui-box bg-neutral-light flex-wrap justify-content-center align-items-center border border-bottom-0 border-2 border-muted"><span>Content</span></div>
            <div class="ui-box bg-neutral-light flex-wrap justify-content-center align-items-center border-bottom border-5 border-muted"><span>Content</span></div>
            <div class="ui-box bg-neutral-light flex-wrap justify-content-center align-items-center border-circle border-muted"><span>Content</span></div>
            <div class="ui-box bg-neutral-light flex-wrap justify-content-center align-items-center border border-pill border-muted border-left-0 border-right-0"><span>Content</span></div>
          </div>
        </div>
      </div>
      <div class="item">
        <h3 class="ui-heading h4 my-2">Box Visibility</h3>
        <div class="p-2 border my-2">
          <p class="small"><span class="color-accent">{breakpoint}</span> is optional <strong>ex:  .w-100/.w-<span class="color-accent">xs-</span>100</strong></p>
          <p><strong>[flex/flex-wrap/inline-flex/inline-block/block/grid/hidden]</strong><span class="color-accent">-{breakpoint}</span></p> 
          <p><strong>order-</strong><span class="color-accent">{breakpoint}-</span>[-1..10], <strong>order-</strong><span class="color-accent">{breakpoint}-</span><strong>unset</strong></p> 
          <p><strong>overflow-</strong>-[hidden/visible/-x-auto/-x-hidden/-y-auto/-y-hidden]</p> 
          <p><strong>z-unset</strong>, <strong>z-</strong>[0..10]</p> 
          <p class="mb-0"><strong>opacity-</strong>[0/1]</p>   
        </div>        
      </div>
      <div class="item">
        <h3 class="ui-heading h4 my-2">Box Alignment</h3>
        <div class="p-2 border my-2">          
          <p><strong>relative</strong>, <strong>sticky</strong>, <strong>absolute</strong>, <strong>fixed</strong></p>
          <p><strong>[t/b/l/r]</strong><span class="color-accent">-{breakpoint}</span>-[0..5]</p> 
          <p><strong>[grid-1-auto/grid-auto-1/grid-auto-1-auto/grid-1-auto-1]</strong><span class="color-accent">-{breakpoint}</span></p> 
          <p><strong>[justify-content-start/justify-content-center/justify-content-end/space-between/space-around]</strong></p> 
          <p><strong>[align-items-top/align-items-center/align-items-bottom]</strong></p> 
          <p class="mb-0"><strong>[place-items-center/align-self-top/align-self-center/align-self-bottom]</strong></p> 
        </div>        
      </div>
      <div class="item">
        <h3 class="ui-heading h4 my-2">Text Utilities</h3>
        <div class="p-2 border my-2">
          <p><strong class="color-dark">[h1/h2/h3/h4/h5/h6]</strong></p> 
          <p><strong class="color-dark">text</strong>-[left/center/right/decoration-none/uppercase/transform-none]</p> 
          <p><strong class="color-dark">weight</strong>-[superthin/thin/normal/bold/superbold]</p>
          <p><strong class="color-dark">font</strong>-[regular/condensed/heading] </p>
          <p><strong>line-through</strong>, <strong>letter-spacing</strong>, <strong>link</strong>, <strong>small</strong>, <strong>line-height-inline</strong></p>
        </div>
        <h2 class="h3 weight-thin line-height-inline">Sed dapibus enim ut ante scelerisque cursus</h2>
        <p><span class="line-through font-regular text-uppercase weight-superbold">Lorem ipsum</span> <span class="link small">dolor sit amet</span>, <span class="weight-thin">consectetur adipiscing elit</span>. Nam tempus <a href="#" class="text-decoration-none">erat velit</a>, nec porta purus sollicitudin a. Sed dapibus ultrices turpis, sit amet pharetra urna bibendum ac. Phasellus aliquam elit sed imperdiet accumsan. Sed ac lectus a orci efficitur mattis. Integer ullamcorper maximus ex. Ut id volutpat mauris. Nullam condimentum enim ac enim pellentesque sollicitudin. Aliquam tincidunt vulputate massa, et facilisis mi pretium sed. Nulla vitae tincidunt tellus. Vivamus ultrices sem leo. Ut turpis mauris, vestibulum eget consectetur ac, consequat eget velit.</p>
        <p>Fusce tincidunt arcu metus, nec fringilla enim pellentesque eu. Integer sed justo ornare, fermentum dui ut, placerat velit. Pellentesque eu augue ultrices, dignissim nisl quis, placerat turpis. Praesent vitae facilisis velit. Praesent convallis turpis ut commodo tincidunt. Nullam nec urna et massa imperdiet consequat eget in ligula. Integer dictum dui id libero blandit, vel mollis libero gravida.</p>
        <p>Integer tempor sit amet ex at viverra. Nulla at elit ac orci molestie tempus at vel purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec convallis a diam eu malesuada. Vestibulum ac justo ut leo venenatis tincidunt. Sed hendrerit metus massa, eu commodo nibh malesuada eu. Ut cursus euismod magna, sit amet luctus nisl fringilla nec. Cras erat mi, consequat auctor turpis vitae, sagittis tincidunt urna. Suspendisse non augue vitae metus aliquet iaculis. Maecenas porta vulputate leo eget tincidunt. Duis nunc nisl, ornare a tellus nec, pretium imperdiet quam.</p>
      </div>
      <div class="item">
        <h3 class="ui-heading h4 my-2">Color Utilities</h3>
        <p class="color-muted">Variations: light, neutral, neutral-light, muted, dark, link, brand, brand-darker, brand-lighter, accent, accent-darker, accent-lighter, buy, buy-darker, buy-lighter, success, information, warning, error, alert</p>
        <div class="p-2 border my-2">          
          <p><strong>bg-</strong><a href="ui-colors" data-anchor>{color}</a></p>
          <p><strong>color-</strong><a href="ui-colors" data-anchor>{color}</a></p> 
          <p class="mb-0"><strong>border-</strong><a href="ui-colors" data-anchor>{color}</a></p>         
        </div>        
      </div>
    </div>      
  </div>
`

export default UtilitiesTheme