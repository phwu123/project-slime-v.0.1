const nodeCrystalTemplate = `
  <link rel="stylesheet" type="text/css" href="./NodeCrystal/NodeCrystal.css" />
  <section class="scene dev-tilt">
    <article class="crystal dev-rotate">
      <div class="crystal__hemisphere crystal__top">
        <span class="crystal__face crystal__face-top-front"></span>
        <span class="crystal__face crystal__face-top-right"></span>
        <span class="crystal__face crystal__face-top-back"></span>
        <span class="crystal__face crystal__face-top-left"></span>
      </div>
      <div class="crystal__hemisphere crystal__bottom">
        <span class="crystal__face crystal__face-bottom-front"></span>
        <span class="crystal__face crystal__face-bottom-right"></span>
        <span class="crystal__face crystal__face-bottom-back"></span>
        <span class="crystal__face crystal__face-bottom-left"></span>
      </div>
    </article>
  </section>
`

// 5-12-13 triangle
// 67.38, 22.62, 90
// 5 * 2^(1/2) - 12

customElements.define('node-crystal', 
  class nodeCrystal extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = nodeCrystalTemplate
    }
  }
)