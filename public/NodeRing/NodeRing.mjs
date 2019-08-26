

{/* <link rel="stylesheet" type="text/css" href="./NodeRing/NodeRing.css" /> */}
const nodeRingTemplate = `
  <section class="scene scene-tilt">
    <article class="ring-container">
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
  class NodeRing extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      const styles = document.createElement('link')
      styles.rel = 'stylesheet'
      styles.type = 'text/css'
      styles.href = './NodeRing/NodeRing.css'
      this.shadowRoot.appendChild(styles)
      const parser = new DOMParser()
      const template = parser.parseFromString(nodeRingTemplate, 'text/html')
      this.shadowRoot.appendChild(template.documentElement)
     // this.shadowRoot.innerHTML = nodeRingTemplate
    }
  }
)