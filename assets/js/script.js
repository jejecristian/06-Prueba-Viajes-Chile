/** Se prepara script */
$(document).ready(function () {

    // Aplica efecto smooth scroll
    $('a').click(function () {
        var itemPress = this.hash
        $('html, body').animate(
            {
                scrollTop: $(itemPress).offset().top - 40
            }, 800
        )
    })

    /** Esconde/Muestra botones del carrusel
    cuando se presiona el boton hamburguesa */
    $('.navbar-toggler').click(function(){
        $('#principal button').toggle()
    })

})

// Bootstrap - Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})