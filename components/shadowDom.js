class ShadowDom extends HTMLElement {
    constructor() {
        super()
        console.log('constructor shadow-dom');

        this.attachShadow({
            mode: 'open'
        })

        this.titleattr = ''
    }

    render() {
        // this.shadowRoot.appendChild(this.notificacion)
        // this.shadowRoot.querySelector('.titleattr').innerHTML = this.titleattr
        console.log('render shadow-dom')

        let addContainer = `
            <div class="Ads">
                <div class="Ads__wrapper Ads__wrapper-header">
                    <div class="Ads__title AdsBox">Publicidad</div>
                    <div class="Ads__container">
                        <div id="ad_default_0" data-google-query-id="CMv4r76MyeMCFQm_TwodYNcBMw">
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.shadowRoot.innerHTML = addContainer;

        console.log(this.shadowRoot.querySelector('#ad_default_0'))
    }

    connectedCallback() {
        this.render()
        this.loadGPT()
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr === 'titleattr') {
            this.titleattr = newValue
            this.render()
        }
    }

    static get observedAttributes() {
        return [
            'titleattr',
            'id'
        ]
    }

    loadGPT() {
        console.log('loadGPT');
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(() => {
            // Configure general DFP behavior.
            window.googletag.pubads().enableAsyncRendering();
            window.googletag.pubads().disableInitialLoad();
            window.googletag.pubads().enableSingleRequest();
        });

        window.googletag.cmd.push(() => {
            const SLOT_LAYER = window.googletag.defineSlot('/5644/televisa.tudn/liveblogs/gran-final-mexico-vs-estados-unidos', [728, 90], 'ad_default_0')
                .addService(window.googletag.pubads());
            window.googletag.pubads()
                .setTargeting("skey", (window.location.search.match(/skey=(\w+)/) || ["", ""])[1]);
            window.googletag.enableServices();
            window.googletag.display(this.shadowRoot.querySelector('#ad_default_0'));

             /* TODO Agregar un mejor control como un async y await
             * Aqui tenia un setTimeOut para esperar respuesta y despues renderizar
             */
            window.googletag.pubads().refresh([SLOT_LAYER])
        });

        console.log('done...')
    }
}

window.customElements.define('shadow-dom', ShadowDom)
