module.exports = {
    seleccionarSkills : (seleccionadas = [], opciones) => {
        const skills = ['Scratch', 'FingerDrumming', 'TonePlays', 'WordPlays', 'Selector', 'Showcase', 'ClubDj', 'Experimental', 'CrowdControl', 'Extended', 'hiphop', 'trap','reggae','dancehall','break', 'afro', 'reggaeton', 'salsa','merengue', 'house', 'techno', 'tech-house', 'ambient','70s', '80s', '90s', '2000'];

        let html = '';
        skills.forEach(skill => {
            html += `<li ${seleccionadas.includes(skill) ? ' class="activo"' : ''}>${skill}</li>`;
        });

        return opciones.fn().html = html;
    },
    tipoContrato: (seleccionado, opciones) => {
        return opciones.fn(this).replace(
            new RegExp(`value="${seleccionado}"`), '$& selected="selected"'
        )
    },
    mostrarAlertas: (errores = {}, alertas ) => {
        const categoria = Object.keys(errores);

        let html = '';
        if(categoria.length) {
            errores[categoria].forEach(error => {
                html += `<div class="${categoria} alerta">${error}</div>`
            })
        }
        return alertas.fn().html = html;
    }
}
