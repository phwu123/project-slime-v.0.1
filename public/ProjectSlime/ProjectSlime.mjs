const projectSlimeTemplate = `
  <link rel="stylesheet" type="text/css" href="./ProjectSlime/ProjectSlime.css" />
  <node-crystal></node-crystal>
`

customElements.define('project-slime', 
  class projectSlime extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = projectSlimeTemplate
    }

    connectedCallback () {
      // const node = document.createElement('node-crystal')
      // this.shadowRoot.appendChild(node)
    }
  }
)