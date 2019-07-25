class PrimerComponente extends HTMLElement {

    constructor() {
        super()

        this.idAds = ''
        this.ready = false
    }

    render() {
        console.log('id', this.idAds);

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
        this.innerHTML = addContainer;
    }

    connectedCallback() {
        this.ready = true;
        this.render()
        this.loadGPT()
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        // console.log(`${attr} - ${oldValue} - ${newValue}`)
        console.log('connceted callback')
        if (attr === 'idAds') {
            this.idAds = newValue
        }
    }

    static get observedAttributes() {
        return ['idAds']
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
            console.log('push')
            const SLOT_LAYER = window.googletag.defineSlot('/5644/televisa.tudn/liveblogs/gran-final-mexico-vs-estados-unidos', [728, 90], 'ad_default_0')
                .addService(window.googletag.pubads());
            window.googletag.pubads()
                .setTargeting("skey", (window.location.search.match(/skey=(\w+)/) || ["", ""])[1]);
            window.googletag.enableServices();
            window.googletag.display('ad_default_0');

            /* TODO Agregar un mejor control como un async y await
            * Aqui tenia un setTimeOut para esperar respuesta y despues renderizar
            */
            window.googletag.pubads().refresh([SLOT_LAYER])
        });

        console.log('done...')
    }
}

window.customElements.define('primer-componente', PrimerComponente)
