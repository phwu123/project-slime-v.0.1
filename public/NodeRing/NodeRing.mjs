const nodeRingTemplate = `
  <link rel="stylesheet" type="text/css" href="./NodeRing/NodeRing.css" />
  <section class="scene">
    <article class="ring-container dev-ring-tilt">
      <div class="class-ring">
        <node-crystal class="node-slot node-1"></node-crystal>
        <node-crystal class="node-slot node-2"></node-crystal>
        <node-crystal class="node-slot node-3"></node-crystal>
        <node-crystal class="node-slot node-4"></node-crystal>
      </div>
    </article>
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