class PrimerComponente extends HTMLElement {

    constructor() {
        super()
        this.saludo = 'hola...'
        this.ready = false
    }

    connectedCallback() {
        this.ready = true
        this.innerHTML = this.saludo
    }

    attributeChangedCallback(nombre, oldValue, newValue) {
        console.log(`${nombre} - ${oldValue} - ${newValue}`)

        if (nombre == 'nombre') {
            this.saludo = `Hola ${newValue}`
        }
        if (this.ready) {
            this.innerHTML = this.saludo
        }
    }

    static get observedAttributes() {
        return ['nombre']
    }
}

window.customElements.define('primer-componente', PrimerComponente)
