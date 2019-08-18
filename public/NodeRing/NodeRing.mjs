const nodeRingTemplate = `
  <link rel="stylesheet" type="text/css" href="./NodeRing/NodeRing.css" />
  <section class="scene">
    <div class="ring-container dev-ring-tilt">
      <span class="class-ring"></span>
    </div>
  </section>
`
customElements.define('node-ring', 
  class classTree extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = nodeRingTemplate
    }
  }
)