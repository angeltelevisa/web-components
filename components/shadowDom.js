class ShadowDom extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({
            mode: 'open'
        })

        this.template = document.getElementById('template1')
        this.notificacion = document.importNode(this.template.content, true)

        this.titleattr = ''
    }

    render() {
        this.shadowRoot.appendChild(this.notificacion)
        this.shadowRoot.querySelector('.titleattr').innerHTML = this.titleattr

        console.log('render')
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr === 'titleattr') {
            this.titleattr = newValue
            this.render()
        }
    }

    static get observedAttributes() {
        return ['titleattr']
    }
}

window.customElements.define('shadow-dom', ShadowDom)
