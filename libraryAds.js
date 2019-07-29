/**
 * * Libreria de Ads para cualquier sitio
 */

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Todo cargo', e)

    let ci = new gpt()
    console.log('saludo', ci.getSaludo)
    console.log(ci.saludo);
});


class gpt {
    constructor() {
        this.saludo = 'hola';
        console.log('constructor gpt');
    }

    get getSaludo() {
        return this.saludo
    }

}
