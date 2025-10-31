// Panel de Usuario
export function initPanel(showScene) {
  const panel = document.getElementById('panel');

  panel.innerHTML = `
    <h2>Bienvenido/a, <span id="nombreUsuario"></span></h2>
    <button id="cambiarTema">Cambiar tema</button>
    <button id="cerrarSesion">Cerrar sesión</button>
  `;

  const nombreUsuario = document.getElementById('nombreUsuario');
  const botonCerrar = document.getElementById('cerrarSesion');
  const botonTema = document.getElementById('cambiarTema');

// Actualiza nombre de usuario
  function actualizarUsuario() {
    const activo = localStorage.getItem('usuarioActivo');
    if (activo) nombreUsuario.textContent = activo;
  }
  actualizarUsuario();

  // Cerrar sesión
  botonCerrar.addEventListener('click', () => {
    localStorage.removeItem('usuarioActivo');
    showScene('login');
  });

  // Modo Dark
  // Aplicar tema guardado al cargar
  const match = document.cookie.match(new RegExp('(^| )theme=([^;]+)'));
  const theme = match ? match[2] : 'light';
  if (theme === 'dark') document.body.classList.add('dark-mode');

  //  cambiar tema
  botonTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const temaActual = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    document.cookie = `theme=${temaActual}; path=/; max-age=${365*24*60*60}`;
  });

}
