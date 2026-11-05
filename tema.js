/* Cambio entre modo claro y oscuro.
   Guarda la elección en localStorage; si no hay ninguna, usa la del sistema. */
(function () {
  var raiz = document.documentElement;
  var guardado = null;
  try { guardado = localStorage.getItem('tema'); } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var boton = document.querySelector('.boton-tema');
    if (!boton) return;

    function actualizarEtiqueta() {
      var oscuro = raiz.getAttribute('data-tema') === 'oscuro';
      boton.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
    }
    actualizarEtiqueta();

    boton.addEventListener('click', function () {
      var nuevo = raiz.getAttribute('data-tema') === 'oscuro' ? 'claro' : 'oscuro';
      raiz.setAttribute('data-tema', nuevo);
      try { localStorage.setItem('tema', nuevo); } catch (e) {}
      actualizarEtiqueta();
    });
  });
})();
